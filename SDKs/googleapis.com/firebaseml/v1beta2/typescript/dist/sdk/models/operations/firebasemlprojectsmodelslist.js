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
var FirebasemlProjectsModelsListPathParams = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsListPathParams, _super);
    function FirebasemlProjectsModelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListPathParams.prototype, "parent", void 0);
    return FirebasemlProjectsModelsListPathParams;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsListPathParams };
var FirebasemlProjectsModelsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsListQueryParams, _super);
    function FirebasemlProjectsModelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasemlProjectsModelsListQueryParams;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsListQueryParams };
var FirebasemlProjectsModelsListSecurity = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsListSecurity, _super);
    function FirebasemlProjectsModelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasemlProjectsModelsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasemlProjectsModelsListSecurity.prototype, "oauth2c", void 0);
    return FirebasemlProjectsModelsListSecurity;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsListSecurity };
var FirebasemlProjectsModelsListRequest = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsListRequest, _super);
    function FirebasemlProjectsModelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasemlProjectsModelsListPathParams)
    ], FirebasemlProjectsModelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasemlProjectsModelsListQueryParams)
    ], FirebasemlProjectsModelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasemlProjectsModelsListSecurity)
    ], FirebasemlProjectsModelsListRequest.prototype, "security", void 0);
    return FirebasemlProjectsModelsListRequest;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsListRequest };
var FirebasemlProjectsModelsListResponse = /** @class */ (function (_super) {
    __extends(FirebasemlProjectsModelsListResponse, _super);
    function FirebasemlProjectsModelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebasemlProjectsModelsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListModelsResponse)
    ], FirebasemlProjectsModelsListResponse.prototype, "listModelsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebasemlProjectsModelsListResponse.prototype, "statusCode", void 0);
    return FirebasemlProjectsModelsListResponse;
}(SpeakeasyBase));
export { FirebasemlProjectsModelsListResponse };
