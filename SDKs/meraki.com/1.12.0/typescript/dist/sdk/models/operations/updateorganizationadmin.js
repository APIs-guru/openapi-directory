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
var UpdateOrganizationAdminPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdminPathParams, _super);
    function UpdateOrganizationAdminPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adminId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdminPathParams.prototype, "adminId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdminPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationAdminPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationAdminPathParams };
export var UpdateOrganizationAdminRequestBodyNetworksAccessEnum;
(function (UpdateOrganizationAdminRequestBodyNetworksAccessEnum) {
    UpdateOrganizationAdminRequestBodyNetworksAccessEnum["Full"] = "full";
    UpdateOrganizationAdminRequestBodyNetworksAccessEnum["ReadOnly"] = "read-only";
    UpdateOrganizationAdminRequestBodyNetworksAccessEnum["GuestAmbassador"] = "guest-ambassador";
    UpdateOrganizationAdminRequestBodyNetworksAccessEnum["MonitorOnly"] = "monitor-only";
})(UpdateOrganizationAdminRequestBodyNetworksAccessEnum || (UpdateOrganizationAdminRequestBodyNetworksAccessEnum = {}));
var UpdateOrganizationAdminRequestBodyNetworks = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdminRequestBodyNetworks, _super);
    function UpdateOrganizationAdminRequestBodyNetworks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdminRequestBodyNetworks.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdminRequestBodyNetworks.prototype, "id", void 0);
    return UpdateOrganizationAdminRequestBodyNetworks;
}(SpeakeasyBase));
export { UpdateOrganizationAdminRequestBodyNetworks };
export var UpdateOrganizationAdminRequestBodyOrgAccessEnum;
(function (UpdateOrganizationAdminRequestBodyOrgAccessEnum) {
    UpdateOrganizationAdminRequestBodyOrgAccessEnum["Full"] = "full";
    UpdateOrganizationAdminRequestBodyOrgAccessEnum["ReadOnly"] = "read-only";
    UpdateOrganizationAdminRequestBodyOrgAccessEnum["Enterprise"] = "enterprise";
    UpdateOrganizationAdminRequestBodyOrgAccessEnum["None"] = "none";
})(UpdateOrganizationAdminRequestBodyOrgAccessEnum || (UpdateOrganizationAdminRequestBodyOrgAccessEnum = {}));
export var UpdateOrganizationAdminRequestBodyTagsAccessEnum;
(function (UpdateOrganizationAdminRequestBodyTagsAccessEnum) {
    UpdateOrganizationAdminRequestBodyTagsAccessEnum["Full"] = "full";
    UpdateOrganizationAdminRequestBodyTagsAccessEnum["ReadOnly"] = "read-only";
    UpdateOrganizationAdminRequestBodyTagsAccessEnum["GuestAmbassador"] = "guest-ambassador";
    UpdateOrganizationAdminRequestBodyTagsAccessEnum["MonitorOnly"] = "monitor-only";
})(UpdateOrganizationAdminRequestBodyTagsAccessEnum || (UpdateOrganizationAdminRequestBodyTagsAccessEnum = {}));
var UpdateOrganizationAdminRequestBodyTags = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdminRequestBodyTags, _super);
    function UpdateOrganizationAdminRequestBodyTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdminRequestBodyTags.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdminRequestBodyTags.prototype, "tag", void 0);
    return UpdateOrganizationAdminRequestBodyTags;
}(SpeakeasyBase));
export { UpdateOrganizationAdminRequestBodyTags };
var UpdateOrganizationAdminRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdminRequestBody, _super);
    function UpdateOrganizationAdminRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdminRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networks", elemType: UpdateOrganizationAdminRequestBodyNetworks }),
        __metadata("design:type", Array)
    ], UpdateOrganizationAdminRequestBody.prototype, "networks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgAccess" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdminRequestBody.prototype, "orgAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: UpdateOrganizationAdminRequestBodyTags }),
        __metadata("design:type", Array)
    ], UpdateOrganizationAdminRequestBody.prototype, "tags", void 0);
    return UpdateOrganizationAdminRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationAdminRequestBody };
var UpdateOrganizationAdminRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdminRequest, _super);
    function UpdateOrganizationAdminRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationAdminPathParams)
    ], UpdateOrganizationAdminRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationAdminRequestBody)
    ], UpdateOrganizationAdminRequest.prototype, "request", void 0);
    return UpdateOrganizationAdminRequest;
}(SpeakeasyBase));
export { UpdateOrganizationAdminRequest };
var UpdateOrganizationAdminResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdminResponse, _super);
    function UpdateOrganizationAdminResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationAdminResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationAdminResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationAdminResponse.prototype, "updateOrganizationAdmin200ApplicationJsonObject", void 0);
    return UpdateOrganizationAdminResponse;
}(SpeakeasyBase));
export { UpdateOrganizationAdminResponse };
