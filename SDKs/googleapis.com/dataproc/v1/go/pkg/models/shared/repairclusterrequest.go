package shared

type RepairClusterRequest struct {
	ClusterUUID                 *string    `json:"clusterUuid,omitempty"`
	GracefulDecommissionTimeout *string    `json:"gracefulDecommissionTimeout,omitempty"`
	NodePools                   []NodePool `json:"nodePools,omitempty"`
	ParentOperationID           *string    `json:"parentOperationId,omitempty"`
	RequestID                   *string    `json:"requestId,omitempty"`
}
