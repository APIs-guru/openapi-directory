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
var ContainerProjectsAggregatedUsableSubnetworksListPathParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsAggregatedUsableSubnetworksListPathParams, _super);
    function ContainerProjectsAggregatedUsableSubnetworksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListPathParams.prototype, "parent", void 0);
    return ContainerProjectsAggregatedUsableSubnetworksListPathParams;
}(SpeakeasyBase));
export { ContainerProjectsAggregatedUsableSubnetworksListPathParams };
var ContainerProjectsAggregatedUsableSubnetworksListQueryParams = /** @class */ (function (_super) {
    __extends(ContainerProjectsAggregatedUsableSubnetworksListQueryParams, _super);
    function ContainerProjectsAggregatedUsableSubnetworksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListQueryParams.prototype, "uploadProtocol", void 0);
    return ContainerProjectsAggregatedUsableSubnetworksListQueryParams;
}(SpeakeasyBase));
export { ContainerProjectsAggregatedUsableSubnetworksListQueryParams };
var ContainerProjectsAggregatedUsableSubnetworksListSecurity = /** @class */ (function (_super) {
    __extends(ContainerProjectsAggregatedUsableSubnetworksListSecurity, _super);
    function ContainerProjectsAggregatedUsableSubnetworksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContainerProjectsAggregatedUsableSubnetworksListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContainerProjectsAggregatedUsableSubnetworksListSecurity.prototype, "oauth2c", void 0);
    return ContainerProjectsAggregatedUsableSubnetworksListSecurity;
}(SpeakeasyBase));
export { ContainerProjectsAggregatedUsableSubnetworksListSecurity };
var ContainerProjectsAggregatedUsableSubnetworksListRequest = /** @class */ (function (_super) {
    __extends(ContainerProjectsAggregatedUsableSubnetworksListRequest, _super);
    function ContainerProjectsAggregatedUsableSubnetworksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsAggregatedUsableSubnetworksListPathParams)
    ], ContainerProjectsAggregatedUsableSubnetworksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsAggregatedUsableSubnetworksListQueryParams)
    ], ContainerProjectsAggregatedUsableSubnetworksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContainerProjectsAggregatedUsableSubnetworksListSecurity)
    ], ContainerProjectsAggregatedUsableSubnetworksListRequest.prototype, "security", void 0);
    return ContainerProjectsAggregatedUsableSubnetworksListRequest;
}(SpeakeasyBase));
export { ContainerProjectsAggregatedUsableSubnetworksListRequest };
var ContainerProjectsAggregatedUsableSubnetworksListResponse = /** @class */ (function (_super) {
    __extends(ContainerProjectsAggregatedUsableSubnetworksListResponse, _super);
    function ContainerProjectsAggregatedUsableSubnetworksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContainerProjectsAggregatedUsableSubnetworksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListUsableSubnetworksResponse)
    ], ContainerProjectsAggregatedUsableSubnetworksListResponse.prototype, "listUsableSubnetworksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContainerProjectsAggregatedUsableSubnetworksListResponse.prototype, "statusCode", void 0);
    return ContainerProjectsAggregatedUsableSubnetworksListResponse;
}(SpeakeasyBase));
export { ContainerProjectsAggregatedUsableSubnetworksListResponse };
