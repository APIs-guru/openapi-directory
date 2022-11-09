import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Links } from "./links";
import { Meta } from "./meta";


// ObWriteFundsConfirmationResponse1DataFundsAvailableResult
/** 
 * Result of a funds availability check.
**/
export class ObWriteFundsConfirmationResponse1DataFundsAvailableResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=FundsAvailable" })
  fundsAvailable: boolean;

  @Metadata({ data: "json, name=FundsAvailableDateTime" })
  fundsAvailableDateTime: Date;
}


export class ObWriteFundsConfirmationResponse1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=FundsAvailableResult" })
  fundsAvailableResult?: ObWriteFundsConfirmationResponse1DataFundsAvailableResult;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteFundsConfirmationResponse1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteFundsConfirmationResponse1Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
