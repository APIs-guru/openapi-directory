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
var GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams.prototype, "architectureName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=binary_filename" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams.prototype, "binaryFilename", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams.prototype, "projectName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams.prototype, "repositoryName", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams };
var GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity.prototype, "basicAuthentication", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity };
var GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest.prototype, "security", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest };
var GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse.prototype, "statusCode", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse };
