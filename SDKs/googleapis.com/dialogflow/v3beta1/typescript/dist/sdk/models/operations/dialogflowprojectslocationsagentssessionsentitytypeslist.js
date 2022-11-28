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
var DialogflowProjectsLocationsAgentsSessionsEntityTypesListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesListPathParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesListPathParams };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1 };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2 };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption1)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurityOption2)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesListPathParams)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesListQueryParams)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsSessionsEntityTypesListSecurity)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest };
var DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse, _super);
    function DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse.prototype, "googleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse };
