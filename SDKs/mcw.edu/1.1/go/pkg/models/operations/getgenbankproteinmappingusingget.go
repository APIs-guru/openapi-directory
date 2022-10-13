package operations

type GetGenBankProteinMappingUsingGetPathParams struct {
	RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
}

type GetGenBankProteinMappingUsingGetRequest struct {
	PathParams GetGenBankProteinMappingUsingGetPathParams
}

type GetGenBankProteinMappingUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
