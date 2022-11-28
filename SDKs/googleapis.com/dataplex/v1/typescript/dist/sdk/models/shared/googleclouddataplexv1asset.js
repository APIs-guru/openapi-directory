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
import { GoogleCloudDataplexV1AssetDiscoverySpec } from "./googleclouddataplexv1assetdiscoveryspec";
import { GoogleCloudDataplexV1AssetDiscoveryStatus } from "./googleclouddataplexv1assetdiscoverystatus";
import { GoogleCloudDataplexV1AssetResourceSpec } from "./googleclouddataplexv1assetresourcespec";
import { GoogleCloudDataplexV1AssetResourceStatus } from "./googleclouddataplexv1assetresourcestatus";
import { GoogleCloudDataplexV1AssetSecurityStatus } from "./googleclouddataplexv1assetsecuritystatus";
export var GoogleCloudDataplexV1AssetStateEnum;
(function (GoogleCloudDataplexV1AssetStateEnum) {
    GoogleCloudDataplexV1AssetStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDataplexV1AssetStateEnum["Active"] = "ACTIVE";
    GoogleCloudDataplexV1AssetStateEnum["Creating"] = "CREATING";
    GoogleCloudDataplexV1AssetStateEnum["Deleting"] = "DELETING";
    GoogleCloudDataplexV1AssetStateEnum["ActionRequired"] = "ACTION_REQUIRED";
})(GoogleCloudDataplexV1AssetStateEnum || (GoogleCloudDataplexV1AssetStateEnum = {}));
// GoogleCloudDataplexV1AssetInput
/**
 * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
**/
var GoogleCloudDataplexV1AssetInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1AssetInput, _super);
    function GoogleCloudDataplexV1AssetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoverySpec" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetDiscoverySpec)
    ], GoogleCloudDataplexV1AssetInput.prototype, "discoverySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoveryStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetDiscoveryStatus)
    ], GoogleCloudDataplexV1AssetInput.prototype, "discoveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1AssetInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetResourceSpec)
    ], GoogleCloudDataplexV1AssetInput.prototype, "resourceSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetResourceStatus)
    ], GoogleCloudDataplexV1AssetInput.prototype, "resourceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetSecurityStatus)
    ], GoogleCloudDataplexV1AssetInput.prototype, "securityStatus", void 0);
    return GoogleCloudDataplexV1AssetInput;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1AssetInput };
// GoogleCloudDataplexV1Asset
/**
 * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
**/
var GoogleCloudDataplexV1Asset = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1Asset, _super);
    function GoogleCloudDataplexV1Asset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Asset.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Asset.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoverySpec" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetDiscoverySpec)
    ], GoogleCloudDataplexV1Asset.prototype, "discoverySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoveryStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetDiscoveryStatus)
    ], GoogleCloudDataplexV1Asset.prototype, "discoveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Asset.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Asset.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Asset.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetResourceSpec)
    ], GoogleCloudDataplexV1Asset.prototype, "resourceSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetResourceStatus)
    ], GoogleCloudDataplexV1Asset.prototype, "resourceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetSecurityStatus)
    ], GoogleCloudDataplexV1Asset.prototype, "securityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Asset.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Asset.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Asset.prototype, "updateTime", void 0);
    return GoogleCloudDataplexV1Asset;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1Asset };
