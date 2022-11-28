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
var BooksMylibraryBookshelvesClearVolumesPathParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesClearVolumesPathParams, _super);
    function BooksMylibraryBookshelvesClearVolumesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shelf" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesPathParams.prototype, "shelf", void 0);
    return BooksMylibraryBookshelvesClearVolumesPathParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesClearVolumesPathParams };
var BooksMylibraryBookshelvesClearVolumesQueryParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesClearVolumesQueryParams, _super);
    function BooksMylibraryBookshelvesClearVolumesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesQueryParams.prototype, "uploadProtocol", void 0);
    return BooksMylibraryBookshelvesClearVolumesQueryParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesClearVolumesQueryParams };
var BooksMylibraryBookshelvesClearVolumesSecurity = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesClearVolumesSecurity, _super);
    function BooksMylibraryBookshelvesClearVolumesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMylibraryBookshelvesClearVolumesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMylibraryBookshelvesClearVolumesSecurity.prototype, "oauth2c", void 0);
    return BooksMylibraryBookshelvesClearVolumesSecurity;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesClearVolumesSecurity };
var BooksMylibraryBookshelvesClearVolumesRequest = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesClearVolumesRequest, _super);
    function BooksMylibraryBookshelvesClearVolumesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesClearVolumesPathParams)
    ], BooksMylibraryBookshelvesClearVolumesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesClearVolumesQueryParams)
    ], BooksMylibraryBookshelvesClearVolumesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesClearVolumesSecurity)
    ], BooksMylibraryBookshelvesClearVolumesRequest.prototype, "security", void 0);
    return BooksMylibraryBookshelvesClearVolumesRequest;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesClearVolumesRequest };
var BooksMylibraryBookshelvesClearVolumesResponse = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesClearVolumesResponse, _super);
    function BooksMylibraryBookshelvesClearVolumesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesClearVolumesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BooksMylibraryBookshelvesClearVolumesResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMylibraryBookshelvesClearVolumesResponse.prototype, "statusCode", void 0);
    return BooksMylibraryBookshelvesClearVolumesResponse;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesClearVolumesResponse };
