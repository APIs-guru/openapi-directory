import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";



// RetrieveImportableDomainsResponse
/** 
 * Response for the `RetrieveImportableDomains` method.
**/
export class RetrieveImportableDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: Domain })
  domains?: Domain[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
