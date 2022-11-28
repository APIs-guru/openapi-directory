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
var CloudtasksProjectsLocationsQueuesTasksBufferPathParams = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksBufferPathParams, _super);
    function CloudtasksProjectsLocationsQueuesTasksBufferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queue" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferPathParams.prototype, "queue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferPathParams.prototype, "taskId", void 0);
    return CloudtasksProjectsLocationsQueuesTasksBufferPathParams;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksBufferPathParams };
var CloudtasksProjectsLocationsQueuesTasksBufferQueryParams = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksBufferQueryParams, _super);
    function CloudtasksProjectsLocationsQueuesTasksBufferQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtasksProjectsLocationsQueuesTasksBufferQueryParams;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksBufferQueryParams };
var CloudtasksProjectsLocationsQueuesTasksBufferSecurity = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksBufferSecurity, _super);
    function CloudtasksProjectsLocationsQueuesTasksBufferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtasksProjectsLocationsQueuesTasksBufferSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtasksProjectsLocationsQueuesTasksBufferSecurity.prototype, "oauth2c", void 0);
    return CloudtasksProjectsLocationsQueuesTasksBufferSecurity;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksBufferSecurity };
var CloudtasksProjectsLocationsQueuesTasksBufferRequest = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksBufferRequest, _super);
    function CloudtasksProjectsLocationsQueuesTasksBufferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesTasksBufferPathParams)
    ], CloudtasksProjectsLocationsQueuesTasksBufferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesTasksBufferQueryParams)
    ], CloudtasksProjectsLocationsQueuesTasksBufferRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BufferTaskRequest)
    ], CloudtasksProjectsLocationsQueuesTasksBufferRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesTasksBufferSecurity)
    ], CloudtasksProjectsLocationsQueuesTasksBufferRequest.prototype, "security", void 0);
    return CloudtasksProjectsLocationsQueuesTasksBufferRequest;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksBufferRequest };
var CloudtasksProjectsLocationsQueuesTasksBufferResponse = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksBufferResponse, _super);
    function CloudtasksProjectsLocationsQueuesTasksBufferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BufferTaskResponse)
    ], CloudtasksProjectsLocationsQueuesTasksBufferResponse.prototype, "bufferTaskResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksBufferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtasksProjectsLocationsQueuesTasksBufferResponse.prototype, "statusCode", void 0);
    return CloudtasksProjectsLocationsQueuesTasksBufferResponse;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksBufferResponse };
