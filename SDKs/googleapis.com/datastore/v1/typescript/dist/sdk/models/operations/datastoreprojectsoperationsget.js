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
var DatastoreProjectsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsGetPathParams, _super);
    function DatastoreProjectsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetPathParams.prototype, "name", void 0);
    return DatastoreProjectsOperationsGetPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsGetPathParams };
var DatastoreProjectsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsGetQueryParams, _super);
    function DatastoreProjectsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsOperationsGetQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsGetQueryParams };
var DatastoreProjectsOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsGetSecurityOption1, _super);
    function DatastoreProjectsOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsGetSecurityOption1 };
var DatastoreProjectsOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsGetSecurityOption2, _super);
    function DatastoreProjectsOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsGetSecurityOption2 };
var DatastoreProjectsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsGetSecurity, _super);
    function DatastoreProjectsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsOperationsGetSecurityOption1)
    ], DatastoreProjectsOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsOperationsGetSecurityOption2)
    ], DatastoreProjectsOperationsGetSecurity.prototype, "option2", void 0);
    return DatastoreProjectsOperationsGetSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsGetSecurity };
var DatastoreProjectsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsGetRequest, _super);
    function DatastoreProjectsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsOperationsGetPathParams)
    ], DatastoreProjectsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsOperationsGetQueryParams)
    ], DatastoreProjectsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsOperationsGetSecurity)
    ], DatastoreProjectsOperationsGetRequest.prototype, "security", void 0);
    return DatastoreProjectsOperationsGetRequest;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsGetRequest };
var DatastoreProjectsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsGetResponse, _super);
    function DatastoreProjectsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DatastoreProjectsOperationsGetResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsOperationsGetResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsOperationsGetResponse;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsGetResponse };
