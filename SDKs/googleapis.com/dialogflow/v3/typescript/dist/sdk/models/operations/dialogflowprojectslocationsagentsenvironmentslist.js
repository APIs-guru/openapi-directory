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
var DialogflowProjectsLocationsAgentsEnvironmentsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsListPathParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsListPathParams };
var DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams };
var DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1 };
var DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2 };
var DialogflowProjectsLocationsAgentsEnvironmentsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsListSecurity, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsListSecurity };
var DialogflowProjectsLocationsAgentsEnvironmentsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsListRequest, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsListPathParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsEnvironmentsListSecurity)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsListRequest };
var DialogflowProjectsLocationsAgentsEnvironmentsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsEnvironmentsListResponse, _super);
    function DialogflowProjectsLocationsAgentsEnvironmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3ListEnvironmentsResponse)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListResponse.prototype, "googleCloudDialogflowCxV3ListEnvironmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsEnvironmentsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsEnvironmentsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsEnvironmentsListResponse };
