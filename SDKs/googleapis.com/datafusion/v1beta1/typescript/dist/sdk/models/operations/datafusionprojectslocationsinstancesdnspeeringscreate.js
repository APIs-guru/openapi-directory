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
var DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams, _super);
    function DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams.prototype, "parent", void 0);
    return DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams };
var DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams, _super);
    function DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dnsPeeringId" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "dnsPeeringId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams };
var DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity, _super);
    function DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity.prototype, "oauth2c", void 0);
    return DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity };
var DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest, _super);
    function DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DnsPeering)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest.prototype, "security", void 0);
    return DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest };
var DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse, _super);
    function DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DnsPeering)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse.prototype, "dnsPeering", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse.prototype, "statusCode", void 0);
    return DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse };
