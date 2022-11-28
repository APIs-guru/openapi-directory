import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentEvaluation } from "./consentevaluation";
/**
 * The consent evaluation result for a single `data_id`.
**/
export declare class Result extends SpeakeasyBase {
    consentDetails?: Map<string, ConsentEvaluation>;
    consented?: boolean;
    dataId?: string;
}
