import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnPolicyPolicy } from "./returnpolicypolicy";
import { Price } from "./price";
import { ReturnPolicySeasonalOverride } from "./returnpolicyseasonaloverride";


// ReturnPolicy
/** 
 * Return policy resource.
**/
export class ReturnPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nonFreeReturnReasons" })
  nonFreeReturnReasons?: string[];

  @Metadata({ data: "json, name=policy" })
  policy?: ReturnPolicyPolicy;

  @Metadata({ data: "json, name=returnPolicyId" })
  returnPolicyId?: string;

  @Metadata({ data: "json, name=returnShippingFee" })
  returnShippingFee?: Price;

  @Metadata({ data: "json, name=seasonalOverrides", elemType: shared.ReturnPolicySeasonalOverride })
  seasonalOverrides?: ReturnPolicySeasonalOverride[];
}
