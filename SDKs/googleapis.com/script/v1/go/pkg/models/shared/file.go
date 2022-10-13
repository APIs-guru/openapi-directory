package shared

type FileTypeEnum string

const (
	FileTypeEnumEnumTypeUnspecified FileTypeEnum = "ENUM_TYPE_UNSPECIFIED"
	FileTypeEnumServerJs            FileTypeEnum = "SERVER_JS"
	FileTypeEnumHTML                FileTypeEnum = "HTML"
	FileTypeEnumJSON                FileTypeEnum = "JSON"
)

type File struct {
	CreateTime     *string                          `json:"createTime"`
	FunctionSet    *GoogleAppsScriptTypeFunctionSet `json:"functionSet"`
	LastModifyUser *GoogleAppsScriptTypeUser        `json:"lastModifyUser"`
	Name           *string                          `json:"name"`
	Source         *string                          `json:"source"`
	Type           *FileTypeEnum                    `json:"type"`
	UpdateTime     *string                          `json:"updateTime"`
}
