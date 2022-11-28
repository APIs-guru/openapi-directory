import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrantInput } from "./grant";
import { Grant } from "./grant";


export enum GrantsResponseGlobalAccountAccessEnum {
    ReadOnly = "read_only",
    ReadWrite = "read_write"
}


// GrantsResponseGlobal
/** 
 * A structure containing the Account-level grants a User has.
 * 
**/
export class GrantsResponseGlobal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_access" })
  accountAccess?: GrantsResponseGlobalAccountAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=add_domains" })
  addDomains?: boolean;

  @SpeakeasyMetadata({ data: "json, name=add_images" })
  addImages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=add_linodes" })
  addLinodes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=add_longview" })
  addLongview?: boolean;

  @SpeakeasyMetadata({ data: "json, name=add_nodebalancers" })
  addNodebalancers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=add_stackscripts" })
  addStackscripts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=add_volumes" })
  addVolumes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cancel_account" })
  cancelAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=longview_subscription" })
  longviewSubscription?: boolean;
}


// GrantsResponseInput
/** 
 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
 * 
**/
export class GrantsResponseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain", elemType: GrantInput })
  domain?: GrantInput[];

  @SpeakeasyMetadata({ data: "json, name=global" })
  global?: GrantsResponseGlobal;

  @SpeakeasyMetadata({ data: "json, name=image", elemType: GrantInput })
  image?: GrantInput[];

  @SpeakeasyMetadata({ data: "json, name=linode", elemType: GrantInput })
  linode?: GrantInput[];

  @SpeakeasyMetadata({ data: "json, name=longview", elemType: GrantInput })
  longview?: GrantInput[];

  @SpeakeasyMetadata({ data: "json, name=nodebalancer", elemType: GrantInput })
  nodebalancer?: GrantInput[];

  @SpeakeasyMetadata({ data: "json, name=stackscript", elemType: GrantInput })
  stackscript?: GrantInput[];

  @SpeakeasyMetadata({ data: "json, name=volume", elemType: GrantInput })
  volume?: GrantInput[];
}


// GrantsResponse
/** 
 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
 * 
**/
export class GrantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain", elemType: Grant })
  domain?: Grant[];

  @SpeakeasyMetadata({ data: "json, name=global" })
  global?: GrantsResponseGlobal;

  @SpeakeasyMetadata({ data: "json, name=image", elemType: Grant })
  image?: Grant[];

  @SpeakeasyMetadata({ data: "json, name=linode", elemType: Grant })
  linode?: Grant[];

  @SpeakeasyMetadata({ data: "json, name=longview", elemType: Grant })
  longview?: Grant[];

  @SpeakeasyMetadata({ data: "json, name=nodebalancer", elemType: Grant })
  nodebalancer?: Grant[];

  @SpeakeasyMetadata({ data: "json, name=stackscript", elemType: Grant })
  stackscript?: Grant[];

  @SpeakeasyMetadata({ data: "json, name=volume", elemType: Grant })
  volume?: Grant[];
}
