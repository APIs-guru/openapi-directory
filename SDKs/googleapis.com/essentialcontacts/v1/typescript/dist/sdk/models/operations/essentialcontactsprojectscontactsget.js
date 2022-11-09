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
var EssentialcontactsProjectsContactsGetPathParams = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsGetPathParams, _super);
    function EssentialcontactsProjectsContactsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetPathParams.prototype, "name", void 0);
    return EssentialcontactsProjectsContactsGetPathParams;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsGetPathParams };
var EssentialcontactsProjectsContactsGetQueryParams = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsGetQueryParams, _super);
    function EssentialcontactsProjectsContactsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetQueryParams.prototype, "uploadProtocol", void 0);
    return EssentialcontactsProjectsContactsGetQueryParams;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsGetQueryParams };
var EssentialcontactsProjectsContactsGetSecurity = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsGetSecurity, _super);
    function EssentialcontactsProjectsContactsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EssentialcontactsProjectsContactsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], EssentialcontactsProjectsContactsGetSecurity.prototype, "oauth2c", void 0);
    return EssentialcontactsProjectsContactsGetSecurity;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsGetSecurity };
var EssentialcontactsProjectsContactsGetRequest = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsGetRequest, _super);
    function EssentialcontactsProjectsContactsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsGetPathParams)
    ], EssentialcontactsProjectsContactsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsGetQueryParams)
    ], EssentialcontactsProjectsContactsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsGetSecurity)
    ], EssentialcontactsProjectsContactsGetRequest.prototype, "security", void 0);
    return EssentialcontactsProjectsContactsGetRequest;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsGetRequest };
var EssentialcontactsProjectsContactsGetResponse = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsGetResponse, _super);
    function EssentialcontactsProjectsContactsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudEssentialcontactsV1Contact)
    ], EssentialcontactsProjectsContactsGetResponse.prototype, "googleCloudEssentialcontactsV1Contact", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EssentialcontactsProjectsContactsGetResponse.prototype, "statusCode", void 0);
    return EssentialcontactsProjectsContactsGetResponse;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsGetResponse };
