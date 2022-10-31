package operations

type GetPatientsIDArchivePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPatientsIDArchiveQueryParams struct {
	Transcode *string `queryParam:"style=form,explode=true,name=transcode"`
}

type GetPatientsIDArchiveRequest struct {
	PathParams  GetPatientsIDArchivePathParams
	QueryParams GetPatientsIDArchiveQueryParams
}

type GetPatientsIDArchiveResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
