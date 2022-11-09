import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubExchangeTargetingOptionDetails
/** 
 * Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
**/
export class SubExchangeTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
