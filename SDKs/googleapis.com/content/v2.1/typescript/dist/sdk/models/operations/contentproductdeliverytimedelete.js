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
var ContentProductdeliverytimeDeletePathParams = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeDeletePathParams, _super);
    function ContentProductdeliverytimeDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeletePathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeletePathParams.prototype, "productId", void 0);
    return ContentProductdeliverytimeDeletePathParams;
}(SpeakeasyBase));
export { ContentProductdeliverytimeDeletePathParams };
var ContentProductdeliverytimeDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeDeleteQueryParams, _super);
    function ContentProductdeliverytimeDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ContentProductdeliverytimeDeleteQueryParams;
}(SpeakeasyBase));
export { ContentProductdeliverytimeDeleteQueryParams };
var ContentProductdeliverytimeDeleteSecurity = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeDeleteSecurity, _super);
    function ContentProductdeliverytimeDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentProductdeliverytimeDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentProductdeliverytimeDeleteSecurity.prototype, "oauth2c", void 0);
    return ContentProductdeliverytimeDeleteSecurity;
}(SpeakeasyBase));
export { ContentProductdeliverytimeDeleteSecurity };
var ContentProductdeliverytimeDeleteRequest = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeDeleteRequest, _super);
    function ContentProductdeliverytimeDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentProductdeliverytimeDeletePathParams)
    ], ContentProductdeliverytimeDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentProductdeliverytimeDeleteQueryParams)
    ], ContentProductdeliverytimeDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentProductdeliverytimeDeleteSecurity)
    ], ContentProductdeliverytimeDeleteRequest.prototype, "security", void 0);
    return ContentProductdeliverytimeDeleteRequest;
}(SpeakeasyBase));
export { ContentProductdeliverytimeDeleteRequest };
var ContentProductdeliverytimeDeleteResponse = /** @class */ (function (_super) {
    __extends(ContentProductdeliverytimeDeleteResponse, _super);
    function ContentProductdeliverytimeDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentProductdeliverytimeDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentProductdeliverytimeDeleteResponse.prototype, "statusCode", void 0);
    return ContentProductdeliverytimeDeleteResponse;
}(SpeakeasyBase));
export { ContentProductdeliverytimeDeleteResponse };
