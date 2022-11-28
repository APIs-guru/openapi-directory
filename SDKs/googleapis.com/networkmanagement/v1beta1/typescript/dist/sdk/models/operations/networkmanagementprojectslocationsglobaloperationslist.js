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
var NetworkmanagementProjectsLocationsGlobalOperationsListPathParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsListPathParams, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListPathParams.prototype, "name", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsListPathParams;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalOperationsListPathParams };
var NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams };
var NetworkmanagementProjectsLocationsGlobalOperationsListSecurity = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsListSecurity, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListSecurity.prototype, "oauth2c", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsListSecurity;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalOperationsListSecurity };
var NetworkmanagementProjectsLocationsGlobalOperationsListRequest = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsListRequest, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalOperationsListPathParams)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalOperationsListQueryParams)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalOperationsListSecurity)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListRequest.prototype, "security", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsListRequest;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalOperationsListRequest };
var NetworkmanagementProjectsLocationsGlobalOperationsListResponse = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalOperationsListResponse, _super);
    function NetworkmanagementProjectsLocationsGlobalOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkmanagementProjectsLocationsGlobalOperationsListResponse.prototype, "statusCode", void 0);
    return NetworkmanagementProjectsLocationsGlobalOperationsListResponse;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalOperationsListResponse };
