import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceRegistry } from "./deviceregistry";


// ListDeviceRegistriesResponse
/** 
 * Response for `ListDeviceRegistries`.
**/
export class ListDeviceRegistriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceRegistries", elemType: shared.DeviceRegistry })
  deviceRegistries?: DeviceRegistry[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
