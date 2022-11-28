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
var DialogflowProjectsLocationsConversationProfilesListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesListPathParams, _super);
    function DialogflowProjectsLocationsConversationProfilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationProfilesListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesListPathParams };
var DialogflowProjectsLocationsConversationProfilesListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesListQueryParams, _super);
    function DialogflowProjectsLocationsConversationProfilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationProfilesListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesListQueryParams };
var DialogflowProjectsLocationsConversationProfilesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesListSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationProfilesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationProfilesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationProfilesListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationProfilesListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesListSecurityOption1 };
var DialogflowProjectsLocationsConversationProfilesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesListSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationProfilesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationProfilesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationProfilesListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationProfilesListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesListSecurityOption2 };
var DialogflowProjectsLocationsConversationProfilesListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesListSecurity, _super);
    function DialogflowProjectsLocationsConversationProfilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesListSecurityOption1)
    ], DialogflowProjectsLocationsConversationProfilesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesListSecurityOption2)
    ], DialogflowProjectsLocationsConversationProfilesListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationProfilesListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesListSecurity };
var DialogflowProjectsLocationsConversationProfilesListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesListRequest, _super);
    function DialogflowProjectsLocationsConversationProfilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesListPathParams)
    ], DialogflowProjectsLocationsConversationProfilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesListQueryParams)
    ], DialogflowProjectsLocationsConversationProfilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationProfilesListSecurity)
    ], DialogflowProjectsLocationsConversationProfilesListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationProfilesListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesListRequest };
var DialogflowProjectsLocationsConversationProfilesListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationProfilesListResponse, _super);
    function DialogflowProjectsLocationsConversationProfilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationProfilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListConversationProfilesResponse)
    ], DialogflowProjectsLocationsConversationProfilesListResponse.prototype, "googleCloudDialogflowV2ListConversationProfilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationProfilesListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationProfilesListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationProfilesListResponse };
