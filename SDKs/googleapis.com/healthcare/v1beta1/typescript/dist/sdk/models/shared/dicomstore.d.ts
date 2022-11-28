import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";
import { GoogleCloudHealthcareV1beta1DicomStreamConfig } from "./googlecloudhealthcarev1beta1dicomstreamconfig";
/**
 * Represents a DICOM store.
**/
export declare class DicomStore extends SpeakeasyBase {
    labels?: Map<string, string>;
    name?: string;
    notificationConfig?: NotificationConfig;
    streamConfigs?: GoogleCloudHealthcareV1beta1DicomStreamConfig[];
}
