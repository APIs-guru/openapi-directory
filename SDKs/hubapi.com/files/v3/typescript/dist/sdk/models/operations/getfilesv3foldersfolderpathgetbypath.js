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
var GetFilesV3FoldersFolderPathGetByPathPathParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderPathGetByPathPathParams, _super);
    function GetFilesV3FoldersFolderPathGetByPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=folderPath" }),
        __metadata("design:type", String)
    ], GetFilesV3FoldersFolderPathGetByPathPathParams.prototype, "folderPath", void 0);
    return GetFilesV3FoldersFolderPathGetByPathPathParams;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderPathGetByPathPathParams };
var GetFilesV3FoldersFolderPathGetByPathQueryParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderPathGetByPathQueryParams, _super);
    function GetFilesV3FoldersFolderPathGetByPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=properties" }),
        __metadata("design:type", Array)
    ], GetFilesV3FoldersFolderPathGetByPathQueryParams.prototype, "properties", void 0);
    return GetFilesV3FoldersFolderPathGetByPathQueryParams;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderPathGetByPathQueryParams };
var GetFilesV3FoldersFolderPathGetByPathSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderPathGetByPathSecurityOption1, _super);
    function GetFilesV3FoldersFolderPathGetByPathSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FoldersFolderPathGetByPathSecurityOption1.prototype, "oauth2Legacy", void 0);
    return GetFilesV3FoldersFolderPathGetByPathSecurityOption1;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderPathGetByPathSecurityOption1 };
var GetFilesV3FoldersFolderPathGetByPathSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderPathGetByPathSecurityOption2, _super);
    function GetFilesV3FoldersFolderPathGetByPathSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetFilesV3FoldersFolderPathGetByPathSecurityOption2.prototype, "hapikey", void 0);
    return GetFilesV3FoldersFolderPathGetByPathSecurityOption2;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderPathGetByPathSecurityOption2 };
var GetFilesV3FoldersFolderPathGetByPathSecurityOption3 = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderPathGetByPathSecurityOption3, _super);
    function GetFilesV3FoldersFolderPathGetByPathSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FoldersFolderPathGetByPathSecurityOption3.prototype, "oauth2Legacy", void 0);
    return GetFilesV3FoldersFolderPathGetByPathSecurityOption3;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderPathGetByPathSecurityOption3 };
var GetFilesV3FoldersFolderPathGetByPathSecurity = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderPathGetByPathSecurity, _super);
    function GetFilesV3FoldersFolderPathGetByPathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetFilesV3FoldersFolderPathGetByPathSecurityOption1)
    ], GetFilesV3FoldersFolderPathGetByPathSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetFilesV3FoldersFolderPathGetByPathSecurityOption2)
    ], GetFilesV3FoldersFolderPathGetByPathSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetFilesV3FoldersFolderPathGetByPathSecurityOption3)
    ], GetFilesV3FoldersFolderPathGetByPathSecurity.prototype, "option3", void 0);
    return GetFilesV3FoldersFolderPathGetByPathSecurity;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderPathGetByPathSecurity };
var GetFilesV3FoldersFolderPathGetByPathRequest = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderPathGetByPathRequest, _super);
    function GetFilesV3FoldersFolderPathGetByPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesV3FoldersFolderPathGetByPathPathParams)
    ], GetFilesV3FoldersFolderPathGetByPathRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesV3FoldersFolderPathGetByPathQueryParams)
    ], GetFilesV3FoldersFolderPathGetByPathRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFilesV3FoldersFolderPathGetByPathSecurity)
    ], GetFilesV3FoldersFolderPathGetByPathRequest.prototype, "security", void 0);
    return GetFilesV3FoldersFolderPathGetByPathRequest;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderPathGetByPathRequest };
var GetFilesV3FoldersFolderPathGetByPathResponse = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersFolderPathGetByPathResponse, _super);
    function GetFilesV3FoldersFolderPathGetByPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilesV3FoldersFolderPathGetByPathResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFilesV3FoldersFolderPathGetByPathResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Folder)
    ], GetFilesV3FoldersFolderPathGetByPathResponse.prototype, "folder", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFilesV3FoldersFolderPathGetByPathResponse.prototype, "statusCode", void 0);
    return GetFilesV3FoldersFolderPathGetByPathResponse;
}(SpeakeasyBase));
export { GetFilesV3FoldersFolderPathGetByPathResponse };
