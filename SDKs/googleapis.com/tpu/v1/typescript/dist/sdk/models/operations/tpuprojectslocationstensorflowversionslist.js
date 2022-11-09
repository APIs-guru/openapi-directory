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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var TpuProjectsLocationsTensorflowVersionsListPathParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsTensorflowVersionsListPathParams, _super);
    function TpuProjectsLocationsTensorflowVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListPathParams.prototype, "parent", void 0);
    return TpuProjectsLocationsTensorflowVersionsListPathParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsTensorflowVersionsListPathParams };
var TpuProjectsLocationsTensorflowVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsTensorflowVersionsListQueryParams, _super);
    function TpuProjectsLocationsTensorflowVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    return TpuProjectsLocationsTensorflowVersionsListQueryParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsTensorflowVersionsListQueryParams };
var TpuProjectsLocationsTensorflowVersionsListSecurity = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsTensorflowVersionsListSecurity, _super);
    function TpuProjectsLocationsTensorflowVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TpuProjectsLocationsTensorflowVersionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TpuProjectsLocationsTensorflowVersionsListSecurity.prototype, "oauth2c", void 0);
    return TpuProjectsLocationsTensorflowVersionsListSecurity;
}(SpeakeasyBase));
export { TpuProjectsLocationsTensorflowVersionsListSecurity };
var TpuProjectsLocationsTensorflowVersionsListRequest = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsTensorflowVersionsListRequest, _super);
    function TpuProjectsLocationsTensorflowVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsTensorflowVersionsListPathParams)
    ], TpuProjectsLocationsTensorflowVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsTensorflowVersionsListQueryParams)
    ], TpuProjectsLocationsTensorflowVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsTensorflowVersionsListSecurity)
    ], TpuProjectsLocationsTensorflowVersionsListRequest.prototype, "security", void 0);
    return TpuProjectsLocationsTensorflowVersionsListRequest;
}(SpeakeasyBase));
export { TpuProjectsLocationsTensorflowVersionsListRequest };
var TpuProjectsLocationsTensorflowVersionsListResponse = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsTensorflowVersionsListResponse, _super);
    function TpuProjectsLocationsTensorflowVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TpuProjectsLocationsTensorflowVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTensorFlowVersionsResponse)
    ], TpuProjectsLocationsTensorflowVersionsListResponse.prototype, "listTensorFlowVersionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsTensorflowVersionsListResponse.prototype, "statusCode", void 0);
    return TpuProjectsLocationsTensorflowVersionsListResponse;
}(SpeakeasyBase));
export { TpuProjectsLocationsTensorflowVersionsListResponse };
