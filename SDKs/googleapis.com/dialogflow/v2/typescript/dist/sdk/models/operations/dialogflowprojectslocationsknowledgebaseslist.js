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
var DialogflowProjectsLocationsKnowledgeBasesListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesListPathParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesListPathParams };
var DialogflowProjectsLocationsKnowledgeBasesListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesListQueryParams, _super);
    function DialogflowProjectsLocationsKnowledgeBasesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesListQueryParams };
var DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1, _super);
    function DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1 };
var DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2, _super);
    function DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2 };
var DialogflowProjectsLocationsKnowledgeBasesListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesListSecurity, _super);
    function DialogflowProjectsLocationsKnowledgeBasesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1)
    ], DialogflowProjectsLocationsKnowledgeBasesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2)
    ], DialogflowProjectsLocationsKnowledgeBasesListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesListSecurity };
var DialogflowProjectsLocationsKnowledgeBasesListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesListRequest, _super);
    function DialogflowProjectsLocationsKnowledgeBasesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesListPathParams)
    ], DialogflowProjectsLocationsKnowledgeBasesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesListQueryParams)
    ], DialogflowProjectsLocationsKnowledgeBasesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsKnowledgeBasesListSecurity)
    ], DialogflowProjectsLocationsKnowledgeBasesListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesListRequest };
var DialogflowProjectsLocationsKnowledgeBasesListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsKnowledgeBasesListResponse, _super);
    function DialogflowProjectsLocationsKnowledgeBasesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsKnowledgeBasesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListKnowledgeBasesResponse)
    ], DialogflowProjectsLocationsKnowledgeBasesListResponse.prototype, "googleCloudDialogflowV2ListKnowledgeBasesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsKnowledgeBasesListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsKnowledgeBasesListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsKnowledgeBasesListResponse };
