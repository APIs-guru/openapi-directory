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
var ContaineranalysisProjectsNotesListPathParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesListPathParams, _super);
    function ContaineranalysisProjectsNotesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListPathParams.prototype, "parent", void 0);
    return ContaineranalysisProjectsNotesListPathParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesListPathParams };
var ContaineranalysisProjectsNotesListQueryParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesListQueryParams, _super);
    function ContaineranalysisProjectsNotesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListQueryParams.prototype, "uploadProtocol", void 0);
    return ContaineranalysisProjectsNotesListQueryParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesListQueryParams };
var ContaineranalysisProjectsNotesListSecurity = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesListSecurity, _super);
    function ContaineranalysisProjectsNotesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContaineranalysisProjectsNotesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContaineranalysisProjectsNotesListSecurity.prototype, "oauth2c", void 0);
    return ContaineranalysisProjectsNotesListSecurity;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesListSecurity };
var ContaineranalysisProjectsNotesListRequest = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesListRequest, _super);
    function ContaineranalysisProjectsNotesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsNotesListPathParams)
    ], ContaineranalysisProjectsNotesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsNotesListQueryParams)
    ], ContaineranalysisProjectsNotesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsNotesListSecurity)
    ], ContaineranalysisProjectsNotesListRequest.prototype, "security", void 0);
    return ContaineranalysisProjectsNotesListRequest;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesListRequest };
var ContaineranalysisProjectsNotesListResponse = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsNotesListResponse, _super);
    function ContaineranalysisProjectsNotesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsNotesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListNotesResponse)
    ], ContaineranalysisProjectsNotesListResponse.prototype, "listNotesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContaineranalysisProjectsNotesListResponse.prototype, "statusCode", void 0);
    return ContaineranalysisProjectsNotesListResponse;
}(SpeakeasyBase));
export { ContaineranalysisProjectsNotesListResponse };
