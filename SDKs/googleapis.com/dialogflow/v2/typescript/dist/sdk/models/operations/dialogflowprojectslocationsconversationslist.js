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
var DialogflowProjectsLocationsConversationsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsListPathParams, _super);
    function DialogflowProjectsLocationsConversationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsListPathParams };
var DialogflowProjectsLocationsConversationsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsListQueryParams, _super);
    function DialogflowProjectsLocationsConversationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsListQueryParams };
var DialogflowProjectsLocationsConversationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsListSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsListSecurityOption1 };
var DialogflowProjectsLocationsConversationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsListSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsListSecurityOption2 };
var DialogflowProjectsLocationsConversationsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsListSecurity, _super);
    function DialogflowProjectsLocationsConversationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsListSecurityOption1)
    ], DialogflowProjectsLocationsConversationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsListSecurityOption2)
    ], DialogflowProjectsLocationsConversationsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsListSecurity };
var DialogflowProjectsLocationsConversationsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsListRequest, _super);
    function DialogflowProjectsLocationsConversationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsListPathParams)
    ], DialogflowProjectsLocationsConversationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsListQueryParams)
    ], DialogflowProjectsLocationsConversationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsListSecurity)
    ], DialogflowProjectsLocationsConversationsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsListRequest };
var DialogflowProjectsLocationsConversationsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsListResponse, _super);
    function DialogflowProjectsLocationsConversationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListConversationsResponse)
    ], DialogflowProjectsLocationsConversationsListResponse.prototype, "googleCloudDialogflowV2ListConversationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsListResponse };
