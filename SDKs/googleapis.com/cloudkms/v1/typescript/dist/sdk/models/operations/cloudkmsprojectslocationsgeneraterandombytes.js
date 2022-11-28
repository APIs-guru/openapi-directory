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
var CloudkmsProjectsLocationsGenerateRandomBytesPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsGenerateRandomBytesPathParams, _super);
    function CloudkmsProjectsLocationsGenerateRandomBytesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesPathParams.prototype, "location", void 0);
    return CloudkmsProjectsLocationsGenerateRandomBytesPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsGenerateRandomBytesPathParams };
var CloudkmsProjectsLocationsGenerateRandomBytesQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsGenerateRandomBytesQueryParams, _super);
    function CloudkmsProjectsLocationsGenerateRandomBytesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsGenerateRandomBytesQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsGenerateRandomBytesQueryParams };
var CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1, _super);
    function CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1 };
var CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2, _super);
    function CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2 };
var CloudkmsProjectsLocationsGenerateRandomBytesSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsGenerateRandomBytesSecurity, _super);
    function CloudkmsProjectsLocationsGenerateRandomBytesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1)
    ], CloudkmsProjectsLocationsGenerateRandomBytesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2)
    ], CloudkmsProjectsLocationsGenerateRandomBytesSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsGenerateRandomBytesSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsGenerateRandomBytesSecurity };
var CloudkmsProjectsLocationsGenerateRandomBytesRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsGenerateRandomBytesRequest, _super);
    function CloudkmsProjectsLocationsGenerateRandomBytesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsGenerateRandomBytesPathParams)
    ], CloudkmsProjectsLocationsGenerateRandomBytesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsGenerateRandomBytesQueryParams)
    ], CloudkmsProjectsLocationsGenerateRandomBytesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateRandomBytesRequest)
    ], CloudkmsProjectsLocationsGenerateRandomBytesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsGenerateRandomBytesSecurity)
    ], CloudkmsProjectsLocationsGenerateRandomBytesRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsGenerateRandomBytesRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsGenerateRandomBytesRequest };
var CloudkmsProjectsLocationsGenerateRandomBytesResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsGenerateRandomBytesResponse, _super);
    function CloudkmsProjectsLocationsGenerateRandomBytesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsGenerateRandomBytesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateRandomBytesResponse)
    ], CloudkmsProjectsLocationsGenerateRandomBytesResponse.prototype, "generateRandomBytesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsGenerateRandomBytesResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsGenerateRandomBytesResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsGenerateRandomBytesResponse };
