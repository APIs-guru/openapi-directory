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
var BooksMylibraryBookshelvesMoveVolumePathParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesMoveVolumePathParams, _super);
    function BooksMylibraryBookshelvesMoveVolumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shelf" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumePathParams.prototype, "shelf", void 0);
    return BooksMylibraryBookshelvesMoveVolumePathParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesMoveVolumePathParams };
var BooksMylibraryBookshelvesMoveVolumeQueryParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesMoveVolumeQueryParams, _super);
    function BooksMylibraryBookshelvesMoveVolumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volumeId" }),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "volumeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volumePosition" }),
        __metadata("design:type", Number)
    ], BooksMylibraryBookshelvesMoveVolumeQueryParams.prototype, "volumePosition", void 0);
    return BooksMylibraryBookshelvesMoveVolumeQueryParams;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesMoveVolumeQueryParams };
var BooksMylibraryBookshelvesMoveVolumeSecurity = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesMoveVolumeSecurity, _super);
    function BooksMylibraryBookshelvesMoveVolumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMylibraryBookshelvesMoveVolumeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMylibraryBookshelvesMoveVolumeSecurity.prototype, "oauth2c", void 0);
    return BooksMylibraryBookshelvesMoveVolumeSecurity;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesMoveVolumeSecurity };
var BooksMylibraryBookshelvesMoveVolumeRequest = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesMoveVolumeRequest, _super);
    function BooksMylibraryBookshelvesMoveVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesMoveVolumePathParams)
    ], BooksMylibraryBookshelvesMoveVolumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesMoveVolumeQueryParams)
    ], BooksMylibraryBookshelvesMoveVolumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryBookshelvesMoveVolumeSecurity)
    ], BooksMylibraryBookshelvesMoveVolumeRequest.prototype, "security", void 0);
    return BooksMylibraryBookshelvesMoveVolumeRequest;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesMoveVolumeRequest };
var BooksMylibraryBookshelvesMoveVolumeResponse = /** @class */ (function (_super) {
    __extends(BooksMylibraryBookshelvesMoveVolumeResponse, _super);
    function BooksMylibraryBookshelvesMoveVolumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMylibraryBookshelvesMoveVolumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BooksMylibraryBookshelvesMoveVolumeResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMylibraryBookshelvesMoveVolumeResponse.prototype, "statusCode", void 0);
    return BooksMylibraryBookshelvesMoveVolumeResponse;
}(SpeakeasyBase));
export { BooksMylibraryBookshelvesMoveVolumeResponse };
