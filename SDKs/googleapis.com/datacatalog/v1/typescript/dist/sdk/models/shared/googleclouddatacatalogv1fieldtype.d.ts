import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1FieldTypeEnumType } from "./googleclouddatacatalogv1fieldtypeenumtype";
export declare enum GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum {
    PrimitiveTypeUnspecified = "PRIMITIVE_TYPE_UNSPECIFIED",
    Double = "DOUBLE",
    String = "STRING",
    Bool = "BOOL",
    Timestamp = "TIMESTAMP",
    Richtext = "RICHTEXT"
}
export declare class GoogleCloudDatacatalogV1FieldType extends SpeakeasyBase {
    enumType?: GoogleCloudDatacatalogV1FieldTypeEnumType;
    primitiveType?: GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum;
}
