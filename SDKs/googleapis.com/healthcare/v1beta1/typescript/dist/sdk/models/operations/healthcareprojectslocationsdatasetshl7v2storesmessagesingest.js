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
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IngestMessageRequestInput)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IngestMessageResponse)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse.prototype, "ingestMessageResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse };
