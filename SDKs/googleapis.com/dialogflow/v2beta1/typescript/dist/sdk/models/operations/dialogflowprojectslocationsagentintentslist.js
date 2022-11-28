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
var DialogflowProjectsLocationsAgentIntentsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsListPathParams, _super);
    function DialogflowProjectsLocationsAgentIntentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentIntentsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsListPathParams };
export var DialogflowProjectsLocationsAgentIntentsListIntentViewEnum;
(function (DialogflowProjectsLocationsAgentIntentsListIntentViewEnum) {
    DialogflowProjectsLocationsAgentIntentsListIntentViewEnum["IntentViewUnspecified"] = "INTENT_VIEW_UNSPECIFIED";
    DialogflowProjectsLocationsAgentIntentsListIntentViewEnum["IntentViewFull"] = "INTENT_VIEW_FULL";
})(DialogflowProjectsLocationsAgentIntentsListIntentViewEnum || (DialogflowProjectsLocationsAgentIntentsListIntentViewEnum = {}));
var DialogflowProjectsLocationsAgentIntentsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsListQueryParams, _super);
    function DialogflowProjectsLocationsAgentIntentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=intentView" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "intentView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentIntentsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsListQueryParams };
var DialogflowProjectsLocationsAgentIntentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentIntentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentIntentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentIntentsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentIntentsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsListSecurityOption1 };
var DialogflowProjectsLocationsAgentIntentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentIntentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentIntentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentIntentsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentIntentsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsListSecurityOption2 };
var DialogflowProjectsLocationsAgentIntentsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsListSecurity, _super);
    function DialogflowProjectsLocationsAgentIntentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsListSecurityOption1)
    ], DialogflowProjectsLocationsAgentIntentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsListSecurityOption2)
    ], DialogflowProjectsLocationsAgentIntentsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentIntentsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsListSecurity };
var DialogflowProjectsLocationsAgentIntentsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsListRequest, _super);
    function DialogflowProjectsLocationsAgentIntentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsListPathParams)
    ], DialogflowProjectsLocationsAgentIntentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsListQueryParams)
    ], DialogflowProjectsLocationsAgentIntentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentIntentsListSecurity)
    ], DialogflowProjectsLocationsAgentIntentsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentIntentsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsListRequest };
var DialogflowProjectsLocationsAgentIntentsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentIntentsListResponse, _super);
    function DialogflowProjectsLocationsAgentIntentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentIntentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ListIntentsResponse)
    ], DialogflowProjectsLocationsAgentIntentsListResponse.prototype, "googleCloudDialogflowV2beta1ListIntentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentIntentsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentIntentsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentIntentsListResponse };
