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
var PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1, _super);
    function PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1.prototype, "hapikey", void 0);
    return PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1;
}(SpeakeasyBase));
export { PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1 };
var PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2, _super);
    function PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2.prototype, "oauth2Legacy", void 0);
    return PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2;
}(SpeakeasyBase));
export { PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2 };
var PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity = /** @class */ (function (_super) {
    __extends(PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity, _super);
    function PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity.prototype, "option2", void 0);
    return PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity;
}(SpeakeasyBase));
export { PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity };
var PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest = /** @class */ (function (_super) {
    __extends(PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest, _super);
    function PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportFromUrlInput)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest.prototype, "security", void 0);
    return PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest;
}(SpeakeasyBase));
export { PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest };
var PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse = /** @class */ (function (_super) {
    __extends(PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse, _super);
    function PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ImportFromUrlTaskLocator)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse.prototype, "importFromUrlTaskLocator", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse.prototype, "statusCode", void 0);
    return PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse;
}(SpeakeasyBase));
export { PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse };
