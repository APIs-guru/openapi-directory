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
var DialogflowProjectsLocationsAgentsTestCasesBatchDeletePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchDeletePathParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeletePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchDeletePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchDeletePathParams };
var DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams };
var DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1 };
var DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2 };
var DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity };
var DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchDeletePathParams)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest };
var DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse, _super);
    function DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse };
