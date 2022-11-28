import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateTier } from "./ratetier";



// Rate
/** 
 * A SKU price consisting of tiered rates.
**/
export class Rate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tiers", elemType: RateTier })
  tiers?: RateTier[];

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=unitCount" })
  unitCount?: number;
}
