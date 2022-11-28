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
export var DynamicTargetingKeyObjectTypeEnum;
(function (DynamicTargetingKeyObjectTypeEnum) {
    DynamicTargetingKeyObjectTypeEnum["ObjectAdvertiser"] = "OBJECT_ADVERTISER";
    DynamicTargetingKeyObjectTypeEnum["ObjectAd"] = "OBJECT_AD";
    DynamicTargetingKeyObjectTypeEnum["ObjectCreative"] = "OBJECT_CREATIVE";
    DynamicTargetingKeyObjectTypeEnum["ObjectPlacement"] = "OBJECT_PLACEMENT";
})(DynamicTargetingKeyObjectTypeEnum || (DynamicTargetingKeyObjectTypeEnum = {}));
// DynamicTargetingKey
/**
 * Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
**/
var DynamicTargetingKey = /** @class */ (function (_super) {
    __extends(DynamicTargetingKey, _super);
    function DynamicTargetingKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], DynamicTargetingKey.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DynamicTargetingKey.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", String)
    ], DynamicTargetingKey.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], DynamicTargetingKey.prototype, "objectType", void 0);
    return DynamicTargetingKey;
}(SpeakeasyBase));
export { DynamicTargetingKey };
