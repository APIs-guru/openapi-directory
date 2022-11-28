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
var RetailProjectsLocationsCatalogsServingConfigsDeletePathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsDeletePathParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeletePathParams.prototype, "name", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsDeletePathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsDeletePathParams };
var RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams, _super);
    function RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams };
var RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity, _super);
    function RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity };
var RetailProjectsLocationsCatalogsServingConfigsDeleteRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsDeleteRequest, _super);
    function RetailProjectsLocationsCatalogsServingConfigsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsDeletePathParams)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsDeleteRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsDeleteRequest };
var RetailProjectsLocationsCatalogsServingConfigsDeleteResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsServingConfigsDeleteResponse, _super);
    function RetailProjectsLocationsCatalogsServingConfigsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsServingConfigsDeleteResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsServingConfigsDeleteResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsServingConfigsDeleteResponse };
