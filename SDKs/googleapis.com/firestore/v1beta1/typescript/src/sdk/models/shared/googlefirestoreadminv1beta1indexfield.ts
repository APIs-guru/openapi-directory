import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleFirestoreAdminV1beta1IndexFieldModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING",
    ArrayContains = "ARRAY_CONTAINS"
}


// GoogleFirestoreAdminV1beta1IndexField
/** 
 * A field of an index.
**/
export class GoogleFirestoreAdminV1beta1IndexField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldPath" })
  fieldPath?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleFirestoreAdminV1beta1IndexFieldModeEnum;
}
