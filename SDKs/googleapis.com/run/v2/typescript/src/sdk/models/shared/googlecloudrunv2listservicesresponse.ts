import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Service } from "./googlecloudrunv2service";



// GoogleCloudRunV2ListServicesResponse
/** 
 * Response message containing a list of Services.
**/
export class GoogleCloudRunV2ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: GoogleCloudRunV2Service })
  services?: GoogleCloudRunV2Service[];
}
