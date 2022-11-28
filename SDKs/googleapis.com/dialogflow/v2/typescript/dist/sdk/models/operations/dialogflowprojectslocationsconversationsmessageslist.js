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
var DialogflowProjectsLocationsConversationsMessagesListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesListPathParams, _super);
    function DialogflowProjectsLocationsConversationsMessagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationsMessagesListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesListPathParams };
var DialogflowProjectsLocationsConversationsMessagesListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesListQueryParams, _super);
    function DialogflowProjectsLocationsConversationsMessagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsMessagesListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesListQueryParams };
var DialogflowProjectsLocationsConversationsMessagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesListSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsMessagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsMessagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsMessagesListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsMessagesListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesListSecurityOption1 };
var DialogflowProjectsLocationsConversationsMessagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesListSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsMessagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsMessagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsMessagesListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsMessagesListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesListSecurityOption2 };
var DialogflowProjectsLocationsConversationsMessagesListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesListSecurity, _super);
    function DialogflowProjectsLocationsConversationsMessagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesListSecurityOption1)
    ], DialogflowProjectsLocationsConversationsMessagesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesListSecurityOption2)
    ], DialogflowProjectsLocationsConversationsMessagesListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsMessagesListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesListSecurity };
var DialogflowProjectsLocationsConversationsMessagesListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesListRequest, _super);
    function DialogflowProjectsLocationsConversationsMessagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesListPathParams)
    ], DialogflowProjectsLocationsConversationsMessagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesListQueryParams)
    ], DialogflowProjectsLocationsConversationsMessagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsMessagesListSecurity)
    ], DialogflowProjectsLocationsConversationsMessagesListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsMessagesListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesListRequest };
var DialogflowProjectsLocationsConversationsMessagesListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsMessagesListResponse, _super);
    function DialogflowProjectsLocationsConversationsMessagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsMessagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListMessagesResponse)
    ], DialogflowProjectsLocationsConversationsMessagesListResponse.prototype, "googleCloudDialogflowV2ListMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsMessagesListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsMessagesListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsMessagesListResponse };
