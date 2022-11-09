import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObFeeCategory1CodeEnum } from "./obfeecategory1codeenum";


// ObOtherFeeChargeDetailType
/** 
 * Other Fee/charge type which is not available in the standard code set
**/
export class ObOtherFeeChargeDetailType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=FeeCategory" })
  feeCategory: ObFeeCategory1CodeEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
