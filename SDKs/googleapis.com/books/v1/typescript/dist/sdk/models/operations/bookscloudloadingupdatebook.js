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
var BooksCloudloadingUpdateBookQueryParams = /** @class */ (function (_super) {
    __extends(BooksCloudloadingUpdateBookQueryParams, _super);
    function BooksCloudloadingUpdateBookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookQueryParams.prototype, "uploadProtocol", void 0);
    return BooksCloudloadingUpdateBookQueryParams;
}(SpeakeasyBase));
export { BooksCloudloadingUpdateBookQueryParams };
var BooksCloudloadingUpdateBookSecurity = /** @class */ (function (_super) {
    __extends(BooksCloudloadingUpdateBookSecurity, _super);
    function BooksCloudloadingUpdateBookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksCloudloadingUpdateBookSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksCloudloadingUpdateBookSecurity.prototype, "oauth2c", void 0);
    return BooksCloudloadingUpdateBookSecurity;
}(SpeakeasyBase));
export { BooksCloudloadingUpdateBookSecurity };
var BooksCloudloadingUpdateBookRequest = /** @class */ (function (_super) {
    __extends(BooksCloudloadingUpdateBookRequest, _super);
    function BooksCloudloadingUpdateBookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksCloudloadingUpdateBookQueryParams)
    ], BooksCloudloadingUpdateBookRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BooksCloudloadingResource)
    ], BooksCloudloadingUpdateBookRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksCloudloadingUpdateBookSecurity)
    ], BooksCloudloadingUpdateBookRequest.prototype, "security", void 0);
    return BooksCloudloadingUpdateBookRequest;
}(SpeakeasyBase));
export { BooksCloudloadingUpdateBookRequest };
var BooksCloudloadingUpdateBookResponse = /** @class */ (function (_super) {
    __extends(BooksCloudloadingUpdateBookResponse, _super);
    function BooksCloudloadingUpdateBookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BooksCloudloadingResource)
    ], BooksCloudloadingUpdateBookResponse.prototype, "booksCloudloadingResource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksCloudloadingUpdateBookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksCloudloadingUpdateBookResponse.prototype, "statusCode", void 0);
    return BooksCloudloadingUpdateBookResponse;
}(SpeakeasyBase));
export { BooksCloudloadingUpdateBookResponse };
