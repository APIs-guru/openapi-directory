import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";



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
}
