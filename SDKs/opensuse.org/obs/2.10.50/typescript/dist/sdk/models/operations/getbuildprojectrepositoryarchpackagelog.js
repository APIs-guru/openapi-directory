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
var GetBuildProjectRepositoryArchPackageLogPathParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageLogPathParams, _super);
    function GetBuildProjectRepositoryArchPackageLogPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageLogPathParams.prototype, "architectureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageLogPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageLogPathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageLogPathParams.prototype, "repositoryName", void 0);
    return GetBuildProjectRepositoryArchPackageLogPathParams;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageLogPathParams };
var GetBuildProjectRepositoryArchPackageLogSecurity = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageLogSecurity, _super);
    function GetBuildProjectRepositoryArchPackageLogSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetBuildProjectRepositoryArchPackageLogSecurity.prototype, "basicAuthentication", void 0);
    return GetBuildProjectRepositoryArchPackageLogSecurity;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageLogSecurity };
var GetBuildProjectRepositoryArchPackageLogRequest = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageLogRequest, _super);
    function GetBuildProjectRepositoryArchPackageLogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectRepositoryArchPackageLogPathParams)
    ], GetBuildProjectRepositoryArchPackageLogRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectRepositoryArchPackageLogSecurity)
    ], GetBuildProjectRepositoryArchPackageLogRequest.prototype, "security", void 0);
    return GetBuildProjectRepositoryArchPackageLogRequest;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageLogRequest };
var GetBuildProjectRepositoryArchPackageLogResponse = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageLogResponse, _super);
    function GetBuildProjectRepositoryArchPackageLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBuildProjectRepositoryArchPackageLogResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageLogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBuildProjectRepositoryArchPackageLogResponse.prototype, "statusCode", void 0);
    return GetBuildProjectRepositoryArchPackageLogResponse;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageLogResponse };
