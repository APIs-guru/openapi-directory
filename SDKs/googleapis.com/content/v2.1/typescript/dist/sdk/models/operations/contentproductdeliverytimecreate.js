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
var ContentProductdeliverytimeCreatePathParams = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeCreatePathParams, _super);
    function ContentProductdeliverytimeCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreatePathParams.prototype, "merchantId", void 0);
    return ContentProductdeliverytimeCreatePathParams;
}(SpeakeasyBase));
export { ContentProductdeliverytimeCreatePathParams };
var ContentProductdeliverytimeCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeCreateQueryParams, _super);
    function ContentProductdeliverytimeCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContentProductdeliverytimeCreateQueryParams;
}(SpeakeasyBase));
export { ContentProductdeliverytimeCreateQueryParams };
var ContentProductdeliverytimeCreateSecurity = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeCreateSecurity, _super);
    function ContentProductdeliverytimeCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentProductdeliverytimeCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentProductdeliverytimeCreateSecurity.prototype, "oauth2c", void 0);
    return ContentProductdeliverytimeCreateSecurity;
}(SpeakeasyBase));
export { ContentProductdeliverytimeCreateSecurity };
var ContentProductdeliverytimeCreateRequest = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeCreateRequest, _super);
    function ContentProductdeliverytimeCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentProductdeliverytimeCreatePathParams)
    ], ContentProductdeliverytimeCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentProductdeliverytimeCreateQueryParams)
    ], ContentProductdeliverytimeCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProductDeliveryTime)
    ], ContentProductdeliverytimeCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentProductdeliverytimeCreateSecurity)
    ], ContentProductdeliverytimeCreateRequest.prototype, "security", void 0);
    return ContentProductdeliverytimeCreateRequest;
}(SpeakeasyBase));
export { ContentProductdeliverytimeCreateRequest };
var ContentProductdeliverytimeCreateResponse = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeCreateResponse, _super);
    function ContentProductdeliverytimeCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProductDeliveryTime)
    ], ContentProductdeliverytimeCreateResponse.prototype, "productDeliveryTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentProductdeliverytimeCreateResponse.prototype, "statusCode", void 0);
    return ContentProductdeliverytimeCreateResponse;
}(SpeakeasyBase));
export { ContentProductdeliverytimeCreateResponse };
