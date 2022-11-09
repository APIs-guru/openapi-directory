import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityType } from "./googleclouddocumentaiv1documentschemaentitytype";
import { GoogleCloudDocumentaiV1DocumentSchemaMetadata } from "./googleclouddocumentaiv1documentschemametadata";


// GoogleCloudDocumentaiV1DocumentSchema
/** 
 * The schema defines the output of the processed document by a processor.
**/
export class GoogleCloudDocumentaiV1DocumentSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityTypes", elemType: shared.GoogleCloudDocumentaiV1DocumentSchemaEntityType })
  entityTypes?: GoogleCloudDocumentaiV1DocumentSchemaEntityType[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: GoogleCloudDocumentaiV1DocumentSchemaMetadata;
}
