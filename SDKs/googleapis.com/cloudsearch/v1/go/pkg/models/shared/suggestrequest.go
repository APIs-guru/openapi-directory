package shared

type SuggestRequest struct {
	DataSourceRestrictions []DataSourceRestriction `json:"dataSourceRestrictions"`
	Query                  *string                 `json:"query"`
	RequestOptions         *RequestOptions         `json:"requestOptions"`
}
