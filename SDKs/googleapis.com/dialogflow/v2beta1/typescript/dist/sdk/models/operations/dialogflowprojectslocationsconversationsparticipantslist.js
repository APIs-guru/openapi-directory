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
var DialogflowProjectsLocationsConversationsParticipantsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsListPathParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsListPathParams };
var DialogflowProjectsLocationsConversationsParticipantsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsListQueryParams, _super);
    function DialogflowProjectsLocationsConversationsParticipantsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsListQueryParams };
var DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1 };
var DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2 };
var DialogflowProjectsLocationsConversationsParticipantsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsListSecurity, _super);
    function DialogflowProjectsLocationsConversationsParticipantsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1)
    ], DialogflowProjectsLocationsConversationsParticipantsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2)
    ], DialogflowProjectsLocationsConversationsParticipantsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsListSecurity };
var DialogflowProjectsLocationsConversationsParticipantsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsListRequest, _super);
    function DialogflowProjectsLocationsConversationsParticipantsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsListPathParams)
    ], DialogflowProjectsLocationsConversationsParticipantsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsListQueryParams)
    ], DialogflowProjectsLocationsConversationsParticipantsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationsParticipantsListSecurity)
    ], DialogflowProjectsLocationsConversationsParticipantsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsListRequest };
var DialogflowProjectsLocationsConversationsParticipantsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationsParticipantsListResponse, _super);
    function DialogflowProjectsLocationsConversationsParticipantsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationsParticipantsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ListParticipantsResponse)
    ], DialogflowProjectsLocationsConversationsParticipantsListResponse.prototype, "googleCloudDialogflowV2beta1ListParticipantsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationsParticipantsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationsParticipantsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationsParticipantsListResponse };
