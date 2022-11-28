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
var DatastoreProjectsLookupPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsLookupPathParams, _super);
    function DatastoreProjectsLookupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupPathParams.prototype, "projectId", void 0);
    return DatastoreProjectsLookupPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsLookupPathParams };
var DatastoreProjectsLookupQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsLookupQueryParams, _super);
    function DatastoreProjectsLookupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsLookupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsLookupQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsLookupQueryParams };
var DatastoreProjectsLookupSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsLookupSecurityOption1, _super);
    function DatastoreProjectsLookupSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsLookupSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsLookupSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsLookupSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsLookupSecurityOption1 };
var DatastoreProjectsLookupSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsLookupSecurityOption2, _super);
    function DatastoreProjectsLookupSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsLookupSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsLookupSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsLookupSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsLookupSecurityOption2 };
var DatastoreProjectsLookupSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsLookupSecurity, _super);
    function DatastoreProjectsLookupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsLookupSecurityOption1)
    ], DatastoreProjectsLookupSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsLookupSecurityOption2)
    ], DatastoreProjectsLookupSecurity.prototype, "option2", void 0);
    return DatastoreProjectsLookupSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsLookupSecurity };
var DatastoreProjectsLookupRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsLookupRequest, _super);
    function DatastoreProjectsLookupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsLookupPathParams)
    ], DatastoreProjectsLookupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsLookupQueryParams)
    ], DatastoreProjectsLookupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LookupRequest)
    ], DatastoreProjectsLookupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsLookupSecurity)
    ], DatastoreProjectsLookupRequest.prototype, "security", void 0);
    return DatastoreProjectsLookupRequest;
}(SpeakeasyBase));
export { DatastoreProjectsLookupRequest };
var DatastoreProjectsLookupResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsLookupResponse, _super);
    function DatastoreProjectsLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsLookupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LookupResponse)
    ], DatastoreProjectsLookupResponse.prototype, "lookupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsLookupResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsLookupResponse;
}(SpeakeasyBase));
export { DatastoreProjectsLookupResponse };
