import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
export declare enum GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum {
    Default = "DEFAULT",
    Urgent = "URGENT"
}
/**
 * Request message for review document method.
**/
export declare class GoogleCloudDocumentaiV1ReviewDocumentRequest extends SpeakeasyBase {
    documentSchema?: GoogleCloudDocumentaiV1DocumentSchema;
    enableSchemaValidation?: boolean;
    inlineDocument?: GoogleCloudDocumentaiV1Document;
    priority?: GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum;
}
