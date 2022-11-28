import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Finding } from "./finding";



// Detail
/** 
 * Contains multiple sensitive information findings for each resource slice.
**/
export class Detail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findings", elemType: Finding })
  findings?: Finding[];
}
