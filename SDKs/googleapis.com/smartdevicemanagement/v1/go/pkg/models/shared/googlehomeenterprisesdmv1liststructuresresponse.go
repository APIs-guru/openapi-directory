package shared

type GoogleHomeEnterpriseSdmV1ListStructuresResponse struct {
	NextPageToken *string                              `json:"nextPageToken"`
	Structures    []GoogleHomeEnterpriseSdmV1Structure `json:"structures"`
}
