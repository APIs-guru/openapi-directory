package shared

type PagespeedAPIPagespeedResponseV5 struct {
	AnalysisUtcTimestamp    *string                          `json:"analysisUTCTimestamp,omitempty"`
	CaptchaResult           *string                          `json:"captchaResult,omitempty"`
	ID                      *string                          `json:"id,omitempty"`
	Kind                    *string                          `json:"kind,omitempty"`
	LighthouseResult        *LighthouseResultV5              `json:"lighthouseResult,omitempty"`
	LoadingExperience       *PagespeedAPILoadingExperienceV5 `json:"loadingExperience,omitempty"`
	OriginLoadingExperience *PagespeedAPILoadingExperienceV5 `json:"originLoadingExperience,omitempty"`
	Version                 *PagespeedVersion                `json:"version,omitempty"`
}
