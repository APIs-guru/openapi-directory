import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";
import { GoogleCloudHealthcareV1beta1DicomStreamConfig } from "./googlecloudhealthcarev1beta1dicomstreamconfig";



// DicomStore
/** 
 * Represents a DICOM store.
**/
export class DicomStore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=streamConfigs", elemType: GoogleCloudHealthcareV1beta1DicomStreamConfig })
  streamConfigs?: GoogleCloudHealthcareV1beta1DicomStreamConfig[];
}
