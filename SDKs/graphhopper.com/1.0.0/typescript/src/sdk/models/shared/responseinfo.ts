import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResponseInfo
/** 
 * Additional information for your request
**/
export class ResponseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @SpeakeasyMetadata({ data: "json, name=took" })
  took?: number;
}
