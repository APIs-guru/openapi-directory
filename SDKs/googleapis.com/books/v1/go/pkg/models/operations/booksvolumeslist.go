package operations

import (
	"openapi/pkg/models/shared"
)

type BooksVolumesListDownloadEnum string

const (
	BooksVolumesListDownloadEnumDownloadUndefined BooksVolumesListDownloadEnum = "DOWNLOAD_UNDEFINED"
	BooksVolumesListDownloadEnumEpub              BooksVolumesListDownloadEnum = "EPUB"
)

type BooksVolumesListFilterEnum string

const (
	BooksVolumesListFilterEnumFilterUndefined BooksVolumesListFilterEnum = "FILTER_UNDEFINED"
	BooksVolumesListFilterEnumEbooks          BooksVolumesListFilterEnum = "ebooks"
	BooksVolumesListFilterEnumFreeEbooks      BooksVolumesListFilterEnum = "free-ebooks"
	BooksVolumesListFilterEnumFull            BooksVolumesListFilterEnum = "full"
	BooksVolumesListFilterEnumPaidEbooks      BooksVolumesListFilterEnum = "paid-ebooks"
	BooksVolumesListFilterEnumPartial         BooksVolumesListFilterEnum = "partial"
)

type BooksVolumesListLibraryRestrictEnum string

const (
	BooksVolumesListLibraryRestrictEnumLibraryRestrictUndefined BooksVolumesListLibraryRestrictEnum = "LIBRARY_RESTRICT_UNDEFINED"
	BooksVolumesListLibraryRestrictEnumMyLibrary                BooksVolumesListLibraryRestrictEnum = "my-library"
	BooksVolumesListLibraryRestrictEnumNoRestrict               BooksVolumesListLibraryRestrictEnum = "no-restrict"
)

type BooksVolumesListMaxAllowedMaturityRatingEnum string

const (
	BooksVolumesListMaxAllowedMaturityRatingEnumMaxAllowedMaturityRatingUndefined BooksVolumesListMaxAllowedMaturityRatingEnum = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
	BooksVolumesListMaxAllowedMaturityRatingEnumMature                            BooksVolumesListMaxAllowedMaturityRatingEnum = "MATURE"
	BooksVolumesListMaxAllowedMaturityRatingEnumNotMature                         BooksVolumesListMaxAllowedMaturityRatingEnum = "not-mature"
)

type BooksVolumesListOrderByEnum string

const (
	BooksVolumesListOrderByEnumOrderByUndefined BooksVolumesListOrderByEnum = "ORDER_BY_UNDEFINED"
	BooksVolumesListOrderByEnumNewest           BooksVolumesListOrderByEnum = "newest"
	BooksVolumesListOrderByEnumRelevance        BooksVolumesListOrderByEnum = "relevance"
)

type BooksVolumesListPrintTypeEnum string

const (
	BooksVolumesListPrintTypeEnumPrintTypeUndefined BooksVolumesListPrintTypeEnum = "PRINT_TYPE_UNDEFINED"
	BooksVolumesListPrintTypeEnumAll                BooksVolumesListPrintTypeEnum = "ALL"
	BooksVolumesListPrintTypeEnumBooks              BooksVolumesListPrintTypeEnum = "BOOKS"
	BooksVolumesListPrintTypeEnumMagazines          BooksVolumesListPrintTypeEnum = "MAGAZINES"
)

type BooksVolumesListProjectionEnum string

const (
	BooksVolumesListProjectionEnumProjectionUndefined BooksVolumesListProjectionEnum = "PROJECTION_UNDEFINED"
	BooksVolumesListProjectionEnumFull                BooksVolumesListProjectionEnum = "FULL"
	BooksVolumesListProjectionEnumLite                BooksVolumesListProjectionEnum = "LITE"
)

type BooksVolumesListQueryParams struct {
	DollarXgafv              *shared.XgafvEnum                             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken              *string                                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt                      *shared.AltEnum                               `queryParam:"style=form,explode=true,name=alt"`
	Callback                 *string                                       `queryParam:"style=form,explode=true,name=callback"`
	Download                 *BooksVolumesListDownloadEnum                 `queryParam:"style=form,explode=true,name=download"`
	Fields                   *string                                       `queryParam:"style=form,explode=true,name=fields"`
	Filter                   *BooksVolumesListFilterEnum                   `queryParam:"style=form,explode=true,name=filter"`
	Key                      *string                                       `queryParam:"style=form,explode=true,name=key"`
	LangRestrict             *string                                       `queryParam:"style=form,explode=true,name=langRestrict"`
	LibraryRestrict          *BooksVolumesListLibraryRestrictEnum          `queryParam:"style=form,explode=true,name=libraryRestrict"`
	MaxAllowedMaturityRating *BooksVolumesListMaxAllowedMaturityRatingEnum `queryParam:"style=form,explode=true,name=maxAllowedMaturityRating"`
	MaxResults               *int64                                        `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken               *string                                       `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy                  *BooksVolumesListOrderByEnum                  `queryParam:"style=form,explode=true,name=orderBy"`
	Partner                  *string                                       `queryParam:"style=form,explode=true,name=partner"`
	PrettyPrint              *bool                                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	PrintType                *BooksVolumesListPrintTypeEnum                `queryParam:"style=form,explode=true,name=printType"`
	Projection               *BooksVolumesListProjectionEnum               `queryParam:"style=form,explode=true,name=projection"`
	Q                        string                                        `queryParam:"style=form,explode=true,name=q"`
	QuotaUser                *string                                       `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowPreorders            *bool                                         `queryParam:"style=form,explode=true,name=showPreorders"`
	Source                   *string                                       `queryParam:"style=form,explode=true,name=source"`
	StartIndex               *int64                                        `queryParam:"style=form,explode=true,name=startIndex"`
	UploadType               *string                                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol           *string                                       `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksVolumesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksVolumesListRequest struct {
	QueryParams BooksVolumesListQueryParams
	Security    BooksVolumesListSecurity
}

type BooksVolumesListResponse struct {
	ContentType string
	StatusCode  int64
	Volumes     *shared.Volumes
}
