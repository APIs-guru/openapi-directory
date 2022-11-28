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
var UpdateOrganizationSamlRolePathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlRolePathParams, _super);
    function UpdateOrganizationSamlRolePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlRolePathParams.prototype, "organizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=samlRoleId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlRolePathParams.prototype, "samlRoleId", void 0);
    return UpdateOrganizationSamlRolePathParams;
}(SpeakeasyBase));
export { UpdateOrganizationSamlRolePathParams };
export var UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
(function (UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum) {
    UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum["Full"] = "full";
    UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum["ReadOnly"] = "read-only";
    UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum["GuestAmbassador"] = "guest-ambassador";
    UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum["MonitorOnly"] = "monitor-only";
})(UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum || (UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum = {}));
var UpdateOrganizationSamlRoleRequestBodyNetworks = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlRoleRequestBodyNetworks, _super);
    function UpdateOrganizationSamlRoleRequestBodyNetworks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlRoleRequestBodyNetworks.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlRoleRequestBodyNetworks.prototype, "id", void 0);
    return UpdateOrganizationSamlRoleRequestBodyNetworks;
}(SpeakeasyBase));
export { UpdateOrganizationSamlRoleRequestBodyNetworks };
export var UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum;
(function (UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum) {
    UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum["None"] = "none";
    UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum["ReadOnly"] = "read-only";
    UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum["Full"] = "full";
})(UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum || (UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum = {}));
export var UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum;
(function (UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum) {
    UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum["Full"] = "full";
    UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum["ReadOnly"] = "read-only";
    UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum["GuestAmbassador"] = "guest-ambassador";
    UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum["MonitorOnly"] = "monitor-only";
})(UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum || (UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum = {}));
var UpdateOrganizationSamlRoleRequestBodyTags = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlRoleRequestBodyTags, _super);
    function UpdateOrganizationSamlRoleRequestBodyTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlRoleRequestBodyTags.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlRoleRequestBodyTags.prototype, "tag", void 0);
    return UpdateOrganizationSamlRoleRequestBodyTags;
}(SpeakeasyBase));
export { UpdateOrganizationSamlRoleRequestBodyTags };
var UpdateOrganizationSamlRoleRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlRoleRequestBody, _super);
    function UpdateOrganizationSamlRoleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networks", elemType: UpdateOrganizationSamlRoleRequestBodyNetworks }),
        __metadata("design:type", Array)
    ], UpdateOrganizationSamlRoleRequestBody.prototype, "networks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgAccess" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlRoleRequestBody.prototype, "orgAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlRoleRequestBody.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: UpdateOrganizationSamlRoleRequestBodyTags }),
        __metadata("design:type", Array)
    ], UpdateOrganizationSamlRoleRequestBody.prototype, "tags", void 0);
    return UpdateOrganizationSamlRoleRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationSamlRoleRequestBody };
var UpdateOrganizationSamlRoleRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlRoleRequest, _super);
    function UpdateOrganizationSamlRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationSamlRolePathParams)
    ], UpdateOrganizationSamlRoleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationSamlRoleRequestBody)
    ], UpdateOrganizationSamlRoleRequest.prototype, "request", void 0);
    return UpdateOrganizationSamlRoleRequest;
}(SpeakeasyBase));
export { UpdateOrganizationSamlRoleRequest };
var UpdateOrganizationSamlRoleResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlRoleResponse, _super);
    function UpdateOrganizationSamlRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlRoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationSamlRoleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationSamlRoleResponse.prototype, "updateOrganizationSamlRole200ApplicationJsonObject", void 0);
    return UpdateOrganizationSamlRoleResponse;
}(SpeakeasyBase));
export { UpdateOrganizationSamlRoleResponse };
