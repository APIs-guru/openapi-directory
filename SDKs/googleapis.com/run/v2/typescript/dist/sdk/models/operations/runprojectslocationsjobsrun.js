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
var RunProjectsLocationsJobsRunPathParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsRunPathParams, _super);
    function RunProjectsLocationsJobsRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunPathParams.prototype, "name", void 0);
    return RunProjectsLocationsJobsRunPathParams;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsRunPathParams };
var RunProjectsLocationsJobsRunQueryParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsRunQueryParams, _super);
    function RunProjectsLocationsJobsRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunQueryParams.prototype, "uploadProtocol", void 0);
    return RunProjectsLocationsJobsRunQueryParams;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsRunQueryParams };
var RunProjectsLocationsJobsRunSecurity = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsRunSecurity, _super);
    function RunProjectsLocationsJobsRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunProjectsLocationsJobsRunSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunProjectsLocationsJobsRunSecurity.prototype, "oauth2c", void 0);
    return RunProjectsLocationsJobsRunSecurity;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsRunSecurity };
var RunProjectsLocationsJobsRunRequest = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsRunRequest, _super);
    function RunProjectsLocationsJobsRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsJobsRunPathParams)
    ], RunProjectsLocationsJobsRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsJobsRunQueryParams)
    ], RunProjectsLocationsJobsRunRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRunV2RunJobRequest)
    ], RunProjectsLocationsJobsRunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsJobsRunSecurity)
    ], RunProjectsLocationsJobsRunRequest.prototype, "security", void 0);
    return RunProjectsLocationsJobsRunRequest;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsRunRequest };
var RunProjectsLocationsJobsRunResponse = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsRunResponse, _super);
    function RunProjectsLocationsJobsRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RunProjectsLocationsJobsRunResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunProjectsLocationsJobsRunResponse.prototype, "statusCode", void 0);
    return RunProjectsLocationsJobsRunResponse;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsRunResponse };
