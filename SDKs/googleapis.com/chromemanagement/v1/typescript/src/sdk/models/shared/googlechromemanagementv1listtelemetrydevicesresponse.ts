import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryDevice } from "./googlechromemanagementv1telemetrydevice";



export class GoogleChromeManagementV1ListTelemetryDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: GoogleChromeManagementV1TelemetryDevice })
  devices?: GoogleChromeManagementV1TelemetryDevice[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
