package shared

import (
	"time"
)

type LinodeAlerts struct {
	CPU           *int64 `json:"cpu"`
	Io            *int64 `json:"io"`
	NetworkIn     *int64 `json:"network_in"`
	NetworkOut    *int64 `json:"network_out"`
	TransferQuota *int64 `json:"transfer_quota"`
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
	Day    *LinodeBackupsScheduleDayEnum    `json:"day"`
	Window *LinodeBackupsScheduleWindowEnum `json:"window"`
}

type LinodeBackups struct {
	Enabled        *bool                  `json:"enabled"`
	LastSuccessful *time.Time             `json:"last_successful"`
	Schedule       *LinodeBackupsSchedule `json:"schedule"`
}

type LinodeHypervisorEnum string

const (
	LinodeHypervisorEnumKvm LinodeHypervisorEnum = "kvm"
)

type LinodeSpecs struct {
	Disk     *int64 `json:"disk"`
	Memory   *int64 `json:"memory"`
	Transfer *int64 `json:"transfer"`
	Vcpus    *int64 `json:"vcpus"`
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
	Alerts          *LinodeAlerts          `json:"alerts"`
	Backups         *LinodeBackups         `json:"backups"`
	Created         *time.Time             `json:"created"`
	Group           *string                `json:"group"`
	Hypervisor      *LinodeHypervisorEnum  `json:"hypervisor"`
	ID              *int64                 `json:"id"`
	Image           map[string]interface{} `json:"image"`
	Ipv4            []string               `json:"ipv4"`
	Ipv6            *string                `json:"ipv6"`
	Label           *string                `json:"label"`
	Region          *string                `json:"region"`
	Specs           *LinodeSpecs           `json:"specs"`
	Status          *LinodeStatusEnum      `json:"status"`
	Tags            []string               `json:"tags"`
	Type            *string                `json:"type"`
	Updated         *time.Time             `json:"updated"`
	WatchdogEnabled *bool                  `json:"watchdog_enabled"`
}
