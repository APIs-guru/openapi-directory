package shared

type PagespeedAPIPagespeedResponseV5 struct {
	AnalysisUtcTimestamp    *string                          `json:"analysisUTCTimestamp"`
	CaptchaResult           *string                          `json:"captchaResult"`
	ID                      *string                          `json:"id"`
	Kind                    *string                          `json:"kind"`
	LighthouseResult        *LighthouseResultV5              `json:"lighthouseResult"`
	LoadingExperience       *PagespeedAPILoadingExperienceV5 `json:"loadingExperience"`
	OriginLoadingExperience *PagespeedAPILoadingExperienceV5 `json:"originLoadingExperience"`
	Version                 *PagespeedVersion                `json:"version"`
}
