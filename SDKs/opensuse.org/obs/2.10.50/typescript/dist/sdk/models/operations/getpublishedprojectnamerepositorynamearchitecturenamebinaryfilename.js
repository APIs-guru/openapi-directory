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
var GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams.prototype, "architectureName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=binary_filename" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams.prototype, "binaryFilename", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams.prototype, "projectName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams.prototype, "repositoryName", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams };
var GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity.prototype, "basicAuthentication", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity };
var GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest.prototype, "security", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest };
var GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse.prototype, "getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200ApplicationWildcardBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse.prototype, "getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200TextXmlBinaryString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse.prototype, "statusCode", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse };
