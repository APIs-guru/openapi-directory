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
var GetPublishedProjectNameRepositoryNamePathParams = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNamePathParams, _super);
    function GetPublishedProjectNameRepositoryNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNamePathParams.prototype, "projectName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" }),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNamePathParams.prototype, "repositoryName", void 0);
    return GetPublishedProjectNameRepositoryNamePathParams;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNamePathParams };
var GetPublishedProjectNameRepositoryNameSecurity = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameSecurity, _super);
    function GetPublishedProjectNameRepositoryNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetPublishedProjectNameRepositoryNameSecurity.prototype, "basicAuthentication", void 0);
    return GetPublishedProjectNameRepositoryNameSecurity;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameSecurity };
var GetPublishedProjectNameRepositoryNameRequest = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameRequest, _super);
    function GetPublishedProjectNameRepositoryNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNamePathParams)
    ], GetPublishedProjectNameRepositoryNameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPublishedProjectNameRepositoryNameSecurity)
    ], GetPublishedProjectNameRepositoryNameRequest.prototype, "security", void 0);
    return GetPublishedProjectNameRepositoryNameRequest;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameRequest };
var GetPublishedProjectNameRepositoryNameResponse = /** @class */ (function (_super) {
    __extends(GetPublishedProjectNameRepositoryNameResponse, _super);
    function GetPublishedProjectNameRepositoryNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPublishedProjectNameRepositoryNameResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPublishedProjectNameRepositoryNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPublishedProjectNameRepositoryNameResponse.prototype, "statusCode", void 0);
    return GetPublishedProjectNameRepositoryNameResponse;
}(SpeakeasyBase));
export { GetPublishedProjectNameRepositoryNameResponse };
