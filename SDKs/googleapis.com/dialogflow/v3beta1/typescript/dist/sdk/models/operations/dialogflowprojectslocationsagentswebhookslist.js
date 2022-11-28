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
var DialogflowProjectsLocationsAgentsWebhooksListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksListPathParams, _super);
    function DialogflowProjectsLocationsAgentsWebhooksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksListPathParams };
var DialogflowProjectsLocationsAgentsWebhooksListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksListQueryParams, _super);
    function DialogflowProjectsLocationsAgentsWebhooksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksListQueryParams };
var DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1 };
var DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2 };
var DialogflowProjectsLocationsAgentsWebhooksListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksListSecurity, _super);
    function DialogflowProjectsLocationsAgentsWebhooksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1)
    ], DialogflowProjectsLocationsAgentsWebhooksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2)
    ], DialogflowProjectsLocationsAgentsWebhooksListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksListSecurity };
var DialogflowProjectsLocationsAgentsWebhooksListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksListRequest, _super);
    function DialogflowProjectsLocationsAgentsWebhooksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksListPathParams)
    ], DialogflowProjectsLocationsAgentsWebhooksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksListQueryParams)
    ], DialogflowProjectsLocationsAgentsWebhooksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsWebhooksListSecurity)
    ], DialogflowProjectsLocationsAgentsWebhooksListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksListRequest };
var DialogflowProjectsLocationsAgentsWebhooksListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsWebhooksListResponse, _super);
    function DialogflowProjectsLocationsAgentsWebhooksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsWebhooksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1ListWebhooksResponse)
    ], DialogflowProjectsLocationsAgentsWebhooksListResponse.prototype, "googleCloudDialogflowCxV3beta1ListWebhooksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsWebhooksListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsWebhooksListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsWebhooksListResponse };
