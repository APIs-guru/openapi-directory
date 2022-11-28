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
var DialogflowProjectsLocationsAgentsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsListPathParams, _super);
    function DialogflowProjectsLocationsAgentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsListPathParams };
var DialogflowProjectsLocationsAgentsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsListQueryParams, _super);
    function DialogflowProjectsLocationsAgentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsListQueryParams };
var DialogflowProjectsLocationsAgentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsListSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsListSecurityOption1 };
var DialogflowProjectsLocationsAgentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsListSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsListSecurityOption2 };
var DialogflowProjectsLocationsAgentsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsListSecurity, _super);
    function DialogflowProjectsLocationsAgentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsListSecurityOption1)
    ], DialogflowProjectsLocationsAgentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsListSecurityOption2)
    ], DialogflowProjectsLocationsAgentsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsListSecurity };
var DialogflowProjectsLocationsAgentsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsListRequest, _super);
    function DialogflowProjectsLocationsAgentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsListPathParams)
    ], DialogflowProjectsLocationsAgentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsListQueryParams)
    ], DialogflowProjectsLocationsAgentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsListSecurity)
    ], DialogflowProjectsLocationsAgentsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsListRequest };
var DialogflowProjectsLocationsAgentsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsListResponse, _super);
    function DialogflowProjectsLocationsAgentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDialogflowCxV3beta1ListAgentsResponse)
    ], DialogflowProjectsLocationsAgentsListResponse.prototype, "googleCloudDialogflowCxV3beta1ListAgentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsListResponse };
