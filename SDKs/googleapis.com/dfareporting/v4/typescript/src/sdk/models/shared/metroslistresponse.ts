import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metro } from "./metro";



// MetrosListResponse
/** 
 * Metro List Response
**/
export class MetrosListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metros", elemType: Metro })
  metros?: Metro[];
}
