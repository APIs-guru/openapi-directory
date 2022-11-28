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
var ContainerProjectsZonesOperationsListPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesOperationsListPathParams, _super);
    function ContainerProjectsZonesOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListPathParams.prototype, "zone", void 0);
    return ContainerProjectsZonesOperationsListPathParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesOperationsListPathParams };
var ContainerProjectsZonesOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesOperationsListQueryParams, _super);
    function ContainerProjectsZonesOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsZonesOperationsListQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsZonesOperationsListQueryParams };
var ContainerProjectsZonesOperationsListSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesOperationsListSecurity, _super);
    function ContainerProjectsZonesOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsZonesOperationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsZonesOperationsListSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsZonesOperationsListSecurity;
}(SpeakeasyBase));
export { ContainerProjectsZonesOperationsListSecurity };
var ContainerProjectsZonesOperationsListRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesOperationsListRequest, _super);
    function ContainerProjectsZonesOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesOperationsListPathParams)
    ], ContainerProjectsZonesOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesOperationsListQueryParams)
    ], ContainerProjectsZonesOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsZonesOperationsListSecurity)
    ], ContainerProjectsZonesOperationsListRequest.prototype, "security", void 0);
    return ContainerProjectsZonesOperationsListRequest;
}(SpeakeasyBase));
export { ContainerProjectsZonesOperationsListRequest };
var ContainerProjectsZonesOperationsListResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsZonesOperationsListResponse, _super);
    function ContainerProjectsZonesOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsZonesOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], ContainerProjectsZonesOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsZonesOperationsListResponse.prototype, "statusCode", void 0);
    return ContainerProjectsZonesOperationsListResponse;
}(SpeakeasyBase));
export { ContainerProjectsZonesOperationsListResponse };
