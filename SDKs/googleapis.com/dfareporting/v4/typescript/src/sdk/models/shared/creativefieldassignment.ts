import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreativeFieldAssignment
/** 
 * Creative Field Assignment.
**/
export class CreativeFieldAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeFieldId" })
  creativeFieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeFieldValueId" })
  creativeFieldValueId?: string;
}
