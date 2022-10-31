package shared




type DescribeActionResponseStatusEnum string

const (
    DescribeActionResponseStatusEnumSuccess DescribeActionResponseStatusEnum = "success"
)


type DescribeActionResponse struct {
    API string `json:"api"`
    Method string `json:"method"`
    Response ActionDescription `json:"response"`
    Status DescribeActionResponseStatusEnum `json:"status"`
    
}

