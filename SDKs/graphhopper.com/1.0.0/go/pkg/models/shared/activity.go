package shared

import (
	"time"
)

type ActivityTypeEnum string

const (
	ActivityTypeEnumStart           ActivityTypeEnum = "start"
	ActivityTypeEnumEnd             ActivityTypeEnum = "end"
	ActivityTypeEnumService         ActivityTypeEnum = "service"
	ActivityTypeEnumPickupShipment  ActivityTypeEnum = "pickupShipment"
	ActivityTypeEnumDeliverShipment ActivityTypeEnum = "deliverShipment"
	ActivityTypeEnumPickup          ActivityTypeEnum = "pickup"
	ActivityTypeEnumDelivery        ActivityTypeEnum = "delivery"
	ActivityTypeEnumBreak           ActivityTypeEnum = "break"
)

type Activity struct {
	Address         *ResponseAddress  `json:"address,omitempty"`
	ArrDateTime     *time.Time        `json:"arr_date_time,omitempty"`
	ArrTime         *int64            `json:"arr_time,omitempty"`
	Distance        *int64            `json:"distance,omitempty"`
	DrivingTime     *int64            `json:"driving_time,omitempty"`
	EndDateTime     *time.Time        `json:"end_date_time,omitempty"`
	EndTime         *int64            `json:"end_time,omitempty"`
	ID              *string           `json:"id,omitempty"`
	LoadAfter       []int32           `json:"load_after,omitempty"`
	LoadBefore      []int32           `json:"load_before,omitempty"`
	LocationID      *string           `json:"location_id,omitempty"`
	PreparationTime *int64            `json:"preparation_time,omitempty"`
	Type            *ActivityTypeEnum `json:"type,omitempty"`
	WaitingTime     *int64            `json:"waiting_time,omitempty"`
}
