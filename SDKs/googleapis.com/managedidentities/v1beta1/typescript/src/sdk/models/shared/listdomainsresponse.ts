import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";



// ListDomainsResponse
/** 
 * Response message for ListDomains
**/
export class ListDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: Domain })
  domains?: Domain[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
