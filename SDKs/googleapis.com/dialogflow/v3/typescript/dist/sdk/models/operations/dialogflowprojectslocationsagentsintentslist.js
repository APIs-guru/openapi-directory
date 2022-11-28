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
var DialogflowProjectsLocationsAgentsIntentsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsIntentsListPathParams, _super);
    function DialogflowProjectsLocationsAgentsIntentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsIntentsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsIntentsListPathParams };
export var DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum;
(function (DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum) {
    DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum["IntentViewUnspecified"] = "INTENT_VIEW_UNSPECIFIED";
    DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum["IntentViewPartial"] = "INTENT_VIEW_PARTIAL";
    DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum["IntentViewFull"] = "INTENT_VIEW_FULL";
})(DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum || (DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum = {}));
var DialogflowProjectsLocationsAgentsIntentsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsIntentsListQueryParams, _super);
    function DialogflowProjectsLocationsAgentsIntentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=intentView" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "intentView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsIntentsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsIntentsListQueryParams };
var DialogflowProjectsLocationsAgentsIntentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsIntentsListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsIntentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsIntentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsIntentsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsIntentsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsIntentsListSecurityOption1 };
var DialogflowProjectsLocationsAgentsIntentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsIntentsListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsIntentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsIntentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsIntentsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsIntentsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsIntentsListSecurityOption2 };
var DialogflowProjectsLocationsAgentsIntentsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsIntentsListSecurity, _super);
    function DialogflowProjectsLocationsAgentsIntentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsIntentsListSecurityOption1)
    ], DialogflowProjectsLocationsAgentsIntentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsIntentsListSecurityOption2)
    ], DialogflowProjectsLocationsAgentsIntentsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsIntentsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsIntentsListSecurity };
var DialogflowProjectsLocationsAgentsIntentsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsIntentsListRequest, _super);
    function DialogflowProjectsLocationsAgentsIntentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsIntentsListPathParams)
    ], DialogflowProjectsLocationsAgentsIntentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsIntentsListQueryParams)
    ], DialogflowProjectsLocationsAgentsIntentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsIntentsListSecurity)
    ], DialogflowProjectsLocationsAgentsIntentsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsIntentsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsIntentsListRequest };
var DialogflowProjectsLocationsAgentsIntentsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsIntentsListResponse, _super);
    function DialogflowProjectsLocationsAgentsIntentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsIntentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3ListIntentsResponse)
    ], DialogflowProjectsLocationsAgentsIntentsListResponse.prototype, "googleCloudDialogflowCxV3ListIntentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsIntentsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsIntentsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsIntentsListResponse };
