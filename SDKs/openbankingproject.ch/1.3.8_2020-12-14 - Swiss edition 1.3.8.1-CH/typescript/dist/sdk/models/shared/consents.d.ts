import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAccess } from "./accountaccess";
/**
 * Content of the body of a consent request.
 *
**/
export declare class Consents extends SpeakeasyBase {
    access: AccountAccess;
    combinedServiceIndicator: boolean;
    frequencyPerDay: number;
    recurringIndicator: boolean;
    validUntil: Date;
}
