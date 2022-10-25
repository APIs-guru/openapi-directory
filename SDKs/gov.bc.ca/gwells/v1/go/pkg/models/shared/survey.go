package shared

type SurveyPageEnum string

const (
	SurveyPageEnumW SurveyPageEnum = "w"
	SurveyPageEnumR SurveyPageEnum = "r"
	SurveyPageEnumS SurveyPageEnum = "s"
	SurveyPageEnumA SurveyPageEnum = "a"
)

type Survey struct {
	SurveyGUID             *string         `json:"survey_guid,omitempty"`
	SurveyIntroductionText *string         `json:"survey_introduction_text,omitempty"`
	SurveyLink             *string         `json:"survey_link,omitempty"`
	SurveyPage             *SurveyPageEnum `json:"survey_page,omitempty"`
}
