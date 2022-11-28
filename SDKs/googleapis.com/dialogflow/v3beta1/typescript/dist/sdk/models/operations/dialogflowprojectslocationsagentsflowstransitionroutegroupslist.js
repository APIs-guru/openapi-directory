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
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1 };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2 };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption1)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurityOption2)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListPathParams)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListQueryParams)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListSecurity)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest };
var DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse, _super);
    function DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse.prototype, "googleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse };
