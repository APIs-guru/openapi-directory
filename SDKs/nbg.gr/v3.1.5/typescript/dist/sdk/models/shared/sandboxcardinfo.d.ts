import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sandbox card information
**/
export declare class SandboxCardInfo extends SpeakeasyBase {
    availableBalance?: number;
    creditLimit?: number;
    description?: string;
    expiration: string;
    holderName: string;
    ledgerBalance?: number;
    number: string;
    subType?: string;
    type?: string;
}
