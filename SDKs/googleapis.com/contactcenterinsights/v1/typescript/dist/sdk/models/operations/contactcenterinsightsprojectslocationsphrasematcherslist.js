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
var ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams, _super);
    function ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams.prototype, "parent", void 0);
    return ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams };
var ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams };
var ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity, _super);
    function ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity };
var ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest, _super);
    function ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest };
var ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse, _super);
    function ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse.prototype, "googleCloudContactcenterinsightsV1ListPhraseMatchersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse };
