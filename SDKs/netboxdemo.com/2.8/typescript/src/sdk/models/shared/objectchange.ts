import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedUser } from "./nesteduser";

export enum ObjectChangeActionLabelEnum {
    Created = "Created"
,    Updated = "Updated"
,    Deleted = "Deleted"
}

export enum ObjectChangeActionValueEnum {
    Create = "create"
,    Update = "update"
,    Delete = "delete"
}


export class ObjectChangeAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: ObjectChangeActionLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: ObjectChangeActionValueEnum;
}


export class ObjectChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: ObjectChangeAction;

  @Metadata({ data: "json, name=changed_object" })
  changedObject?: Map<string, string>;

  @Metadata({ data: "json, name=changed_object_id" })
  changedObjectId: number;

  @Metadata({ data: "json, name=changed_object_type" })
  changedObjectType?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=object_data" })
  objectData?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=time" })
  time?: Date;

  @Metadata({ data: "json, name=user" })
  user?: NestedUser;

  @Metadata({ data: "json, name=user_name" })
  userName?: string;
}
