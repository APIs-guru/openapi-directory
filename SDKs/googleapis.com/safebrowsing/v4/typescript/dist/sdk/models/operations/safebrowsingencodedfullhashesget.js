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
var SafebrowsingEncodedFullHashesGetPathParams = /** @class */ (function (_super) {
    __extends(SafebrowsingEncodedFullHashesGetPathParams, _super);
    function SafebrowsingEncodedFullHashesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=encodedRequest" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetPathParams.prototype, "encodedRequest", void 0);
    return SafebrowsingEncodedFullHashesGetPathParams;
}(SpeakeasyBase));
export { SafebrowsingEncodedFullHashesGetPathParams };
var SafebrowsingEncodedFullHashesGetQueryParams = /** @class */ (function (_super) {
    __extends(SafebrowsingEncodedFullHashesGetQueryParams, _super);
    function SafebrowsingEncodedFullHashesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVersion" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetQueryParams.prototype, "uploadProtocol", void 0);
    return SafebrowsingEncodedFullHashesGetQueryParams;
}(SpeakeasyBase));
export { SafebrowsingEncodedFullHashesGetQueryParams };
var SafebrowsingEncodedFullHashesGetRequest = /** @class */ (function (_super) {
    __extends(SafebrowsingEncodedFullHashesGetRequest, _super);
    function SafebrowsingEncodedFullHashesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SafebrowsingEncodedFullHashesGetPathParams)
    ], SafebrowsingEncodedFullHashesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SafebrowsingEncodedFullHashesGetQueryParams)
    ], SafebrowsingEncodedFullHashesGetRequest.prototype, "queryParams", void 0);
    return SafebrowsingEncodedFullHashesGetRequest;
}(SpeakeasyBase));
export { SafebrowsingEncodedFullHashesGetRequest };
var SafebrowsingEncodedFullHashesGetResponse = /** @class */ (function (_super) {
    __extends(SafebrowsingEncodedFullHashesGetResponse, _super);
    function SafebrowsingEncodedFullHashesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SafebrowsingEncodedFullHashesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse)
    ], SafebrowsingEncodedFullHashesGetResponse.prototype, "googleSecuritySafebrowsingV4FindFullHashesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SafebrowsingEncodedFullHashesGetResponse.prototype, "statusCode", void 0);
    return SafebrowsingEncodedFullHashesGetResponse;
}(SpeakeasyBase));
export { SafebrowsingEncodedFullHashesGetResponse };
