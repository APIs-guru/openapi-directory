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
var HealthcareProjectsLocationsDatasetsAnnotationStoresListPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresListPathParams, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListPathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresListPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresListPathParams };
var HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams };
var HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity };
var HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsAnnotationStoresListPathParams)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsAnnotationStoresListQueryParams)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsAnnotationStoresListSecurity)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest };
var HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAnnotationStoresResponse)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse.prototype, "listAnnotationStoresResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse };
