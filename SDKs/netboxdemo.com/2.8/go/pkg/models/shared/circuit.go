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
	Comments     *string                    `json:"comments,omitempty"`
	CommitRate   *int64                     `json:"commit_rate,omitempty"`
	Created      *time.Time                 `json:"created,omitempty"`
	CustomFields map[string]interface{}     `json:"custom_fields,omitempty"`
	Description  *string                    `json:"description,omitempty"`
	ID           *int64                     `json:"id,omitempty"`
	InstallDate  *time.Time                 `json:"install_date,omitempty"`
	LastUpdated  *time.Time                 `json:"last_updated,omitempty"`
	Provider     NestedProvider             `json:"provider"`
	Status       *CircuitStatusStatus       `json:"status,omitempty"`
	Tags         []string                   `json:"tags,omitempty"`
	Tenant       *NestedTenant              `json:"tenant,omitempty"`
	TerminationA *CircuitCircuitTermination `json:"termination_a,omitempty"`
	TerminationZ *CircuitCircuitTermination `json:"termination_z,omitempty"`
	Type         NestedCircuitType          `json:"type"`
}
