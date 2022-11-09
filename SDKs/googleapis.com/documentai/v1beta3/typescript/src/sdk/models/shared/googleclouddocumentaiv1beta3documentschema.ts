import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType } from "./googleclouddocumentaiv1beta3documentschemaentitytype";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata } from "./googleclouddocumentaiv1beta3documentschemametadata";


// GoogleCloudDocumentaiV1beta3DocumentSchema
/** 
 * The schema defines the output of the processed document by a processor.
**/
export class GoogleCloudDocumentaiV1beta3DocumentSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityTypes", elemType: shared.GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType })
  entityTypes?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata;
}
