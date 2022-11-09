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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CloudresourcemanagerOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetPathParams, _super);
    function CloudresourcemanagerOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetPathParams.prototype, "name", void 0);
    return CloudresourcemanagerOperationsGetPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOperationsGetPathParams };
var CloudresourcemanagerOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetQueryParams, _super);
    function CloudresourcemanagerOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerOperationsGetQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOperationsGetQueryParams };
var CloudresourcemanagerOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetSecurityOption1, _super);
    function CloudresourcemanagerOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerOperationsGetSecurityOption1 };
var CloudresourcemanagerOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetSecurityOption2, _super);
    function CloudresourcemanagerOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerOperationsGetSecurityOption2 };
var CloudresourcemanagerOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetSecurity, _super);
    function CloudresourcemanagerOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOperationsGetSecurityOption1)
    ], CloudresourcemanagerOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOperationsGetSecurityOption2)
    ], CloudresourcemanagerOperationsGetSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerOperationsGetSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerOperationsGetSecurity };
var CloudresourcemanagerOperationsGetRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetRequest, _super);
    function CloudresourcemanagerOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerOperationsGetPathParams)
    ], CloudresourcemanagerOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerOperationsGetQueryParams)
    ], CloudresourcemanagerOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerOperationsGetSecurity)
    ], CloudresourcemanagerOperationsGetRequest.prototype, "security", void 0);
    return CloudresourcemanagerOperationsGetRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerOperationsGetRequest };
var CloudresourcemanagerOperationsGetResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOperationsGetResponse, _super);
    function CloudresourcemanagerOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudresourcemanagerOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerOperationsGetResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerOperationsGetResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerOperationsGetResponse };
