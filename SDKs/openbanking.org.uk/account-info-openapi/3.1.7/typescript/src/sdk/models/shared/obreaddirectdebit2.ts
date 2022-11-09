import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObExternalDirectDebitStatus1CodeEnum } from "./obexternaldirectdebitstatus1codeenum";
import { ObActiveOrHistoricCurrencyAndAmount0 } from "./obactiveorhistoriccurrencyandamount0";
import { Links } from "./links";
import { Meta } from "./meta";


// ObReadDirectDebit2DataDirectDebit
/** 
 * Account to or from which a cash entry is made.
**/
export class ObReadDirectDebit2DataDirectDebit extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=DirectDebitId" })
  directDebitId?: string;

  @Metadata({ data: "json, name=DirectDebitStatusCode" })
  directDebitStatusCode?: ObExternalDirectDebitStatus1CodeEnum;

  @Metadata({ data: "json, name=Frequency" })
  frequency?: string;

  @Metadata({ data: "json, name=MandateIdentification" })
  mandateIdentification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=PreviousPaymentAmount" })
  previousPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount0;

  @Metadata({ data: "json, name=PreviousPaymentDateTime" })
  previousPaymentDateTime?: Date;
}


export class ObReadDirectDebit2Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectDebit", elemType: shared.ObReadDirectDebit2DataDirectDebit })
  directDebit?: ObReadDirectDebit2DataDirectDebit[];
}


export class ObReadDirectDebit2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDirectDebit2Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
