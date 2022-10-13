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
	Address         *ResponseAddress  `json:"address"`
	ArrDateTime     *time.Time        `json:"arr_date_time"`
	ArrTime         *int64            `json:"arr_time"`
	Distance        *int64            `json:"distance"`
	DrivingTime     *int64            `json:"driving_time"`
	EndDateTime     *time.Time        `json:"end_date_time"`
	EndTime         *int64            `json:"end_time"`
	ID              *string           `json:"id"`
	LoadAfter       []int32           `json:"load_after"`
	LoadBefore      []int32           `json:"load_before"`
	LocationID      *string           `json:"location_id"`
	PreparationTime *int64            `json:"preparation_time"`
	Type            *ActivityTypeEnum `json:"type"`
	WaitingTime     *int64            `json:"waiting_time"`
}
