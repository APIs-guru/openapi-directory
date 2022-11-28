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
// LocationStateInput
/**
 * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
**/
var LocationStateInput = /** @class */ (function (_super) {
    __extends(LocationStateInput, _super);
    function LocationStateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDelete" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canUpdate" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "canUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasPendingEdits" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "hasPendingEdits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasPendingVerification" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "hasPendingVerification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDisabled" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "isDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDisconnected" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "isDisconnected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDuplicate" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "isDuplicate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isGoogleUpdated" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "isGoogleUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLocalPostApiDisabled" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "isLocalPostApiDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPendingReview" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "isPendingReview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPublished" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "isPublished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSuspended" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "isSuspended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isVerified" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "isVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needsReverification" }),
        __metadata("design:type", Boolean)
    ], LocationStateInput.prototype, "needsReverification", void 0);
    return LocationStateInput;
}(SpeakeasyBase));
export { LocationStateInput };
// LocationState
/**
 * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
**/
var LocationState = /** @class */ (function (_super) {
    __extends(LocationState, _super);
    function LocationState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canDelete" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "canDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canHaveFoodMenus" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "canHaveFoodMenus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canModifyServiceList" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "canModifyServiceList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canOperateHealthData" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "canOperateHealthData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canOperateLodgingData" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "canOperateLodgingData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canUpdate" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "canUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasPendingEdits" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "hasPendingEdits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasPendingVerification" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "hasPendingVerification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDisabled" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "isDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDisconnected" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "isDisconnected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDuplicate" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "isDuplicate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isGoogleUpdated" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "isGoogleUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLocalPostApiDisabled" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "isLocalPostApiDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPendingReview" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "isPendingReview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPublished" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "isPublished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSuspended" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "isSuspended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isVerified" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "isVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needsReverification" }),
        __metadata("design:type", Boolean)
    ], LocationState.prototype, "needsReverification", void 0);
    return LocationState;
}(SpeakeasyBase));
export { LocationState };
