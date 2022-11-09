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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DatastoreProjectsExportPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsExportPathParams, _super);
    function DatastoreProjectsExportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportPathParams.prototype, "projectId", void 0);
    return DatastoreProjectsExportPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsExportPathParams };
var DatastoreProjectsExportQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsExportQueryParams, _super);
    function DatastoreProjectsExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsExportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsExportQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsExportQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsExportQueryParams };
var DatastoreProjectsExportSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsExportSecurityOption1, _super);
    function DatastoreProjectsExportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsExportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsExportSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsExportSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsExportSecurityOption1 };
var DatastoreProjectsExportSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsExportSecurityOption2, _super);
    function DatastoreProjectsExportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsExportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsExportSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsExportSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsExportSecurityOption2 };
var DatastoreProjectsExportSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsExportSecurity, _super);
    function DatastoreProjectsExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsExportSecurityOption1)
    ], DatastoreProjectsExportSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsExportSecurityOption2)
    ], DatastoreProjectsExportSecurity.prototype, "option2", void 0);
    return DatastoreProjectsExportSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsExportSecurity };
var DatastoreProjectsExportRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsExportRequest, _super);
    function DatastoreProjectsExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatastoreProjectsExportPathParams)
    ], DatastoreProjectsExportRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatastoreProjectsExportQueryParams)
    ], DatastoreProjectsExportRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleDatastoreAdminV1beta1ExportEntitiesRequest)
    ], DatastoreProjectsExportRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatastoreProjectsExportSecurity)
    ], DatastoreProjectsExportRequest.prototype, "security", void 0);
    return DatastoreProjectsExportRequest;
}(SpeakeasyBase));
export { DatastoreProjectsExportRequest };
var DatastoreProjectsExportResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsExportResponse, _super);
    function DatastoreProjectsExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsExportResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DatastoreProjectsExportResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsExportResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsExportResponse;
}(SpeakeasyBase));
export { DatastoreProjectsExportResponse };
