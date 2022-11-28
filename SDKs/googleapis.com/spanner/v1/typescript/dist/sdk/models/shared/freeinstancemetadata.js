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
export var FreeInstanceMetadataExpireBehaviorEnum;
(function (FreeInstanceMetadataExpireBehaviorEnum) {
    FreeInstanceMetadataExpireBehaviorEnum["ExpireBehaviorUnspecified"] = "EXPIRE_BEHAVIOR_UNSPECIFIED";
    FreeInstanceMetadataExpireBehaviorEnum["FreeToProvisioned"] = "FREE_TO_PROVISIONED";
    FreeInstanceMetadataExpireBehaviorEnum["RemoveAfterGracePeriod"] = "REMOVE_AFTER_GRACE_PERIOD";
})(FreeInstanceMetadataExpireBehaviorEnum || (FreeInstanceMetadataExpireBehaviorEnum = {}));
// FreeInstanceMetadata
/**
 * Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
**/
var FreeInstanceMetadata = /** @class */ (function (_super) {
    __extends(FreeInstanceMetadata, _super);
    function FreeInstanceMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireBehavior" }),
        __metadata("design:type", String)
    ], FreeInstanceMetadata.prototype, "expireBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], FreeInstanceMetadata.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgradeTime" }),
        __metadata("design:type", String)
    ], FreeInstanceMetadata.prototype, "upgradeTime", void 0);
    return FreeInstanceMetadata;
}(SpeakeasyBase));
export { FreeInstanceMetadata };
// FreeInstanceMetadataInput
/**
 * Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
**/
var FreeInstanceMetadataInput = /** @class */ (function (_super) {
    __extends(FreeInstanceMetadataInput, _super);
    function FreeInstanceMetadataInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireBehavior" }),
        __metadata("design:type", String)
    ], FreeInstanceMetadataInput.prototype, "expireBehavior", void 0);
    return FreeInstanceMetadataInput;
}(SpeakeasyBase));
export { FreeInstanceMetadataInput };
