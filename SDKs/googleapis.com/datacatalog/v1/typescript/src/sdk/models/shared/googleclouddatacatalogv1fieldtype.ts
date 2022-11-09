import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1FieldTypeEnumType } from "./googleclouddatacatalogv1fieldtypeenumtype";

export enum GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum {
    PrimitiveTypeUnspecified = "PRIMITIVE_TYPE_UNSPECIFIED"
,    Double = "DOUBLE"
,    String = "STRING"
,    Bool = "BOOL"
,    Timestamp = "TIMESTAMP"
,    Richtext = "RICHTEXT"
}


export class GoogleCloudDatacatalogV1FieldType extends SpeakeasyBase {
  @Metadata({ data: "json, name=enumType" })
  enumType?: GoogleCloudDatacatalogV1FieldTypeEnumType;

  @Metadata({ data: "json, name=primitiveType" })
  primitiveType?: GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum;
}
