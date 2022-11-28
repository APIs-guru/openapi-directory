import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObFeeCategory1CodeEnum } from "./obfeecategory1codeenum";



// ObOtherFeeChargeDetailType
/** 
 * Other Fee/charge type which is not available in the standard code set
**/
export class ObOtherFeeChargeDetailType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCategory" })
  feeCategory: ObFeeCategory1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
