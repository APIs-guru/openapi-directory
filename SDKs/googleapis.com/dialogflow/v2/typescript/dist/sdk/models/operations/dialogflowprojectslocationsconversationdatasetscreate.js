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
var DialogflowProjectsLocationsConversationDatasetsCreatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsCreatePathParams, _super);
    function DialogflowProjectsLocationsConversationDatasetsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsConversationDatasetsCreatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsCreatePathParams };
var DialogflowProjectsLocationsConversationDatasetsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsCreateQueryParams, _super);
    function DialogflowProjectsLocationsConversationDatasetsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsConversationDatasetsCreateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsCreateQueryParams };
var DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1, _super);
    function DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1 };
var DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2, _super);
    function DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2 };
var DialogflowProjectsLocationsConversationDatasetsCreateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsCreateSecurity, _super);
    function DialogflowProjectsLocationsConversationDatasetsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1)
    ], DialogflowProjectsLocationsConversationDatasetsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2)
    ], DialogflowProjectsLocationsConversationDatasetsCreateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsConversationDatasetsCreateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsCreateSecurity };
var DialogflowProjectsLocationsConversationDatasetsCreateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsCreateRequest, _super);
    function DialogflowProjectsLocationsConversationDatasetsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsCreatePathParams)
    ], DialogflowProjectsLocationsConversationDatasetsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsCreateQueryParams)
    ], DialogflowProjectsLocationsConversationDatasetsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ConversationDatasetInput)
    ], DialogflowProjectsLocationsConversationDatasetsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsConversationDatasetsCreateSecurity)
    ], DialogflowProjectsLocationsConversationDatasetsCreateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsConversationDatasetsCreateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsCreateRequest };
var DialogflowProjectsLocationsConversationDatasetsCreateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsConversationDatasetsCreateResponse, _super);
    function DialogflowProjectsLocationsConversationDatasetsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsConversationDatasetsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsConversationDatasetsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsConversationDatasetsCreateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsConversationDatasetsCreateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsConversationDatasetsCreateResponse };
