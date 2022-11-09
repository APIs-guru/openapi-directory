import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RateTier } from "./ratetier";


// Rate
/** 
 * A SKU price consisting of tiered rates.
**/
export class Rate extends SpeakeasyBase {
  @Metadata({ data: "json, name=tiers", elemType: shared.RateTier })
  tiers?: RateTier[];

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=unitCount" })
  unitCount?: number;
}
