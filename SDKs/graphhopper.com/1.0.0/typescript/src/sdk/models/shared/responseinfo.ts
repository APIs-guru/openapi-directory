import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResponseInfo
/** 
 * Additional information for your request
**/
export class ResponseInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @Metadata({ data: "json, name=took" })
  took?: number;
}
