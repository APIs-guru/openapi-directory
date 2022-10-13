package shared

import (
	"time"
)

type CircuitStatusLabelEnum string

const (
	CircuitStatusLabelEnumPlanned        CircuitStatusLabelEnum = "Planned"
	CircuitStatusLabelEnumProvisioning   CircuitStatusLabelEnum = "Provisioning"
	CircuitStatusLabelEnumActive         CircuitStatusLabelEnum = "Active"
	CircuitStatusLabelEnumOffline        CircuitStatusLabelEnum = "Offline"
	CircuitStatusLabelEnumDeprovisioning CircuitStatusLabelEnum = "Deprovisioning"
	CircuitStatusLabelEnumDecommissioned CircuitStatusLabelEnum = "Decommissioned"
)

type CircuitStatusValueEnum string

const (
	CircuitStatusValueEnumPlanned        CircuitStatusValueEnum = "planned"
	CircuitStatusValueEnumProvisioning   CircuitStatusValueEnum = "provisioning"
	CircuitStatusValueEnumActive         CircuitStatusValueEnum = "active"
	CircuitStatusValueEnumOffline        CircuitStatusValueEnum = "offline"
	CircuitStatusValueEnumDeprovisioning CircuitStatusValueEnum = "deprovisioning"
	CircuitStatusValueEnumDecommissioned CircuitStatusValueEnum = "decommissioned"
)

type CircuitStatusStatus struct {
	Label CircuitStatusLabelEnum `json:"label"`
	Value CircuitStatusValueEnum `json:"value"`
}

type Circuit struct {
	Cid          string                     `json:"cid"`
	Comments     *string                    `json:"comments"`
	CommitRate   *int64                     `json:"commit_rate"`
	Created      *time.Time                 `json:"created"`
	CustomFields map[string]interface{}     `json:"custom_fields"`
	Description  *string                    `json:"description"`
	ID           *int64                     `json:"id"`
	InstallDate  *time.Time                 `json:"install_date"`
	LastUpdated  *time.Time                 `json:"last_updated"`
	Provider     NestedProvider             `json:"provider"`
	Status       *CircuitStatusStatus       `json:"status"`
	Tags         []string                   `json:"tags"`
	Tenant       *NestedTenant              `json:"tenant"`
	TerminationA *CircuitCircuitTermination `json:"termination_a"`
	TerminationZ *CircuitCircuitTermination `json:"termination_z"`
	Type         NestedCircuitType          `json:"type"`
}
