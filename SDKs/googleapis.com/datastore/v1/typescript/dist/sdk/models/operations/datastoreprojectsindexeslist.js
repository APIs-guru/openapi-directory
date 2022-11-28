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
var DatastoreProjectsIndexesListPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsIndexesListPathParams, _super);
    function DatastoreProjectsIndexesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListPathParams.prototype, "projectId", void 0);
    return DatastoreProjectsIndexesListPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsIndexesListPathParams };
var DatastoreProjectsIndexesListQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsIndexesListQueryParams, _super);
    function DatastoreProjectsIndexesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsIndexesListQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsIndexesListQueryParams };
var DatastoreProjectsIndexesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsIndexesListSecurityOption1, _super);
    function DatastoreProjectsIndexesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsIndexesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsIndexesListSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsIndexesListSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsIndexesListSecurityOption1 };
var DatastoreProjectsIndexesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsIndexesListSecurityOption2, _super);
    function DatastoreProjectsIndexesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsIndexesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsIndexesListSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsIndexesListSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsIndexesListSecurityOption2 };
var DatastoreProjectsIndexesListSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsIndexesListSecurity, _super);
    function DatastoreProjectsIndexesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsIndexesListSecurityOption1)
    ], DatastoreProjectsIndexesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsIndexesListSecurityOption2)
    ], DatastoreProjectsIndexesListSecurity.prototype, "option2", void 0);
    return DatastoreProjectsIndexesListSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsIndexesListSecurity };
var DatastoreProjectsIndexesListRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsIndexesListRequest, _super);
    function DatastoreProjectsIndexesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsIndexesListPathParams)
    ], DatastoreProjectsIndexesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsIndexesListQueryParams)
    ], DatastoreProjectsIndexesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsIndexesListSecurity)
    ], DatastoreProjectsIndexesListRequest.prototype, "security", void 0);
    return DatastoreProjectsIndexesListRequest;
}(SpeakeasyBase));
export { DatastoreProjectsIndexesListRequest };
var DatastoreProjectsIndexesListResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsIndexesListResponse, _super);
    function DatastoreProjectsIndexesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsIndexesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleDatastoreAdminV1ListIndexesResponse)
    ], DatastoreProjectsIndexesListResponse.prototype, "googleDatastoreAdminV1ListIndexesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsIndexesListResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsIndexesListResponse;
}(SpeakeasyBase));
export { DatastoreProjectsIndexesListResponse };
