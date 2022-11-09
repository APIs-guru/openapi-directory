import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue } from "./googleclouddatacatalogv1fieldtypeenumtypeenumvalue";


export class GoogleCloudDatacatalogV1FieldTypeEnumType extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedValues", elemType: shared.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue })
  allowedValues?: GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue[];
}
