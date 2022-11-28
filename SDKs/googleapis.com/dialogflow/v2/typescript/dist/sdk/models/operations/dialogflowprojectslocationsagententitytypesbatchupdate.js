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
var DialogflowProjectsLocationsAgentEntityTypesBatchUpdatePathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchUpdatePathParams, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdatePathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchUpdatePathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchUpdatePathParams };
var DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams };
var DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1 };
var DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2 };
var DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity };
var DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchUpdatePathParams)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchUpdateQueryParams)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest };
var DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse, _super);
    function DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse };
