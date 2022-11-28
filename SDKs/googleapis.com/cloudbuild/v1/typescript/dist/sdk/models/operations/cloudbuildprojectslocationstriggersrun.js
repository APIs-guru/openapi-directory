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
var CloudbuildProjectsLocationsTriggersRunPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersRunPathParams, _super);
    function CloudbuildProjectsLocationsTriggersRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunPathParams.prototype, "name", void 0);
    return CloudbuildProjectsLocationsTriggersRunPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersRunPathParams };
var CloudbuildProjectsLocationsTriggersRunQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersRunQueryParams, _super);
    function CloudbuildProjectsLocationsTriggersRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsTriggersRunQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersRunQueryParams };
var CloudbuildProjectsLocationsTriggersRunSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersRunSecurity, _super);
    function CloudbuildProjectsLocationsTriggersRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsTriggersRunSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsTriggersRunSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsTriggersRunSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersRunSecurity };
var CloudbuildProjectsLocationsTriggersRunRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersRunRequest, _super);
    function CloudbuildProjectsLocationsTriggersRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsTriggersRunPathParams)
    ], CloudbuildProjectsLocationsTriggersRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsTriggersRunQueryParams)
    ], CloudbuildProjectsLocationsTriggersRunRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunBuildTriggerRequest)
    ], CloudbuildProjectsLocationsTriggersRunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsTriggersRunSecurity)
    ], CloudbuildProjectsLocationsTriggersRunRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsTriggersRunRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersRunRequest };
var CloudbuildProjectsLocationsTriggersRunResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsTriggersRunResponse, _super);
    function CloudbuildProjectsLocationsTriggersRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsTriggersRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudbuildProjectsLocationsTriggersRunResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsTriggersRunResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsTriggersRunResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsTriggersRunResponse };
