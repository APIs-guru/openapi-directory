import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType } from "./googleclouddocumentaiv1beta3documentschemaentitytype";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata } from "./googleclouddocumentaiv1beta3documentschemametadata";



// GoogleCloudDocumentaiV1beta3DocumentSchema
/** 
 * The schema defines the output of the processed document by a processor.
**/
export class GoogleCloudDocumentaiV1beta3DocumentSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityTypes", elemType: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType })
  entityTypes?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata;
}
