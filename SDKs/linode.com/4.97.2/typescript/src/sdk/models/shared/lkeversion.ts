import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LkeVersion
/** 
 * LKE versions
 * 
**/
export class LkeVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
