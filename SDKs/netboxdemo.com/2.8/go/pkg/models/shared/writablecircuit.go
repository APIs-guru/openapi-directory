package shared

import (
	"time"
)

type WritableCircuitStatusEnum string

const (
	WritableCircuitStatusEnumPlanned        WritableCircuitStatusEnum = "planned"
	WritableCircuitStatusEnumProvisioning   WritableCircuitStatusEnum = "provisioning"
	WritableCircuitStatusEnumActive         WritableCircuitStatusEnum = "active"
	WritableCircuitStatusEnumOffline        WritableCircuitStatusEnum = "offline"
	WritableCircuitStatusEnumDeprovisioning WritableCircuitStatusEnum = "deprovisioning"
	WritableCircuitStatusEnumDecommissioned WritableCircuitStatusEnum = "decommissioned"
)

type WritableCircuit struct {
	Cid          string                     `json:"cid"`
	Comments     *string                    `json:"comments,omitempty"`
	CommitRate   *int64                     `json:"commit_rate,omitempty"`
	Created      *time.Time                 `json:"created,omitempty"`
	CustomFields map[string]interface{}     `json:"custom_fields,omitempty"`
	Description  *string                    `json:"description,omitempty"`
	ID           *int64                     `json:"id,omitempty"`
	InstallDate  *time.Time                 `json:"install_date,omitempty"`
	LastUpdated  *time.Time                 `json:"last_updated,omitempty"`
	Provider     int64                      `json:"provider"`
	Status       *WritableCircuitStatusEnum `json:"status,omitempty"`
	Tags         []string                   `json:"tags,omitempty"`
	Tenant       *int64                     `json:"tenant,omitempty"`
	TerminationA *string                    `json:"termination_a,omitempty"`
	TerminationZ *string                    `json:"termination_z,omitempty"`
	Type         int64                      `json:"type"`
}
