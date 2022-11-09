import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
import { GoogleCloudDocumentaiV1RawDocument } from "./googleclouddocumentaiv1rawdocument";


// GoogleCloudDocumentaiV1ProcessRequest
/** 
 * Request message for the process document method.
**/
export class GoogleCloudDocumentaiV1ProcessRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldMask" })
  fieldMask?: string;

  @Metadata({ data: "json, name=inlineDocument" })
  inlineDocument?: GoogleCloudDocumentaiV1Document;

  @Metadata({ data: "json, name=rawDocument" })
  rawDocument?: GoogleCloudDocumentaiV1RawDocument;

  @Metadata({ data: "json, name=skipHumanReview" })
  skipHumanReview?: boolean;
}
