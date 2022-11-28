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
var GroupsSettingsGroupsGetPathParams = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsGetPathParams, _super);
    function GroupsSettingsGroupsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupUniqueId" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsGetPathParams.prototype, "groupUniqueId", void 0);
    return GroupsSettingsGroupsGetPathParams;
}(SpeakeasyBase));
export { GroupsSettingsGroupsGetPathParams };
var GroupsSettingsGroupsGetQueryParams = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsGetQueryParams, _super);
    function GroupsSettingsGroupsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GroupsSettingsGroupsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsGetQueryParams.prototype, "userIp", void 0);
    return GroupsSettingsGroupsGetQueryParams;
}(SpeakeasyBase));
export { GroupsSettingsGroupsGetQueryParams };
var GroupsSettingsGroupsGetSecurity = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsGetSecurity, _super);
    function GroupsSettingsGroupsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupsSettingsGroupsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GroupsSettingsGroupsGetSecurity.prototype, "oauth2c", void 0);
    return GroupsSettingsGroupsGetSecurity;
}(SpeakeasyBase));
export { GroupsSettingsGroupsGetSecurity };
var GroupsSettingsGroupsGetRequest = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsGetRequest, _super);
    function GroupsSettingsGroupsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsSettingsGroupsGetPathParams)
    ], GroupsSettingsGroupsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsSettingsGroupsGetQueryParams)
    ], GroupsSettingsGroupsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsSettingsGroupsGetSecurity)
    ], GroupsSettingsGroupsGetRequest.prototype, "security", void 0);
    return GroupsSettingsGroupsGetRequest;
}(SpeakeasyBase));
export { GroupsSettingsGroupsGetRequest };
var GroupsSettingsGroupsGetResponse = /** @class */ (function (_super) {
    __extends(GroupsSettingsGroupsGetResponse, _super);
    function GroupsSettingsGroupsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsSettingsGroupsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Groups)
    ], GroupsSettingsGroupsGetResponse.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsSettingsGroupsGetResponse.prototype, "statusCode", void 0);
    return GroupsSettingsGroupsGetResponse;
}(SpeakeasyBase));
export { GroupsSettingsGroupsGetResponse };
