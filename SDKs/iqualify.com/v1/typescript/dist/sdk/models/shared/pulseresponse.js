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
import { PulseAnswer } from "./pulseanswer";
var PulseResponse = /** @class */ (function (_super) {
    __extends(PulseResponse, _super);
    function PulseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerFirstName" }),
        __metadata("design:type", String)
    ], PulseResponse.prototype, "learnerFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerId" }),
        __metadata("design:type", String)
    ], PulseResponse.prototype, "learnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnerLastName" }),
        __metadata("design:type", String)
    ], PulseResponse.prototype, "learnerLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulseBaseId" }),
        __metadata("design:type", String)
    ], PulseResponse.prototype, "pulseBaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulseInstanceId" }),
        __metadata("design:type", String)
    ], PulseResponse.prototype, "pulseInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulseQuestion" }),
        __metadata("design:type", String)
    ], PulseResponse.prototype, "pulseQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulseRunDurationMinutes" }),
        __metadata("design:type", Number)
    ], PulseResponse.prototype, "pulseRunDurationMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulseRunStart" }),
        __metadata("design:type", Date)
    ], PulseResponse.prototype, "pulseRunStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pulseType" }),
        __metadata("design:type", String)
    ], PulseResponse.prototype, "pulseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", PulseAnswer)
    ], PulseResponse.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseTime" }),
        __metadata("design:type", Date)
    ], PulseResponse.prototype, "responseTime", void 0);
    return PulseResponse;
}(SpeakeasyBase));
export { PulseResponse };
