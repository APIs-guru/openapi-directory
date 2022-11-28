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
var GetPublishedProjectNameRepositoryNameArchitectureNamePathParams = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNamePathParams, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNamePathParams.prototype, "architectureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNamePathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNamePathParams.prototype, "repositoryName", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNamePathParams;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNamePathParams };
var GetPublishedProjectNameRepositoryNameArchitectureNameSecurity = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameSecurity, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameSecurity.prototype, "basicAuthentication", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameSecurity;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameSecurity };
var GetPublishedProjectNameRepositoryNameArchitectureNameRequest = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameRequest, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameArchitectureNamePathParams)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameArchitectureNameSecurity)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameRequest.prototype, "security", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameRequest;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameRequest };
var GetPublishedProjectNameRepositoryNameArchitectureNameResponse = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameArchitectureNameResponse, _super);
    function GetPublishedProjectNameRepositoryNameArchitectureNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPublishedProjectNameRepositoryNameArchitectureNameResponse.prototype, "statusCode", void 0);
    return GetPublishedProjectNameRepositoryNameArchitectureNameResponse;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameArchitectureNameResponse };
