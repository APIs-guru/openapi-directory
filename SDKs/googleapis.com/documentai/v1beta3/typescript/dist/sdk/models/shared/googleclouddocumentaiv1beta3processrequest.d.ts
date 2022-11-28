import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3RawDocument } from "./googleclouddocumentaiv1beta3rawdocument";
/**
 * Request message for the process document method.
**/
export declare class GoogleCloudDocumentaiV1beta3ProcessRequest extends SpeakeasyBase {
    document?: GoogleCloudDocumentaiV1beta3Document;
    fieldMask?: string;
    inlineDocument?: GoogleCloudDocumentaiV1beta3Document;
    rawDocument?: GoogleCloudDocumentaiV1beta3RawDocument;
    skipHumanReview?: boolean;
}
