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
var CloudtasksProjectsLocationsQueuesResumePathParams = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesResumePathParams, _super);
    function CloudtasksProjectsLocationsQueuesResumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumePathParams.prototype, "name", void 0);
    return CloudtasksProjectsLocationsQueuesResumePathParams;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesResumePathParams };
var CloudtasksProjectsLocationsQueuesResumeQueryParams = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesResumeQueryParams, _super);
    function CloudtasksProjectsLocationsQueuesResumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtasksProjectsLocationsQueuesResumeQueryParams;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesResumeQueryParams };
var CloudtasksProjectsLocationsQueuesResumeSecurity = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesResumeSecurity, _super);
    function CloudtasksProjectsLocationsQueuesResumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtasksProjectsLocationsQueuesResumeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtasksProjectsLocationsQueuesResumeSecurity.prototype, "oauth2c", void 0);
    return CloudtasksProjectsLocationsQueuesResumeSecurity;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesResumeSecurity };
var CloudtasksProjectsLocationsQueuesResumeRequest = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesResumeRequest, _super);
    function CloudtasksProjectsLocationsQueuesResumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesResumePathParams)
    ], CloudtasksProjectsLocationsQueuesResumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesResumeQueryParams)
    ], CloudtasksProjectsLocationsQueuesResumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CloudtasksProjectsLocationsQueuesResumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesResumeSecurity)
    ], CloudtasksProjectsLocationsQueuesResumeRequest.prototype, "security", void 0);
    return CloudtasksProjectsLocationsQueuesResumeRequest;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesResumeRequest };
var CloudtasksProjectsLocationsQueuesResumeResponse = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesResumeResponse, _super);
    function CloudtasksProjectsLocationsQueuesResumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesResumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Queue1)
    ], CloudtasksProjectsLocationsQueuesResumeResponse.prototype, "queue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtasksProjectsLocationsQueuesResumeResponse.prototype, "statusCode", void 0);
    return CloudtasksProjectsLocationsQueuesResumeResponse;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesResumeResponse };
