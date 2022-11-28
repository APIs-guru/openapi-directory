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
var CloudbuildProjectsTriggersCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersCreatePathParams, _super);
    function CloudbuildProjectsTriggersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreatePathParams.prototype, "projectId", void 0);
    return CloudbuildProjectsTriggersCreatePathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersCreatePathParams };
var CloudbuildProjectsTriggersCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersCreateQueryParams, _super);
    function CloudbuildProjectsTriggersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsTriggersCreateQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersCreateQueryParams };
var CloudbuildProjectsTriggersCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersCreateSecurity, _super);
    function CloudbuildProjectsTriggersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsTriggersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsTriggersCreateSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsTriggersCreateSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersCreateSecurity };
var CloudbuildProjectsTriggersCreateRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersCreateRequest, _super);
    function CloudbuildProjectsTriggersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsTriggersCreatePathParams)
    ], CloudbuildProjectsTriggersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsTriggersCreateQueryParams)
    ], CloudbuildProjectsTriggersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BuildTriggerInput)
    ], CloudbuildProjectsTriggersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsTriggersCreateSecurity)
    ], CloudbuildProjectsTriggersCreateRequest.prototype, "security", void 0);
    return CloudbuildProjectsTriggersCreateRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersCreateRequest };
var CloudbuildProjectsTriggersCreateResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsTriggersCreateResponse, _super);
    function CloudbuildProjectsTriggersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BuildTrigger)
    ], CloudbuildProjectsTriggersCreateResponse.prototype, "buildTrigger", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsTriggersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsTriggersCreateResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsTriggersCreateResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsTriggersCreateResponse };
