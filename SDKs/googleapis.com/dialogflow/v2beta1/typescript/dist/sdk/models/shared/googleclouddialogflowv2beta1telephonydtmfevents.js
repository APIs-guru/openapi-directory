var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum;
(function (GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum) {
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["TelephonyDtmfUnspecified"] = "TELEPHONY_DTMF_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfOne"] = "DTMF_ONE";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfTwo"] = "DTMF_TWO";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfThree"] = "DTMF_THREE";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfFour"] = "DTMF_FOUR";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfFive"] = "DTMF_FIVE";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfSix"] = "DTMF_SIX";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfSeven"] = "DTMF_SEVEN";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfEight"] = "DTMF_EIGHT";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfNine"] = "DTMF_NINE";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfZero"] = "DTMF_ZERO";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfA"] = "DTMF_A";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfB"] = "DTMF_B";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfC"] = "DTMF_C";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfD"] = "DTMF_D";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfStar"] = "DTMF_STAR";
    GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum["DtmfPound"] = "DTMF_POUND";
})(GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum || (GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum = {}));
// GoogleCloudDialogflowV2beta1TelephonyDtmfEvents
/**
 * A wrapper of repeated TelephonyDtmf digits.
**/
var GoogleCloudDialogflowV2beta1TelephonyDtmfEvents = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1TelephonyDtmfEvents, _super);
    function GoogleCloudDialogflowV2beta1TelephonyDtmfEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dtmfEvents" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1TelephonyDtmfEvents.prototype, "dtmfEvents", void 0);
    return GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1TelephonyDtmfEvents };
