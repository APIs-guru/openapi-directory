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
var UpdateDeviceSwitchPortPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchPortPathParams, _super);
    function UpdateDeviceSwitchPortPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortPathParams.prototype, "portId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortPathParams.prototype, "serial", void 0);
    return UpdateDeviceSwitchPortPathParams;
}(SpeakeasyBase));
export { UpdateDeviceSwitchPortPathParams };
export var UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;
(function (UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum) {
    UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum["Open"] = "Open";
    UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum["CustomAccessPolicy"] = "Custom access policy";
    UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum["MacAllowList"] = "MAC allow list";
    UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum["StickyMacAllowList"] = "Sticky MAC allow list";
})(UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum || (UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum = {}));
export var UpdateDeviceSwitchPortRequestBodyStpGuardEnum;
(function (UpdateDeviceSwitchPortRequestBodyStpGuardEnum) {
    UpdateDeviceSwitchPortRequestBodyStpGuardEnum["Disabled"] = "disabled";
    UpdateDeviceSwitchPortRequestBodyStpGuardEnum["RootGuard"] = "root guard";
    UpdateDeviceSwitchPortRequestBodyStpGuardEnum["BpduGuard"] = "bpdu guard";
    UpdateDeviceSwitchPortRequestBodyStpGuardEnum["LoopGuard"] = "loop guard";
})(UpdateDeviceSwitchPortRequestBodyStpGuardEnum || (UpdateDeviceSwitchPortRequestBodyStpGuardEnum = {}));
export var UpdateDeviceSwitchPortRequestBodyTypeEnum;
(function (UpdateDeviceSwitchPortRequestBodyTypeEnum) {
    UpdateDeviceSwitchPortRequestBodyTypeEnum["Trunk"] = "trunk";
    UpdateDeviceSwitchPortRequestBodyTypeEnum["Access"] = "access";
})(UpdateDeviceSwitchPortRequestBodyTypeEnum || (UpdateDeviceSwitchPortRequestBodyTypeEnum = {}));
export var UpdateDeviceSwitchPortRequestBodyUdldEnum;
(function (UpdateDeviceSwitchPortRequestBodyUdldEnum) {
    UpdateDeviceSwitchPortRequestBodyUdldEnum["AlertOnly"] = "Alert only";
    UpdateDeviceSwitchPortRequestBodyUdldEnum["Enforce"] = "Enforce";
})(UpdateDeviceSwitchPortRequestBodyUdldEnum || (UpdateDeviceSwitchPortRequestBodyUdldEnum = {}));
var UpdateDeviceSwitchPortRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchPortRequestBody, _super);
    function UpdateDeviceSwitchPortRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyNumber" }),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "accessPolicyNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyType" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "accessPolicyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedVlans" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "allowedVlans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flexibleStackingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "flexibleStackingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isolationEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "isolationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkNegotiation" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "linkNegotiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macAllowList" }),
        __metadata("design:type", Array)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "macAllowList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poeEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "poeEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portScheduleId" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "portScheduleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rstpEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "rstpEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stickyMacAllowList" }),
        __metadata("design:type", Array)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "stickyMacAllowList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stickyMacAllowListLimit" }),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "stickyMacAllowListLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stormControlEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "stormControlEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stpGuard" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "stpGuard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=udld" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "udld", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "vlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceVlan" }),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchPortRequestBody.prototype, "voiceVlan", void 0);
    return UpdateDeviceSwitchPortRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceSwitchPortRequestBody };
var UpdateDeviceSwitchPortRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchPortRequest, _super);
    function UpdateDeviceSwitchPortRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceSwitchPortPathParams)
    ], UpdateDeviceSwitchPortRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceSwitchPortRequestBody)
    ], UpdateDeviceSwitchPortRequest.prototype, "request", void 0);
    return UpdateDeviceSwitchPortRequest;
}(SpeakeasyBase));
export { UpdateDeviceSwitchPortRequest };
var UpdateDeviceSwitchPortResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchPortResponse, _super);
    function UpdateDeviceSwitchPortResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchPortResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchPortResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceSwitchPortResponse.prototype, "updateDeviceSwitchPort200ApplicationJsonObject", void 0);
    return UpdateDeviceSwitchPortResponse;
}(SpeakeasyBase));
export { UpdateDeviceSwitchPortResponse };
