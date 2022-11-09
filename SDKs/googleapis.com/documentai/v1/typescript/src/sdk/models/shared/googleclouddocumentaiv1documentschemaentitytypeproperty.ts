import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1PropertyMetadata } from "./googleclouddocumentaiv1propertymetadata";

export enum GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum {
    OccurrenceTypeUnspecified = "OCCURRENCE_TYPE_UNSPECIFIED"
,    OptionalOnce = "OPTIONAL_ONCE"
,    OptionalMultiple = "OPTIONAL_MULTIPLE"
,    RequiredOnce = "REQUIRED_ONCE"
,    RequiredMultiple = "REQUIRED_MULTIPLE"
}


// GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty
/** 
 * Defines properties that can be part of the entity type.
**/
export class GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=occurrenceType" })
  occurrenceType?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum;

  @Metadata({ data: "json, name=propertyMetadata" })
  propertyMetadata?: GoogleCloudDocumentaiV1PropertyMetadata;

  @Metadata({ data: "json, name=valueType" })
  valueType?: string;
}
