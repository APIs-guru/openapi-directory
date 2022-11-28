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
var PutFilesV3FilesFileIdReplacePathParams = /** @class */ (function (_super) {
    __extends(PutFilesV3FilesFileIdReplacePathParams, _super);
    function PutFilesV3FilesFileIdReplacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], PutFilesV3FilesFileIdReplacePathParams.prototype, "fileId", void 0);
    return PutFilesV3FilesFileIdReplacePathParams;
}(SpeakeasyBase));
export { PutFilesV3FilesFileIdReplacePathParams };
var PutFilesV3FilesFileIdReplaceSecurity = /** @class */ (function (_super) {
    __extends(PutFilesV3FilesFileIdReplaceSecurity, _super);
    function PutFilesV3FilesFileIdReplaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PutFilesV3FilesFileIdReplaceSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PutFilesV3FilesFileIdReplaceSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PutFilesV3FilesFileIdReplaceSecurity.prototype, "oauth2Legacy", void 0);
    return PutFilesV3FilesFileIdReplaceSecurity;
}(SpeakeasyBase));
export { PutFilesV3FilesFileIdReplaceSecurity };
var PutFilesV3FilesFileIdReplaceRequest = /** @class */ (function (_super) {
    __extends(PutFilesV3FilesFileIdReplaceRequest, _super);
    function PutFilesV3FilesFileIdReplaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFilesV3FilesFileIdReplacePathParams)
    ], PutFilesV3FilesFileIdReplaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], PutFilesV3FilesFileIdReplaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFilesV3FilesFileIdReplaceSecurity)
    ], PutFilesV3FilesFileIdReplaceRequest.prototype, "security", void 0);
    return PutFilesV3FilesFileIdReplaceRequest;
}(SpeakeasyBase));
export { PutFilesV3FilesFileIdReplaceRequest };
var PutFilesV3FilesFileIdReplaceResponse = /** @class */ (function (_super) {
    __extends(PutFilesV3FilesFileIdReplaceResponse, _super);
    function PutFilesV3FilesFileIdReplaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutFilesV3FilesFileIdReplaceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutFilesV3FilesFileIdReplaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], PutFilesV3FilesFileIdReplaceResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutFilesV3FilesFileIdReplaceResponse.prototype, "statusCode", void 0);
    return PutFilesV3FilesFileIdReplaceResponse;
}(SpeakeasyBase));
export { PutFilesV3FilesFileIdReplaceResponse };
