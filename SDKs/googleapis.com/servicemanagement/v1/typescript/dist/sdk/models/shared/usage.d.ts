import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRule } from "./usagerule";
/**
 * Configuration controlling usage of a service.
**/
export declare class Usage extends SpeakeasyBase {
    producerNotificationChannel?: string;
    requirements?: string[];
    rules?: UsageRule[];
}
