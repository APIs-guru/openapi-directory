package operations

type GetVariantsForTaxonUsingGetPathParams struct {
	TaxonID string `pathParam:"style=simple,explode=false,name=taxonId"`
}

type GetVariantsForTaxonUsingGetRequest struct {
	PathParams GetVariantsForTaxonUsingGetPathParams
}

type GetVariantsForTaxonUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
