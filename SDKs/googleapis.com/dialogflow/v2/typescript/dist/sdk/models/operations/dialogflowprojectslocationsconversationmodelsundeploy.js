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
var DialogflowProjectsLocationsConversationModelsUndeployPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsUndeployPathParams, _super);
    function DialogflowProjectsLocationsConversationModelsUndeployPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsConversationModelsUndeployPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsUndeployPathParams };
var DialogflowProjectsLocationsConversationModelsUndeployQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsUndeployQueryParams, _super);
    function DialogflowProjectsLocationsConversationModelsUndeployQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationModelsUndeployQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsUndeployQueryParams };
var DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1, _super);
    function DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1 };
var DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2, _super);
    function DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2 };
var DialogflowProjectsLocationsConversationModelsUndeploySecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsUndeploySecurity, _super);
    function DialogflowProjectsLocationsConversationModelsUndeploySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1)
    ], DialogflowProjectsLocationsConversationModelsUndeploySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2)
    ], DialogflowProjectsLocationsConversationModelsUndeploySecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationModelsUndeploySecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsUndeploySecurity };
var DialogflowProjectsLocationsConversationModelsUndeployRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsUndeployRequest, _super);
    function DialogflowProjectsLocationsConversationModelsUndeployRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsUndeployPathParams)
    ], DialogflowProjectsLocationsConversationModelsUndeployRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsUndeployQueryParams)
    ], DialogflowProjectsLocationsConversationModelsUndeployRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DialogflowProjectsLocationsConversationModelsUndeployRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsUndeploySecurity)
    ], DialogflowProjectsLocationsConversationModelsUndeployRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationModelsUndeployRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsUndeployRequest };
var DialogflowProjectsLocationsConversationModelsUndeployResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsUndeployResponse, _super);
    function DialogflowProjectsLocationsConversationModelsUndeployResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsUndeployResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsConversationModelsUndeployResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationModelsUndeployResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationModelsUndeployResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsUndeployResponse };
