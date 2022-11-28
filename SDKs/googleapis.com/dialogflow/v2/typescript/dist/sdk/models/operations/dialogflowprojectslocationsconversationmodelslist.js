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
var DialogflowProjectsLocationsConversationModelsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsListPathParams, _super);
    function DialogflowProjectsLocationsConversationModelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationModelsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsListPathParams };
var DialogflowProjectsLocationsConversationModelsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsListQueryParams, _super);
    function DialogflowProjectsLocationsConversationModelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationModelsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsListQueryParams };
var DialogflowProjectsLocationsConversationModelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsListSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationModelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsListSecurityOption1 };
var DialogflowProjectsLocationsConversationModelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsListSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationModelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsListSecurityOption2 };
var DialogflowProjectsLocationsConversationModelsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsListSecurity, _super);
    function DialogflowProjectsLocationsConversationModelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsListSecurityOption1)
    ], DialogflowProjectsLocationsConversationModelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsListSecurityOption2)
    ], DialogflowProjectsLocationsConversationModelsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationModelsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsListSecurity };
var DialogflowProjectsLocationsConversationModelsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsListRequest, _super);
    function DialogflowProjectsLocationsConversationModelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsListPathParams)
    ], DialogflowProjectsLocationsConversationModelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsListQueryParams)
    ], DialogflowProjectsLocationsConversationModelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsListSecurity)
    ], DialogflowProjectsLocationsConversationModelsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationModelsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsListRequest };
var DialogflowProjectsLocationsConversationModelsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsListResponse, _super);
    function DialogflowProjectsLocationsConversationModelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListConversationModelsResponse)
    ], DialogflowProjectsLocationsConversationModelsListResponse.prototype, "googleCloudDialogflowV2ListConversationModelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationModelsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationModelsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsListResponse };
