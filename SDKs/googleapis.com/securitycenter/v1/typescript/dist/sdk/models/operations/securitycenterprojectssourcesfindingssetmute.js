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
var SecuritycenterProjectsSourcesFindingsSetMutePathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsSetMutePathParams, _super);
    function SecuritycenterProjectsSourcesFindingsSetMutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMutePathParams.prototype, "name", void 0);
    return SecuritycenterProjectsSourcesFindingsSetMutePathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsSetMutePathParams };
var SecuritycenterProjectsSourcesFindingsSetMuteQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsSetMuteQueryParams, _super);
    function SecuritycenterProjectsSourcesFindingsSetMuteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsSourcesFindingsSetMuteQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsSetMuteQueryParams };
var SecuritycenterProjectsSourcesFindingsSetMuteSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsSetMuteSecurity, _super);
    function SecuritycenterProjectsSourcesFindingsSetMuteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsSourcesFindingsSetMuteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsSourcesFindingsSetMuteSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsSourcesFindingsSetMuteSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsSetMuteSecurity };
var SecuritycenterProjectsSourcesFindingsSetMuteRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsSetMuteRequest, _super);
    function SecuritycenterProjectsSourcesFindingsSetMuteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsSetMutePathParams)
    ], SecuritycenterProjectsSourcesFindingsSetMuteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsSetMuteQueryParams)
    ], SecuritycenterProjectsSourcesFindingsSetMuteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetMuteRequest)
    ], SecuritycenterProjectsSourcesFindingsSetMuteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsSetMuteSecurity)
    ], SecuritycenterProjectsSourcesFindingsSetMuteRequest.prototype, "security", void 0);
    return SecuritycenterProjectsSourcesFindingsSetMuteRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsSetMuteRequest };
var SecuritycenterProjectsSourcesFindingsSetMuteResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsSetMuteResponse, _super);
    function SecuritycenterProjectsSourcesFindingsSetMuteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsSetMuteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Finding)
    ], SecuritycenterProjectsSourcesFindingsSetMuteResponse.prototype, "finding", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsSourcesFindingsSetMuteResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsSourcesFindingsSetMuteResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsSetMuteResponse };
