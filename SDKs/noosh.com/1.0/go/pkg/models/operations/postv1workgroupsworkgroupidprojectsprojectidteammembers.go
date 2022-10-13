package operations

type PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRequests struct {
	ApplicationXML   []byte       `request:"mediaType=application/xml"`
	ApplicationXYaml []byte       `request:"mediaType=application/x-yaml"`
	ContactUserVo    *interface{} `request:"mediaType=application/json"`
	ContactUserVo1   *interface{} `request:"mediaType=application/x-json-smile"`
	TextCsv          []byte       `request:"mediaType=text/csv"`
	TextXML          []byte       `request:"mediaType=text/xml"`
	TextXYaml        []byte       `request:"mediaType=text/x-yaml"`
}

type PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRequest struct {
	PathParams PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersPathParams
	Request    *PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRequests
}

type PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersResponse struct {
	Body                []byte
	ContentType         string
	HTTPStatusVo        *interface{}
	StatusCode          int64
	TeamMemberBaseInfVo *interface{}
}
