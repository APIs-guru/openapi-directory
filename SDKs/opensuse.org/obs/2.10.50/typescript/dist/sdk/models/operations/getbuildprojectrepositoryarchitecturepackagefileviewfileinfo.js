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
var GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams, _super);
    function GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams.prototype, "architectureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams.prototype, "repositoryName", void 0);
    return GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams };
export var GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum;
(function (GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum) {
    GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum["Fileinfo"] = "fileinfo";
    GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum["FileinfoExt"] = "fileinfo_ext";
})(GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum || (GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum = {}));
var GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams, _super);
    function GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", Array)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams.prototype, "view", void 0);
    return GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams };
var GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity, _super);
    function GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity.prototype, "basicAuthentication", void 0);
    return GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity };
var GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest, _super);
    function GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest.prototype, "security", void 0);
    return GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest };
var GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse, _super);
    function GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse.prototype, "statusCode", void 0);
    return GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse };
