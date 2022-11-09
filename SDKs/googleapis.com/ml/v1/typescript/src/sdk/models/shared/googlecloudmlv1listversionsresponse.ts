import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1Version } from "./googlecloudmlv1version";


// GoogleCloudMlV1ListVersionsResponse
/** 
 * Response message for the ListVersions method.
**/
export class GoogleCloudMlV1ListVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=versions", elemType: shared.GoogleCloudMlV1Version })
  versions?: GoogleCloudMlV1Version[];
}
