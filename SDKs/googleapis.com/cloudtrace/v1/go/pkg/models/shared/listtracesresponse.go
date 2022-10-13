package shared

type ListTracesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Traces        []Trace `json:"traces"`
}
