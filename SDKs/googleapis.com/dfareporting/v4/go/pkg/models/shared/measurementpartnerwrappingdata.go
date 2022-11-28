package shared

type MeasurementPartnerWrappingDataLinkStatusEnum string

const (
	MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerUnlinked            MeasurementPartnerWrappingDataLinkStatusEnum = "MEASUREMENT_PARTNER_UNLINKED"
	MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerLinked              MeasurementPartnerWrappingDataLinkStatusEnum = "MEASUREMENT_PARTNER_LINKED"
	MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerLinkPending         MeasurementPartnerWrappingDataLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_PENDING"
	MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerLinkFailure         MeasurementPartnerWrappingDataLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_FAILURE"
	MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerLinkOptOut          MeasurementPartnerWrappingDataLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_OPT_OUT"
	MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerLinkOptOutPending   MeasurementPartnerWrappingDataLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
	MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerLinkWrappingPending MeasurementPartnerWrappingDataLinkStatusEnum = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
	MeasurementPartnerWrappingDataLinkStatusEnumMeasurementPartnerModeChangePending   MeasurementPartnerWrappingDataLinkStatusEnum = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"
)

type MeasurementPartnerWrappingDataMeasurementPartnerEnum string

const (
	MeasurementPartnerWrappingDataMeasurementPartnerEnumNone              MeasurementPartnerWrappingDataMeasurementPartnerEnum = "NONE"
	MeasurementPartnerWrappingDataMeasurementPartnerEnumIntegralAdScience MeasurementPartnerWrappingDataMeasurementPartnerEnum = "INTEGRAL_AD_SCIENCE"
	MeasurementPartnerWrappingDataMeasurementPartnerEnumDoubleVerify      MeasurementPartnerWrappingDataMeasurementPartnerEnum = "DOUBLE_VERIFY"
)

type MeasurementPartnerWrappingDataTagWrappingModeEnum string

const (
	MeasurementPartnerWrappingDataTagWrappingModeEnumNone                 MeasurementPartnerWrappingDataTagWrappingModeEnum = "NONE"
	MeasurementPartnerWrappingDataTagWrappingModeEnumBlocking             MeasurementPartnerWrappingDataTagWrappingModeEnum = "BLOCKING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumMonitoring           MeasurementPartnerWrappingDataTagWrappingModeEnum = "MONITORING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumMonitoringReadOnly   MeasurementPartnerWrappingDataTagWrappingModeEnum = "MONITORING_READ_ONLY"
	MeasurementPartnerWrappingDataTagWrappingModeEnumVideoPixelMonitoring MeasurementPartnerWrappingDataTagWrappingModeEnum = "VIDEO_PIXEL_MONITORING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumTracking             MeasurementPartnerWrappingDataTagWrappingModeEnum = "TRACKING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidMonitoring      MeasurementPartnerWrappingDataTagWrappingModeEnum = "VPAID_MONITORING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidBlocking        MeasurementPartnerWrappingDataTagWrappingModeEnum = "VPAID_BLOCKING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumNonVpaidMonitoring   MeasurementPartnerWrappingDataTagWrappingModeEnum = "NON_VPAID_MONITORING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidOnlyMonitoring  MeasurementPartnerWrappingDataTagWrappingModeEnum = "VPAID_ONLY_MONITORING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidOnlyBlocking    MeasurementPartnerWrappingDataTagWrappingModeEnum = "VPAID_ONLY_BLOCKING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidOnlyFiltering   MeasurementPartnerWrappingDataTagWrappingModeEnum = "VPAID_ONLY_FILTERING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumVpaidFiltering       MeasurementPartnerWrappingDataTagWrappingModeEnum = "VPAID_FILTERING"
	MeasurementPartnerWrappingDataTagWrappingModeEnumNonVpaidFiltering    MeasurementPartnerWrappingDataTagWrappingModeEnum = "NON_VPAID_FILTERING"
)

// MeasurementPartnerWrappingData
// Placement tag wrapping
type MeasurementPartnerWrappingData struct {
	LinkStatus         *MeasurementPartnerWrappingDataLinkStatusEnum         `json:"linkStatus,omitempty"`
	MeasurementPartner *MeasurementPartnerWrappingDataMeasurementPartnerEnum `json:"measurementPartner,omitempty"`
	TagWrappingMode    *MeasurementPartnerWrappingDataTagWrappingModeEnum    `json:"tagWrappingMode,omitempty"`
	WrappedTag         *string                                               `json:"wrappedTag,omitempty"`
}
