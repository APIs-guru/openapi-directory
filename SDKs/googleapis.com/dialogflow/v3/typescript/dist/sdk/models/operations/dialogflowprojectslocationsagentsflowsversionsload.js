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
var DialogflowProjectsLocationsAgentsFlowsVersionsLoadPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsLoadPathParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsLoadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsLoadPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsLoadPathParams };
var DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams };
var DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1 };
var DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2 };
var DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity };
var DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsLoadPathParams)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3LoadVersionRequest)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest };
var DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse, _super);
    function DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse };
