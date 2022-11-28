import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1FieldTypeEnumType } from "./googleclouddatacatalogv1beta1fieldtypeenumtype";


export enum GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum {
    PrimitiveTypeUnspecified = "PRIMITIVE_TYPE_UNSPECIFIED",
    Double = "DOUBLE",
    String = "STRING",
    Bool = "BOOL",
    Timestamp = "TIMESTAMP"
}


export class GoogleCloudDatacatalogV1beta1FieldType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enumType" })
  enumType?: GoogleCloudDatacatalogV1beta1FieldTypeEnumType;

  @SpeakeasyMetadata({ data: "json, name=primitiveType" })
  primitiveType?: GoogleCloudDatacatalogV1beta1FieldTypePrimitiveTypeEnum;
}
