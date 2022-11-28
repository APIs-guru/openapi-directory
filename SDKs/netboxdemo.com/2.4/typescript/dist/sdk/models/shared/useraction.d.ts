import { SpeakeasyBase } from "../../../internal/utils";
import { NestedUser } from "./nesteduser";
export declare class UserActionAction extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class UserAction extends SpeakeasyBase {
    action: UserActionAction;
    id?: number;
    message?: string;
    time?: Date;
    user: NestedUser;
}
