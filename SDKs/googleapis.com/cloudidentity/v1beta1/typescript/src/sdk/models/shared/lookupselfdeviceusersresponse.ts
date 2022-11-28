import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LookupSelfDeviceUsersResponse
/** 
 * Response containing resource names of the DeviceUsers associated with the caller's credentials.
**/
export class LookupSelfDeviceUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
