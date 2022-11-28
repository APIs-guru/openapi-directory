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
import * as shared from "../shared";
var GroupsSettingsGroupsUpdatePathParams = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsUpdatePathParams, _super);
    function GroupsSettingsGroupsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupUniqueId" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsUpdatePathParams.prototype, "groupUniqueId", void 0);
    return GroupsSettingsGroupsUpdatePathParams;
}(SpeakeasyBase));
export { GroupsSettingsGroupsUpdatePathParams };
var GroupsSettingsGroupsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsUpdateQueryParams, _super);
    function GroupsSettingsGroupsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GroupsSettingsGroupsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsUpdateQueryParams.prototype, "userIp", void 0);
    return GroupsSettingsGroupsUpdateQueryParams;
}(SpeakeasyBase));
export { GroupsSettingsGroupsUpdateQueryParams };
var GroupsSettingsGroupsUpdateSecurity = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsUpdateSecurity, _super);
    function GroupsSettingsGroupsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupsSettingsGroupsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GroupsSettingsGroupsUpdateSecurity.prototype, "oauth2c", void 0);
    return GroupsSettingsGroupsUpdateSecurity;
}(SpeakeasyBase));
export { GroupsSettingsGroupsUpdateSecurity };
var GroupsSettingsGroupsUpdateRequest = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsUpdateRequest, _super);
    function GroupsSettingsGroupsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsSettingsGroupsUpdatePathParams)
    ], GroupsSettingsGroupsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsSettingsGroupsUpdateQueryParams)
    ], GroupsSettingsGroupsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Groups)
    ], GroupsSettingsGroupsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsSettingsGroupsUpdateSecurity)
    ], GroupsSettingsGroupsUpdateRequest.prototype, "security", void 0);
    return GroupsSettingsGroupsUpdateRequest;
}(SpeakeasyBase));
export { GroupsSettingsGroupsUpdateRequest };
var GroupsSettingsGroupsUpdateResponse = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsUpdateResponse, _super);
    function GroupsSettingsGroupsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Groups)
    ], GroupsSettingsGroupsUpdateResponse.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsSettingsGroupsUpdateResponse.prototype, "statusCode", void 0);
    return GroupsSettingsGroupsUpdateResponse;
}(SpeakeasyBase));
export { GroupsSettingsGroupsUpdateResponse };
