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
var DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=baseVersion" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams.prototype, "baseVersion", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams };
var DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams };
var DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1 };
var DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2 };
var DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity };
var DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3CompareVersionsRequest)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest };
var DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3CompareVersionsResponse)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse.prototype, "googleCloudDialogflowCxV3CompareVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse };
