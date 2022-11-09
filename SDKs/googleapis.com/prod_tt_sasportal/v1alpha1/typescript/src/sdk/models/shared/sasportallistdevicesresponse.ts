import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SasPortalDevice } from "./sasportaldevice";


// SasPortalListDevicesResponse
/** 
 * Response for ListDevices.
**/
export class SasPortalListDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.SasPortalDevice })
  devices?: SasPortalDevice[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
