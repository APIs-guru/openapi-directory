import { SpeakeasyBase } from "../../../internal/utils";
import { NestedUser } from "./nesteduser";
export declare enum ObjectChangeActionLabelEnum {
    Created = "Created",
    Updated = "Updated",
    Deleted = "Deleted"
}
export declare enum ObjectChangeActionValueEnum {
    Create = "create",
    Update = "update",
    Delete = "delete"
}
export declare class ObjectChangeAction extends SpeakeasyBase {
    label: ObjectChangeActionLabelEnum;
    value: ObjectChangeActionValueEnum;
}
export declare class ObjectChange extends SpeakeasyBase {
    action?: ObjectChangeAction;
    changedObject?: Map<string, string>;
    changedObjectId: number;
    changedObjectType?: string;
    id?: number;
    objectData?: string;
    requestId?: string;
    time?: Date;
    user?: NestedUser;
    userName?: string;
}
