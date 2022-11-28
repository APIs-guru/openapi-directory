import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyPolicy } from "./returnpolicypolicy";
import { Price } from "./price";
import { ReturnPolicySeasonalOverride } from "./returnpolicyseasonaloverride";



// ReturnPolicy
/** 
 * Return policy resource.
**/
export class ReturnPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nonFreeReturnReasons" })
  nonFreeReturnReasons?: string[];

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: ReturnPolicyPolicy;

  @SpeakeasyMetadata({ data: "json, name=returnPolicyId" })
  returnPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnShippingFee" })
  returnShippingFee?: Price;

  @SpeakeasyMetadata({ data: "json, name=seasonalOverrides", elemType: ReturnPolicySeasonalOverride })
  seasonalOverrides?: ReturnPolicySeasonalOverride[];
}
