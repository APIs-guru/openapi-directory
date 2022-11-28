import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
import { GoogleCloudDocumentaiV1RawDocument } from "./googleclouddocumentaiv1rawdocument";
/**
 * Request message for the process document method.
**/
export declare class GoogleCloudDocumentaiV1ProcessRequest extends SpeakeasyBase {
    fieldMask?: string;
    inlineDocument?: GoogleCloudDocumentaiV1Document;
    rawDocument?: GoogleCloudDocumentaiV1RawDocument;
    skipHumanReview?: boolean;
}
