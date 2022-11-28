import { SpeakeasyBase } from "../../../internal/utils";
import { ObExternalPermissions1CodeEnum } from "./obexternalpermissions1codeenum";
import { ObExternalRequestStatus1CodeEnum } from "./obexternalrequeststatus1codeenum";
export declare class ObReadDataConsentResponse1 extends SpeakeasyBase {
    consentId: string;
    creationDateTime: Date;
    expirationDateTime?: Date;
    permissions: ObExternalPermissions1CodeEnum[];
    status: ObExternalRequestStatus1CodeEnum;
    statusUpdateDateTime: Date;
    transactionFromDateTime?: Date;
    transactionToDateTime?: Date;
}
