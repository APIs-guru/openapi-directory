import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";
/**
 * Represents a DICOM store.
**/
export declare class DicomStore extends SpeakeasyBase {
    labels?: Map<string, string>;
    name?: string;
    notificationConfig?: NotificationConfig;
}
