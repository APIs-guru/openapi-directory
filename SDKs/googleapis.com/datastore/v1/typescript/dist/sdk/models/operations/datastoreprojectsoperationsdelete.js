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
var DatastoreProjectsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsDeletePathParams, _super);
    function DatastoreProjectsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeletePathParams.prototype, "name", void 0);
    return DatastoreProjectsOperationsDeletePathParams;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsDeletePathParams };
var DatastoreProjectsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsDeleteQueryParams, _super);
    function DatastoreProjectsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsDeleteQueryParams };
var DatastoreProjectsOperationsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsDeleteSecurityOption1, _super);
    function DatastoreProjectsOperationsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsOperationsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsOperationsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsOperationsDeleteSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsDeleteSecurityOption1 };
var DatastoreProjectsOperationsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsDeleteSecurityOption2, _super);
    function DatastoreProjectsOperationsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsOperationsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsOperationsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsOperationsDeleteSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsDeleteSecurityOption2 };
var DatastoreProjectsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsDeleteSecurity, _super);
    function DatastoreProjectsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsOperationsDeleteSecurityOption1)
    ], DatastoreProjectsOperationsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsOperationsDeleteSecurityOption2)
    ], DatastoreProjectsOperationsDeleteSecurity.prototype, "option2", void 0);
    return DatastoreProjectsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsDeleteSecurity };
var DatastoreProjectsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsDeleteRequest, _super);
    function DatastoreProjectsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsOperationsDeletePathParams)
    ], DatastoreProjectsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsOperationsDeleteQueryParams)
    ], DatastoreProjectsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsOperationsDeleteSecurity)
    ], DatastoreProjectsOperationsDeleteRequest.prototype, "security", void 0);
    return DatastoreProjectsOperationsDeleteRequest;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsDeleteRequest };
var DatastoreProjectsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsOperationsDeleteResponse, _super);
    function DatastoreProjectsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DatastoreProjectsOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsOperationsDeleteResponse;
}(SpeakeasyBase));
export { DatastoreProjectsOperationsDeleteResponse };
