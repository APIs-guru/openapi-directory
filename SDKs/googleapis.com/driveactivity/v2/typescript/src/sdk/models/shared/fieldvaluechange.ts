import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldValue } from "./fieldvalue";



// FieldValueChange
/** 
 * Change to a Field value.
**/
export class FieldValueChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=newValue" })
  newValue?: FieldValue;

  @SpeakeasyMetadata({ data: "json, name=oldValue" })
  oldValue?: FieldValue;
}
