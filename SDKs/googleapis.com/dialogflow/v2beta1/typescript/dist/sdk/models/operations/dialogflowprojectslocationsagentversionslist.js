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
var DialogflowProjectsLocationsAgentVersionsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentVersionsListPathParams, _super);
    function DialogflowProjectsLocationsAgentVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentVersionsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentVersionsListPathParams };
var DialogflowProjectsLocationsAgentVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentVersionsListQueryParams, _super);
    function DialogflowProjectsLocationsAgentVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentVersionsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentVersionsListQueryParams };
var DialogflowProjectsLocationsAgentVersionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentVersionsListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentVersionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentVersionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentVersionsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentVersionsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentVersionsListSecurityOption1 };
var DialogflowProjectsLocationsAgentVersionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentVersionsListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentVersionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentVersionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentVersionsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentVersionsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentVersionsListSecurityOption2 };
var DialogflowProjectsLocationsAgentVersionsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentVersionsListSecurity, _super);
    function DialogflowProjectsLocationsAgentVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentVersionsListSecurityOption1)
    ], DialogflowProjectsLocationsAgentVersionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentVersionsListSecurityOption2)
    ], DialogflowProjectsLocationsAgentVersionsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentVersionsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentVersionsListSecurity };
var DialogflowProjectsLocationsAgentVersionsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentVersionsListRequest, _super);
    function DialogflowProjectsLocationsAgentVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentVersionsListPathParams)
    ], DialogflowProjectsLocationsAgentVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentVersionsListQueryParams)
    ], DialogflowProjectsLocationsAgentVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentVersionsListSecurity)
    ], DialogflowProjectsLocationsAgentVersionsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentVersionsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentVersionsListRequest };
var DialogflowProjectsLocationsAgentVersionsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentVersionsListResponse, _super);
    function DialogflowProjectsLocationsAgentVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ListVersionsResponse)
    ], DialogflowProjectsLocationsAgentVersionsListResponse.prototype, "googleCloudDialogflowV2beta1ListVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentVersionsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentVersionsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentVersionsListResponse };
