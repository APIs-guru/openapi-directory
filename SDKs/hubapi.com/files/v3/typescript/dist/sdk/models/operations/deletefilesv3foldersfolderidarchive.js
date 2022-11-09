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
var DeleteFilesV3FoldersFolderIdArchivePathParams = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderIdArchivePathParams, _super);
    function DeleteFilesV3FoldersFolderIdArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", String)
    ], DeleteFilesV3FoldersFolderIdArchivePathParams.prototype, "folderId", void 0);
    return DeleteFilesV3FoldersFolderIdArchivePathParams;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderIdArchivePathParams };
var DeleteFilesV3FoldersFolderIdArchiveSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderIdArchiveSecurityOption1, _super);
    function DeleteFilesV3FoldersFolderIdArchiveSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], DeleteFilesV3FoldersFolderIdArchiveSecurityOption1.prototype, "hapikey", void 0);
    return DeleteFilesV3FoldersFolderIdArchiveSecurityOption1;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderIdArchiveSecurityOption1 };
var DeleteFilesV3FoldersFolderIdArchiveSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderIdArchiveSecurityOption2, _super);
    function DeleteFilesV3FoldersFolderIdArchiveSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], DeleteFilesV3FoldersFolderIdArchiveSecurityOption2.prototype, "oauth2Legacy", void 0);
    return DeleteFilesV3FoldersFolderIdArchiveSecurityOption2;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderIdArchiveSecurityOption2 };
var DeleteFilesV3FoldersFolderIdArchiveSecurity = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderIdArchiveSecurity, _super);
    function DeleteFilesV3FoldersFolderIdArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeleteFilesV3FoldersFolderIdArchiveSecurityOption1)
    ], DeleteFilesV3FoldersFolderIdArchiveSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeleteFilesV3FoldersFolderIdArchiveSecurityOption2)
    ], DeleteFilesV3FoldersFolderIdArchiveSecurity.prototype, "option2", void 0);
    return DeleteFilesV3FoldersFolderIdArchiveSecurity;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderIdArchiveSecurity };
var DeleteFilesV3FoldersFolderIdArchiveRequest = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderIdArchiveRequest, _super);
    function DeleteFilesV3FoldersFolderIdArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFilesV3FoldersFolderIdArchivePathParams)
    ], DeleteFilesV3FoldersFolderIdArchiveRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteFilesV3FoldersFolderIdArchiveSecurity)
    ], DeleteFilesV3FoldersFolderIdArchiveRequest.prototype, "security", void 0);
    return DeleteFilesV3FoldersFolderIdArchiveRequest;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderIdArchiveRequest };
var DeleteFilesV3FoldersFolderIdArchiveResponse = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderIdArchiveResponse, _super);
    function DeleteFilesV3FoldersFolderIdArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteFilesV3FoldersFolderIdArchiveResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteFilesV3FoldersFolderIdArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteFilesV3FoldersFolderIdArchiveResponse.prototype, "statusCode", void 0);
    return DeleteFilesV3FoldersFolderIdArchiveResponse;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderIdArchiveResponse };
