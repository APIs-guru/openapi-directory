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
var TpuProjectsLocationsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsOperationsDeletePathParams, _super);
    function TpuProjectsLocationsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeletePathParams.prototype, "name", void 0);
    return TpuProjectsLocationsOperationsDeletePathParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsOperationsDeletePathParams };
var TpuProjectsLocationsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsOperationsDeleteQueryParams, _super);
    function TpuProjectsLocationsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return TpuProjectsLocationsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsOperationsDeleteQueryParams };
var TpuProjectsLocationsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsOperationsDeleteSecurity, _super);
    function TpuProjectsLocationsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TpuProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TpuProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2c", void 0);
    return TpuProjectsLocationsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { TpuProjectsLocationsOperationsDeleteSecurity };
var TpuProjectsLocationsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsOperationsDeleteRequest, _super);
    function TpuProjectsLocationsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsOperationsDeletePathParams)
    ], TpuProjectsLocationsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsOperationsDeleteQueryParams)
    ], TpuProjectsLocationsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsOperationsDeleteSecurity)
    ], TpuProjectsLocationsOperationsDeleteRequest.prototype, "security", void 0);
    return TpuProjectsLocationsOperationsDeleteRequest;
}(SpeakeasyBase));
export { TpuProjectsLocationsOperationsDeleteRequest };
var TpuProjectsLocationsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsOperationsDeleteResponse, _super);
    function TpuProjectsLocationsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TpuProjectsLocationsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TpuProjectsLocationsOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return TpuProjectsLocationsOperationsDeleteResponse;
}(SpeakeasyBase));
export { TpuProjectsLocationsOperationsDeleteResponse };
