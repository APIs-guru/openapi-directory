package shared




type ListActionsResponseStatusEnum string

const (
    ListActionsResponseStatusEnumSuccess ListActionsResponseStatusEnum = "success"
)


type ListActionsResponse struct {
    API string `json:"api"`
    Method string `json:"method"`
    Response []ActionDescription `json:"response"`
    Status ListActionsResponseStatusEnum `json:"status"`
    
}

