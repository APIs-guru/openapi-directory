import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2Execution } from "./googlecloudrunv2execution";


// GoogleCloudRunV2ListExecutionsResponse
/** 
 * Response message containing a list of Executions.
**/
export class GoogleCloudRunV2ListExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executions", elemType: shared.GoogleCloudRunV2Execution })
  executions?: GoogleCloudRunV2Execution[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
