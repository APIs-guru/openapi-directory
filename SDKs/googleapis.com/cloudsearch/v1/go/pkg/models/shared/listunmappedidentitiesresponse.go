package shared

type ListUnmappedIdentitiesResponse struct {
	NextPageToken      *string            `json:"nextPageToken"`
	UnmappedIdentities []UnmappedIdentity `json:"unmappedIdentities"`
}
