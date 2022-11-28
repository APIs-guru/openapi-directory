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
var DfareportingDimensionValuesQueryPathParams = /** @class */ (function (_super) {
    __extends(DfareportingDimensionValuesQueryPathParams, _super);
    function DfareportingDimensionValuesQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryPathParams.prototype, "profileId", void 0);
    return DfareportingDimensionValuesQueryPathParams;
}(SpeakeasyBase));
export { DfareportingDimensionValuesQueryPathParams };
var DfareportingDimensionValuesQueryQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingDimensionValuesQueryQueryParams, _super);
    function DfareportingDimensionValuesQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingDimensionValuesQueryQueryParams;
}(SpeakeasyBase));
export { DfareportingDimensionValuesQueryQueryParams };
var DfareportingDimensionValuesQuerySecurity = /** @class */ (function (_super) {
    __extends(DfareportingDimensionValuesQuerySecurity, _super);
    function DfareportingDimensionValuesQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingDimensionValuesQuerySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingDimensionValuesQuerySecurity.prototype, "oauth2c", void 0);
    return DfareportingDimensionValuesQuerySecurity;
}(SpeakeasyBase));
export { DfareportingDimensionValuesQuerySecurity };
var DfareportingDimensionValuesQueryRequest = /** @class */ (function (_super) {
    __extends(DfareportingDimensionValuesQueryRequest, _super);
    function DfareportingDimensionValuesQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingDimensionValuesQueryPathParams)
    ], DfareportingDimensionValuesQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingDimensionValuesQueryQueryParams)
    ], DfareportingDimensionValuesQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DimensionValueRequest)
    ], DfareportingDimensionValuesQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingDimensionValuesQuerySecurity)
    ], DfareportingDimensionValuesQueryRequest.prototype, "security", void 0);
    return DfareportingDimensionValuesQueryRequest;
}(SpeakeasyBase));
export { DfareportingDimensionValuesQueryRequest };
var DfareportingDimensionValuesQueryResponse = /** @class */ (function (_super) {
    __extends(DfareportingDimensionValuesQueryResponse, _super);
    function DfareportingDimensionValuesQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingDimensionValuesQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DimensionValueList)
    ], DfareportingDimensionValuesQueryResponse.prototype, "dimensionValueList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingDimensionValuesQueryResponse.prototype, "statusCode", void 0);
    return DfareportingDimensionValuesQueryResponse;
}(SpeakeasyBase));
export { DfareportingDimensionValuesQueryResponse };
