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
var TagmanagerAccountsContainersVersionsUndeletePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsUndeletePathParams, _super);
    function TagmanagerAccountsContainersVersionsUndeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeletePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeletePathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerVersionId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeletePathParams.prototype, "containerVersionId", void 0);
    return TagmanagerAccountsContainersVersionsUndeletePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsUndeletePathParams };
var TagmanagerAccountsContainersVersionsUndeleteQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsUndeleteQueryParams, _super);
    function TagmanagerAccountsContainersVersionsUndeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersVersionsUndeleteQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsUndeleteQueryParams };
var TagmanagerAccountsContainersVersionsUndeleteSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsUndeleteSecurity, _super);
    function TagmanagerAccountsContainersVersionsUndeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVersionsUndeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVersionsUndeleteSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVersionsUndeleteSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsUndeleteSecurity };
var TagmanagerAccountsContainersVersionsUndeleteRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsUndeleteRequest, _super);
    function TagmanagerAccountsContainersVersionsUndeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsUndeletePathParams)
    ], TagmanagerAccountsContainersVersionsUndeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsUndeleteQueryParams)
    ], TagmanagerAccountsContainersVersionsUndeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsUndeleteSecurity)
    ], TagmanagerAccountsContainersVersionsUndeleteRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersVersionsUndeleteRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsUndeleteRequest };
var TagmanagerAccountsContainersVersionsUndeleteResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsUndeleteResponse, _super);
    function TagmanagerAccountsContainersVersionsUndeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContainerVersion)
    ], TagmanagerAccountsContainersVersionsUndeleteResponse.prototype, "containerVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsUndeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersVersionsUndeleteResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersVersionsUndeleteResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsUndeleteResponse };
