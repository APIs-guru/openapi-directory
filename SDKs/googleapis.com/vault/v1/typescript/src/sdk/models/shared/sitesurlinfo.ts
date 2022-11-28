import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SitesUrlInfo
/** 
 * The published site URLs of new Google Sites to search
**/
export class SitesUrlInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls?: string[];
}
