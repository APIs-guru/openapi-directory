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
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1 };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2 };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2BatchDeleteEntitiesRequest)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse };
