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
var TagmanagerAccountsContainersVersionHeadersLatestPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionHeadersLatestPathParams, _super);
    function TagmanagerAccountsContainersVersionHeadersLatestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestPathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersVersionHeadersLatestPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionHeadersLatestPathParams };
var TagmanagerAccountsContainersVersionHeadersLatestQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionHeadersLatestQueryParams, _super);
    function TagmanagerAccountsContainersVersionHeadersLatestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersVersionHeadersLatestQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionHeadersLatestQueryParams };
var TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1, _super);
    function TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1 };
var TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2, _super);
    function TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2 };
var TagmanagerAccountsContainersVersionHeadersLatestSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionHeadersLatestSecurity, _super);
    function TagmanagerAccountsContainersVersionHeadersLatestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersVersionHeadersLatestSecurityOption1)
    ], TagmanagerAccountsContainersVersionHeadersLatestSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersVersionHeadersLatestSecurityOption2)
    ], TagmanagerAccountsContainersVersionHeadersLatestSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersVersionHeadersLatestSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionHeadersLatestSecurity };
var TagmanagerAccountsContainersVersionHeadersLatestRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionHeadersLatestRequest, _super);
    function TagmanagerAccountsContainersVersionHeadersLatestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionHeadersLatestPathParams)
    ], TagmanagerAccountsContainersVersionHeadersLatestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionHeadersLatestQueryParams)
    ], TagmanagerAccountsContainersVersionHeadersLatestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionHeadersLatestSecurity)
    ], TagmanagerAccountsContainersVersionHeadersLatestRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersVersionHeadersLatestRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionHeadersLatestRequest };
var TagmanagerAccountsContainersVersionHeadersLatestResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionHeadersLatestResponse, _super);
    function TagmanagerAccountsContainersVersionHeadersLatestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContainerVersionHeader)
    ], TagmanagerAccountsContainersVersionHeadersLatestResponse.prototype, "containerVersionHeader", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionHeadersLatestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersVersionHeadersLatestResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersVersionHeadersLatestResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionHeadersLatestResponse };
