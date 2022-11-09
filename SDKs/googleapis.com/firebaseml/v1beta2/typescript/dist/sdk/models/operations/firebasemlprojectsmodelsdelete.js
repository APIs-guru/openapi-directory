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
var FirebasemlProjectsModelsDeletePathParams = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsDeletePathParams, _super);
    function FirebasemlProjectsModelsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeletePathParams.prototype, "name", void 0);
    return FirebasemlProjectsModelsDeletePathParams;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsDeletePathParams };
var FirebasemlProjectsModelsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsDeleteQueryParams, _super);
    function FirebasemlProjectsModelsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasemlProjectsModelsDeleteQueryParams;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsDeleteQueryParams };
var FirebasemlProjectsModelsDeleteSecurity = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsDeleteSecurity, _super);
    function FirebasemlProjectsModelsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasemlProjectsModelsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasemlProjectsModelsDeleteSecurity.prototype, "oauth2c", void 0);
    return FirebasemlProjectsModelsDeleteSecurity;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsDeleteSecurity };
var FirebasemlProjectsModelsDeleteRequest = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsDeleteRequest, _super);
    function FirebasemlProjectsModelsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasemlProjectsModelsDeletePathParams)
    ], FirebasemlProjectsModelsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasemlProjectsModelsDeleteQueryParams)
    ], FirebasemlProjectsModelsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasemlProjectsModelsDeleteSecurity)
    ], FirebasemlProjectsModelsDeleteRequest.prototype, "security", void 0);
    return FirebasemlProjectsModelsDeleteRequest;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsDeleteRequest };
var FirebasemlProjectsModelsDeleteResponse = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsDeleteResponse, _super);
    function FirebasemlProjectsModelsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FirebasemlProjectsModelsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebasemlProjectsModelsDeleteResponse.prototype, "statusCode", void 0);
    return FirebasemlProjectsModelsDeleteResponse;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsDeleteResponse };
