package shared

import (
	"time"
)

type ManagedServiceServiceTypeEnum string

const (
	ManagedServiceServiceTypeEnumURL ManagedServiceServiceTypeEnum = "url"
	ManagedServiceServiceTypeEnumTCP ManagedServiceServiceTypeEnum = "tcp"
)

type ManagedServiceStatusEnum string

const (
	ManagedServiceStatusEnumDisabled ManagedServiceStatusEnum = "disabled"
	ManagedServiceStatusEnumPending  ManagedServiceStatusEnum = "pending"
	ManagedServiceStatusEnumOk       ManagedServiceStatusEnum = "ok"
	ManagedServiceStatusEnumProblem  ManagedServiceStatusEnum = "problem"
)

// ManagedServiceInput
// A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
type ManagedServiceInput struct {
	Address           *string                        `json:"address,omitempty"`
	Body              *string                        `json:"body,omitempty"`
	ConsultationGroup *string                        `json:"consultation_group,omitempty"`
	Credentials       []int64                        `json:"credentials,omitempty"`
	Label             *string                        `json:"label,omitempty"`
	Notes             *string                        `json:"notes,omitempty"`
	Region            *string                        `json:"region,omitempty"`
	ServiceType       *ManagedServiceServiceTypeEnum `json:"service_type,omitempty"`
	Timeout           *int64                         `json:"timeout,omitempty"`
}

// ManagedService
// A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
type ManagedService struct {
	Address           *string                        `json:"address,omitempty"`
	Body              *string                        `json:"body,omitempty"`
	ConsultationGroup *string                        `json:"consultation_group,omitempty"`
	Created           *time.Time                     `json:"created,omitempty"`
	Credentials       []int64                        `json:"credentials,omitempty"`
	ID                *int64                         `json:"id,omitempty"`
	Label             *string                        `json:"label,omitempty"`
	Notes             *string                        `json:"notes,omitempty"`
	Region            *string                        `json:"region,omitempty"`
	ServiceType       *ManagedServiceServiceTypeEnum `json:"service_type,omitempty"`
	Status            *ManagedServiceStatusEnum      `json:"status,omitempty"`
	Timeout           *int64                         `json:"timeout,omitempty"`
	Updated           *time.Time                     `json:"updated,omitempty"`
}
