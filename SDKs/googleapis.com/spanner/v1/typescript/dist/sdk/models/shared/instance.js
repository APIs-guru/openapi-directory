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
import { FreeInstanceMetadataInput } from "./freeinstancemetadata";
import { FreeInstanceMetadata } from "./freeinstancemetadata";
export var InstanceInstanceTypeEnum;
(function (InstanceInstanceTypeEnum) {
    InstanceInstanceTypeEnum["InstanceTypeUnspecified"] = "INSTANCE_TYPE_UNSPECIFIED";
    InstanceInstanceTypeEnum["Provisioned"] = "PROVISIONED";
    InstanceInstanceTypeEnum["FreeInstance"] = "FREE_INSTANCE";
})(InstanceInstanceTypeEnum || (InstanceInstanceTypeEnum = {}));
export var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceStateEnum["Creating"] = "CREATING";
    InstanceStateEnum["Ready"] = "READY";
})(InstanceStateEnum || (InstanceStateEnum = {}));
// InstanceInput
/**
 * An isolated set of Cloud Spanner resources on which databases can be hosted.
**/
var InstanceInput = /** @class */ (function (_super) {
    __extends(InstanceInput, _super);
    function InstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointUris" }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "endpointUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeInstanceMetadata" }),
        __metadata("design:type", FreeInstanceMetadataInput)
    ], InstanceInput.prototype, "freeInstanceMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], InstanceInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeCount" }),
        __metadata("design:type", Number)
    ], InstanceInput.prototype, "nodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingUnits" }),
        __metadata("design:type", Number)
    ], InstanceInput.prototype, "processingUnits", void 0);
    return InstanceInput;
}(SpeakeasyBase));
export { InstanceInput };
// Instance
/**
 * An isolated set of Cloud Spanner resources on which databases can be hosted.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", String)
    ], Instance.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointUris" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "endpointUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeInstanceMetadata" }),
        __metadata("design:type", FreeInstanceMetadata)
    ], Instance.prototype, "freeInstanceMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeCount" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "nodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingUnits" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "processingUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Instance.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "updateTime", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
