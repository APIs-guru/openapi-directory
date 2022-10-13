package operations

type GetProjectCategoryListOfClientPathParams struct {
	ClientWorkgroupID string `pathParam:"style=simple,explode=false,name=client_workgroup_id"`
	WorkgroupID       string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetProjectCategoryListOfClientRequest struct {
	PathParams GetProjectCategoryListOfClientPathParams
}

type GetProjectCategoryListOfClientResponse struct {
	Body                  []byte
	ContentType           string
	HTTPStatusVo          *interface{}
	ProjectCategoryListVo *interface{}
	StatusCode            int64
}
