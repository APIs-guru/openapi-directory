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
var DialogflowProjectsLocationsGetAgentPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsGetAgentPathParams, _super);
    function DialogflowProjectsLocationsGetAgentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsGetAgentPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsGetAgentPathParams };
var DialogflowProjectsLocationsGetAgentQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsGetAgentQueryParams, _super);
    function DialogflowProjectsLocationsGetAgentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsGetAgentQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsGetAgentQueryParams };
var DialogflowProjectsLocationsGetAgentSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsGetAgentSecurityOption1, _super);
    function DialogflowProjectsLocationsGetAgentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsGetAgentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsGetAgentSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsGetAgentSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsGetAgentSecurityOption1 };
var DialogflowProjectsLocationsGetAgentSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsGetAgentSecurityOption2, _super);
    function DialogflowProjectsLocationsGetAgentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsGetAgentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsGetAgentSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsGetAgentSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsGetAgentSecurityOption2 };
var DialogflowProjectsLocationsGetAgentSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsGetAgentSecurity, _super);
    function DialogflowProjectsLocationsGetAgentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsGetAgentSecurityOption1)
    ], DialogflowProjectsLocationsGetAgentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsGetAgentSecurityOption2)
    ], DialogflowProjectsLocationsGetAgentSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsGetAgentSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsGetAgentSecurity };
var DialogflowProjectsLocationsGetAgentRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsGetAgentRequest, _super);
    function DialogflowProjectsLocationsGetAgentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsGetAgentPathParams)
    ], DialogflowProjectsLocationsGetAgentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsGetAgentQueryParams)
    ], DialogflowProjectsLocationsGetAgentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsGetAgentSecurity)
    ], DialogflowProjectsLocationsGetAgentRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsGetAgentRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsGetAgentRequest };
var DialogflowProjectsLocationsGetAgentResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsGetAgentResponse, _super);
    function DialogflowProjectsLocationsGetAgentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsGetAgentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1Agent)
    ], DialogflowProjectsLocationsGetAgentResponse.prototype, "googleCloudDialogflowV2beta1Agent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsGetAgentResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsGetAgentResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsGetAgentResponse };
