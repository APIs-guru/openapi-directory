import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LastModifiedInfo
/** 
 * Modification timestamp.
**/
export class LastModifiedInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=time" })
  time?: string;
}
