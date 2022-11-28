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
var DialogflowProjectsLocationsAgentSearchPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSearchPathParams, _super);
    function DialogflowProjectsLocationsAgentSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentSearchPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSearchPathParams };
var DialogflowProjectsLocationsAgentSearchQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSearchQueryParams, _super);
    function DialogflowProjectsLocationsAgentSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentSearchQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSearchQueryParams };
var DialogflowProjectsLocationsAgentSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSearchSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSearchSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSearchSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSearchSecurityOption1 };
var DialogflowProjectsLocationsAgentSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSearchSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSearchSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSearchSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSearchSecurityOption2 };
var DialogflowProjectsLocationsAgentSearchSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSearchSecurity, _super);
    function DialogflowProjectsLocationsAgentSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSearchSecurityOption1)
    ], DialogflowProjectsLocationsAgentSearchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSearchSecurityOption2)
    ], DialogflowProjectsLocationsAgentSearchSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentSearchSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSearchSecurity };
var DialogflowProjectsLocationsAgentSearchRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSearchRequest, _super);
    function DialogflowProjectsLocationsAgentSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSearchPathParams)
    ], DialogflowProjectsLocationsAgentSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSearchQueryParams)
    ], DialogflowProjectsLocationsAgentSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSearchSecurity)
    ], DialogflowProjectsLocationsAgentSearchRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentSearchRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSearchRequest };
var DialogflowProjectsLocationsAgentSearchResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSearchResponse, _super);
    function DialogflowProjectsLocationsAgentSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1SearchAgentsResponse)
    ], DialogflowProjectsLocationsAgentSearchResponse.prototype, "googleCloudDialogflowV2beta1SearchAgentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSearchResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentSearchResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSearchResponse };
