package operations

import (
	"openapi/pkg/models/shared"
)

type SearchCseListImgColorTypeEnum string

const (
	SearchCseListImgColorTypeEnumImgColorTypeUndefined SearchCseListImgColorTypeEnum = "imgColorTypeUndefined"
	SearchCseListImgColorTypeEnumMono                  SearchCseListImgColorTypeEnum = "mono"
	SearchCseListImgColorTypeEnumGray                  SearchCseListImgColorTypeEnum = "gray"
	SearchCseListImgColorTypeEnumColor                 SearchCseListImgColorTypeEnum = "color"
	SearchCseListImgColorTypeEnumTrans                 SearchCseListImgColorTypeEnum = "trans"
)

type SearchCseListImgDominantColorEnum string

const (
	SearchCseListImgDominantColorEnumImgDominantColorUndefined SearchCseListImgDominantColorEnum = "imgDominantColorUndefined"
	SearchCseListImgDominantColorEnumBlack                     SearchCseListImgDominantColorEnum = "black"
	SearchCseListImgDominantColorEnumBlue                      SearchCseListImgDominantColorEnum = "blue"
	SearchCseListImgDominantColorEnumBrown                     SearchCseListImgDominantColorEnum = "brown"
	SearchCseListImgDominantColorEnumGray                      SearchCseListImgDominantColorEnum = "gray"
	SearchCseListImgDominantColorEnumGreen                     SearchCseListImgDominantColorEnum = "green"
	SearchCseListImgDominantColorEnumOrange                    SearchCseListImgDominantColorEnum = "orange"
	SearchCseListImgDominantColorEnumPink                      SearchCseListImgDominantColorEnum = "pink"
	SearchCseListImgDominantColorEnumPurple                    SearchCseListImgDominantColorEnum = "purple"
	SearchCseListImgDominantColorEnumRed                       SearchCseListImgDominantColorEnum = "red"
	SearchCseListImgDominantColorEnumTeal                      SearchCseListImgDominantColorEnum = "teal"
	SearchCseListImgDominantColorEnumWhite                     SearchCseListImgDominantColorEnum = "white"
	SearchCseListImgDominantColorEnumYellow                    SearchCseListImgDominantColorEnum = "yellow"
)

type SearchCseListImgSizeEnum string

const (
	SearchCseListImgSizeEnumImgSizeUndefined SearchCseListImgSizeEnum = "imgSizeUndefined"
	SearchCseListImgSizeEnumHuge             SearchCseListImgSizeEnum = "HUGE"
	SearchCseListImgSizeEnumIcon             SearchCseListImgSizeEnum = "ICON"
	SearchCseListImgSizeEnumLarge            SearchCseListImgSizeEnum = "LARGE"
	SearchCseListImgSizeEnumMedium           SearchCseListImgSizeEnum = "MEDIUM"
	SearchCseListImgSizeEnumSmall            SearchCseListImgSizeEnum = "SMALL"
	SearchCseListImgSizeEnumXlarge           SearchCseListImgSizeEnum = "XLARGE"
	SearchCseListImgSizeEnumXxlarge          SearchCseListImgSizeEnum = "XXLARGE"
)

type SearchCseListImgTypeEnum string

const (
	SearchCseListImgTypeEnumImgTypeUndefined SearchCseListImgTypeEnum = "imgTypeUndefined"
	SearchCseListImgTypeEnumClipart          SearchCseListImgTypeEnum = "clipart"
	SearchCseListImgTypeEnumFace             SearchCseListImgTypeEnum = "face"
	SearchCseListImgTypeEnumLineart          SearchCseListImgTypeEnum = "lineart"
	SearchCseListImgTypeEnumStock            SearchCseListImgTypeEnum = "stock"
	SearchCseListImgTypeEnumPhoto            SearchCseListImgTypeEnum = "photo"
	SearchCseListImgTypeEnumAnimated         SearchCseListImgTypeEnum = "animated"
)

type SearchCseListSafeEnum string

const (
	SearchCseListSafeEnumSafeUndefined SearchCseListSafeEnum = "safeUndefined"
	SearchCseListSafeEnumActive        SearchCseListSafeEnum = "active"
	SearchCseListSafeEnumHigh          SearchCseListSafeEnum = "high"
	SearchCseListSafeEnumMedium        SearchCseListSafeEnum = "medium"
	SearchCseListSafeEnumOff           SearchCseListSafeEnum = "off"
)

type SearchCseListSearchTypeEnum string

