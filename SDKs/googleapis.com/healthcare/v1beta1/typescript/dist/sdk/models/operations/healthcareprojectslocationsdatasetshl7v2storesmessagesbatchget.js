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
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams };
export var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum;
(function (HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum) {
    HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum["MessageViewUnspecified"] = "MESSAGE_VIEW_UNSPECIFIED";
    HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum["RawOnly"] = "RAW_ONLY";
    HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum["ParsedOnly"] = "PARSED_ONLY";
    HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum["Full"] = "FULL";
    HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum["SchematizedOnly"] = "SCHEMATIZED_ONLY";
    HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum["Basic"] = "BASIC";
})(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum || (HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum = {}));
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams.prototype, "view", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetMessagesResponse)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse.prototype, "batchGetMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse };
