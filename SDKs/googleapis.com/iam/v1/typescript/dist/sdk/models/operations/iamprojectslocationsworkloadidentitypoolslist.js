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
var IamProjectsLocationsWorkloadIdentityPoolsListPathParams = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsListPathParams, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListPathParams.prototype, "parent", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsListPathParams;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsListPathParams };
var IamProjectsLocationsWorkloadIdentityPoolsListQueryParams = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsListQueryParams, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListQueryParams.prototype, "uploadProtocol", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsListQueryParams;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsListQueryParams };
var IamProjectsLocationsWorkloadIdentityPoolsListSecurity = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsListSecurity, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamProjectsLocationsWorkloadIdentityPoolsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamProjectsLocationsWorkloadIdentityPoolsListSecurity.prototype, "oauth2c", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsListSecurity;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsListSecurity };
var IamProjectsLocationsWorkloadIdentityPoolsListRequest = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsListRequest, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamProjectsLocationsWorkloadIdentityPoolsListPathParams)
    ], IamProjectsLocationsWorkloadIdentityPoolsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamProjectsLocationsWorkloadIdentityPoolsListQueryParams)
    ], IamProjectsLocationsWorkloadIdentityPoolsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IamProjectsLocationsWorkloadIdentityPoolsListSecurity)
    ], IamProjectsLocationsWorkloadIdentityPoolsListRequest.prototype, "security", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsListRequest;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsListRequest };
var IamProjectsLocationsWorkloadIdentityPoolsListResponse = /** @class */ (function (_super) {
    __extends(IamProjectsLocationsWorkloadIdentityPoolsListResponse, _super);
    function IamProjectsLocationsWorkloadIdentityPoolsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IamProjectsLocationsWorkloadIdentityPoolsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListWorkloadIdentityPoolsResponse)
    ], IamProjectsLocationsWorkloadIdentityPoolsListResponse.prototype, "listWorkloadIdentityPoolsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IamProjectsLocationsWorkloadIdentityPoolsListResponse.prototype, "statusCode", void 0);
    return IamProjectsLocationsWorkloadIdentityPoolsListResponse;
}(SpeakeasyBase));
export { IamProjectsLocationsWorkloadIdentityPoolsListResponse };
