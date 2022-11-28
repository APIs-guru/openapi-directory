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
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1ZoneDiscoverySpec } from "./googleclouddataplexv1zonediscoveryspec";
import { GoogleCloudDataplexV1ZoneResourceSpec } from "./googleclouddataplexv1zoneresourcespec";
export var GoogleCloudDataplexV1ZoneStateEnum;
(function (GoogleCloudDataplexV1ZoneStateEnum) {
    GoogleCloudDataplexV1ZoneStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDataplexV1ZoneStateEnum["Active"] = "ACTIVE";
    GoogleCloudDataplexV1ZoneStateEnum["Creating"] = "CREATING";
    GoogleCloudDataplexV1ZoneStateEnum["Deleting"] = "DELETING";
    GoogleCloudDataplexV1ZoneStateEnum["ActionRequired"] = "ACTION_REQUIRED";
})(GoogleCloudDataplexV1ZoneStateEnum || (GoogleCloudDataplexV1ZoneStateEnum = {}));
export var GoogleCloudDataplexV1ZoneTypeEnum;
(function (GoogleCloudDataplexV1ZoneTypeEnum) {
    GoogleCloudDataplexV1ZoneTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudDataplexV1ZoneTypeEnum["Raw"] = "RAW";
    GoogleCloudDataplexV1ZoneTypeEnum["Curated"] = "CURATED";
})(GoogleCloudDataplexV1ZoneTypeEnum || (GoogleCloudDataplexV1ZoneTypeEnum = {}));
// GoogleCloudDataplexV1ZoneInput
/**
 * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
**/
var GoogleCloudDataplexV1ZoneInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1ZoneInput, _super);
    function GoogleCloudDataplexV1ZoneInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetStatus)
    ], GoogleCloudDataplexV1ZoneInput.prototype, "assetStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1ZoneInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoverySpec" }),
        __metadata("design:type", GoogleCloudDataplexV1ZoneDiscoverySpec)
    ], GoogleCloudDataplexV1ZoneInput.prototype, "discoverySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1ZoneInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1ZoneInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1ZoneResourceSpec)
    ], GoogleCloudDataplexV1ZoneInput.prototype, "resourceSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1ZoneInput.prototype, "type", void 0);
    return GoogleCloudDataplexV1ZoneInput;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1ZoneInput };
// GoogleCloudDataplexV1Zone
/**
 * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
**/
var GoogleCloudDataplexV1Zone = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1Zone, _super);
    function GoogleCloudDataplexV1Zone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetStatus)
    ], GoogleCloudDataplexV1Zone.prototype, "assetStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Zone.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Zone.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoverySpec" }),
        __metadata("design:type", GoogleCloudDataplexV1ZoneDiscoverySpec)
    ], GoogleCloudDataplexV1Zone.prototype, "discoverySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Zone.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Zone.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Zone.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1ZoneResourceSpec)
    ], GoogleCloudDataplexV1Zone.prototype, "resourceSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Zone.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Zone.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Zone.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Zone.prototype, "updateTime", void 0);
    return GoogleCloudDataplexV1Zone;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1Zone };
