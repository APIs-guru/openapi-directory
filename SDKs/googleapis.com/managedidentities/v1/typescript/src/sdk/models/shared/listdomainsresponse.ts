import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Domain } from "./domain";


// ListDomainsResponse
/** 
 * Response message for ListDomains
**/
export class ListDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains", elemType: shared.Domain })
  domains?: Domain[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
