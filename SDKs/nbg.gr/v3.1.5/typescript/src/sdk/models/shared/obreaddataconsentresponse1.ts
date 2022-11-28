import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObExternalPermissions1CodeEnum } from "./obexternalpermissions1codeenum";
import { ObExternalRequestStatus1CodeEnum } from "./obexternalrequeststatus1codeenum";



export class ObReadDataConsentResponse1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions: ObExternalPermissions1CodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObExternalRequestStatus1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionFromDateTime" })
  transactionFromDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionToDateTime" })
  transactionToDateTime?: Date;
}
