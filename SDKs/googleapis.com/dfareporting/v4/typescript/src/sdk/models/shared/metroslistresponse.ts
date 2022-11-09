import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metro } from "./metro";


// MetrosListResponse
/** 
 * Metro List Response
**/
export class MetrosListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metros", elemType: shared.Metro })
  metros?: Metro[];
}
