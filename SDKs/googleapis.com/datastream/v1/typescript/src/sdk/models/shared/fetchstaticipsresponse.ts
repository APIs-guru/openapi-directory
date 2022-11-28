import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FetchStaticIpsResponse
/** 
 * Response message for a 'FetchStaticIps' response.
**/
export class FetchStaticIpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=staticIps" })
  staticIps?: string[];
}
