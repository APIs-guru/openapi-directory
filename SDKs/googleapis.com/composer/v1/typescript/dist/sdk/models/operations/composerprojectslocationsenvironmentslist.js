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
var ComposerProjectsLocationsEnvironmentsListPathParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsListPathParams, _super);
    function ComposerProjectsLocationsEnvironmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListPathParams.prototype, "parent", void 0);
    return ComposerProjectsLocationsEnvironmentsListPathParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsListPathParams };
var ComposerProjectsLocationsEnvironmentsListQueryParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsListQueryParams, _super);
    function ComposerProjectsLocationsEnvironmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListQueryParams.prototype, "uploadProtocol", void 0);
    return ComposerProjectsLocationsEnvironmentsListQueryParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsListQueryParams };
var ComposerProjectsLocationsEnvironmentsListSecurity = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsListSecurity, _super);
    function ComposerProjectsLocationsEnvironmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ComposerProjectsLocationsEnvironmentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ComposerProjectsLocationsEnvironmentsListSecurity.prototype, "oauth2c", void 0);
    return ComposerProjectsLocationsEnvironmentsListSecurity;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsListSecurity };
var ComposerProjectsLocationsEnvironmentsListRequest = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsListRequest, _super);
    function ComposerProjectsLocationsEnvironmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsListPathParams)
    ], ComposerProjectsLocationsEnvironmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsListQueryParams)
    ], ComposerProjectsLocationsEnvironmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsListSecurity)
    ], ComposerProjectsLocationsEnvironmentsListRequest.prototype, "security", void 0);
    return ComposerProjectsLocationsEnvironmentsListRequest;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsListRequest };
var ComposerProjectsLocationsEnvironmentsListResponse = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsListResponse, _super);
    function ComposerProjectsLocationsEnvironmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListEnvironmentsResponse)
    ], ComposerProjectsLocationsEnvironmentsListResponse.prototype, "listEnvironmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ComposerProjectsLocationsEnvironmentsListResponse.prototype, "statusCode", void 0);
    return ComposerProjectsLocationsEnvironmentsListResponse;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsListResponse };
