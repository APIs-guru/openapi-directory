import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue } from "./googleclouddatacatalogv1beta1fieldtypeenumtypeenumvalue";


export class GoogleCloudDatacatalogV1beta1FieldTypeEnumType extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedValues", elemType: shared.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue })
  allowedValues?: GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue[];
}
