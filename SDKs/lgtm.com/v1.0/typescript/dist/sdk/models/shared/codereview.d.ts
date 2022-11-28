import { SpeakeasyBase } from "../../../internal/utils";
import { CodereviewLanguages } from "./codereviewlanguages";
export declare enum CodeReviewStatusEnum {
    Pending = "pending",
    Failure = "failure",
    Success = "success"
}
export declare class CodeReview extends SpeakeasyBase {
    id?: string;
    languages?: CodereviewLanguages[];
    resultsUrl?: string;
    status?: CodeReviewStatusEnum;
    statusMessage?: string;
}
