import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceRegistry } from "./deviceregistry";



// ListDeviceRegistriesResponse
/** 
 * Response for `ListDeviceRegistries`.
**/
export class ListDeviceRegistriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceRegistries", elemType: DeviceRegistry })
  deviceRegistries?: DeviceRegistry[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
