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
var EssentialcontactsProjectsContactsDeletePathParams = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsDeletePathParams, _super);
    function EssentialcontactsProjectsContactsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeletePathParams.prototype, "name", void 0);
    return EssentialcontactsProjectsContactsDeletePathParams;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsDeletePathParams };
var EssentialcontactsProjectsContactsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsDeleteQueryParams, _super);
    function EssentialcontactsProjectsContactsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return EssentialcontactsProjectsContactsDeleteQueryParams;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsDeleteQueryParams };
var EssentialcontactsProjectsContactsDeleteSecurity = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsDeleteSecurity, _super);
    function EssentialcontactsProjectsContactsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EssentialcontactsProjectsContactsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], EssentialcontactsProjectsContactsDeleteSecurity.prototype, "oauth2c", void 0);
    return EssentialcontactsProjectsContactsDeleteSecurity;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsDeleteSecurity };
var EssentialcontactsProjectsContactsDeleteRequest = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsDeleteRequest, _super);
    function EssentialcontactsProjectsContactsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsDeletePathParams)
    ], EssentialcontactsProjectsContactsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsDeleteQueryParams)
    ], EssentialcontactsProjectsContactsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsDeleteSecurity)
    ], EssentialcontactsProjectsContactsDeleteRequest.prototype, "security", void 0);
    return EssentialcontactsProjectsContactsDeleteRequest;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsDeleteRequest };
var EssentialcontactsProjectsContactsDeleteResponse = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsDeleteResponse, _super);
    function EssentialcontactsProjectsContactsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], EssentialcontactsProjectsContactsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EssentialcontactsProjectsContactsDeleteResponse.prototype, "statusCode", void 0);
    return EssentialcontactsProjectsContactsDeleteResponse;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsDeleteResponse };
