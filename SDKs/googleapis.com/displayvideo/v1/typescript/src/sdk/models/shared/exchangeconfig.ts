import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExchangeConfigEnabledExchange } from "./exchangeconfigenabledexchange";


// ExchangeConfig
/** 
 * Settings that control which exchanges are enabled for a partner.
**/
export class ExchangeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabledExchanges", elemType: shared.ExchangeConfigEnabledExchange })
  enabledExchanges?: ExchangeConfigEnabledExchange[];
}
