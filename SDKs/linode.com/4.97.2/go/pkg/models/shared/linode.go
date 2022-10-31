package shared

import (
	"time"
)

type LinodeAlerts struct {
	CPU           *int64 `json:"cpu,omitempty"`
	Io            *int64 `json:"io,omitempty"`
	NetworkIn     *int64 `json:"network_in,omitempty"`
	NetworkOut    *int64 `json:"network_out,omitempty"`
	TransferQuota *int64 `json:"transfer_quota,omitempty"`
}

type LinodeBackupsScheduleDayEnum string

const (
	LinodeBackupsScheduleDayEnumScheduling LinodeBackupsScheduleDayEnum = "Scheduling"
	LinodeBackupsScheduleDayEnumSunday     LinodeBackupsScheduleDayEnum = "Sunday"
	LinodeBackupsScheduleDayEnumMonday     LinodeBackupsScheduleDayEnum = "Monday"
	LinodeBackupsScheduleDayEnumTuesday    LinodeBackupsScheduleDayEnum = "Tuesday"
	LinodeBackupsScheduleDayEnumWednesday  LinodeBackupsScheduleDayEnum = "Wednesday"
	LinodeBackupsScheduleDayEnumThursday   LinodeBackupsScheduleDayEnum = "Thursday"
	LinodeBackupsScheduleDayEnumFriday     LinodeBackupsScheduleDayEnum = "Friday"
	LinodeBackupsScheduleDayEnumSaturday   LinodeBackupsScheduleDayEnum = "Saturday"
)

type LinodeBackupsScheduleWindowEnum string

const (
	LinodeBackupsScheduleWindowEnumScheduling LinodeBackupsScheduleWindowEnum = "Scheduling"
	LinodeBackupsScheduleWindowEnumW0         LinodeBackupsScheduleWindowEnum = "W0"
	LinodeBackupsScheduleWindowEnumW2         LinodeBackupsScheduleWindowEnum = "W2"
	LinodeBackupsScheduleWindowEnumW4         LinodeBackupsScheduleWindowEnum = "W4"
	LinodeBackupsScheduleWindowEnumW6         LinodeBackupsScheduleWindowEnum = "W6"
	LinodeBackupsScheduleWindowEnumW8         LinodeBackupsScheduleWindowEnum = "W8"
	LinodeBackupsScheduleWindowEnumW10        LinodeBackupsScheduleWindowEnum = "W10"
	LinodeBackupsScheduleWindowEnumW12        LinodeBackupsScheduleWindowEnum = "W12"
	LinodeBackupsScheduleWindowEnumW14        LinodeBackupsScheduleWindowEnum = "W14"
	LinodeBackupsScheduleWindowEnumW16        LinodeBackupsScheduleWindowEnum = "W16"
	LinodeBackupsScheduleWindowEnumW18        LinodeBackupsScheduleWindowEnum = "W18"
	LinodeBackupsScheduleWindowEnumW20        LinodeBackupsScheduleWindowEnum = "W20"
	LinodeBackupsScheduleWindowEnumW22        LinodeBackupsScheduleWindowEnum = "W22"
)

type LinodeBackupsSchedule struct {
	Day    *LinodeBackupsScheduleDayEnum    `json:"day,omitempty"`
	Window *LinodeBackupsScheduleWindowEnum `json:"window,omitempty"`
}

type LinodeBackups struct {
	Enabled        *bool                  `json:"enabled,omitempty"`
	LastSuccessful *time.Time             `json:"last_successful,omitempty"`
	Schedule       *LinodeBackupsSchedule `json:"schedule,omitempty"`
}

type LinodeHypervisorEnum string

const (
	LinodeHypervisorEnumKvm LinodeHypervisorEnum = "kvm"
)

type LinodeSpecs struct {
	Disk     *int64 `json:"disk,omitempty"`
	Memory   *int64 `json:"memory,omitempty"`
	Transfer *int64 `json:"transfer,omitempty"`
	Vcpus    *int64 `json:"vcpus,omitempty"`
}

type LinodeStatusEnum string

const (
	LinodeStatusEnumRunning      LinodeStatusEnum = "running"
	LinodeStatusEnumOffline      LinodeStatusEnum = "offline"
	LinodeStatusEnumBooting      LinodeStatusEnum = "booting"
	LinodeStatusEnumRebooting    LinodeStatusEnum = "rebooting"
	LinodeStatusEnumShuttingDown LinodeStatusEnum = "shutting_down"
	LinodeStatusEnumProvisioning LinodeStatusEnum = "provisioning"
	LinodeStatusEnumDeleting     LinodeStatusEnum = "deleting"
	LinodeStatusEnumMigrating    LinodeStatusEnum = "migrating"
	LinodeStatusEnumRebuilding   LinodeStatusEnum = "rebuilding"
	LinodeStatusEnumCloning      LinodeStatusEnum = "cloning"
	LinodeStatusEnumRestoring    LinodeStatusEnum = "restoring"
	LinodeStatusEnumStopped      LinodeStatusEnum = "stopped"
)

type Linode struct {
	Alerts          *LinodeAlerts          `json:"alerts,omitempty"`
	Backups         *LinodeBackups         `json:"backups,omitempty"`
	Created         *time.Time             `json:"created,omitempty"`
	Group           *string                `json:"group,omitempty"`
	Hypervisor      *LinodeHypervisorEnum  `json:"hypervisor,omitempty"`
	ID              *int64                 `json:"id,omitempty"`
	Image           map[string]interface{} `json:"image,omitempty"`
	Ipv4            []string               `json:"ipv4,omitempty"`
	Ipv6            *string                `json:"ipv6,omitempty"`
	Label           *string                `json:"label,omitempty"`
	Region          *string                `json:"region,omitempty"`
	Specs           *LinodeSpecs           `json:"specs,omitempty"`
	Status          *LinodeStatusEnum      `json:"status,omitempty"`
	Tags            []string               `json:"tags,omitempty"`
	Type            *string                `json:"type,omitempty"`
	Updated         *time.Time             `json:"updated,omitempty"`
	WatchdogEnabled *bool                  `json:"watchdog_enabled,omitempty"`
}
