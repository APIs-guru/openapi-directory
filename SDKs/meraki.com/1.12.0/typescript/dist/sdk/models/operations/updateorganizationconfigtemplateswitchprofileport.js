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
var UpdateOrganizationConfigTemplateSwitchProfilePortPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationConfigTemplateSwitchProfilePortPathParams, _super);
    function UpdateOrganizationConfigTemplateSwitchProfilePortPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortPathParams.prototype, "configTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortPathParams.prototype, "organizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortPathParams.prototype, "portId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortPathParams.prototype, "profileId", void 0);
    return UpdateOrganizationConfigTemplateSwitchProfilePortPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationConfigTemplateSwitchProfilePortPathParams };
export var UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
(function (UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum) {
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum["Open"] = "Open";
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum["CustomAccessPolicy"] = "Custom access policy";
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum["MacAllowList"] = "MAC allow list";
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum["StickyMacAllowList"] = "Sticky MAC allow list";
})(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum || (UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum = {}));
export var UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
(function (UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum) {
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum["Disabled"] = "disabled";
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum["RootGuard"] = "root guard";
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum["BpduGuard"] = "bpdu guard";
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum["LoopGuard"] = "loop guard";
})(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum || (UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum = {}));
export var UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
(function (UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum) {
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum["Trunk"] = "trunk";
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum["Access"] = "access";
})(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum || (UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum = {}));
export var UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;
(function (UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum) {
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum["AlertOnly"] = "Alert only";
    UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum["Enforce"] = "Enforce";
})(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum || (UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum = {}));
var UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody, _super);
    function UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyNumber" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "accessPolicyNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyType" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "accessPolicyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedVlans" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "allowedVlans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flexibleStackingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "flexibleStackingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isolationEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "isolationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkNegotiation" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "linkNegotiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macAllowList" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "macAllowList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poeEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "poeEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portScheduleId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "portScheduleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rstpEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "rstpEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stickyMacAllowList" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "stickyMacAllowList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stickyMacAllowListLimit" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "stickyMacAllowListLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stormControlEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "stormControlEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stpGuard" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "stpGuard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=udld" }),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "udld", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "vlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceVlan" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody.prototype, "voiceVlan", void 0);
    return UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody };
var UpdateOrganizationConfigTemplateSwitchProfilePortRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationConfigTemplateSwitchProfilePortRequest, _super);
    function UpdateOrganizationConfigTemplateSwitchProfilePortRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationConfigTemplateSwitchProfilePortPathParams)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortRequest.prototype, "request", void 0);
    return UpdateOrganizationConfigTemplateSwitchProfilePortRequest;
}(SpeakeasyBase));
export { UpdateOrganizationConfigTemplateSwitchProfilePortRequest };
var UpdateOrganizationConfigTemplateSwitchProfilePortResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationConfigTemplateSwitchProfilePortResponse, _super);
    function UpdateOrganizationConfigTemplateSwitchProfilePortResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationConfigTemplateSwitchProfilePortResponse.prototype, "updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJsonObject", void 0);
    return UpdateOrganizationConfigTemplateSwitchProfilePortResponse;
}(SpeakeasyBase));
export { UpdateOrganizationConfigTemplateSwitchProfilePortResponse };
