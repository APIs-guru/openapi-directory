import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExchangeConfigEnabledExchange } from "./exchangeconfigenabledexchange";



// ExchangeConfig
/** 
 * Settings that control which exchanges are enabled for a partner.
**/
export class ExchangeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabledExchanges", elemType: ExchangeConfigEnabledExchange })
  enabledExchanges?: ExchangeConfigEnabledExchange[];
}
