import { SpeakeasyBase } from "../../../internal/utils";
import { CheckError } from "./checkerror";
import { CheckInfo } from "./checkinfo";
import { QuotaInfo } from "./quotainfo";
/**
 * Response message for the Check method.
**/
export declare class CheckResponse extends SpeakeasyBase {
    checkErrors?: CheckError[];
    checkInfo?: CheckInfo;
    operationId?: string;
    quotaInfo?: QuotaInfo;
    serviceConfigId?: string;
    serviceRolloutId?: string;
}
