import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObExternalPermissions1CodeEnum } from "./obexternalpermissions1codeenum";



export class ObReadData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions: ObExternalPermissions1CodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=TransactionFromDateTime" })
  transactionFromDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionToDateTime" })
  transactionToDateTime?: Date;
}
