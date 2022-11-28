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
var CloudbuildProjectsTriggersGetPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersGetPathParams, _super);
    function CloudbuildProjectsTriggersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=triggerId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetPathParams.prototype, "triggerId", void 0);
    return CloudbuildProjectsTriggersGetPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersGetPathParams };
var CloudbuildProjectsTriggersGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersGetQueryParams, _super);
    function CloudbuildProjectsTriggersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsTriggersGetQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersGetQueryParams };
var CloudbuildProjectsTriggersGetSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersGetSecurity, _super);
    function CloudbuildProjectsTriggersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsTriggersGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsTriggersGetSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsTriggersGetSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersGetSecurity };
var CloudbuildProjectsTriggersGetRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersGetRequest, _super);
    function CloudbuildProjectsTriggersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsTriggersGetPathParams)
    ], CloudbuildProjectsTriggersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsTriggersGetQueryParams)
    ], CloudbuildProjectsTriggersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsTriggersGetSecurity)
    ], CloudbuildProjectsTriggersGetRequest.prototype, "security", void 0);
    return CloudbuildProjectsTriggersGetRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersGetRequest };
var CloudbuildProjectsTriggersGetResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersGetResponse, _super);
    function CloudbuildProjectsTriggersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BuildTrigger)
    ], CloudbuildProjectsTriggersGetResponse.prototype, "buildTrigger", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsTriggersGetResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsTriggersGetResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersGetResponse };
