import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tier } from "./tier";



// TiersListResponse
/** 
 * Tiers list response.
**/
export class TiersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Tier })
  items?: Tier[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
