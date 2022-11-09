import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SurveyPageEnum {
    W = "w"
,    R = "r"
,    S = "s"
,    A = "a"
}


export class Survey extends SpeakeasyBase {
  @Metadata({ data: "json, name=survey_guid" })
  surveyGuid?: string;

  @Metadata({ data: "json, name=survey_introduction_text" })
  surveyIntroductionText?: string;

  @Metadata({ data: "json, name=survey_link" })
  surveyLink?: string;

  @Metadata({ data: "json, name=survey_page" })
  surveyPage?: SurveyPageEnum;
}
