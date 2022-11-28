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
// Quotas
/**
 * Quotas state for an api key on a service group
**/
var Quotas = /** @class */ (function (_super) {
    __extends(Quotas, _super);
    function Quotas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedCallsPerDay" }),
        __metadata("design:type", Number)
    ], Quotas.prototype, "authorizedCallsPerDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedCallsPerMonth" }),
        __metadata("design:type", Number)
    ], Quotas.prototype, "authorizedCallsPerMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedCallsPerSec" }),
        __metadata("design:type", Number)
    ], Quotas.prototype, "authorizedCallsPerSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentCallsPerDay" }),
        __metadata("design:type", Number)
    ], Quotas.prototype, "currentCallsPerDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentCallsPerMonth" }),
        __metadata("design:type", Number)
    ], Quotas.prototype, "currentCallsPerMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentCallsPerSec" }),
        __metadata("design:type", Number)
    ], Quotas.prototype, "currentCallsPerSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingCallsPerDay" }),
        __metadata("design:type", Number)
    ], Quotas.prototype, "remainingCallsPerDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingCallsPerMonth" }),
        __metadata("design:type", Number)
    ], Quotas.prototype, "remainingCallsPerMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingCallsPerSec" }),
        __metadata("design:type", Number)
    ], Quotas.prototype, "remainingCallsPerSec", void 0);
    return Quotas;
}(SpeakeasyBase));
export { Quotas };
