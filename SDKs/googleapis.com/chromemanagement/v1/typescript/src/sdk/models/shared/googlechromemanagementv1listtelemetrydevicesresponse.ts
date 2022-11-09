import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromeManagementV1TelemetryDevice } from "./googlechromemanagementv1telemetrydevice";


export class GoogleChromeManagementV1ListTelemetryDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.GoogleChromeManagementV1TelemetryDevice })
  devices?: GoogleChromeManagementV1TelemetryDevice[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
