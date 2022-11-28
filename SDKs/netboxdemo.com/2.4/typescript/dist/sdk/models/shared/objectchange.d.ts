import { SpeakeasyBase } from "../../../internal/utils";
import { NestedUser } from "./nesteduser";
export declare class ObjectChange extends SpeakeasyBase {
    action: number;
    changedObject?: string;
    contentType?: string;
    id?: number;
    objectData?: string;
    requestId?: string;
    time?: Date;
    user?: NestedUser;
    userName?: string;
}
