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
var ContaineranalysisProvidersNotesGetPathParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetPathParams, _super);
    function ContaineranalysisProvidersNotesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetPathParams.prototype, "name", void 0);
    return ContaineranalysisProvidersNotesGetPathParams;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetPathParams };
var ContaineranalysisProvidersNotesGetQueryParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetQueryParams, _super);
    function ContaineranalysisProvidersNotesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetQueryParams.prototype, "uploadProtocol", void 0);
    return ContaineranalysisProvidersNotesGetQueryParams;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetQueryParams };
var ContaineranalysisProvidersNotesGetSecurity = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetSecurity, _super);
    function ContaineranalysisProvidersNotesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContaineranalysisProvidersNotesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContaineranalysisProvidersNotesGetSecurity.prototype, "oauth2c", void 0);
    return ContaineranalysisProvidersNotesGetSecurity;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetSecurity };
var ContaineranalysisProvidersNotesGetRequest = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetRequest, _super);
    function ContaineranalysisProvidersNotesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProvidersNotesGetPathParams)
    ], ContaineranalysisProvidersNotesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProvidersNotesGetQueryParams)
    ], ContaineranalysisProvidersNotesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProvidersNotesGetSecurity)
    ], ContaineranalysisProvidersNotesGetRequest.prototype, "security", void 0);
    return ContaineranalysisProvidersNotesGetRequest;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetRequest };
var ContaineranalysisProvidersNotesGetResponse = /** @class */ (function (_super) {
    __extends(ContaineranalysisProvidersNotesGetResponse, _super);
    function ContaineranalysisProvidersNotesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContaineranalysisProvidersNotesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Note)
    ], ContaineranalysisProvidersNotesGetResponse.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContaineranalysisProvidersNotesGetResponse.prototype, "statusCode", void 0);
    return ContaineranalysisProvidersNotesGetResponse;
}(SpeakeasyBase));
export { ContaineranalysisProvidersNotesGetResponse };
