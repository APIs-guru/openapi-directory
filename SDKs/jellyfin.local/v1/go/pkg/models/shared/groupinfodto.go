package shared

import (
	"time"
)

type GroupInfoDto struct {
	GroupID       *string             `json:"GroupId"`
	GroupName     *string             `json:"GroupName"`
	LastUpdatedAt *time.Time          `json:"LastUpdatedAt"`
	Participants  []string            `json:"Participants"`
	State         *GroupStateTypeEnum `json:"State"`
}
