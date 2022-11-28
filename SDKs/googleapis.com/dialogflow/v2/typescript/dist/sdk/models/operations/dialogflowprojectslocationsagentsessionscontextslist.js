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
var DialogflowProjectsLocationsAgentSessionsContextsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsListPathParams, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsListPathParams };
var DialogflowProjectsLocationsAgentSessionsContextsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsListQueryParams, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsListQueryParams };
var DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1 };
var DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2 };
var DialogflowProjectsLocationsAgentSessionsContextsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsListSecurity, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1)
    ], DialogflowProjectsLocationsAgentSessionsContextsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2)
    ], DialogflowProjectsLocationsAgentSessionsContextsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsListSecurity };
var DialogflowProjectsLocationsAgentSessionsContextsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsListRequest, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsListPathParams)
    ], DialogflowProjectsLocationsAgentSessionsContextsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsListQueryParams)
    ], DialogflowProjectsLocationsAgentSessionsContextsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsContextsListSecurity)
    ], DialogflowProjectsLocationsAgentSessionsContextsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsListRequest };
var DialogflowProjectsLocationsAgentSessionsContextsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsContextsListResponse, _super);
    function DialogflowProjectsLocationsAgentSessionsContextsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsContextsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListContextsResponse)
    ], DialogflowProjectsLocationsAgentSessionsContextsListResponse.prototype, "googleCloudDialogflowV2ListContextsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSessionsContextsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentSessionsContextsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsContextsListResponse };
