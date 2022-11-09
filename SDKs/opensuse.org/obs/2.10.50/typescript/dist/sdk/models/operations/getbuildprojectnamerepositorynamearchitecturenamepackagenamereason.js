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
var GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams, _super);
    function GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams.prototype, "architectureName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams.prototype, "packageName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams.prototype, "projectName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams.prototype, "repositoryName", void 0);
    return GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams };
var GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity, _super);
    function GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity.prototype, "basicAuthentication", void 0);
    return GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity };
var GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest, _super);
    function GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest.prototype, "security", void 0);
    return GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest };
var GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse, _super);
    function GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse.prototype, "statusCode", void 0);
    return GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse };
