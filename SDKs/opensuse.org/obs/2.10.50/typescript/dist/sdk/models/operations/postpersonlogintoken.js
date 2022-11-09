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
var PostPersonLoginTokenPathParams = /** @class */ (function (_super) {
    __extends(PostPersonLoginTokenPathParams, _super);
    function PostPersonLoginTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=login" }),
        __metadata("design:type", String)
    ], PostPersonLoginTokenPathParams.prototype, "login", void 0);
    return PostPersonLoginTokenPathParams;
}(SpeakeasyBase));
export { PostPersonLoginTokenPathParams };
export var PostPersonLoginTokenOperationEnum;
(function (PostPersonLoginTokenOperationEnum) {
    PostPersonLoginTokenOperationEnum["Runservice"] = "runservice";
    PostPersonLoginTokenOperationEnum["Rebuild"] = "rebuild";
    PostPersonLoginTokenOperationEnum["Release"] = "release";
})(PostPersonLoginTokenOperationEnum || (PostPersonLoginTokenOperationEnum = {}));
var PostPersonLoginTokenQueryParams = /** @class */ (function (_super) {
    __extends(PostPersonLoginTokenQueryParams, _super);
    function PostPersonLoginTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=operation" }),
        __metadata("design:type", String)
    ], PostPersonLoginTokenQueryParams.prototype, "operation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=package" }),
        __metadata("design:type", String)
    ], PostPersonLoginTokenQueryParams.prototype, "package", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", String)
    ], PostPersonLoginTokenQueryParams.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=scm_token" }),
        __metadata("design:type", String)
    ], PostPersonLoginTokenQueryParams.prototype, "scmToken", void 0);
    return PostPersonLoginTokenQueryParams;
}(SpeakeasyBase));
export { PostPersonLoginTokenQueryParams };
var PostPersonLoginTokenSecurity = /** @class */ (function (_super) {
    __extends(PostPersonLoginTokenSecurity, _super);
    function PostPersonLoginTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], PostPersonLoginTokenSecurity.prototype, "basicAuthentication", void 0);
    return PostPersonLoginTokenSecurity;
}(SpeakeasyBase));
export { PostPersonLoginTokenSecurity };
var PostPersonLoginTokenRequest = /** @class */ (function (_super) {
    __extends(PostPersonLoginTokenRequest, _super);
    function PostPersonLoginTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostPersonLoginTokenPathParams)
    ], PostPersonLoginTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPersonLoginTokenQueryParams)
    ], PostPersonLoginTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPersonLoginTokenSecurity)
    ], PostPersonLoginTokenRequest.prototype, "security", void 0);
    return PostPersonLoginTokenRequest;
}(SpeakeasyBase));
export { PostPersonLoginTokenRequest };
var PostPersonLoginTokenResponse = /** @class */ (function (_super) {
    __extends(PostPersonLoginTokenResponse, _super);
    function PostPersonLoginTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostPersonLoginTokenResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostPersonLoginTokenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostPersonLoginTokenResponse.prototype, "statusCode", void 0);
    return PostPersonLoginTokenResponse;
}(SpeakeasyBase));
export { PostPersonLoginTokenResponse };
