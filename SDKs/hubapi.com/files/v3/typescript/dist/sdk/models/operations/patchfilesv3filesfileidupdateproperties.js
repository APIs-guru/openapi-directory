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
var PatchFilesV3FilesFileIdUpdatePropertiesPathParams = /** @class */ (function (_super) {
    __extends(PatchFilesV3FilesFileIdUpdatePropertiesPathParams, _super);
    function PatchFilesV3FilesFileIdUpdatePropertiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], PatchFilesV3FilesFileIdUpdatePropertiesPathParams.prototype, "fileId", void 0);
    return PatchFilesV3FilesFileIdUpdatePropertiesPathParams;
}(SpeakeasyBase));
export { PatchFilesV3FilesFileIdUpdatePropertiesPathParams };
var PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption1 = /** @class */ (function (_super) {
    __extends(PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption1, _super);
    function PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption1.prototype, "hapikey", void 0);
    return PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption1;
}(SpeakeasyBase));
export { PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption1 };
var PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption2 = /** @class */ (function (_super) {
    __extends(PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption2, _super);
    function PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption2.prototype, "oauth2Legacy", void 0);
    return PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption2;
}(SpeakeasyBase));
export { PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption2 };
var PatchFilesV3FilesFileIdUpdatePropertiesSecurity = /** @class */ (function (_super) {
    __extends(PatchFilesV3FilesFileIdUpdatePropertiesSecurity, _super);
    function PatchFilesV3FilesFileIdUpdatePropertiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption1)
    ], PatchFilesV3FilesFileIdUpdatePropertiesSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption2)
    ], PatchFilesV3FilesFileIdUpdatePropertiesSecurity.prototype, "option2", void 0);
    return PatchFilesV3FilesFileIdUpdatePropertiesSecurity;
}(SpeakeasyBase));
export { PatchFilesV3FilesFileIdUpdatePropertiesSecurity };
var PatchFilesV3FilesFileIdUpdatePropertiesRequest = /** @class */ (function (_super) {
    __extends(PatchFilesV3FilesFileIdUpdatePropertiesRequest, _super);
    function PatchFilesV3FilesFileIdUpdatePropertiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PatchFilesV3FilesFileIdUpdatePropertiesPathParams)
    ], PatchFilesV3FilesFileIdUpdatePropertiesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FileUpdateInput)
    ], PatchFilesV3FilesFileIdUpdatePropertiesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PatchFilesV3FilesFileIdUpdatePropertiesSecurity)
    ], PatchFilesV3FilesFileIdUpdatePropertiesRequest.prototype, "security", void 0);
    return PatchFilesV3FilesFileIdUpdatePropertiesRequest;
}(SpeakeasyBase));
export { PatchFilesV3FilesFileIdUpdatePropertiesRequest };
var PatchFilesV3FilesFileIdUpdatePropertiesResponse = /** @class */ (function (_super) {
    __extends(PatchFilesV3FilesFileIdUpdatePropertiesResponse, _super);
    function PatchFilesV3FilesFileIdUpdatePropertiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PatchFilesV3FilesFileIdUpdatePropertiesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PatchFilesV3FilesFileIdUpdatePropertiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.File)
    ], PatchFilesV3FilesFileIdUpdatePropertiesResponse.prototype, "file", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PatchFilesV3FilesFileIdUpdatePropertiesResponse.prototype, "statusCode", void 0);
    return PatchFilesV3FilesFileIdUpdatePropertiesResponse;
}(SpeakeasyBase));
export { PatchFilesV3FilesFileIdUpdatePropertiesResponse };
