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
var DialogflowProjectsLocationsAgentSessionsEntityTypesListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesListPathParams, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesListPathParams };
var DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams };
var DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1 };
var DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2 };
var DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity };
var DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesListPathParams)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesListQueryParams)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest };
var DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse, _super);
    function DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse.prototype, "googleCloudDialogflowV2beta1ListSessionEntityTypesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse };
