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
// Availability
/**
 * A message containing availability data relevant to DoubleClick Search.
**/
var Availability = /** @class */ (function (_super) {
    __extends(Availability, _super);
    function Availability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Availability.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agencyId" }),
        __metadata("design:type", String)
    ], Availability.prototype, "agencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityTimestamp" }),
        __metadata("design:type", String)
    ], Availability.prototype, "availabilityTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], Availability.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentationId" }),
        __metadata("design:type", String)
    ], Availability.prototype, "segmentationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentationName" }),
        __metadata("design:type", String)
    ], Availability.prototype, "segmentationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentationType" }),
        __metadata("design:type", String)
    ], Availability.prototype, "segmentationType", void 0);
    return Availability;
}(SpeakeasyBase));
export { Availability };
