import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Chain } from "./chain";


// SearchChainsResponse
/** 
 * Response message for Locations.SearchChains.
**/
export class SearchChainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=chains", elemType: shared.Chain })
  chains?: Chain[];
}
