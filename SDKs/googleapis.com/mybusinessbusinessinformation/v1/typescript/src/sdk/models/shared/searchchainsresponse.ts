import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Chain } from "./chain";



// SearchChainsResponse
/** 
 * Response message for Locations.SearchChains.
**/
export class SearchChainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chains", elemType: Chain })
  chains?: Chain[];
}
