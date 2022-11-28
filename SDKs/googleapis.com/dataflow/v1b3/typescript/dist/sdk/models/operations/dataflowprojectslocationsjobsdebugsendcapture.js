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
var DataflowProjectsLocationsJobsDebugSendCapturePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugSendCapturePathParams, _super);
    function DataflowProjectsLocationsJobsDebugSendCapturePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCapturePathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCapturePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCapturePathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsDebugSendCapturePathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugSendCapturePathParams };
var DataflowProjectsLocationsJobsDebugSendCaptureQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugSendCaptureQueryParams, _super);
    function DataflowProjectsLocationsJobsDebugSendCaptureQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsDebugSendCaptureQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugSendCaptureQueryParams };
var DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1, _super);
    function DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1 };
var DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2, _super);
    function DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2 };
var DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3, _super);
    function DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3 };
var DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4, _super);
    function DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4 };
var DataflowProjectsLocationsJobsDebugSendCaptureSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugSendCaptureSecurity, _super);
    function DataflowProjectsLocationsJobsDebugSendCaptureSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4)
    ], DataflowProjectsLocationsJobsDebugSendCaptureSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsDebugSendCaptureSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugSendCaptureSecurity };
var DataflowProjectsLocationsJobsDebugSendCaptureRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugSendCaptureRequest, _super);
    function DataflowProjectsLocationsJobsDebugSendCaptureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugSendCapturePathParams)
    ], DataflowProjectsLocationsJobsDebugSendCaptureRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugSendCaptureQueryParams)
    ], DataflowProjectsLocationsJobsDebugSendCaptureRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendDebugCaptureRequest)
    ], DataflowProjectsLocationsJobsDebugSendCaptureRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugSendCaptureSecurity)
    ], DataflowProjectsLocationsJobsDebugSendCaptureRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsDebugSendCaptureRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugSendCaptureRequest };
var DataflowProjectsLocationsJobsDebugSendCaptureResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugSendCaptureResponse, _super);
    function DataflowProjectsLocationsJobsDebugSendCaptureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugSendCaptureResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DataflowProjectsLocationsJobsDebugSendCaptureResponse.prototype, "sendDebugCaptureResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsDebugSendCaptureResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsDebugSendCaptureResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugSendCaptureResponse };
