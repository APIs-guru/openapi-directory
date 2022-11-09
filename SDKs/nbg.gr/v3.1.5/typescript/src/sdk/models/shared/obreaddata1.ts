import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObExternalPermissions1CodeEnum } from "./obexternalpermissions1codeenum";


export class ObReadData1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @Metadata({ data: "json, name=Permissions" })
  permissions: ObExternalPermissions1CodeEnum[];

  @Metadata({ data: "json, name=TransactionFromDateTime" })
  transactionFromDateTime?: Date;

  @Metadata({ data: "json, name=TransactionToDateTime" })
  transactionToDateTime?: Date;
}
