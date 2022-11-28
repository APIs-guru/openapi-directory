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
var CloudprivatecatalogproducerCatalogsAssociationsListPathParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsListPathParams, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListPathParams.prototype, "parent", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsListPathParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsListPathParams };
var CloudprivatecatalogproducerCatalogsAssociationsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsListQueryParams, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsListQueryParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsListQueryParams };
var CloudprivatecatalogproducerCatalogsAssociationsListSecurity = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsListSecurity, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprivatecatalogproducerCatalogsAssociationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprivatecatalogproducerCatalogsAssociationsListSecurity.prototype, "oauth2c", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsListSecurity;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsListSecurity };
var CloudprivatecatalogproducerCatalogsAssociationsListRequest = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsListRequest, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsAssociationsListPathParams)
    ], CloudprivatecatalogproducerCatalogsAssociationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsAssociationsListQueryParams)
    ], CloudprivatecatalogproducerCatalogsAssociationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsAssociationsListSecurity)
    ], CloudprivatecatalogproducerCatalogsAssociationsListRequest.prototype, "security", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsListRequest;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsListRequest };
var CloudprivatecatalogproducerCatalogsAssociationsListResponse = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsAssociationsListResponse, _super);
    function CloudprivatecatalogproducerCatalogsAssociationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CloudprivatecatalogproducerCatalogsAssociationsListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsAssociationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsAssociationsListResponse.prototype, "statusCode", void 0);
    return CloudprivatecatalogproducerCatalogsAssociationsListResponse;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsAssociationsListResponse };
