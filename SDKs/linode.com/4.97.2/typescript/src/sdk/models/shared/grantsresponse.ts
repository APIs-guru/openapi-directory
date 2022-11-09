import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Grant } from "./grant";
import { Grant } from "./grant";
import { Grant } from "./grant";
import { Grant } from "./grant";
import { Grant } from "./grant";
import { Grant } from "./grant";
import { Grant } from "./grant";

export enum GrantsResponseGlobalAccountAccessEnum {
    ReadOnly = "read_only"
,    ReadWrite = "read_write"
}


// GrantsResponseGlobal
/** 
 * A structure containing the Account-level grants a User has.
 * 
**/
export class GrantsResponseGlobal extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_access" })
  accountAccess?: GrantsResponseGlobalAccountAccessEnum;

  @Metadata({ data: "json, name=add_domains" })
  addDomains?: boolean;

  @Metadata({ data: "json, name=add_images" })
  addImages?: boolean;

  @Metadata({ data: "json, name=add_linodes" })
  addLinodes?: boolean;

  @Metadata({ data: "json, name=add_longview" })
  addLongview?: boolean;

  @Metadata({ data: "json, name=add_nodebalancers" })
  addNodebalancers?: boolean;

  @Metadata({ data: "json, name=add_stackscripts" })
  addStackscripts?: boolean;

  @Metadata({ data: "json, name=add_volumes" })
  addVolumes?: boolean;

  @Metadata({ data: "json, name=cancel_account" })
  cancelAccount?: boolean;

  @Metadata({ data: "json, name=longview_subscription" })
  longviewSubscription?: boolean;
}


// GrantsResponse
/** 
 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
 * 
**/
export class GrantsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain", elemType: shared.Grant })
  domain?: Grant[];

  @Metadata({ data: "json, name=global" })
  global?: GrantsResponseGlobal;

  @Metadata({ data: "json, name=image", elemType: shared.Grant })
  image?: Grant[];

  @Metadata({ data: "json, name=linode", elemType: shared.Grant })
  linode?: Grant[];

  @Metadata({ data: "json, name=longview", elemType: shared.Grant })
  longview?: Grant[];

  @Metadata({ data: "json, name=nodebalancer", elemType: shared.Grant })
  nodebalancer?: Grant[];

  @Metadata({ data: "json, name=stackscript", elemType: shared.Grant })
  stackscript?: Grant[];

  @Metadata({ data: "json, name=volume", elemType: shared.Grant })
  volume?: Grant[];
}
