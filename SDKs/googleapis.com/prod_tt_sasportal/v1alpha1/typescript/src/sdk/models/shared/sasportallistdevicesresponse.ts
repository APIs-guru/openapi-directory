import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDevice } from "./sasportaldevice";



// SasPortalListDevicesResponse
/** 
 * Response for ListDevices.
**/
export class SasPortalListDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: SasPortalDevice })
  devices?: SasPortalDevice[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
