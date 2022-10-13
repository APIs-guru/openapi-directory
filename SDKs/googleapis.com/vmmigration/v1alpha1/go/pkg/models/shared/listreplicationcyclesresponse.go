package shared

type ListReplicationCyclesResponse struct {
	NextPageToken     *string            `json:"nextPageToken"`
	ReplicationCycles []ReplicationCycle `json:"replicationCycles"`
	Unreachable       []string           `json:"unreachable"`
}
