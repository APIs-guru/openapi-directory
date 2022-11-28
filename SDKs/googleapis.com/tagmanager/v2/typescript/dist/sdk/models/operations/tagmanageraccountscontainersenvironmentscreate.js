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
var TagmanagerAccountsContainersEnvironmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsCreatePathParams, _super);
    function TagmanagerAccountsContainersEnvironmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreatePathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersEnvironmentsCreatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsCreatePathParams };
var TagmanagerAccountsContainersEnvironmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsCreateQueryParams, _super);
    function TagmanagerAccountsContainersEnvironmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersEnvironmentsCreateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsCreateQueryParams };
var TagmanagerAccountsContainersEnvironmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsCreateSecurity, _super);
    function TagmanagerAccountsContainersEnvironmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersEnvironmentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersEnvironmentsCreateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersEnvironmentsCreateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsCreateSecurity };
var TagmanagerAccountsContainersEnvironmentsCreateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsCreateRequest, _super);
    function TagmanagerAccountsContainersEnvironmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsCreatePathParams)
    ], TagmanagerAccountsContainersEnvironmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsCreateQueryParams)
    ], TagmanagerAccountsContainersEnvironmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Environment)
    ], TagmanagerAccountsContainersEnvironmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsCreateSecurity)
    ], TagmanagerAccountsContainersEnvironmentsCreateRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersEnvironmentsCreateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsCreateRequest };
var TagmanagerAccountsContainersEnvironmentsCreateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsCreateResponse, _super);
    function TagmanagerAccountsContainersEnvironmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Environment)
    ], TagmanagerAccountsContainersEnvironmentsCreateResponse.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersEnvironmentsCreateResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersEnvironmentsCreateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsCreateResponse };
