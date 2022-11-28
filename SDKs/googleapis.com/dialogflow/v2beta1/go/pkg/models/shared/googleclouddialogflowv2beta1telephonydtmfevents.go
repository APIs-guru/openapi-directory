package shared

type GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum string

const (
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumTelephonyDtmfUnspecified GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "TELEPHONY_DTMF_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfOne                  GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_ONE"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfTwo                  GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_TWO"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfThree                GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_THREE"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfFour                 GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_FOUR"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfFive                 GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_FIVE"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfSix                  GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_SIX"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfSeven                GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_SEVEN"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfEight                GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_EIGHT"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfNine                 GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_NINE"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfZero                 GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_ZERO"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfA                    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_A"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfB                    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_B"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfC                    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_C"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfD                    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_D"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfStar                 GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_STAR"
	GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfPound                GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = "DTMF_POUND"
)

// GoogleCloudDialogflowV2beta1TelephonyDtmfEvents
// A wrapper of repeated TelephonyDtmf digits.
type GoogleCloudDialogflowV2beta1TelephonyDtmfEvents struct {
	DtmfEvents []GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum `json:"dtmfEvents,omitempty"`
}
