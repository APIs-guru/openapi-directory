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
var PostBuildProjectNamePathParams = /** @class */ (function (_super) {
    __extends(PostBuildProjectNamePathParams, _super);
    function PostBuildProjectNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], PostBuildProjectNamePathParams.prototype, "projectName", void 0);
    return PostBuildProjectNamePathParams;
}(SpeakeasyBase));
export { PostBuildProjectNamePathParams };
export var PostBuildProjectNameCmdEnum;
(function (PostBuildProjectNameCmdEnum) {
    PostBuildProjectNameCmdEnum["Wipe"] = "wipe";
    PostBuildProjectNameCmdEnum["Restartbuild"] = "restartbuild";
    PostBuildProjectNameCmdEnum["Killbuild"] = "killbuild";
    PostBuildProjectNameCmdEnum["Abortbuild"] = "abortbuild";
    PostBuildProjectNameCmdEnum["Rebuild"] = "rebuild";
    PostBuildProjectNameCmdEnum["Unpublish"] = "unpublish";
    PostBuildProjectNameCmdEnum["Sendsysrq"] = "sendsysrq";
})(PostBuildProjectNameCmdEnum || (PostBuildProjectNameCmdEnum = {}));
var PostBuildProjectNameQueryParams = /** @class */ (function (_super) {
    __extends(PostBuildProjectNameQueryParams, _super);
    function PostBuildProjectNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=arch" }),
        __metadata("design:type", String)
    ], PostBuildProjectNameQueryParams.prototype, "arch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" }),
        __metadata("design:type", String)
    ], PostBuildProjectNameQueryParams.prototype, "cmd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=package" }),
        __metadata("design:type", String)
    ], PostBuildProjectNameQueryParams.prototype, "package", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repository" }),
        __metadata("design:type", String)
    ], PostBuildProjectNameQueryParams.prototype, "repository", void 0);
    return PostBuildProjectNameQueryParams;
}(SpeakeasyBase));
export { PostBuildProjectNameQueryParams };
var PostBuildProjectNameSecurity = /** @class */ (function (_super) {
    __extends(PostBuildProjectNameSecurity, _super);
    function PostBuildProjectNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], PostBuildProjectNameSecurity.prototype, "basicAuthentication", void 0);
    return PostBuildProjectNameSecurity;
}(SpeakeasyBase));
export { PostBuildProjectNameSecurity };
var PostBuildProjectNameRequest = /** @class */ (function (_super) {
    __extends(PostBuildProjectNameRequest, _super);
    function PostBuildProjectNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostBuildProjectNamePathParams)
    ], PostBuildProjectNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostBuildProjectNameQueryParams)
    ], PostBuildProjectNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostBuildProjectNameSecurity)
    ], PostBuildProjectNameRequest.prototype, "security", void 0);
    return PostBuildProjectNameRequest;
}(SpeakeasyBase));
export { PostBuildProjectNameRequest };
var PostBuildProjectNameResponse = /** @class */ (function (_super) {
    __extends(PostBuildProjectNameResponse, _super);
    function PostBuildProjectNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostBuildProjectNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostBuildProjectNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostBuildProjectNameResponse.prototype, "statusCode", void 0);
    return PostBuildProjectNameResponse;
}(SpeakeasyBase));
export { PostBuildProjectNameResponse };
