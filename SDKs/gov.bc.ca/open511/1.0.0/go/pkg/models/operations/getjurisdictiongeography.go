package operations

type GetJurisdictiongeographyFormatEnum string

const (
	GetJurisdictiongeographyFormatEnumJSON GetJurisdictiongeographyFormatEnum = "json"
	GetJurisdictiongeographyFormatEnumXML  GetJurisdictiongeographyFormatEnum = "xml"
)

type GetJurisdictiongeographyQueryParams struct {
	Format *GetJurisdictiongeographyFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetJurisdictiongeographyRequest struct {
	QueryParams GetJurisdictiongeographyQueryParams
}

type GetJurisdictiongeographyResponse struct {
	ContentType string
	StatusCode  int64
}
