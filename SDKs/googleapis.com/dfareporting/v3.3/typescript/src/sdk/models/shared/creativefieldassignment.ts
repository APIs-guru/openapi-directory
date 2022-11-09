import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreativeFieldAssignment
/** 
 * Creative Field Assignment.
**/
export class CreativeFieldAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeFieldId" })
  creativeFieldId?: string;

  @Metadata({ data: "json, name=creativeFieldValueId" })
  creativeFieldValueId?: string;
}
