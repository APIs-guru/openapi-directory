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
var CloudschedulerProjectsLocationsJobsRunPathParams = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsRunPathParams, _super);
    function CloudschedulerProjectsLocationsJobsRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunPathParams.prototype, "name", void 0);
    return CloudschedulerProjectsLocationsJobsRunPathParams;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsRunPathParams };
var CloudschedulerProjectsLocationsJobsRunQueryParams = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsRunQueryParams, _super);
    function CloudschedulerProjectsLocationsJobsRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunQueryParams.prototype, "uploadProtocol", void 0);
    return CloudschedulerProjectsLocationsJobsRunQueryParams;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsRunQueryParams };
var CloudschedulerProjectsLocationsJobsRunSecurity = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsRunSecurity, _super);
    function CloudschedulerProjectsLocationsJobsRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudschedulerProjectsLocationsJobsRunSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudschedulerProjectsLocationsJobsRunSecurity.prototype, "oauth2c", void 0);
    return CloudschedulerProjectsLocationsJobsRunSecurity;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsRunSecurity };
var CloudschedulerProjectsLocationsJobsRunRequest = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsRunRequest, _super);
    function CloudschedulerProjectsLocationsJobsRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsRunPathParams)
    ], CloudschedulerProjectsLocationsJobsRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsRunQueryParams)
    ], CloudschedulerProjectsLocationsJobsRunRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CloudschedulerProjectsLocationsJobsRunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudschedulerProjectsLocationsJobsRunSecurity)
    ], CloudschedulerProjectsLocationsJobsRunRequest.prototype, "security", void 0);
    return CloudschedulerProjectsLocationsJobsRunRequest;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsRunRequest };
var CloudschedulerProjectsLocationsJobsRunResponse = /** @class */ (function (_super) {
    __extends(CloudschedulerProjectsLocationsJobsRunResponse, _super);
    function CloudschedulerProjectsLocationsJobsRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudschedulerProjectsLocationsJobsRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], CloudschedulerProjectsLocationsJobsRunResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudschedulerProjectsLocationsJobsRunResponse.prototype, "statusCode", void 0);
    return CloudschedulerProjectsLocationsJobsRunResponse;
}(SpeakeasyBase));
export { CloudschedulerProjectsLocationsJobsRunResponse };
