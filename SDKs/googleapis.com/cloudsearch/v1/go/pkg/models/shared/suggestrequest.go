package shared

type SuggestRequest struct {
	DataSourceRestrictions []DataSourceRestriction `json:"dataSourceRestrictions,omitempty"`
	Query                  *string                 `json:"query,omitempty"`
	RequestOptions         *RequestOptions         `json:"requestOptions,omitempty"`
}
