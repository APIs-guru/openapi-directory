import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tier } from "./tier";


// TiersListResponse
/** 
 * Tiers list response.
**/
export class TiersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Tier })
  items?: Tier[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
