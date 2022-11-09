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
var DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams, _super);
    function DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams.prototype, "fileId", void 0);
    return DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams;
}(SpeakeasyBase));
export { DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams };
var DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1, _super);
    function DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1.prototype, "hapikey", void 0);
    return DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1;
}(SpeakeasyBase));
export { DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1 };
var DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2, _super);
    function DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2.prototype, "oauth2Legacy", void 0);
    return DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2;
}(SpeakeasyBase));
export { DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2 };
var DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity, _super);
    function DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity.prototype, "option2", void 0);
    return DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity;
}(SpeakeasyBase));
export { DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity };
var DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest, _super);
    function DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest.prototype, "security", void 0);
    return DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest;
}(SpeakeasyBase));
export { DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest };
var DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse, _super);
    function DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse.prototype, "statusCode", void 0);
    return DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse;
}(SpeakeasyBase));
export { DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse };
