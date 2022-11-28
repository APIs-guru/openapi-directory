import { SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
/**
 * Sessions contain metadata, such as a user-friendly name and time interval information.
**/
export declare class Session extends SpeakeasyBase {
    activeTimeMillis?: string;
    activityType?: number;
    application?: Application;
    description?: string;
    endTimeMillis?: string;
    id?: string;
    modifiedTimeMillis?: string;
    name?: string;
    startTimeMillis?: string;
}
