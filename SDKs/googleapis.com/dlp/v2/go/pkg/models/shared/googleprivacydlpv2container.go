package shared

type GooglePrivacyDlpV2Container struct {
	FullPath     *string `json:"fullPath,omitempty"`
	ProjectID    *string `json:"projectId,omitempty"`
	RelativePath *string `json:"relativePath,omitempty"`
	RootPath     *string `json:"rootPath,omitempty"`
	Type         *string `json:"type,omitempty"`
	UpdateTime   *string `json:"updateTime,omitempty"`
	Version      *string `json:"version,omitempty"`
}
