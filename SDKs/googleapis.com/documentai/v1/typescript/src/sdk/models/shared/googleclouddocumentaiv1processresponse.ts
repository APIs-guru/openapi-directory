import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
import { GoogleCloudDocumentaiV1HumanReviewStatus } from "./googleclouddocumentaiv1humanreviewstatus";


// GoogleCloudDocumentaiV1ProcessResponse
/** 
 * Response message for the process document method.
**/
export class GoogleCloudDocumentaiV1ProcessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: GoogleCloudDocumentaiV1Document;

  @Metadata({ data: "json, name=humanReviewStatus" })
  humanReviewStatus?: GoogleCloudDocumentaiV1HumanReviewStatus;
}
