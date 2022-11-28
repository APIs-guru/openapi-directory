import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Version } from "./googlecloudmlv1version";



// GoogleCloudMlV1ListVersionsResponse
/** 
 * Response message for the ListVersions method.
**/
export class GoogleCloudMlV1ListVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: GoogleCloudMlV1Version })
  versions?: GoogleCloudMlV1Version[];
}
