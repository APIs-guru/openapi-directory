package shared




type DisplayOptionTypeEnum string

const (
    DisplayOptionTypeEnumDefault DisplayOptionTypeEnum = "DEFAULT"
DisplayOptionTypeEnumSuccess DisplayOptionTypeEnum = "SUCCESS"
DisplayOptionTypeEnumWarning DisplayOptionTypeEnum = "WARNING"
DisplayOptionTypeEnumDanger DisplayOptionTypeEnum = "DANGER"
DisplayOptionTypeEnumInfo DisplayOptionTypeEnum = "INFO"
)


type DisplayOption struct {
    Label string `json:"label"`
    Name string `json:"name"`
    Type DisplayOptionTypeEnum `json:"type"`
    
}

