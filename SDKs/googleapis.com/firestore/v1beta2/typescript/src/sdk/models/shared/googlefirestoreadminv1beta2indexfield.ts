import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum {
    ArrayConfigUnspecified = "ARRAY_CONFIG_UNSPECIFIED"
,    Contains = "CONTAINS"
}

export enum GoogleFirestoreAdminV1beta2IndexFieldOrderEnum {
    OrderUnspecified = "ORDER_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// GoogleFirestoreAdminV1beta2IndexField
/** 
 * A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
**/
export class GoogleFirestoreAdminV1beta2IndexField extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayConfig" })
  arrayConfig?: GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum;

  @Metadata({ data: "json, name=fieldPath" })
  fieldPath?: string;

  @Metadata({ data: "json, name=order" })
  order?: GoogleFirestoreAdminV1beta2IndexFieldOrderEnum;
}
