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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams, _super);
    function GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams.prototype, "fileId", void 0);
    return GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams;
}(SpeakeasyBase));
export { GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams };
export var GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum;
(function (GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum) {
    GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum["Thumb"] = "thumb";
    GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum["Icon"] = "icon";
    GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum["Medium"] = "medium";
    GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum["Preview"] = "preview";
})(GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum || (GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum = {}));
var GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams, _super);
    function GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=expirationSeconds" }),
        __metadata("design:type", Number)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams.prototype, "expirationSeconds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upscale" }),
        __metadata("design:type", Boolean)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams.prototype, "upscale", void 0);
    return GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams;
}(SpeakeasyBase));
export { GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams };
var GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1, _super);
    function GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1.prototype, "oauth2Legacy", void 0);
    return GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1;
}(SpeakeasyBase));
export { GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1 };
var GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2, _super);
    function GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2.prototype, "hapikey", void 0);
    return GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2;
}(SpeakeasyBase));
export { GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2 };
var GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3 = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3, _super);
    function GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3.prototype, "oauth2Legacy", void 0);
    return GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3;
}(SpeakeasyBase));
export { GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3 };
var GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity, _super);
    function GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity.prototype, "option3", void 0);
    return GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity;
}(SpeakeasyBase));
export { GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity };
var GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest, _super);
    function GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest.prototype, "security", void 0);
    return GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest;
}(SpeakeasyBase));
export { GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest };
var GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse, _super);
    function GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SignedUrl)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse.prototype, "signedUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse.prototype, "statusCode", void 0);
    return GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse;
}(SpeakeasyBase));
export { GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse };
