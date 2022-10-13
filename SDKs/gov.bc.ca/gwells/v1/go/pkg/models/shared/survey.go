package shared

type SurveySurveyPagePageEnum string

const (
	SurveySurveyPagePageEnumW SurveySurveyPagePageEnum = "w"
	SurveySurveyPagePageEnumR SurveySurveyPagePageEnum = "r"
	SurveySurveyPagePageEnumS SurveySurveyPagePageEnum = "s"
	SurveySurveyPagePageEnumA SurveySurveyPagePageEnum = "a"
)

type Survey struct {
	SurveyGUID             *string                   `json:"survey_guid"`
	SurveyIntroductionText *string                   `json:"survey_introduction_text"`
	SurveyLink             *string                   `json:"survey_link"`
	SurveyPage             *SurveySurveyPagePageEnum `json:"survey_page"`
}
