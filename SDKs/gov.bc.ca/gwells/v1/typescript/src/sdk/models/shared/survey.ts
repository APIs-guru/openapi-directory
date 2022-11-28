import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SurveyPageEnum {
    W = "w",
    R = "r",
    S = "s",
    A = "a"
}


export class Survey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=survey_guid" })
  surveyGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=survey_introduction_text" })
  surveyIntroductionText?: string;

  @SpeakeasyMetadata({ data: "json, name=survey_link" })
  surveyLink?: string;

  @SpeakeasyMetadata({ data: "json, name=survey_page" })
  surveyPage?: SurveyPageEnum;
}
