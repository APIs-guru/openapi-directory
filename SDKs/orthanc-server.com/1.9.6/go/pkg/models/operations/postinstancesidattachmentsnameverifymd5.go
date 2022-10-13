package operations

type PostInstancesIDAttachmentsNameVerifyMd5PathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PostInstancesIDAttachmentsNameVerifyMd5Request struct {
	PathParams PostInstancesIDAttachmentsNameVerifyMd5PathParams
}

type PostInstancesIDAttachmentsNameVerifyMd5Response struct {
	ContentType                                                  string
	PostInstancesIDAttachmentsNameVerifyMd5200ApplicationJSONAny *interface{}
	StatusCode                                                   int64
}
