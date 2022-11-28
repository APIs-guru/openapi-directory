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
var TpuProjectsLocationsQueuedResourcesListPathParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesListPathParams, _super);
    function TpuProjectsLocationsQueuedResourcesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListPathParams.prototype, "parent", void 0);
    return TpuProjectsLocationsQueuedResourcesListPathParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesListPathParams };
var TpuProjectsLocationsQueuedResourcesListQueryParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesListQueryParams, _super);
    function TpuProjectsLocationsQueuedResourcesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListQueryParams.prototype, "uploadProtocol", void 0);
    return TpuProjectsLocationsQueuedResourcesListQueryParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesListQueryParams };
var TpuProjectsLocationsQueuedResourcesListSecurity = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesListSecurity, _super);
    function TpuProjectsLocationsQueuedResourcesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TpuProjectsLocationsQueuedResourcesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TpuProjectsLocationsQueuedResourcesListSecurity.prototype, "oauth2c", void 0);
    return TpuProjectsLocationsQueuedResourcesListSecurity;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesListSecurity };
var TpuProjectsLocationsQueuedResourcesListRequest = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesListRequest, _super);
    function TpuProjectsLocationsQueuedResourcesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsQueuedResourcesListPathParams)
    ], TpuProjectsLocationsQueuedResourcesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsQueuedResourcesListQueryParams)
    ], TpuProjectsLocationsQueuedResourcesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsQueuedResourcesListSecurity)
    ], TpuProjectsLocationsQueuedResourcesListRequest.prototype, "security", void 0);
    return TpuProjectsLocationsQueuedResourcesListRequest;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesListRequest };
var TpuProjectsLocationsQueuedResourcesListResponse = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsQueuedResourcesListResponse, _super);
    function TpuProjectsLocationsQueuedResourcesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TpuProjectsLocationsQueuedResourcesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListQueuedResourcesResponse)
    ], TpuProjectsLocationsQueuedResourcesListResponse.prototype, "listQueuedResourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsQueuedResourcesListResponse.prototype, "statusCode", void 0);
    return TpuProjectsLocationsQueuedResourcesListResponse;
}(SpeakeasyBase));
export { TpuProjectsLocationsQueuedResourcesListResponse };
