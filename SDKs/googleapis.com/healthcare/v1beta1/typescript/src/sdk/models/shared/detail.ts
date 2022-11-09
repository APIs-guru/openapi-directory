import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Finding } from "./finding";


// Detail
/** 
 * Contains multiple sensitive information findings for each resource slice.
**/
export class Detail extends SpeakeasyBase {
  @Metadata({ data: "json, name=findings", elemType: shared.Finding })
  findings?: Finding[];
}
