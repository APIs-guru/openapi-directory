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
var DialogflowProjectsLocationsConversationModelsEvaluationsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsListPathParams, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsListPathParams };
var DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams };
var DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1 };
var DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2 };
var DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity };
var DialogflowProjectsLocationsConversationModelsEvaluationsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsListRequest, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsListPathParams)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsListQueryParams)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsListRequest };
var DialogflowProjectsLocationsConversationModelsEvaluationsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsEvaluationsListResponse, _super);
    function DialogflowProjectsLocationsConversationModelsEvaluationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListResponse.prototype, "googleCloudDialogflowV2ListConversationModelEvaluationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationModelsEvaluationsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationModelsEvaluationsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsEvaluationsListResponse };
