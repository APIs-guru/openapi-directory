package shared

type RepairClusterRequest struct {
	ClusterUUID                 *string    `json:"clusterUuid"`
	GracefulDecommissionTimeout *string    `json:"gracefulDecommissionTimeout"`
	NodePools                   []NodePool `json:"nodePools"`
	ParentOperationID           *string    `json:"parentOperationId"`
	RequestID                   *string    `json:"requestId"`
}
