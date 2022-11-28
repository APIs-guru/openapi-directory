import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";



// ObWriteFundsConfirmationResponse1DataFundsAvailableResult
/** 
 * Result of a funds availability check.
**/
export class ObWriteFundsConfirmationResponse1DataFundsAvailableResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FundsAvailable" })
  fundsAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=FundsAvailableDateTime" })
  fundsAvailableDateTime: Date;
}


export class ObWriteFundsConfirmationResponse1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FundsAvailableResult" })
  fundsAvailableResult?: ObWriteFundsConfirmationResponse1DataFundsAvailableResult;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteFundsConfirmationResponse1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteFundsConfirmationResponse1Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
