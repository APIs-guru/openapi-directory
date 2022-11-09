import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Domain } from "./domain";


// RetrieveImportableDomainsResponse
/** 
 * Response for the `RetrieveImportableDomains` method.
**/
export class RetrieveImportableDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains", elemType: shared.Domain })
  domains?: Domain[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
