package shared

type FrontendSettingsLanguageSource struct {
	Code *string
	Name *string
}

type FrontendSettingsLanguageTarget struct {
	Code *string
	Name *string
}

type FrontendSettingsLanguage struct {
	Source *FrontendSettingsLanguageSource
	Target *FrontendSettingsLanguageTarget
}

type FrontendSettings struct {
	CharLimit       *int64
	FrontendTimeout *int64
	Language        *FrontendSettingsLanguage
}
