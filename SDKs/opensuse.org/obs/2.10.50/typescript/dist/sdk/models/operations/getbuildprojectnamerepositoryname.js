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
var GetBuildProjectNameRepositoryNamePathParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNamePathParams, _super);
    function GetBuildProjectNameRepositoryNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNamePathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNamePathParams.prototype, "repositoryName", void 0);
    return GetBuildProjectNameRepositoryNamePathParams;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNamePathParams };
var GetBuildProjectNameRepositoryNameSecurity = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameSecurity, _super);
    function GetBuildProjectNameRepositoryNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetBuildProjectNameRepositoryNameSecurity.prototype, "basicAuthentication", void 0);
    return GetBuildProjectNameRepositoryNameSecurity;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameSecurity };
var GetBuildProjectNameRepositoryNameRequest = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameRequest, _super);
    function GetBuildProjectNameRepositoryNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectNameRepositoryNamePathParams)
    ], GetBuildProjectNameRepositoryNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectNameRepositoryNameSecurity)
    ], GetBuildProjectNameRepositoryNameRequest.prototype, "security", void 0);
    return GetBuildProjectNameRepositoryNameRequest;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameRequest };
var GetBuildProjectNameRepositoryNameResponse = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameRepositoryNameResponse, _super);
    function GetBuildProjectNameRepositoryNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBuildProjectNameRepositoryNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBuildProjectNameRepositoryNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBuildProjectNameRepositoryNameResponse.prototype, "statusCode", void 0);
    return GetBuildProjectNameRepositoryNameResponse;
}(SpeakeasyBase));
export { GetBuildProjectNameRepositoryNameResponse };
