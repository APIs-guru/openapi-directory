import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3DocumentSchema } from "./googleclouddocumentaiv1beta3documentschema";
export declare enum GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum {
    Default = "DEFAULT",
    Urgent = "URGENT"
}
/**
 * Request message for review document method.
**/
export declare class GoogleCloudDocumentaiV1beta3ReviewDocumentRequest extends SpeakeasyBase {
    document?: GoogleCloudDocumentaiV1beta3Document;
    documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema;
    enableSchemaValidation?: boolean;
    inlineDocument?: GoogleCloudDocumentaiV1beta3Document;
    priority?: GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum;
}
