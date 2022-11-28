import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
import { GoogleCloudDocumentaiV1RawDocument } from "./googleclouddocumentaiv1rawdocument";



// GoogleCloudDocumentaiV1ProcessRequest
/** 
 * Request message for the process document method.
**/
export class GoogleCloudDocumentaiV1ProcessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldMask" })
  fieldMask?: string;

  @SpeakeasyMetadata({ data: "json, name=inlineDocument" })
  inlineDocument?: GoogleCloudDocumentaiV1Document;

  @SpeakeasyMetadata({ data: "json, name=rawDocument" })
  rawDocument?: GoogleCloudDocumentaiV1RawDocument;

  @SpeakeasyMetadata({ data: "json, name=skipHumanReview" })
  skipHumanReview?: boolean;
}
