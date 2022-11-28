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
var DataflowProjectsJobsDebugSendCapturePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugSendCapturePathParams, _super);
    function DataflowProjectsJobsDebugSendCapturePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCapturePathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCapturePathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsDebugSendCapturePathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugSendCapturePathParams };
var DataflowProjectsJobsDebugSendCaptureQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugSendCaptureQueryParams, _super);
    function DataflowProjectsJobsDebugSendCaptureQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsJobsDebugSendCaptureQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugSendCaptureQueryParams };
var DataflowProjectsJobsDebugSendCaptureSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugSendCaptureSecurityOption1, _super);
    function DataflowProjectsJobsDebugSendCaptureSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsDebugSendCaptureSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsDebugSendCaptureSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugSendCaptureSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugSendCaptureSecurityOption1 };
var DataflowProjectsJobsDebugSendCaptureSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugSendCaptureSecurityOption2, _super);
    function DataflowProjectsJobsDebugSendCaptureSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsDebugSendCaptureSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsDebugSendCaptureSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugSendCaptureSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugSendCaptureSecurityOption2 };
var DataflowProjectsJobsDebugSendCaptureSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugSendCaptureSecurityOption3, _super);
    function DataflowProjectsJobsDebugSendCaptureSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsDebugSendCaptureSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsDebugSendCaptureSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugSendCaptureSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugSendCaptureSecurityOption3 };
var DataflowProjectsJobsDebugSendCaptureSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugSendCaptureSecurityOption4, _super);
    function DataflowProjectsJobsDebugSendCaptureSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsDebugSendCaptureSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsDebugSendCaptureSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugSendCaptureSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugSendCaptureSecurityOption4 };
var DataflowProjectsJobsDebugSendCaptureSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugSendCaptureSecurity, _super);
    function DataflowProjectsJobsDebugSendCaptureSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugSendCaptureSecurityOption1)
    ], DataflowProjectsJobsDebugSendCaptureSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugSendCaptureSecurityOption2)
    ], DataflowProjectsJobsDebugSendCaptureSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugSendCaptureSecurityOption3)
    ], DataflowProjectsJobsDebugSendCaptureSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugSendCaptureSecurityOption4)
    ], DataflowProjectsJobsDebugSendCaptureSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsDebugSendCaptureSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugSendCaptureSecurity };
var DataflowProjectsJobsDebugSendCaptureRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugSendCaptureRequest, _super);
    function DataflowProjectsJobsDebugSendCaptureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsDebugSendCapturePathParams)
    ], DataflowProjectsJobsDebugSendCaptureRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsDebugSendCaptureQueryParams)
    ], DataflowProjectsJobsDebugSendCaptureRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendDebugCaptureRequest)
    ], DataflowProjectsJobsDebugSendCaptureRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsDebugSendCaptureSecurity)
    ], DataflowProjectsJobsDebugSendCaptureRequest.prototype, "security", void 0);
    return DataflowProjectsJobsDebugSendCaptureRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugSendCaptureRequest };
var DataflowProjectsJobsDebugSendCaptureResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugSendCaptureResponse, _super);
    function DataflowProjectsJobsDebugSendCaptureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugSendCaptureResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DataflowProjectsJobsDebugSendCaptureResponse.prototype, "sendDebugCaptureResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsDebugSendCaptureResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsDebugSendCaptureResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugSendCaptureResponse };
