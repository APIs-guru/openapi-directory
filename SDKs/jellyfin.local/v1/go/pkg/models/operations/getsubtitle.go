package operations

type GetSubtitlePathParams struct {
	Format        string `pathParam:"style=simple,explode=false,name=format"`
	Index         int32  `pathParam:"style=simple,explode=false,name=index"`
	ItemID        string `pathParam:"style=simple,explode=false,name=itemId"`
	MediaSourceID string `pathParam:"style=simple,explode=false,name=mediaSourceId"`
}

type GetSubtitleQueryParams struct {
	AddVttTimeMap      *bool  `queryParam:"style=form,explode=true,name=addVttTimeMap"`
	CopyTimestamps     *bool  `queryParam:"style=form,explode=true,name=copyTimestamps"`
	EndPositionTicks   *int64 `queryParam:"style=form,explode=true,name=endPositionTicks"`
	StartPositionTicks *int64 `queryParam:"style=form,explode=true,name=startPositionTicks"`
}

type GetSubtitleRequest struct {
	PathParams  GetSubtitlePathParams
	QueryParams GetSubtitleQueryParams
}

type GetSubtitleResponse struct {
	ContentType                            string
	GetSubtitle200TextWildcardBinaryString []byte
	StatusCode                             int64
}
