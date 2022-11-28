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
var SecuritycenterProjectsFindingsBulkMutePathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsFindingsBulkMutePathParams, _super);
    function SecuritycenterProjectsFindingsBulkMutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMutePathParams.prototype, "parent", void 0);
    return SecuritycenterProjectsFindingsBulkMutePathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsFindingsBulkMutePathParams };
var SecuritycenterProjectsFindingsBulkMuteQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsFindingsBulkMuteQueryParams, _super);
    function SecuritycenterProjectsFindingsBulkMuteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsFindingsBulkMuteQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsFindingsBulkMuteQueryParams };
var SecuritycenterProjectsFindingsBulkMuteSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsFindingsBulkMuteSecurity, _super);
    function SecuritycenterProjectsFindingsBulkMuteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsFindingsBulkMuteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsFindingsBulkMuteSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsFindingsBulkMuteSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsFindingsBulkMuteSecurity };
var SecuritycenterProjectsFindingsBulkMuteRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsFindingsBulkMuteRequest, _super);
    function SecuritycenterProjectsFindingsBulkMuteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsFindingsBulkMutePathParams)
    ], SecuritycenterProjectsFindingsBulkMuteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsFindingsBulkMuteQueryParams)
    ], SecuritycenterProjectsFindingsBulkMuteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkMuteFindingsRequest)
    ], SecuritycenterProjectsFindingsBulkMuteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsFindingsBulkMuteSecurity)
    ], SecuritycenterProjectsFindingsBulkMuteRequest.prototype, "security", void 0);
    return SecuritycenterProjectsFindingsBulkMuteRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsFindingsBulkMuteRequest };
var SecuritycenterProjectsFindingsBulkMuteResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsFindingsBulkMuteResponse, _super);
    function SecuritycenterProjectsFindingsBulkMuteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsFindingsBulkMuteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SecuritycenterProjectsFindingsBulkMuteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsFindingsBulkMuteResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsFindingsBulkMuteResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsFindingsBulkMuteResponse };
