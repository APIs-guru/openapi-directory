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
var DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams };
var DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams };
var DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1 };
var DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2 };
var DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity };
var DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest };
var DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse };
