import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentEvaluation } from "./consentevaluation";
/**
 * Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
**/
export declare class CheckDataAccessResponse extends SpeakeasyBase {
    consentDetails?: Map<string, ConsentEvaluation>;
    consented?: boolean;
}
