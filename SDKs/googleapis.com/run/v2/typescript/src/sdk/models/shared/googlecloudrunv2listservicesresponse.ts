import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2Service } from "./googlecloudrunv2service";


// GoogleCloudRunV2ListServicesResponse
/** 
 * Response message containing a list of Services.
**/
export class GoogleCloudRunV2ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=services", elemType: shared.GoogleCloudRunV2Service })
  services?: GoogleCloudRunV2Service[];
}
