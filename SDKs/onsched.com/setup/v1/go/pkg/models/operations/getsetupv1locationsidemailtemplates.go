package operations

type GetSetupV1LocationsIDEmailTemplatesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1LocationsIDEmailTemplatesRequest struct {
	PathParams GetSetupV1LocationsIDEmailTemplatesPathParams
}

type GetSetupV1LocationsIDEmailTemplatesResponse struct {
	ContentType                string
	EmailTemplateListViewModel map[string]interface{}
	StatusCode                 int64
}
