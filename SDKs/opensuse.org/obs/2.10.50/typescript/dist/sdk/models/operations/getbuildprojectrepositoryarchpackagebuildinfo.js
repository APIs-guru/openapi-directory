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
var GetBuildProjectRepositoryArchPackageBuildinfoPathParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageBuildinfoPathParams, _super);
    function GetBuildProjectRepositoryArchPackageBuildinfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageBuildinfoPathParams.prototype, "architectureName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageBuildinfoPathParams.prototype, "packageName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageBuildinfoPathParams.prototype, "projectName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageBuildinfoPathParams.prototype, "repositoryName", void 0);
    return GetBuildProjectRepositoryArchPackageBuildinfoPathParams;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageBuildinfoPathParams };
var GetBuildProjectRepositoryArchPackageBuildinfoSecurity = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageBuildinfoSecurity, _super);
    function GetBuildProjectRepositoryArchPackageBuildinfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetBuildProjectRepositoryArchPackageBuildinfoSecurity.prototype, "basicAuthentication", void 0);
    return GetBuildProjectRepositoryArchPackageBuildinfoSecurity;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageBuildinfoSecurity };
var GetBuildProjectRepositoryArchPackageBuildinfoRequest = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageBuildinfoRequest, _super);
    function GetBuildProjectRepositoryArchPackageBuildinfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBuildProjectRepositoryArchPackageBuildinfoPathParams)
    ], GetBuildProjectRepositoryArchPackageBuildinfoRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBuildProjectRepositoryArchPackageBuildinfoSecurity)
    ], GetBuildProjectRepositoryArchPackageBuildinfoRequest.prototype, "security", void 0);
    return GetBuildProjectRepositoryArchPackageBuildinfoRequest;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageBuildinfoRequest };
var GetBuildProjectRepositoryArchPackageBuildinfoResponse = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageBuildinfoResponse, _super);
    function GetBuildProjectRepositoryArchPackageBuildinfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetBuildProjectRepositoryArchPackageBuildinfoResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageBuildinfoResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBuildProjectRepositoryArchPackageBuildinfoResponse.prototype, "statusCode", void 0);
    return GetBuildProjectRepositoryArchPackageBuildinfoResponse;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageBuildinfoResponse };
