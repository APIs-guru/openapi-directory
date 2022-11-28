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
var DeleteFilesV3FoldersFolderPathArchiveByPathPathParams = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderPathArchiveByPathPathParams, _super);
    function DeleteFilesV3FoldersFolderPathArchiveByPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderPath" }),
        __metadata("design:type", String)
    ], DeleteFilesV3FoldersFolderPathArchiveByPathPathParams.prototype, "folderPath", void 0);
    return DeleteFilesV3FoldersFolderPathArchiveByPathPathParams;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderPathArchiveByPathPathParams };
var DeleteFilesV3FoldersFolderPathArchiveByPathSecurity = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderPathArchiveByPathSecurity, _super);
    function DeleteFilesV3FoldersFolderPathArchiveByPathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], DeleteFilesV3FoldersFolderPathArchiveByPathSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], DeleteFilesV3FoldersFolderPathArchiveByPathSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], DeleteFilesV3FoldersFolderPathArchiveByPathSecurity.prototype, "oauth2Legacy", void 0);
    return DeleteFilesV3FoldersFolderPathArchiveByPathSecurity;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderPathArchiveByPathSecurity };
var DeleteFilesV3FoldersFolderPathArchiveByPathRequest = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderPathArchiveByPathRequest, _super);
    function DeleteFilesV3FoldersFolderPathArchiveByPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFilesV3FoldersFolderPathArchiveByPathPathParams)
    ], DeleteFilesV3FoldersFolderPathArchiveByPathRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFilesV3FoldersFolderPathArchiveByPathSecurity)
    ], DeleteFilesV3FoldersFolderPathArchiveByPathRequest.prototype, "security", void 0);
    return DeleteFilesV3FoldersFolderPathArchiveByPathRequest;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderPathArchiveByPathRequest };
var DeleteFilesV3FoldersFolderPathArchiveByPathResponse = /** @class */ (function (_super) {
    __extends(DeleteFilesV3FoldersFolderPathArchiveByPathResponse, _super);
    function DeleteFilesV3FoldersFolderPathArchiveByPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteFilesV3FoldersFolderPathArchiveByPathResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFilesV3FoldersFolderPathArchiveByPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteFilesV3FoldersFolderPathArchiveByPathResponse.prototype, "statusCode", void 0);
    return DeleteFilesV3FoldersFolderPathArchiveByPathResponse;
}(SpeakeasyBase));
export { DeleteFilesV3FoldersFolderPathArchiveByPathResponse };
