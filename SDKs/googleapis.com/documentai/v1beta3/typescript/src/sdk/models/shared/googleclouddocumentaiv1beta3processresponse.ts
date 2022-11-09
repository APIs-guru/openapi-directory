import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3HumanReviewStatus } from "./googleclouddocumentaiv1beta3humanreviewstatus";


// GoogleCloudDocumentaiV1beta3ProcessResponse
/** 
 * Response message for the process document method.
**/
export class GoogleCloudDocumentaiV1beta3ProcessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: GoogleCloudDocumentaiV1beta3Document;

  @Metadata({ data: "json, name=humanReviewOperation" })
  humanReviewOperation?: string;

  @Metadata({ data: "json, name=humanReviewStatus" })
  humanReviewStatus?: GoogleCloudDocumentaiV1beta3HumanReviewStatus;
}
