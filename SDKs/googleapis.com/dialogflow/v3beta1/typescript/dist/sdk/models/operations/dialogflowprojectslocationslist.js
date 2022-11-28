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
var DialogflowProjectsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsListPathParams, _super);
    function DialogflowProjectsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsListPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsListPathParams };
var DialogflowProjectsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsListQueryParams, _super);
    function DialogflowProjectsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsListQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsListQueryParams };
var DialogflowProjectsLocationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsListSecurityOption1, _super);
    function DialogflowProjectsLocationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsListSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsListSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsListSecurityOption1 };
var DialogflowProjectsLocationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsListSecurityOption2, _super);
    function DialogflowProjectsLocationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsListSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsListSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsListSecurityOption2 };
var DialogflowProjectsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsListSecurity, _super);
    function DialogflowProjectsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsListSecurityOption1)
    ], DialogflowProjectsLocationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsListSecurityOption2)
    ], DialogflowProjectsLocationsListSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsListSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsListSecurity };
var DialogflowProjectsLocationsListRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsListRequest, _super);
    function DialogflowProjectsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsListPathParams)
    ], DialogflowProjectsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsListQueryParams)
    ], DialogflowProjectsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsListSecurity)
    ], DialogflowProjectsLocationsListRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsListRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsListRequest };
var DialogflowProjectsLocationsListResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsListResponse, _super);
    function DialogflowProjectsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudLocationListLocationsResponse)
    ], DialogflowProjectsLocationsListResponse.prototype, "googleCloudLocationListLocationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsListResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsListResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsListResponse };
