package shared

type Sponsor struct {
	Member       *Member       `json:"member"`
	Organisation *Organisation `json:"organisation"`
	SortOrder    *int32        `json:"sortOrder"`
}
