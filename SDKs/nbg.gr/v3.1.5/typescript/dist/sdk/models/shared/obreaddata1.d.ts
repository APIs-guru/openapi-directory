import { SpeakeasyBase } from "../../../internal/utils";
import { ObExternalPermissions1CodeEnum } from "./obexternalpermissions1codeenum";
export declare class ObReadData1 extends SpeakeasyBase {
    expirationDateTime?: Date;
    permissions: ObExternalPermissions1CodeEnum[];
    transactionFromDateTime?: Date;
    transactionToDateTime?: Date;
}
