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
var CloudresourcemanagerTagValuesGetPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetPathParams, _super);
    function CloudresourcemanagerTagValuesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetPathParams.prototype, "name", void 0);
    return CloudresourcemanagerTagValuesGetPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetPathParams };
var CloudresourcemanagerTagValuesGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetQueryParams, _super);
    function CloudresourcemanagerTagValuesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerTagValuesGetQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetQueryParams };
var CloudresourcemanagerTagValuesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetSecurityOption1, _super);
    function CloudresourcemanagerTagValuesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagValuesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagValuesGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagValuesGetSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetSecurityOption1 };
var CloudresourcemanagerTagValuesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetSecurityOption2, _super);
    function CloudresourcemanagerTagValuesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagValuesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagValuesGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagValuesGetSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetSecurityOption2 };
var CloudresourcemanagerTagValuesGetSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetSecurity, _super);
    function CloudresourcemanagerTagValuesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagValuesGetSecurityOption1)
    ], CloudresourcemanagerTagValuesGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagValuesGetSecurityOption2)
    ], CloudresourcemanagerTagValuesGetSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerTagValuesGetSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetSecurity };
var CloudresourcemanagerTagValuesGetRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetRequest, _super);
    function CloudresourcemanagerTagValuesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesGetPathParams)
    ], CloudresourcemanagerTagValuesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesGetQueryParams)
    ], CloudresourcemanagerTagValuesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesGetSecurity)
    ], CloudresourcemanagerTagValuesGetRequest.prototype, "security", void 0);
    return CloudresourcemanagerTagValuesGetRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetRequest };
var CloudresourcemanagerTagValuesGetResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesGetResponse, _super);
    function CloudresourcemanagerTagValuesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagValuesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TagValue)
    ], CloudresourcemanagerTagValuesGetResponse.prototype, "tagValue", void 0);
    return CloudresourcemanagerTagValuesGetResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesGetResponse };
