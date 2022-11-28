import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedUser } from "./nesteduser";


export enum ObjectChangeActionLabelEnum {
    Created = "Created",
    Updated = "Updated",
    Deleted = "Deleted"
}

export enum ObjectChangeActionValueEnum {
    Create = "create",
    Update = "update",
    Delete = "delete"
}


export class ObjectChangeAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: ObjectChangeActionLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: ObjectChangeActionValueEnum;
}


export class ObjectChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ObjectChangeAction;

  @SpeakeasyMetadata({ data: "json, name=changed_object" })
  changedObject?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=changed_object_id" })
  changedObjectId: number;

  @SpeakeasyMetadata({ data: "json, name=changed_object_type" })
  changedObjectType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=object_data" })
  objectData?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: NestedUser;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}
