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
var DialogflowProjectsLocationsConversationModelsDeployPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsDeployPathParams, _super);
    function DialogflowProjectsLocationsConversationModelsDeployPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsConversationModelsDeployPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsDeployPathParams };
var DialogflowProjectsLocationsConversationModelsDeployQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsDeployQueryParams, _super);
    function DialogflowProjectsLocationsConversationModelsDeployQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationModelsDeployQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsDeployQueryParams };
var DialogflowProjectsLocationsConversationModelsDeploySecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsDeploySecurityOption1, _super);
    function DialogflowProjectsLocationsConversationModelsDeploySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsDeploySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsDeploySecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsDeploySecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsDeploySecurityOption1 };
var DialogflowProjectsLocationsConversationModelsDeploySecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsDeploySecurityOption2, _super);
    function DialogflowProjectsLocationsConversationModelsDeploySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationModelsDeploySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationModelsDeploySecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationModelsDeploySecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsDeploySecurityOption2 };
var DialogflowProjectsLocationsConversationModelsDeploySecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsDeploySecurity, _super);
    function DialogflowProjectsLocationsConversationModelsDeploySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsDeploySecurityOption1)
    ], DialogflowProjectsLocationsConversationModelsDeploySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsDeploySecurityOption2)
    ], DialogflowProjectsLocationsConversationModelsDeploySecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationModelsDeploySecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsDeploySecurity };
var DialogflowProjectsLocationsConversationModelsDeployRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsDeployRequest, _super);
    function DialogflowProjectsLocationsConversationModelsDeployRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsDeployPathParams)
    ], DialogflowProjectsLocationsConversationModelsDeployRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsDeployQueryParams)
    ], DialogflowProjectsLocationsConversationModelsDeployRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DialogflowProjectsLocationsConversationModelsDeployRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationModelsDeploySecurity)
    ], DialogflowProjectsLocationsConversationModelsDeployRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationModelsDeployRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsDeployRequest };
var DialogflowProjectsLocationsConversationModelsDeployResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationModelsDeployResponse, _super);
    function DialogflowProjectsLocationsConversationModelsDeployResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationModelsDeployResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsConversationModelsDeployResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationModelsDeployResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationModelsDeployResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationModelsDeployResponse };
