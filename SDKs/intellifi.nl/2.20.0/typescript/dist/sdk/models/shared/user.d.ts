import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserInput extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    isAdmin?: boolean;
    isLocked?: boolean;
    lastName?: string;
    password?: string;
}
export declare class UserOutput extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: string;
    isAdmin?: boolean;
    isLocked?: boolean;
    lastName?: string;
    timeCreated?: string;
    timeUpdated?: string;
    url?: string;
}
