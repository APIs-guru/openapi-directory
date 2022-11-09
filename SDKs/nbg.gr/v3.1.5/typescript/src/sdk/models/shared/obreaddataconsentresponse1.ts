import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObExternalPermissions1CodeEnum } from "./obexternalpermissions1codeenum";
import { ObExternalRequestStatus1CodeEnum } from "./obexternalrequeststatus1codeenum";


export class ObReadDataConsentResponse1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @Metadata({ data: "json, name=Permissions" })
  permissions: ObExternalPermissions1CodeEnum[];

  @Metadata({ data: "json, name=Status" })
  status: ObExternalRequestStatus1CodeEnum;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;

  @Metadata({ data: "json, name=TransactionFromDateTime" })
  transactionFromDateTime?: Date;

  @Metadata({ data: "json, name=TransactionToDateTime" })
  transactionToDateTime?: Date;
}
