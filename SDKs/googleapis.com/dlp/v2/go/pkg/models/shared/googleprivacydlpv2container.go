package shared

type GooglePrivacyDlpV2Container struct {
	FullPath     *string `json:"fullPath"`
	ProjectID    *string `json:"projectId"`
	RelativePath *string `json:"relativePath"`
	RootPath     *string `json:"rootPath"`
	Type         *string `json:"type"`
	UpdateTime   *string `json:"updateTime"`
	Version      *string `json:"version"`
}
