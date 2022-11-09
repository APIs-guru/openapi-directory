import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";


// ListDevicesResponse
/** 
 * Response for `ListDevices`.
**/
export class ListDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.Device })
  devices?: Device[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
