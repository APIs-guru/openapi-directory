import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LookupSelfDeviceUsersResponse
/** 
 * Response containing resource names of the DeviceUsers associated with the caller's credentials.
**/
export class LookupSelfDeviceUsersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: string;

  @Metadata({ data: "json, name=names" })
  names?: string[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
