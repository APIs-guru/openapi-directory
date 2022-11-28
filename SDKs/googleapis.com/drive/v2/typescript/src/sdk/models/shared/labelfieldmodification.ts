import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelFieldModification
/** 
 * A modification to a label's field.
**/
export class LabelFieldModification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=setDateValues" })
  setDateValues?: Date[];

  @SpeakeasyMetadata({ data: "json, name=setIntegerValues" })
  setIntegerValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=setSelectionValues" })
  setSelectionValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=setTextValues" })
  setTextValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=setUserValues" })
  setUserValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=unsetValues" })
  unsetValues?: boolean;
}
