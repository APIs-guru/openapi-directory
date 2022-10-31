package shared



type AllThemeMediaResult struct {
    SoundtrackSongsResult *ThemeMediaResult `json:"SoundtrackSongsResult,omitempty"`
    ThemeSongsResult *ThemeMediaResult `json:"ThemeSongsResult,omitempty"`
    ThemeVideosResult *ThemeMediaResult `json:"ThemeVideosResult,omitempty"`
    
}

