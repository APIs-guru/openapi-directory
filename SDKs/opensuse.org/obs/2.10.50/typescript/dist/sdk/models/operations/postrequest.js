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
export var PostRequestAddrevisionEnum;
(function (PostRequestAddrevisionEnum) {
    PostRequestAddrevisionEnum["One"] = "1";
})(PostRequestAddrevisionEnum || (PostRequestAddrevisionEnum = {}));
export var PostRequestCmdEnum;
(function (PostRequestCmdEnum) {
    PostRequestCmdEnum["Create"] = "create";
})(PostRequestCmdEnum || (PostRequestCmdEnum = {}));
export var PostRequestIgnoreBuildStateEnum;
(function (PostRequestIgnoreBuildStateEnum) {
    PostRequestIgnoreBuildStateEnum["One"] = "1";
})(PostRequestIgnoreBuildStateEnum || (PostRequestIgnoreBuildStateEnum = {}));
export var PostRequestIgnoreDelegateEnum;
(function (PostRequestIgnoreDelegateEnum) {
    PostRequestIgnoreDelegateEnum["One"] = "1";
})(PostRequestIgnoreDelegateEnum || (PostRequestIgnoreDelegateEnum = {}));
var PostRequestQueryParams = /** @class */ (function (_super) {
    __extends(PostRequestQueryParams, _super);
    function PostRequestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=addrevision" }),
        __metadata("design:type", String)
    ], PostRequestQueryParams.prototype, "addrevision", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cmd" }),
        __metadata("design:type", String)
    ], PostRequestQueryParams.prototype, "cmd", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ignore_build_state" }),
        __metadata("design:type", String)
    ], PostRequestQueryParams.prototype, "ignoreBuildState", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ignore_delegate" }),
        __metadata("design:type", String)
    ], PostRequestQueryParams.prototype, "ignoreDelegate", void 0);
    return PostRequestQueryParams;
}(SpeakeasyBase));
export { PostRequestQueryParams };
var PostRequestSecurity = /** @class */ (function (_super) {
    __extends(PostRequestSecurity, _super);
    function PostRequestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], PostRequestSecurity.prototype, "basicAuthentication", void 0);
    return PostRequestSecurity;
}(SpeakeasyBase));
export { PostRequestSecurity };
var PostRequestRequest = /** @class */ (function (_super) {
    __extends(PostRequestRequest, _super);
    function PostRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRequestQueryParams)
    ], PostRequestRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRequestRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRequestSecurity)
    ], PostRequestRequest.prototype, "security", void 0);
    return PostRequestRequest;
}(SpeakeasyBase));
export { PostRequestRequest };
var PostRequestResponse = /** @class */ (function (_super) {
    __extends(PostRequestResponse, _super);
    function PostRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostRequestResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRequestResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRequestResponse.prototype, "statusCode", void 0);
    return PostRequestResponse;
}(SpeakeasyBase));
export { PostRequestResponse };
