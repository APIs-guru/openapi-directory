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
export var ParentalStatusTargetingOptionDetailsParentalStatusEnum;
(function (ParentalStatusTargetingOptionDetailsParentalStatusEnum) {
    ParentalStatusTargetingOptionDetailsParentalStatusEnum["ParentalStatusUnspecified"] = "PARENTAL_STATUS_UNSPECIFIED";
    ParentalStatusTargetingOptionDetailsParentalStatusEnum["ParentalStatusParent"] = "PARENTAL_STATUS_PARENT";
    ParentalStatusTargetingOptionDetailsParentalStatusEnum["ParentalStatusNotAParent"] = "PARENTAL_STATUS_NOT_A_PARENT";
    ParentalStatusTargetingOptionDetailsParentalStatusEnum["ParentalStatusUnknown"] = "PARENTAL_STATUS_UNKNOWN";
})(ParentalStatusTargetingOptionDetailsParentalStatusEnum || (ParentalStatusTargetingOptionDetailsParentalStatusEnum = {}));
// ParentalStatusTargetingOptionDetails
/**
 * Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
**/
var ParentalStatusTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(ParentalStatusTargetingOptionDetails, _super);
    function ParentalStatusTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentalStatus" }),
        __metadata("design:type", String)
    ], ParentalStatusTargetingOptionDetails.prototype, "parentalStatus", void 0);
    return ParentalStatusTargetingOptionDetails;
}(SpeakeasyBase));
export { ParentalStatusTargetingOptionDetails };
