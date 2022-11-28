import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Authority } from "./authority";
import { MembershipEndpoint } from "./membershipendpoint";
import { MembershipState } from "./membershipstate";
import { AuthorityInput } from "./authority";
import { MembershipEndpointInput } from "./membershipendpoint";



// Membership
/** 
 * Membership contains information about a member cluster.
**/
export class Membership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authority" })
  authority?: Authority;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: MembershipEndpoint;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastConnectionTime" })
  lastConnectionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MembershipState;

  @SpeakeasyMetadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// MembershipInput
/** 
 * Membership contains information about a member cluster.
**/
export class MembershipInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authority" })
  authority?: AuthorityInput;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: MembershipEndpointInput;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
