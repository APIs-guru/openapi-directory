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
var DialogflowProjectsLocationsAgentEnvironmentsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEnvironmentsListPathParams, _super);
    function DialogflowProjectsLocationsAgentEnvironmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentEnvironmentsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEnvironmentsListPathParams };
var DialogflowProjectsLocationsAgentEnvironmentsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEnvironmentsListQueryParams, _super);
    function DialogflowProjectsLocationsAgentEnvironmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentEnvironmentsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEnvironmentsListQueryParams };
var DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1 };
var DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2 };
var DialogflowProjectsLocationsAgentEnvironmentsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEnvironmentsListSecurity, _super);
    function DialogflowProjectsLocationsAgentEnvironmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1)
    ], DialogflowProjectsLocationsAgentEnvironmentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2)
    ], DialogflowProjectsLocationsAgentEnvironmentsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentEnvironmentsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEnvironmentsListSecurity };
var DialogflowProjectsLocationsAgentEnvironmentsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEnvironmentsListRequest, _super);
    function DialogflowProjectsLocationsAgentEnvironmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEnvironmentsListPathParams)
    ], DialogflowProjectsLocationsAgentEnvironmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEnvironmentsListQueryParams)
    ], DialogflowProjectsLocationsAgentEnvironmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentEnvironmentsListSecurity)
    ], DialogflowProjectsLocationsAgentEnvironmentsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentEnvironmentsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEnvironmentsListRequest };
var DialogflowProjectsLocationsAgentEnvironmentsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentEnvironmentsListResponse, _super);
    function DialogflowProjectsLocationsAgentEnvironmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentEnvironmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowV2ListEnvironmentsResponse)
    ], DialogflowProjectsLocationsAgentEnvironmentsListResponse.prototype, "googleCloudDialogflowV2ListEnvironmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentEnvironmentsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentEnvironmentsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentEnvironmentsListResponse };
