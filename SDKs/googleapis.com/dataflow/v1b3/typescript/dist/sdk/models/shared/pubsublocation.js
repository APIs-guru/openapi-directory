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
// PubsubLocation
/**
 * Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.
**/
var PubsubLocation = /** @class */ (function (_super) {
    __extends(PubsubLocation, _super);
    function PubsubLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropLateData" }),
        __metadata("design:type", Boolean)
    ], PubsubLocation.prototype, "dropLateData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idLabel" }),
        __metadata("design:type", String)
    ], PubsubLocation.prototype, "idLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscription" }),
        __metadata("design:type", String)
    ], PubsubLocation.prototype, "subscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampLabel" }),
        __metadata("design:type", String)
    ], PubsubLocation.prototype, "timestampLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], PubsubLocation.prototype, "topic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingSubscription" }),
        __metadata("design:type", String)
    ], PubsubLocation.prototype, "trackingSubscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=withAttributes" }),
        __metadata("design:type", Boolean)
    ], PubsubLocation.prototype, "withAttributes", void 0);
    return PubsubLocation;
}(SpeakeasyBase));
export { PubsubLocation };
