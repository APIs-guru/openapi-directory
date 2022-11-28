import { SpeakeasyBase } from "../../../internal/utils";
import { FieldValueChange } from "./fieldvaluechange";
export declare enum AppliedLabelChangeDetailTypesEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    LabelAdded = "LABEL_ADDED",
    LabelRemoved = "LABEL_REMOVED",
    LabelFieldValueChanged = "LABEL_FIELD_VALUE_CHANGED",
    LabelAppliedByItemCreate = "LABEL_APPLIED_BY_ITEM_CREATE"
}
/**
 * A change made to a Label on the Target.
**/
export declare class AppliedLabelChangeDetail extends SpeakeasyBase {
    fieldChanges?: FieldValueChange[];
    label?: string;
    title?: string;
    types?: AppliedLabelChangeDetailTypesEnum[];
}
