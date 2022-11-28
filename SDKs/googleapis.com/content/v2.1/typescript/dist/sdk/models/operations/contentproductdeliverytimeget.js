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
var ContentProductdeliverytimeGetPathParams = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeGetPathParams, _super);
    function ContentProductdeliverytimeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetPathParams.prototype, "productId", void 0);
    return ContentProductdeliverytimeGetPathParams;
}(SpeakeasyBase));
export { ContentProductdeliverytimeGetPathParams };
var ContentProductdeliverytimeGetQueryParams = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeGetQueryParams, _super);
    function ContentProductdeliverytimeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetQueryParams.prototype, "uploadProtocol", void 0);
    return ContentProductdeliverytimeGetQueryParams;
}(SpeakeasyBase));
export { ContentProductdeliverytimeGetQueryParams };
var ContentProductdeliverytimeGetSecurity = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeGetSecurity, _super);
    function ContentProductdeliverytimeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentProductdeliverytimeGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentProductdeliverytimeGetSecurity.prototype, "oauth2c", void 0);
    return ContentProductdeliverytimeGetSecurity;
}(SpeakeasyBase));
export { ContentProductdeliverytimeGetSecurity };
var ContentProductdeliverytimeGetRequest = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeGetRequest, _super);
    function ContentProductdeliverytimeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentProductdeliverytimeGetPathParams)
    ], ContentProductdeliverytimeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentProductdeliverytimeGetQueryParams)
    ], ContentProductdeliverytimeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentProductdeliverytimeGetSecurity)
    ], ContentProductdeliverytimeGetRequest.prototype, "security", void 0);
    return ContentProductdeliverytimeGetRequest;
}(SpeakeasyBase));
export { ContentProductdeliverytimeGetRequest };
var ContentProductdeliverytimeGetResponse = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeGetResponse, _super);
    function ContentProductdeliverytimeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProductDeliveryTime)
    ], ContentProductdeliverytimeGetResponse.prototype, "productDeliveryTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentProductdeliverytimeGetResponse.prototype, "statusCode", void 0);
    return ContentProductdeliverytimeGetResponse;
}(SpeakeasyBase));
export { ContentProductdeliverytimeGetResponse };
