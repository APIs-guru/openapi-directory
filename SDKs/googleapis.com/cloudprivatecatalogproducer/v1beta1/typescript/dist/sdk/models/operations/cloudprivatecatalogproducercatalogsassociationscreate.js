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
var CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams.prototype, "parent", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams };
var CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams };
var CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity };
var CloudprivatecatalogproducerCatalogsAssociationsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsCreateRequest, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateRequest.prototype, "security", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsCreateRequest;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsCreateRequest };
var CloudprivatecatalogproducerCatalogsAssociationsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsCreateResponse, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsAssociationsCreateResponse.prototype, "statusCode", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsCreateResponse;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsCreateResponse };
