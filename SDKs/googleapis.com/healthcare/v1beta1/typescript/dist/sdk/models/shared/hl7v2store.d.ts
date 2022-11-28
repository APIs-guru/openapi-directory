import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";
import { Hl7V2NotificationConfig } from "./hl7v2notificationconfig";
import { ParserConfig } from "./parserconfig";
/**
 * Represents an HL7v2 store.
**/
export declare class Hl7V2Store extends SpeakeasyBase {
    labels?: Map<string, string>;
    name?: string;
    notificationConfig?: NotificationConfig;
    notificationConfigs?: Hl7V2NotificationConfig[];
    parserConfig?: ParserConfig;
    rejectDuplicateMessage?: boolean;
}
