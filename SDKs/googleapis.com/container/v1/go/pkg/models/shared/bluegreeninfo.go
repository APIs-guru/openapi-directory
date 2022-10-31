package shared

type BlueGreenInfoPhaseEnum string

const (
	BlueGreenInfoPhaseEnumPhaseUnspecified  BlueGreenInfoPhaseEnum = "PHASE_UNSPECIFIED"
	BlueGreenInfoPhaseEnumUpdateStarted     BlueGreenInfoPhaseEnum = "UPDATE_STARTED"
	BlueGreenInfoPhaseEnumCreatingGreenPool BlueGreenInfoPhaseEnum = "CREATING_GREEN_POOL"
	BlueGreenInfoPhaseEnumCordoningBluePool BlueGreenInfoPhaseEnum = "CORDONING_BLUE_POOL"
	BlueGreenInfoPhaseEnumDrainingBluePool  BlueGreenInfoPhaseEnum = "DRAINING_BLUE_POOL"
	BlueGreenInfoPhaseEnumNodePoolSoaking   BlueGreenInfoPhaseEnum = "NODE_POOL_SOAKING"
	BlueGreenInfoPhaseEnumDeletingBluePool  BlueGreenInfoPhaseEnum = "DELETING_BLUE_POOL"
	BlueGreenInfoPhaseEnumRollbackStarted   BlueGreenInfoPhaseEnum = "ROLLBACK_STARTED"
)

type BlueGreenInfo struct {
	BlueInstanceGroupUrls     []string                `json:"blueInstanceGroupUrls,omitempty"`
	BluePoolDeletionStartTime *string                 `json:"bluePoolDeletionStartTime,omitempty"`
	GreenInstanceGroupUrls    []string                `json:"greenInstanceGroupUrls,omitempty"`
	GreenPoolVersion          *string                 `json:"greenPoolVersion,omitempty"`
	Phase                     *BlueGreenInfoPhaseEnum `json:"phase,omitempty"`
}
