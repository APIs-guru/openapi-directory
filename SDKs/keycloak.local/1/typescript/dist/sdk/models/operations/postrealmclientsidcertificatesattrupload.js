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
var PostRealmClientsIdCertificatesAttrUploadPathParams = /** @class */ (function (_super) {
    __extends(PostRealmClientsIdCertificatesAttrUploadPathParams, _super);
    function PostRealmClientsIdCertificatesAttrUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attr" }),
        __metadata("design:type", String)
    ], PostRealmClientsIdCertificatesAttrUploadPathParams.prototype, "attr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostRealmClientsIdCertificatesAttrUploadPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], PostRealmClientsIdCertificatesAttrUploadPathParams.prototype, "realm", void 0);
    return PostRealmClientsIdCertificatesAttrUploadPathParams;
}(SpeakeasyBase));
export { PostRealmClientsIdCertificatesAttrUploadPathParams };
var PostRealmClientsIdCertificatesAttrUploadRequest = /** @class */ (function (_super) {
    __extends(PostRealmClientsIdCertificatesAttrUploadRequest, _super);
    function PostRealmClientsIdCertificatesAttrUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRealmClientsIdCertificatesAttrUploadPathParams)
    ], PostRealmClientsIdCertificatesAttrUploadRequest.prototype, "pathParams", void 0);
    return PostRealmClientsIdCertificatesAttrUploadRequest;
}(SpeakeasyBase));
export { PostRealmClientsIdCertificatesAttrUploadRequest };
var PostRealmClientsIdCertificatesAttrUploadResponse = /** @class */ (function (_super) {
    __extends(PostRealmClientsIdCertificatesAttrUploadResponse, _super);
    function PostRealmClientsIdCertificatesAttrUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CertificateRepresentation)
    ], PostRealmClientsIdCertificatesAttrUploadResponse.prototype, "certificateRepresentation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRealmClientsIdCertificatesAttrUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRealmClientsIdCertificatesAttrUploadResponse.prototype, "statusCode", void 0);
    return PostRealmClientsIdCertificatesAttrUploadResponse;
}(SpeakeasyBase));
export { PostRealmClientsIdCertificatesAttrUploadResponse };
