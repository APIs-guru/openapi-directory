import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpCallEvidence
/** 
 * HTTP calls made by a creative that resulted in policy violations.
**/
export class HttpCallEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=urls" })
  urls?: string[];
}
