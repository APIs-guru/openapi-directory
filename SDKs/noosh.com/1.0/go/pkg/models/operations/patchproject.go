package operations

type PatchProjectPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PatchProjectRequests struct {
	ApplicationXML   []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml []byte       `request:"mediaType=application/x-yaml"`
	ProjectPatchPo   *interface{} `request:"mediaType=application/json"`
	ProjectPatchPo1  *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv          []byte       `request:"mediaType=text/csv"`
	TextXML          []byte       `request:"mediaType=text/xml"`
	TextXYaml        []byte       `request:"mediaType=text/x-yaml"`
}

type PatchProjectRequest struct {
	PathParams PatchProjectPathParams
	Request    *PatchProjectRequests
}

type PatchProjectResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVo *interface{}
	StatusCode   int64
}
