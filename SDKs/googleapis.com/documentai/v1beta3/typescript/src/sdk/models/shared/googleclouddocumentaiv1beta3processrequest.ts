import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3RawDocument } from "./googleclouddocumentaiv1beta3rawdocument";



// GoogleCloudDocumentaiV1beta3ProcessRequest
/** 
 * Request message for the process document method.
**/
export class GoogleCloudDocumentaiV1beta3ProcessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: GoogleCloudDocumentaiV1beta3Document;

  @SpeakeasyMetadata({ data: "json, name=fieldMask" })
  fieldMask?: string;

  @SpeakeasyMetadata({ data: "json, name=inlineDocument" })
  inlineDocument?: GoogleCloudDocumentaiV1beta3Document;

  @SpeakeasyMetadata({ data: "json, name=rawDocument" })
  rawDocument?: GoogleCloudDocumentaiV1beta3RawDocument;

  @SpeakeasyMetadata({ data: "json, name=skipHumanReview" })
  skipHumanReview?: boolean;
}
