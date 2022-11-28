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
import { GpsDataGapFailureDetails } from "./gpsdatagapfailuredetails";
import { ImuDataGapFailureDetails } from "./imudatagapfailuredetails";
import { InsufficientGpsFailureDetails } from "./insufficientgpsfailuredetails";
import { NotOutdoorsFailureDetails } from "./notoutdoorsfailuredetails";
// ProcessingFailureDetails
/**
 * Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.
**/
var ProcessingFailureDetails = /** @class */ (function (_super) {
    __extends(ProcessingFailureDetails, _super);
    function ProcessingFailureDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gpsDataGapDetails" }),
        __metadata("design:type", GpsDataGapFailureDetails)
    ], ProcessingFailureDetails.prototype, "gpsDataGapDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imuDataGapDetails" }),
        __metadata("design:type", ImuDataGapFailureDetails)
    ], ProcessingFailureDetails.prototype, "imuDataGapDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insufficientGpsDetails" }),
        __metadata("design:type", InsufficientGpsFailureDetails)
    ], ProcessingFailureDetails.prototype, "insufficientGpsDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notOutdoorsDetails" }),
        __metadata("design:type", NotOutdoorsFailureDetails)
    ], ProcessingFailureDetails.prototype, "notOutdoorsDetails", void 0);
    return ProcessingFailureDetails;
}(SpeakeasyBase));
export { ProcessingFailureDetails };
