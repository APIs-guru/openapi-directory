import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FetchStaticIpsResponse
/** 
 * Response message for a 'FetchStaticIps' response.
**/
export class FetchStaticIpsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=staticIps" })
  staticIps?: string[];
}
