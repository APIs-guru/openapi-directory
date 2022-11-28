import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityType } from "./googleclouddocumentaiv1documentschemaentitytype";
import { GoogleCloudDocumentaiV1DocumentSchemaMetadata } from "./googleclouddocumentaiv1documentschemametadata";
/**
 * The schema defines the output of the processed document by a processor.
**/
export declare class GoogleCloudDocumentaiV1DocumentSchema extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    entityTypes?: GoogleCloudDocumentaiV1DocumentSchemaEntityType[];
    metadata?: GoogleCloudDocumentaiV1DocumentSchemaMetadata;
}
