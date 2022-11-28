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
var CloudprivatecatalogproducerCatalogsProductsCopyPathParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsCopyPathParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsCopyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyPathParams.prototype, "name", void 0);
    return CloudprivatecatalogproducerCatalogsProductsCopyPathParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsCopyPathParams };
var CloudprivatecatalogproducerCatalogsProductsCopyQueryParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsCopyQueryParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprivatecatalogproducerCatalogsProductsCopyQueryParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsCopyQueryParams };
var CloudprivatecatalogproducerCatalogsProductsCopySecurity = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsCopySecurity, _super);
    function CloudprivatecatalogproducerCatalogsProductsCopySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprivatecatalogproducerCatalogsProductsCopySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprivatecatalogproducerCatalogsProductsCopySecurity.prototype, "oauth2c", void 0);
    return CloudprivatecatalogproducerCatalogsProductsCopySecurity;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsCopySecurity };
var CloudprivatecatalogproducerCatalogsProductsCopyRequest = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsCopyRequest, _super);
    function CloudprivatecatalogproducerCatalogsProductsCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsCopyPathParams)
    ], CloudprivatecatalogproducerCatalogsProductsCopyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsCopyQueryParams)
    ], CloudprivatecatalogproducerCatalogsProductsCopyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest)
    ], CloudprivatecatalogproducerCatalogsProductsCopyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsCopySecurity)
    ], CloudprivatecatalogproducerCatalogsProductsCopyRequest.prototype, "security", void 0);
    return CloudprivatecatalogproducerCatalogsProductsCopyRequest;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsCopyRequest };
var CloudprivatecatalogproducerCatalogsProductsCopyResponse = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsCopyResponse, _super);
    function CloudprivatecatalogproducerCatalogsProductsCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CloudprivatecatalogproducerCatalogsProductsCopyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsCopyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsProductsCopyResponse.prototype, "statusCode", void 0);
    return CloudprivatecatalogproducerCatalogsProductsCopyResponse;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsCopyResponse };
