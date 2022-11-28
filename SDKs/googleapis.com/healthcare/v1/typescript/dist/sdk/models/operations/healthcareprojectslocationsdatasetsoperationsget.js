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
var HealthcareProjectsLocationsDatasetsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsOperationsGetPathParams, _super);
    function HealthcareProjectsLocationsDatasetsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetPathParams.prototype, "name", void 0);
    return HealthcareProjectsLocationsDatasetsOperationsGetPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsOperationsGetPathParams };
export var HealthcareProjectsLocationsDatasetsOperationsGetViewEnum;
(function (HealthcareProjectsLocationsDatasetsOperationsGetViewEnum) {
    HealthcareProjectsLocationsDatasetsOperationsGetViewEnum["MessageViewUnspecified"] = "MESSAGE_VIEW_UNSPECIFIED";
    HealthcareProjectsLocationsDatasetsOperationsGetViewEnum["RawOnly"] = "RAW_ONLY";
    HealthcareProjectsLocationsDatasetsOperationsGetViewEnum["ParsedOnly"] = "PARSED_ONLY";
    HealthcareProjectsLocationsDatasetsOperationsGetViewEnum["Full"] = "FULL";
    HealthcareProjectsLocationsDatasetsOperationsGetViewEnum["SchematizedOnly"] = "SCHEMATIZED_ONLY";
    HealthcareProjectsLocationsDatasetsOperationsGetViewEnum["Basic"] = "BASIC";
})(HealthcareProjectsLocationsDatasetsOperationsGetViewEnum || (HealthcareProjectsLocationsDatasetsOperationsGetViewEnum = {}));
var HealthcareProjectsLocationsDatasetsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsOperationsGetQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetQueryParams.prototype, "view", void 0);
    return HealthcareProjectsLocationsDatasetsOperationsGetQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsOperationsGetQueryParams };
var HealthcareProjectsLocationsDatasetsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsOperationsGetSecurity, _super);
    function HealthcareProjectsLocationsDatasetsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsOperationsGetSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsOperationsGetSecurity };
var HealthcareProjectsLocationsDatasetsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsOperationsGetRequest, _super);
    function HealthcareProjectsLocationsDatasetsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsOperationsGetPathParams)
    ], HealthcareProjectsLocationsDatasetsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsOperationsGetQueryParams)
    ], HealthcareProjectsLocationsDatasetsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsOperationsGetSecurity)
    ], HealthcareProjectsLocationsDatasetsOperationsGetRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsOperationsGetRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsOperationsGetRequest };
var HealthcareProjectsLocationsDatasetsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsOperationsGetResponse, _super);
    function HealthcareProjectsLocationsDatasetsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], HealthcareProjectsLocationsDatasetsOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsOperationsGetResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsOperationsGetResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsOperationsGetResponse };
