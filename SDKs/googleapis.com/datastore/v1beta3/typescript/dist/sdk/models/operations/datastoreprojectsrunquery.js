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
var DatastoreProjectsRunQueryPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRunQueryPathParams, _super);
    function DatastoreProjectsRunQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryPathParams.prototype, "projectId", void 0);
    return DatastoreProjectsRunQueryPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsRunQueryPathParams };
var DatastoreProjectsRunQueryQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRunQueryQueryParams, _super);
    function DatastoreProjectsRunQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsRunQueryQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsRunQueryQueryParams };
var DatastoreProjectsRunQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRunQuerySecurityOption1, _super);
    function DatastoreProjectsRunQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsRunQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsRunQuerySecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsRunQuerySecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsRunQuerySecurityOption1 };
var DatastoreProjectsRunQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRunQuerySecurityOption2, _super);
    function DatastoreProjectsRunQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsRunQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsRunQuerySecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsRunQuerySecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsRunQuerySecurityOption2 };
var DatastoreProjectsRunQuerySecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRunQuerySecurity, _super);
    function DatastoreProjectsRunQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsRunQuerySecurityOption1)
    ], DatastoreProjectsRunQuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsRunQuerySecurityOption2)
    ], DatastoreProjectsRunQuerySecurity.prototype, "option2", void 0);
    return DatastoreProjectsRunQuerySecurity;
}(SpeakeasyBase));
export { DatastoreProjectsRunQuerySecurity };
var DatastoreProjectsRunQueryRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRunQueryRequest, _super);
    function DatastoreProjectsRunQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsRunQueryPathParams)
    ], DatastoreProjectsRunQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsRunQueryQueryParams)
    ], DatastoreProjectsRunQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunQueryRequest)
    ], DatastoreProjectsRunQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsRunQuerySecurity)
    ], DatastoreProjectsRunQueryRequest.prototype, "security", void 0);
    return DatastoreProjectsRunQueryRequest;
}(SpeakeasyBase));
export { DatastoreProjectsRunQueryRequest };
var DatastoreProjectsRunQueryResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRunQueryResponse, _super);
    function DatastoreProjectsRunQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsRunQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RunQueryResponse)
    ], DatastoreProjectsRunQueryResponse.prototype, "runQueryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsRunQueryResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsRunQueryResponse;
}(SpeakeasyBase));
export { DatastoreProjectsRunQueryResponse };
