import { SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";
export declare class ActivityLogEntry extends SpeakeasyBase {
    date?: Date;
    id?: number;
    itemId?: string;
    name?: string;
    overview?: string;
    severity?: LogLevelEnum;
    shortOverview?: string;
    type?: string;
    userId?: string;
    userPrimaryImageTag?: string;
}
