import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SurveyPageEnum {
    W = "w",
    R = "r",
    S = "s",
    A = "a"
}
export declare class Survey extends SpeakeasyBase {
    surveyGuid?: string;
    surveyIntroductionText?: string;
    surveyLink?: string;
    surveyPage?: SurveyPageEnum;
}
