package shared

type AllThemeMediaResult struct {
	SoundtrackSongsResult *ThemeMediaResult `json:"SoundtrackSongsResult"`
	ThemeSongsResult      *ThemeMediaResult `json:"ThemeSongsResult"`
	ThemeVideosResult     *ThemeMediaResult `json:"ThemeVideosResult"`
}
