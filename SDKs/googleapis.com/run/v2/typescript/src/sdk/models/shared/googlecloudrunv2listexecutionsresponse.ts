import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Execution } from "./googlecloudrunv2execution";



// GoogleCloudRunV2ListExecutionsResponse
/** 
 * Response message containing a list of Executions.
**/
export class GoogleCloudRunV2ListExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executions", elemType: GoogleCloudRunV2Execution })
  executions?: GoogleCloudRunV2Execution[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
