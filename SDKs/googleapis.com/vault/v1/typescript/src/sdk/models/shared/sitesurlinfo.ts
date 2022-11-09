import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SitesUrlInfo
/** 
 * The published site URLs of new Google Sites to search
**/
export class SitesUrlInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=urls" })
  urls?: string[];
}
