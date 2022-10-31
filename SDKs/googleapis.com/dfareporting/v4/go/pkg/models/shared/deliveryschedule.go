package shared

type DeliverySchedulePriorityEnum string

const (
	DeliverySchedulePriorityEnumAdPriority01 DeliverySchedulePriorityEnum = "AD_PRIORITY_01"
	DeliverySchedulePriorityEnumAdPriority02 DeliverySchedulePriorityEnum = "AD_PRIORITY_02"
	DeliverySchedulePriorityEnumAdPriority03 DeliverySchedulePriorityEnum = "AD_PRIORITY_03"
	DeliverySchedulePriorityEnumAdPriority04 DeliverySchedulePriorityEnum = "AD_PRIORITY_04"
	DeliverySchedulePriorityEnumAdPriority05 DeliverySchedulePriorityEnum = "AD_PRIORITY_05"
	DeliverySchedulePriorityEnumAdPriority06 DeliverySchedulePriorityEnum = "AD_PRIORITY_06"
	DeliverySchedulePriorityEnumAdPriority07 DeliverySchedulePriorityEnum = "AD_PRIORITY_07"
	DeliverySchedulePriorityEnumAdPriority08 DeliverySchedulePriorityEnum = "AD_PRIORITY_08"
	DeliverySchedulePriorityEnumAdPriority09 DeliverySchedulePriorityEnum = "AD_PRIORITY_09"
	DeliverySchedulePriorityEnumAdPriority10 DeliverySchedulePriorityEnum = "AD_PRIORITY_10"
	DeliverySchedulePriorityEnumAdPriority11 DeliverySchedulePriorityEnum = "AD_PRIORITY_11"
	DeliverySchedulePriorityEnumAdPriority12 DeliverySchedulePriorityEnum = "AD_PRIORITY_12"
	DeliverySchedulePriorityEnumAdPriority13 DeliverySchedulePriorityEnum = "AD_PRIORITY_13"
	DeliverySchedulePriorityEnumAdPriority14 DeliverySchedulePriorityEnum = "AD_PRIORITY_14"
	DeliverySchedulePriorityEnumAdPriority15 DeliverySchedulePriorityEnum = "AD_PRIORITY_15"
	DeliverySchedulePriorityEnumAdPriority16 DeliverySchedulePriorityEnum = "AD_PRIORITY_16"
)

type DeliverySchedule struct {
	FrequencyCap    *FrequencyCap                 `json:"frequencyCap,omitempty"`
	HardCutoff      *bool                         `json:"hardCutoff,omitempty"`
	ImpressionRatio *string                       `json:"impressionRatio,omitempty"`
	Priority        *DeliverySchedulePriorityEnum `json:"priority,omitempty"`
}
