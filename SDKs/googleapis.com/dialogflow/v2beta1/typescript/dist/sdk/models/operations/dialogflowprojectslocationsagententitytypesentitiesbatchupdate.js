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
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdatePathParams, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdatePathParams };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1 };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2 };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdatePathParams)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateQueryParams)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest };
var DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse, _super);
    function DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse };
