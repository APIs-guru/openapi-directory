package shared

type DescribeServiceResponseStatusEnum string

const (
	DescribeServiceResponseStatusEnumSuccess DescribeServiceResponseStatusEnum = "success"
)

type DescribeServiceResponse struct {
	API      string                            `json:"api"`
	Method   string                            `json:"method"`
	Response ServiceDescription                `json:"response"`
	Status   DescribeServiceResponseStatusEnum `json:"status"`
}
