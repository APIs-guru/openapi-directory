import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FieldValueChange } from "./fieldvaluechange";

export enum AppliedLabelChangeDetailTypesEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    LabelAdded = "LABEL_ADDED"
,    LabelRemoved = "LABEL_REMOVED"
,    LabelFieldValueChanged = "LABEL_FIELD_VALUE_CHANGED"
,    LabelAppliedByItemCreate = "LABEL_APPLIED_BY_ITEM_CREATE"
}


// AppliedLabelChangeDetail
/** 
 * A change made to a Label on the Target.
**/
export class AppliedLabelChangeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldChanges", elemType: shared.FieldValueChange })
  fieldChanges?: FieldValueChange[];

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=types" })
  types?: AppliedLabelChangeDetailTypesEnum[];
}
