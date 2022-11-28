import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue } from "./googleclouddatacatalogv1fieldtypeenumtypeenumvalue";



export class GoogleCloudDatacatalogV1FieldTypeEnumType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedValues", elemType: GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue })
  allowedValues?: GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue[];
}
