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
var TagmanagerAccountsContainersMoveTagIdPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersMoveTagIdPathParams, _super);
    function TagmanagerAccountsContainersMoveTagIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdPathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersMoveTagIdPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersMoveTagIdPathParams };
var TagmanagerAccountsContainersMoveTagIdQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersMoveTagIdQueryParams, _super);
    function TagmanagerAccountsContainersMoveTagIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowUserPermissionFeatureUpdate" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "allowUserPermissionFeatureUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=copySettings" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "copySettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=copyTermsOfService" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "copyTermsOfService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=copyUsers" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "copyUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "tagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagName" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "tagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersMoveTagIdQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersMoveTagIdQueryParams };
var TagmanagerAccountsContainersMoveTagIdSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersMoveTagIdSecurity, _super);
    function TagmanagerAccountsContainersMoveTagIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersMoveTagIdSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersMoveTagIdSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersMoveTagIdSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersMoveTagIdSecurity };
var TagmanagerAccountsContainersMoveTagIdRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersMoveTagIdRequest, _super);
    function TagmanagerAccountsContainersMoveTagIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersMoveTagIdPathParams)
    ], TagmanagerAccountsContainersMoveTagIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersMoveTagIdQueryParams)
    ], TagmanagerAccountsContainersMoveTagIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersMoveTagIdSecurity)
    ], TagmanagerAccountsContainersMoveTagIdRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersMoveTagIdRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersMoveTagIdRequest };
var TagmanagerAccountsContainersMoveTagIdResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersMoveTagIdResponse, _super);
    function TagmanagerAccountsContainersMoveTagIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Container)
    ], TagmanagerAccountsContainersMoveTagIdResponse.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersMoveTagIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersMoveTagIdResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersMoveTagIdResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersMoveTagIdResponse };
