import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2Revision } from "./googlecloudrunv2revision";


// GoogleCloudRunV2ListRevisionsResponse
/** 
 * Response message containing a list of Revisions.
**/
export class GoogleCloudRunV2ListRevisionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=revisions", elemType: shared.GoogleCloudRunV2Revision })
  revisions?: GoogleCloudRunV2Revision[];
}
