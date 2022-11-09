import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationConfig } from "./notificationconfig";


// DicomStore
/** 
 * Represents a DICOM store.
**/
export class DicomStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;
}
