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
var InstallPackagePathParams = /** @class */ (function (_super) {
    __extends(InstallPackagePathParams, _super);
    function InstallPackagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], InstallPackagePathParams.prototype, "name", void 0);
    return InstallPackagePathParams;
}(SpeakeasyBase));
export { InstallPackagePathParams };
var InstallPackageQueryParams = /** @class */ (function (_super) {
    __extends(InstallPackageQueryParams, _super);
    function InstallPackageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assemblyGuid" }),
        __metadata("design:type", String)
    ], InstallPackageQueryParams.prototype, "assemblyGuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repositoryUrl" }),
        __metadata("design:type", String)
    ], InstallPackageQueryParams.prototype, "repositoryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], InstallPackageQueryParams.prototype, "version", void 0);
    return InstallPackageQueryParams;
}(SpeakeasyBase));
export { InstallPackageQueryParams };
var InstallPackageSecurity = /** @class */ (function (_super) {
    __extends(InstallPackageSecurity, _super);
    function InstallPackageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], InstallPackageSecurity.prototype, "customAuthentication", void 0);
    return InstallPackageSecurity;
}(SpeakeasyBase));
export { InstallPackageSecurity };
var InstallPackageRequest = /** @class */ (function (_super) {
    __extends(InstallPackageRequest, _super);
    function InstallPackageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstallPackagePathParams)
    ], InstallPackageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstallPackageQueryParams)
    ], InstallPackageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InstallPackageSecurity)
    ], InstallPackageRequest.prototype, "security", void 0);
    return InstallPackageRequest;
}(SpeakeasyBase));
export { InstallPackageRequest };
var InstallPackageResponse = /** @class */ (function (_super) {
    __extends(InstallPackageResponse, _super);
    function InstallPackageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InstallPackageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], InstallPackageResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InstallPackageResponse.prototype, "statusCode", void 0);
    return InstallPackageResponse;
}(SpeakeasyBase));
export { InstallPackageResponse };
