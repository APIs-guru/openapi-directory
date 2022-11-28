import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType } from "./googleclouddocumentaiv1beta3documentschemaentitytype";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata } from "./googleclouddocumentaiv1beta3documentschemametadata";
/**
 * The schema defines the output of the processed document by a processor.
**/
export declare class GoogleCloudDocumentaiV1beta3DocumentSchema extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    entityTypes?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType[];
    metadata?: GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata;
}
