import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";



// ListDomainsResponse
/** 
 * The response to listing Domains.
**/
export class ListDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: Domain })
  domains?: Domain[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
