package shared

type FileTypeEnum string

const (
	FileTypeEnumEnumTypeUnspecified FileTypeEnum = "ENUM_TYPE_UNSPECIFIED"
	FileTypeEnumServerJs            FileTypeEnum = "SERVER_JS"
	FileTypeEnumHTML                FileTypeEnum = "HTML"
	FileTypeEnumJSON                FileTypeEnum = "JSON"
)

// File
// An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
type File struct {
	CreateTime     *string                          `json:"createTime,omitempty"`
	FunctionSet    *GoogleAppsScriptTypeFunctionSet `json:"functionSet,omitempty"`
	LastModifyUser *GoogleAppsScriptTypeUser        `json:"lastModifyUser,omitempty"`
	Name           *string                          `json:"name,omitempty"`
	Source         *string                          `json:"source,omitempty"`
	Type           *FileTypeEnum                    `json:"type,omitempty"`
	UpdateTime     *string                          `json:"updateTime,omitempty"`
}
