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
var CloudtasksProjectsLocationsQueuesTasksListPathParams = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksListPathParams, _super);
    function CloudtasksProjectsLocationsQueuesTasksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListPathParams.prototype, "parent", void 0);
    return CloudtasksProjectsLocationsQueuesTasksListPathParams;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksListPathParams };
export var CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum;
(function (CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum) {
    CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum["Basic"] = "BASIC";
    CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum["Full"] = "FULL";
})(CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum || (CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum = {}));
var CloudtasksProjectsLocationsQueuesTasksListQueryParams = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksListQueryParams, _super);
    function CloudtasksProjectsLocationsQueuesTasksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=responseView" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "responseView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtasksProjectsLocationsQueuesTasksListQueryParams;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksListQueryParams };
var CloudtasksProjectsLocationsQueuesTasksListSecurity = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksListSecurity, _super);
    function CloudtasksProjectsLocationsQueuesTasksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtasksProjectsLocationsQueuesTasksListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtasksProjectsLocationsQueuesTasksListSecurity.prototype, "oauth2c", void 0);
    return CloudtasksProjectsLocationsQueuesTasksListSecurity;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksListSecurity };
var CloudtasksProjectsLocationsQueuesTasksListRequest = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksListRequest, _super);
    function CloudtasksProjectsLocationsQueuesTasksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesTasksListPathParams)
    ], CloudtasksProjectsLocationsQueuesTasksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesTasksListQueryParams)
    ], CloudtasksProjectsLocationsQueuesTasksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtasksProjectsLocationsQueuesTasksListSecurity)
    ], CloudtasksProjectsLocationsQueuesTasksListRequest.prototype, "security", void 0);
    return CloudtasksProjectsLocationsQueuesTasksListRequest;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksListRequest };
var CloudtasksProjectsLocationsQueuesTasksListResponse = /** @class */ (function (_super) {
    __extends(CloudtasksProjectsLocationsQueuesTasksListResponse, _super);
    function CloudtasksProjectsLocationsQueuesTasksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtasksProjectsLocationsQueuesTasksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTasksResponse)
    ], CloudtasksProjectsLocationsQueuesTasksListResponse.prototype, "listTasksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtasksProjectsLocationsQueuesTasksListResponse.prototype, "statusCode", void 0);
    return CloudtasksProjectsLocationsQueuesTasksListResponse;
}(SpeakeasyBase));
export { CloudtasksProjectsLocationsQueuesTasksListResponse };