const (
	SearchCseListSearchTypeEnumSearchTypeUndefined SearchCseListSearchTypeEnum = "searchTypeUndefined"
	SearchCseListSearchTypeEnumImage               SearchCseListSearchTypeEnum = "image"
)

type SearchCseListSiteSearchFilterEnum string

const (
	SearchCseListSiteSearchFilterEnumSiteSearchFilterUndefined SearchCseListSiteSearchFilterEnum = "siteSearchFilterUndefined"
	SearchCseListSiteSearchFilterEnumE                         SearchCseListSiteSearchFilterEnum = "e"
	SearchCseListSiteSearchFilterEnumI                         SearchCseListSiteSearchFilterEnum = "i"
)

type SearchCseListQueryParams struct {
	DollarXgafv      *shared.XgafvEnum                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum                    `queryParam:"style=form,explode=true,name=alt"`
	C2coff           *string                            `queryParam:"style=form,explode=true,name=c2coff"`
	Callback         *string                            `queryParam:"style=form,explode=true,name=callback"`
	Cr               *string                            `queryParam:"style=form,explode=true,name=cr"`
	Cx               *string                            `queryParam:"style=form,explode=true,name=cx"`
	DateRestrict     *string                            `queryParam:"style=form,explode=true,name=dateRestrict"`
	ExactTerms       *string                            `queryParam:"style=form,explode=true,name=exactTerms"`
	ExcludeTerms     *string                            `queryParam:"style=form,explode=true,name=excludeTerms"`
	Fields           *string                            `queryParam:"style=form,explode=true,name=fields"`
	FileType         *string                            `queryParam:"style=form,explode=true,name=fileType"`
	Filter           *string                            `queryParam:"style=form,explode=true,name=filter"`
	Gl               *string                            `queryParam:"style=form,explode=true,name=gl"`
	Googlehost       *string                            `queryParam:"style=form,explode=true,name=googlehost"`
	HighRange        *string                            `queryParam:"style=form,explode=true,name=highRange"`
	Hl               *string                            `queryParam:"style=form,explode=true,name=hl"`
	Hq               *string                            `queryParam:"style=form,explode=true,name=hq"`
	ImgColorType     *SearchCseListImgColorTypeEnum     `queryParam:"style=form,explode=true,name=imgColorType"`
	ImgDominantColor *SearchCseListImgDominantColorEnum `queryParam:"style=form,explode=true,name=imgDominantColor"`
	ImgSize          *SearchCseListImgSizeEnum          `queryParam:"style=form,explode=true,name=imgSize"`
	ImgType          *SearchCseListImgTypeEnum          `queryParam:"style=form,explode=true,name=imgType"`
	Key              *string                            `queryParam:"style=form,explode=true,name=key"`
	LinkSite         *string                            `queryParam:"style=form,explode=true,name=linkSite"`
	LowRange         *string                            `queryParam:"style=form,explode=true,name=lowRange"`
	Lr               *string                            `queryParam:"style=form,explode=true,name=lr"`
	Num              *int64                             `queryParam:"style=form,explode=true,name=num"`
	OauthToken       *string                            `queryParam:"style=form,explode=true,name=oauth_token"`
	OrTerms          *string                            `queryParam:"style=form,explode=true,name=orTerms"`
	PrettyPrint      *bool                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	Q                *string                            `queryParam:"style=form,explode=true,name=q"`
	QuotaUser        *string                            `queryParam:"style=form,explode=true,name=quotaUser"`
	RelatedSite      *string                            `queryParam:"style=form,explode=true,name=relatedSite"`
	Rights           *string                            `queryParam:"style=form,explode=true,name=rights"`
	Safe             *SearchCseListSafeEnum             `queryParam:"style=form,explode=true,name=safe"`
	SearchType       *SearchCseListSearchTypeEnum       `queryParam:"style=form,explode=true,name=searchType"`
	SiteSearch       *string                            `queryParam:"style=form,explode=true,name=siteSearch"`
	SiteSearchFilter *SearchCseListSiteSearchFilterEnum `queryParam:"style=form,explode=true,name=siteSearchFilter"`
	Sort             *string                            `queryParam:"style=form,explode=true,name=sort"`
	Start            *int64                             `queryParam:"style=form,explode=true,name=start"`
	UploadType       *string                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string                            `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type SearchCseListRequest struct {
	QueryParams SearchCseListQueryParams
}

type SearchCseListResponse struct {
	ContentType string
	Search      *shared.Search
	StatusCode  int64
}
