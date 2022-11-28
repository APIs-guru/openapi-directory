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
var DialogflowProjectsLocationsDeleteAgentPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsDeleteAgentPathParams, _super);
    function DialogflowProjectsLocationsDeleteAgentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsDeleteAgentPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsDeleteAgentPathParams };
var DialogflowProjectsLocationsDeleteAgentQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsDeleteAgentQueryParams, _super);
    function DialogflowProjectsLocationsDeleteAgentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsDeleteAgentQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsDeleteAgentQueryParams };
var DialogflowProjectsLocationsDeleteAgentSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsDeleteAgentSecurityOption1, _super);
    function DialogflowProjectsLocationsDeleteAgentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsDeleteAgentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsDeleteAgentSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsDeleteAgentSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsDeleteAgentSecurityOption1 };
var DialogflowProjectsLocationsDeleteAgentSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsDeleteAgentSecurityOption2, _super);
    function DialogflowProjectsLocationsDeleteAgentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsDeleteAgentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsDeleteAgentSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsDeleteAgentSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsDeleteAgentSecurityOption2 };
var DialogflowProjectsLocationsDeleteAgentSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsDeleteAgentSecurity, _super);
    function DialogflowProjectsLocationsDeleteAgentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsDeleteAgentSecurityOption1)
    ], DialogflowProjectsLocationsDeleteAgentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsDeleteAgentSecurityOption2)
    ], DialogflowProjectsLocationsDeleteAgentSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsDeleteAgentSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsDeleteAgentSecurity };
var DialogflowProjectsLocationsDeleteAgentRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsDeleteAgentRequest, _super);
    function DialogflowProjectsLocationsDeleteAgentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsDeleteAgentPathParams)
    ], DialogflowProjectsLocationsDeleteAgentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsDeleteAgentQueryParams)
    ], DialogflowProjectsLocationsDeleteAgentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsDeleteAgentSecurity)
    ], DialogflowProjectsLocationsDeleteAgentRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsDeleteAgentRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsDeleteAgentRequest };
var DialogflowProjectsLocationsDeleteAgentResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsDeleteAgentResponse, _super);
    function DialogflowProjectsLocationsDeleteAgentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsDeleteAgentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DialogflowProjectsLocationsDeleteAgentResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsDeleteAgentResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsDeleteAgentResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsDeleteAgentResponse };
