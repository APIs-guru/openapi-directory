import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum {
    TelephonyDtmfUnspecified = "TELEPHONY_DTMF_UNSPECIFIED",
    DtmfOne = "DTMF_ONE",
    DtmfTwo = "DTMF_TWO",
    DtmfThree = "DTMF_THREE",
    DtmfFour = "DTMF_FOUR",
    DtmfFive = "DTMF_FIVE",
    DtmfSix = "DTMF_SIX",
    DtmfSeven = "DTMF_SEVEN",
    DtmfEight = "DTMF_EIGHT",
    DtmfNine = "DTMF_NINE",
    DtmfZero = "DTMF_ZERO",
    DtmfA = "DTMF_A",
    DtmfB = "DTMF_B",
    DtmfC = "DTMF_C",
    DtmfD = "DTMF_D",
    DtmfStar = "DTMF_STAR",
    DtmfPound = "DTMF_POUND"
}
/**
 * A wrapper of repeated TelephonyDtmf digits.
**/
export declare class GoogleCloudDialogflowV2beta1TelephonyDtmfEvents extends SpeakeasyBase {
    dtmfEvents?: GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum[];
}
