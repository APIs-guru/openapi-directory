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
var GetFilesV3FoldersFolderIdGetByIdPathParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderIdGetByIdPathParams, _super);
    function GetFilesV3FoldersFolderIdGetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", String)
    ], GetFilesV3FoldersFolderIdGetByIdPathParams.prototype, "folderId", void 0);
    return GetFilesV3FoldersFolderIdGetByIdPathParams;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderIdGetByIdPathParams };
var GetFilesV3FoldersFolderIdGetByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderIdGetByIdQueryParams, _super);
    function GetFilesV3FoldersFolderIdGetByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=properties" }),
        __metadata("design:type", Array)
    ], GetFilesV3FoldersFolderIdGetByIdQueryParams.prototype, "properties", void 0);
    return GetFilesV3FoldersFolderIdGetByIdQueryParams;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderIdGetByIdQueryParams };
var GetFilesV3FoldersFolderIdGetByIdSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderIdGetByIdSecurityOption1, _super);
    function GetFilesV3FoldersFolderIdGetByIdSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FoldersFolderIdGetByIdSecurityOption1.prototype, "oauth2Legacy", void 0);
    return GetFilesV3FoldersFolderIdGetByIdSecurityOption1;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderIdGetByIdSecurityOption1 };
var GetFilesV3FoldersFolderIdGetByIdSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderIdGetByIdSecurityOption2, _super);
    function GetFilesV3FoldersFolderIdGetByIdSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetFilesV3FoldersFolderIdGetByIdSecurityOption2.prototype, "hapikey", void 0);
    return GetFilesV3FoldersFolderIdGetByIdSecurityOption2;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderIdGetByIdSecurityOption2 };
var GetFilesV3FoldersFolderIdGetByIdSecurityOption3 = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderIdGetByIdSecurityOption3, _super);
    function GetFilesV3FoldersFolderIdGetByIdSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FoldersFolderIdGetByIdSecurityOption3.prototype, "oauth2Legacy", void 0);
    return GetFilesV3FoldersFolderIdGetByIdSecurityOption3;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderIdGetByIdSecurityOption3 };
var GetFilesV3FoldersFolderIdGetByIdSecurity = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderIdGetByIdSecurity, _super);
    function GetFilesV3FoldersFolderIdGetByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetFilesV3FoldersFolderIdGetByIdSecurityOption1)
    ], GetFilesV3FoldersFolderIdGetByIdSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetFilesV3FoldersFolderIdGetByIdSecurityOption2)
    ], GetFilesV3FoldersFolderIdGetByIdSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetFilesV3FoldersFolderIdGetByIdSecurityOption3)
    ], GetFilesV3FoldersFolderIdGetByIdSecurity.prototype, "option3", void 0);
    return GetFilesV3FoldersFolderIdGetByIdSecurity;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderIdGetByIdSecurity };
var GetFilesV3FoldersFolderIdGetByIdRequest = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderIdGetByIdRequest, _super);
    function GetFilesV3FoldersFolderIdGetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesV3FoldersFolderIdGetByIdPathParams)
    ], GetFilesV3FoldersFolderIdGetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesV3FoldersFolderIdGetByIdQueryParams)
    ], GetFilesV3FoldersFolderIdGetByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesV3FoldersFolderIdGetByIdSecurity)
    ], GetFilesV3FoldersFolderIdGetByIdRequest.prototype, "security", void 0);
    return GetFilesV3FoldersFolderIdGetByIdRequest;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderIdGetByIdRequest };
var GetFilesV3FoldersFolderIdGetByIdResponse = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderIdGetByIdResponse, _super);
    function GetFilesV3FoldersFolderIdGetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilesV3FoldersFolderIdGetByIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFilesV3FoldersFolderIdGetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Folder)
    ], GetFilesV3FoldersFolderIdGetByIdResponse.prototype, "folder", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFilesV3FoldersFolderIdGetByIdResponse.prototype, "statusCode", void 0);
    return GetFilesV3FoldersFolderIdGetByIdResponse;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderIdGetByIdResponse };
