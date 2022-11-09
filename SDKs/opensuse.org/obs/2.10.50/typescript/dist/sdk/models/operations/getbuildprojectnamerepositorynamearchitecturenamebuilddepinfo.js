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
var GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams, _super);
    function GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams.prototype, "architectureName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams.prototype, "projectName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams.prototype, "repositoryName", void 0);
    return GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams };
export var GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum;
(function (GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum) {
    GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum["Pkgnames"] = "pkgnames";
    GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum["Revpkgnames"] = "revpkgnames";
    GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum["Order"] = "order";
})(GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum || (GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum = {}));
var GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams, _super);
    function GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=package" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams.prototype, "package", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams.prototype, "view", void 0);
    return GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams };
var GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity, _super);
    function GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity.prototype, "basicAuthentication", void 0);
    return GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity };
var GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest, _super);
    function GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest.prototype, "security", void 0);
    return GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest };
var GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse, _super);
    function GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse.prototype, "statusCode", void 0);
    return GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse };
