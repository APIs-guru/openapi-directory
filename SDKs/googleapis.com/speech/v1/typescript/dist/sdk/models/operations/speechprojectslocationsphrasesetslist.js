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
var SpeechProjectsLocationsPhraseSetsListPathParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsListPathParams, _super);
    function SpeechProjectsLocationsPhraseSetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListPathParams.prototype, "parent", void 0);
    return SpeechProjectsLocationsPhraseSetsListPathParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsListPathParams };
var SpeechProjectsLocationsPhraseSetsListQueryParams = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsListQueryParams, _super);
    function SpeechProjectsLocationsPhraseSetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListQueryParams.prototype, "uploadProtocol", void 0);
    return SpeechProjectsLocationsPhraseSetsListQueryParams;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsListQueryParams };
var SpeechProjectsLocationsPhraseSetsListSecurity = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsListSecurity, _super);
    function SpeechProjectsLocationsPhraseSetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpeechProjectsLocationsPhraseSetsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpeechProjectsLocationsPhraseSetsListSecurity.prototype, "oauth2c", void 0);
    return SpeechProjectsLocationsPhraseSetsListSecurity;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsListSecurity };
var SpeechProjectsLocationsPhraseSetsListRequest = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsListRequest, _super);
    function SpeechProjectsLocationsPhraseSetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsListPathParams)
    ], SpeechProjectsLocationsPhraseSetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsListQueryParams)
    ], SpeechProjectsLocationsPhraseSetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SpeechProjectsLocationsPhraseSetsListSecurity)
    ], SpeechProjectsLocationsPhraseSetsListRequest.prototype, "security", void 0);
    return SpeechProjectsLocationsPhraseSetsListRequest;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsListRequest };
var SpeechProjectsLocationsPhraseSetsListResponse = /** @class */ (function (_super) {
    __extends(SpeechProjectsLocationsPhraseSetsListResponse, _super);
    function SpeechProjectsLocationsPhraseSetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SpeechProjectsLocationsPhraseSetsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListPhraseSetResponse)
    ], SpeechProjectsLocationsPhraseSetsListResponse.prototype, "listPhraseSetResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SpeechProjectsLocationsPhraseSetsListResponse.prototype, "statusCode", void 0);
    return SpeechProjectsLocationsPhraseSetsListResponse;
}(SpeakeasyBase));
export { SpeechProjectsLocationsPhraseSetsListResponse };
