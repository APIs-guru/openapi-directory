import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Client } from "./client";
import { Folder } from "./folder";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";

export enum EntityChangeStatusEnum {
    ChangeStatusUnspecified = "changeStatusUnspecified"
,    None = "none"
,    Added = "added"
,    Deleted = "deleted"
,    Updated = "updated"
}


// Entity
/** 
 * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
**/
export class Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeStatus" })
  changeStatus?: EntityChangeStatusEnum;

  @Metadata({ data: "json, name=client" })
  client?: Client;

  @Metadata({ data: "json, name=folder" })
  folder?: Folder;

  @Metadata({ data: "json, name=tag" })
  tag?: Tag;

  @Metadata({ data: "json, name=trigger" })
  trigger?: Trigger;

  @Metadata({ data: "json, name=variable" })
  variable?: Variable;
}
