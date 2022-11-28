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
// Metadata
/**
 * Additional non-user-editable information about the location.
**/
var Metadata = /** @class */ (function (_super) {
    __extends(Metadata, _super);
    function Metadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDelete" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canHaveBusinessCalls" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "canHaveBusinessCalls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canHaveFoodMenus" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "canHaveFoodMenus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canModifyServiceList" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "canModifyServiceList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canOperateHealthData" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "canOperateHealthData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canOperateLocalPost" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "canOperateLocalPost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canOperateLodgingData" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "canOperateLodgingData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateLocation" }),
        __metadata("design:type", String)
    ], Metadata.prototype, "duplicateLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasGoogleUpdated" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "hasGoogleUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasPendingEdits" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "hasPendingEdits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasVoiceOfMerchant" }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "hasVoiceOfMerchant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapsUri" }),
        __metadata("design:type", String)
    ], Metadata.prototype, "mapsUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newReviewUri" }),
        __metadata("design:type", String)
    ], Metadata.prototype, "newReviewUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placeId" }),
        __metadata("design:type", String)
    ], Metadata.prototype, "placeId", void 0);
    return Metadata;
}(SpeakeasyBase));
export { Metadata };
