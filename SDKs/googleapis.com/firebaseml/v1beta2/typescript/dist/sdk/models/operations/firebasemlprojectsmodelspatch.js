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
var FirebasemlProjectsModelsPatchPathParams = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsPatchPathParams, _super);
    function FirebasemlProjectsModelsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchPathParams.prototype, "name", void 0);
    return FirebasemlProjectsModelsPatchPathParams;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsPatchPathParams };
var FirebasemlProjectsModelsPatchQueryParams = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsPatchQueryParams, _super);
    function FirebasemlProjectsModelsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasemlProjectsModelsPatchQueryParams;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsPatchQueryParams };
var FirebasemlProjectsModelsPatchSecurity = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsPatchSecurity, _super);
    function FirebasemlProjectsModelsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasemlProjectsModelsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasemlProjectsModelsPatchSecurity.prototype, "oauth2c", void 0);
    return FirebasemlProjectsModelsPatchSecurity;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsPatchSecurity };
var FirebasemlProjectsModelsPatchRequest = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsPatchRequest, _super);
    function FirebasemlProjectsModelsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasemlProjectsModelsPatchPathParams)
    ], FirebasemlProjectsModelsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasemlProjectsModelsPatchQueryParams)
    ], FirebasemlProjectsModelsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Model)
    ], FirebasemlProjectsModelsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasemlProjectsModelsPatchSecurity)
    ], FirebasemlProjectsModelsPatchRequest.prototype, "security", void 0);
    return FirebasemlProjectsModelsPatchRequest;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsPatchRequest };
var FirebasemlProjectsModelsPatchResponse = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsPatchResponse, _super);
    function FirebasemlProjectsModelsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], FirebasemlProjectsModelsPatchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebasemlProjectsModelsPatchResponse.prototype, "statusCode", void 0);
    return FirebasemlProjectsModelsPatchResponse;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsPatchResponse };
