import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityType } from "./googleclouddocumentaiv1documentschemaentitytype";
import { GoogleCloudDocumentaiV1DocumentSchemaMetadata } from "./googleclouddocumentaiv1documentschemametadata";



// GoogleCloudDocumentaiV1DocumentSchema
/** 
 * The schema defines the output of the processed document by a processor.
**/
export class GoogleCloudDocumentaiV1DocumentSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityTypes", elemType: GoogleCloudDocumentaiV1DocumentSchemaEntityType })
  entityTypes?: GoogleCloudDocumentaiV1DocumentSchemaEntityType[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GoogleCloudDocumentaiV1DocumentSchemaMetadata;
}
