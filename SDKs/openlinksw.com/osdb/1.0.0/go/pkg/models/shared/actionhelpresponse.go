package shared




type ActionHelpResponseStatusEnum string

const (
    ActionHelpResponseStatusEnumSuccess ActionHelpResponseStatusEnum = "success"
)


type ActionHelpResponse struct {
    API string `json:"api"`
    Method string `json:"method"`
    Response ActionHelp `json:"response"`
    Status ActionHelpResponseStatusEnum `json:"status"`
    
}

