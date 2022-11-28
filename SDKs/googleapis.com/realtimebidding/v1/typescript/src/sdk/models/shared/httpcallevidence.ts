import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpCallEvidence
/** 
 * HTTP calls made by a creative that resulted in policy violations.
**/
export class HttpCallEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls?: string[];
}
