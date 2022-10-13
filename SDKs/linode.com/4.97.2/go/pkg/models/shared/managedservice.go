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

type ManagedService struct {
	Address           *string                        `json:"address"`
	Body              *string                        `json:"body"`
	ConsultationGroup *string                        `json:"consultation_group"`
	Created           *time.Time                     `json:"created"`
	Credentials       []int64                        `json:"credentials"`
	ID                *int64                         `json:"id"`
	Label             *string                        `json:"label"`
	Notes             *string                        `json:"notes"`
	Region            *string                        `json:"region"`
	ServiceType       *ManagedServiceServiceTypeEnum `json:"service_type"`
	Status            *ManagedServiceStatusEnum      `json:"status"`
	Timeout           *int64                         `json:"timeout"`
	Updated           *time.Time                     `json:"updated"`
}
