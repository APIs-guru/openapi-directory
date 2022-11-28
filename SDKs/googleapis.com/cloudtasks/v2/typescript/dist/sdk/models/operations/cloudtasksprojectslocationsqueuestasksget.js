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
var CloudtasksProjectsLocationsQueuesTasksGetPathParams = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksGetPathParams, _super);
    function CloudtasksProjectsLocationsQueuesTasksGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetPathParams.prototype, "name", void 0);
    return CloudtasksProjectsLocationsQueuesTasksGetPathParams;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksGetPathParams };
export var CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum;
(function (CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum) {
    CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum["Basic"] = "BASIC";
    CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum["Full"] = "FULL";
})(CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum || (CloudtasksProjectsLocationsQueuesTasksGetResponseViewEnum = {}));
var CloudtasksProjectsLocationsQueuesTasksGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksGetQueryParams, _super);
    function CloudtasksProjectsLocationsQueuesTasksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=responseView" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "responseView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtasksProjectsLocationsQueuesTasksGetQueryParams;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksGetQueryParams };
var CloudtasksProjectsLocationsQueuesTasksGetSecurity = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksGetSecurity, _super);
    function CloudtasksProjectsLocationsQueuesTasksGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtasksProjectsLocationsQueuesTasksGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtasksProjectsLocationsQueuesTasksGetSecurity.prototype, "oauth2c", void 0);
    return CloudtasksProjectsLocationsQueuesTasksGetSecurity;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksGetSecurity };
var CloudtasksProjectsLocationsQueuesTasksGetRequest = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksGetRequest, _super);
    function CloudtasksProjectsLocationsQueuesTasksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesTasksGetPathParams)
    ], CloudtasksProjectsLocationsQueuesTasksGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesTasksGetQueryParams)
    ], CloudtasksProjectsLocationsQueuesTasksGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesTasksGetSecurity)
    ], CloudtasksProjectsLocationsQueuesTasksGetRequest.prototype, "security", void 0);
    return CloudtasksProjectsLocationsQueuesTasksGetRequest;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksGetRequest };
var CloudtasksProjectsLocationsQueuesTasksGetResponse = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksGetResponse, _super);
    function CloudtasksProjectsLocationsQueuesTasksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtasksProjectsLocationsQueuesTasksGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Task)
    ], CloudtasksProjectsLocationsQueuesTasksGetResponse.prototype, "task", void 0);
    return CloudtasksProjectsLocationsQueuesTasksGetResponse;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksGetResponse };
