import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue } from "./googleclouddatacatalogv1beta1fieldtypeenumtypeenumvalue";



export class GoogleCloudDatacatalogV1beta1FieldTypeEnumType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedValues", elemType: GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue })
  allowedValues?: GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue[];
}
