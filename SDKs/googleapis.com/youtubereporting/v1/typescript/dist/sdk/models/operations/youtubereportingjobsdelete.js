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
var YoutubereportingJobsDeletePathParams = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsDeletePathParams, _super);
    function YoutubereportingJobsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeletePathParams.prototype, "jobId", void 0);
    return YoutubereportingJobsDeletePathParams;
}(SpeakeasyBase));
export { YoutubereportingJobsDeletePathParams };
var YoutubereportingJobsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsDeleteQueryParams, _super);
    function YoutubereportingJobsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubereportingJobsDeleteQueryParams;
}(SpeakeasyBase));
export { YoutubereportingJobsDeleteQueryParams };
var YoutubereportingJobsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsDeleteSecurityOption1, _super);
    function YoutubereportingJobsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingJobsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingJobsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubereportingJobsDeleteSecurityOption1;
}(SpeakeasyBase));
export { YoutubereportingJobsDeleteSecurityOption1 };
var YoutubereportingJobsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsDeleteSecurityOption2, _super);
    function YoutubereportingJobsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubereportingJobsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubereportingJobsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubereportingJobsDeleteSecurityOption2;
}(SpeakeasyBase));
export { YoutubereportingJobsDeleteSecurityOption2 };
var YoutubereportingJobsDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsDeleteSecurity, _super);
    function YoutubereportingJobsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingJobsDeleteSecurityOption1)
    ], YoutubereportingJobsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubereportingJobsDeleteSecurityOption2)
    ], YoutubereportingJobsDeleteSecurity.prototype, "option2", void 0);
    return YoutubereportingJobsDeleteSecurity;
}(SpeakeasyBase));
export { YoutubereportingJobsDeleteSecurity };
var YoutubereportingJobsDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsDeleteRequest, _super);
    function YoutubereportingJobsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingJobsDeletePathParams)
    ], YoutubereportingJobsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingJobsDeleteQueryParams)
    ], YoutubereportingJobsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubereportingJobsDeleteSecurity)
    ], YoutubereportingJobsDeleteRequest.prototype, "security", void 0);
    return YoutubereportingJobsDeleteRequest;
}(SpeakeasyBase));
export { YoutubereportingJobsDeleteRequest };
var YoutubereportingJobsDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubereportingJobsDeleteResponse, _super);
    function YoutubereportingJobsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubereportingJobsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], YoutubereportingJobsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubereportingJobsDeleteResponse.prototype, "statusCode", void 0);
    return YoutubereportingJobsDeleteResponse;
}(SpeakeasyBase));
export { YoutubereportingJobsDeleteResponse };
