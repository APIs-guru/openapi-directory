import { SpeakeasyBase } from "../../../internal/utils";
import { CodereviewAlerts } from "./codereviewalerts";
export declare enum CodereviewLanguagesStatusEnum {
    Pending = "pending",
    Failure = "failure",
    Success = "success"
}
export declare class CodereviewLanguages extends SpeakeasyBase {
    alerts?: CodereviewAlerts[];
    fixed?: number;
    language?: string;
    new?: number;
    status?: CodereviewLanguagesStatusEnum;
    statusMessage?: string;
}
