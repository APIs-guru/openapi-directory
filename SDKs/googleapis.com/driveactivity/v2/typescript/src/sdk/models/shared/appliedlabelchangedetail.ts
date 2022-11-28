import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldValueChange } from "./fieldvaluechange";


export enum AppliedLabelChangeDetailTypesEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    LabelAdded = "LABEL_ADDED",
    LabelRemoved = "LABEL_REMOVED",
    LabelFieldValueChanged = "LABEL_FIELD_VALUE_CHANGED",
    LabelAppliedByItemCreate = "LABEL_APPLIED_BY_ITEM_CREATE"
}


// AppliedLabelChangeDetail
/** 
 * A change made to a Label on the Target.
**/
export class AppliedLabelChangeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldChanges", elemType: FieldValueChange })
  fieldChanges?: FieldValueChange[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: AppliedLabelChangeDetailTypesEnum[];
}
