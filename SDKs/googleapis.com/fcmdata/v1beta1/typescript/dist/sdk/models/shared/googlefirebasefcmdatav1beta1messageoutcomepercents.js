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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// GoogleFirebaseFcmDataV1beta1MessageOutcomePercents
/**
 * Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.
**/
var GoogleFirebaseFcmDataV1beta1MessageOutcomePercents = /** @class */ (function (_super) {
    __extends(GoogleFirebaseFcmDataV1beta1MessageOutcomePercents, _super);
    function GoogleFirebaseFcmDataV1beta1MessageOutcomePercents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=delivered" }),
        __metadata("design:type", Number)
    ], GoogleFirebaseFcmDataV1beta1MessageOutcomePercents.prototype, "delivered", void 0);
    __decorate([
        Metadata({ data: "json, name=droppedAppForceStopped" }),
        __metadata("design:type", Number)
    ], GoogleFirebaseFcmDataV1beta1MessageOutcomePercents.prototype, "droppedAppForceStopped", void 0);
    __decorate([
        Metadata({ data: "json, name=droppedDeviceInactive" }),
        __metadata("design:type", Number)
    ], GoogleFirebaseFcmDataV1beta1MessageOutcomePercents.prototype, "droppedDeviceInactive", void 0);
    __decorate([
        Metadata({ data: "json, name=droppedTooManyPendingMessages" }),
        __metadata("design:type", Number)
    ], GoogleFirebaseFcmDataV1beta1MessageOutcomePercents.prototype, "droppedTooManyPendingMessages", void 0);
    __decorate([
        Metadata({ data: "json, name=pending" }),
        __metadata("design:type", Number)
    ], GoogleFirebaseFcmDataV1beta1MessageOutcomePercents.prototype, "pending", void 0);
    return GoogleFirebaseFcmDataV1beta1MessageOutcomePercents;
}(SpeakeasyBase));
export { GoogleFirebaseFcmDataV1beta1MessageOutcomePercents };
