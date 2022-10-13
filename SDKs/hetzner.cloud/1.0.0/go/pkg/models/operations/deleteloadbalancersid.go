package operations

type DeleteLoadBalancersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteLoadBalancersIDRequest struct {
	PathParams DeleteLoadBalancersIDPathParams
}

type DeleteLoadBalancersIDResponse struct {
	ContentType string
	StatusCode  int64
}
