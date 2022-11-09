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
var GetBuildProjectRepositoryArchPackageHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageHistoryPathParams, _super);
    function GetBuildProjectRepositoryArchPackageHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageHistoryPathParams.prototype, "architectureName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=package_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageHistoryPathParams.prototype, "packageName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageHistoryPathParams.prototype, "projectName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageHistoryPathParams.prototype, "repositoryName", void 0);
    return GetBuildProjectRepositoryArchPackageHistoryPathParams;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageHistoryPathParams };
var GetBuildProjectRepositoryArchPackageHistorySecurity = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageHistorySecurity, _super);
    function GetBuildProjectRepositoryArchPackageHistorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetBuildProjectRepositoryArchPackageHistorySecurity.prototype, "basicAuthentication", void 0);
    return GetBuildProjectRepositoryArchPackageHistorySecurity;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageHistorySecurity };
var GetBuildProjectRepositoryArchPackageHistoryRequest = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageHistoryRequest, _super);
    function GetBuildProjectRepositoryArchPackageHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBuildProjectRepositoryArchPackageHistoryPathParams)
    ], GetBuildProjectRepositoryArchPackageHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBuildProjectRepositoryArchPackageHistorySecurity)
    ], GetBuildProjectRepositoryArchPackageHistoryRequest.prototype, "security", void 0);
    return GetBuildProjectRepositoryArchPackageHistoryRequest;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageHistoryRequest };
var GetBuildProjectRepositoryArchPackageHistoryResponse = /** @class */ (function (_super) {
    __extends(GetBuildProjectRepositoryArchPackageHistoryResponse, _super);
    function GetBuildProjectRepositoryArchPackageHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetBuildProjectRepositoryArchPackageHistoryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBuildProjectRepositoryArchPackageHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBuildProjectRepositoryArchPackageHistoryResponse.prototype, "statusCode", void 0);
    return GetBuildProjectRepositoryArchPackageHistoryResponse;
}(SpeakeasyBase));
export { GetBuildProjectRepositoryArchPackageHistoryResponse };
