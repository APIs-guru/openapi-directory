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
var EssentialcontactsProjectsContactsCreatePathParams = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsCreatePathParams, _super);
    function EssentialcontactsProjectsContactsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreatePathParams.prototype, "parent", void 0);
    return EssentialcontactsProjectsContactsCreatePathParams;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsCreatePathParams };
var EssentialcontactsProjectsContactsCreateQueryParams = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsCreateQueryParams, _super);
    function EssentialcontactsProjectsContactsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return EssentialcontactsProjectsContactsCreateQueryParams;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsCreateQueryParams };
var EssentialcontactsProjectsContactsCreateSecurity = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsCreateSecurity, _super);
    function EssentialcontactsProjectsContactsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EssentialcontactsProjectsContactsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], EssentialcontactsProjectsContactsCreateSecurity.prototype, "oauth2c", void 0);
    return EssentialcontactsProjectsContactsCreateSecurity;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsCreateSecurity };
var EssentialcontactsProjectsContactsCreateRequest = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsCreateRequest, _super);
    function EssentialcontactsProjectsContactsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsCreatePathParams)
    ], EssentialcontactsProjectsContactsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsCreateQueryParams)
    ], EssentialcontactsProjectsContactsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudEssentialcontactsV1Contact)
    ], EssentialcontactsProjectsContactsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsCreateSecurity)
    ], EssentialcontactsProjectsContactsCreateRequest.prototype, "security", void 0);
    return EssentialcontactsProjectsContactsCreateRequest;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsCreateRequest };
var EssentialcontactsProjectsContactsCreateResponse = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsCreateResponse, _super);
    function EssentialcontactsProjectsContactsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudEssentialcontactsV1Contact)
    ], EssentialcontactsProjectsContactsCreateResponse.prototype, "googleCloudEssentialcontactsV1Contact", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EssentialcontactsProjectsContactsCreateResponse.prototype, "statusCode", void 0);
    return EssentialcontactsProjectsContactsCreateResponse;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsCreateResponse };
