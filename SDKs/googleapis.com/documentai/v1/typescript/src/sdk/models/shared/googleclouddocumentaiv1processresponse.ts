import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
import { GoogleCloudDocumentaiV1HumanReviewStatus } from "./googleclouddocumentaiv1humanreviewstatus";



// GoogleCloudDocumentaiV1ProcessResponse
/** 
 * Response message for the process document method.
**/
export class GoogleCloudDocumentaiV1ProcessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: GoogleCloudDocumentaiV1Document;

  @SpeakeasyMetadata({ data: "json, name=humanReviewStatus" })
  humanReviewStatus?: GoogleCloudDocumentaiV1HumanReviewStatus;
}
