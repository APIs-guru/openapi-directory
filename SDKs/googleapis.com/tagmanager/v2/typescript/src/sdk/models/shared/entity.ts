import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
import { Folder } from "./folder";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";


export enum EntityChangeStatusEnum {
    ChangeStatusUnspecified = "changeStatusUnspecified",
    None = "none",
    Added = "added",
    Deleted = "deleted",
    Updated = "updated"
}


// Entity
/** 
 * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
**/
export class Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeStatus" })
  changeStatus?: EntityChangeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: Client;

  @SpeakeasyMetadata({ data: "json, name=folder" })
  folder?: Folder;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: Tag;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: Trigger;

  @SpeakeasyMetadata({ data: "json, name=variable" })
  variable?: Variable;
}
