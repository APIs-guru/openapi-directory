import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObExternalDirectDebitStatus1CodeEnum } from "./obexternaldirectdebitstatus1codeenum";
import { ObActiveOrHistoricCurrencyAndAmount0 } from "./obactiveorhistoriccurrencyandamount0";
import { Links } from "./links";
import { Meta } from "./meta";



// ObReadDirectDebit2DataDirectDebit
/** 
 * Account to or from which a cash entry is made.
**/
export class ObReadDirectDebit2DataDirectDebit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=DirectDebitId" })
  directDebitId?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectDebitStatusCode" })
  directDebitStatusCode?: ObExternalDirectDebitStatus1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=MandateIdentification" })
  mandateIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=PreviousPaymentAmount" })
  previousPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount0;

  @SpeakeasyMetadata({ data: "json, name=PreviousPaymentDateTime" })
  previousPaymentDateTime?: Date;
}


export class ObReadDirectDebit2Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectDebit", elemType: ObReadDirectDebit2DataDirectDebit })
  directDebit?: ObReadDirectDebit2DataDirectDebit[];
}


export class ObReadDirectDebit2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadDirectDebit2Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
