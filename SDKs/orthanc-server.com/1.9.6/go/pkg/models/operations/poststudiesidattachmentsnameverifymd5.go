package operations

type PostStudiesIDAttachmentsNameVerifyMd5PathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PostStudiesIDAttachmentsNameVerifyMd5Request struct {
	PathParams PostStudiesIDAttachmentsNameVerifyMd5PathParams
}

type PostStudiesIDAttachmentsNameVerifyMd5Response struct {
	ContentType                                                string
	PostStudiesIDAttachmentsNameVerifyMd5200ApplicationJSONAny *interface{}
	StatusCode                                                 int64
}
