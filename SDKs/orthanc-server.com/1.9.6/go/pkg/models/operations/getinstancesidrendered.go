package operations

type GetInstancesIDRenderedPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDRenderedQueryParams struct {
	Height       *float64 `queryParam:"style=form,explode=true,name=height"`
	Quality      *float64 `queryParam:"style=form,explode=true,name=quality"`
	Smooth       *bool    `queryParam:"style=form,explode=true,name=smooth"`
	Width        *float64 `queryParam:"style=form,explode=true,name=width"`
	WindowCenter *float64 `queryParam:"style=form,explode=true,name=window-center"`
	WindowWidth  *float64 `queryParam:"style=form,explode=true,name=window-width"`
}

type GetInstancesIDRenderedHeaders struct {
	Accept *string `header:"name=Accept"`
}

type GetInstancesIDRenderedRequest struct {
	PathParams  GetInstancesIDRenderedPathParams
	QueryParams GetInstancesIDRenderedQueryParams
	Headers     GetInstancesIDRenderedHeaders
}

type GetInstancesIDRenderedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
