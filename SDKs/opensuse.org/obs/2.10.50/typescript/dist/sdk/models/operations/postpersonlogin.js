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
var PostPersonLoginPathParams = /** @class */ (function (_super) {
    __extends(PostPersonLoginPathParams, _super);
    function PostPersonLoginPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=login" }),
        __metadata("design:type", String)
    ], PostPersonLoginPathParams.prototype, "login", void 0);
    return PostPersonLoginPathParams;
}(SpeakeasyBase));
export { PostPersonLoginPathParams };
export var PostPersonLoginCmdEnum;
(function (PostPersonLoginCmdEnum) {
    PostPersonLoginCmdEnum["ChangePassword"] = "change_password";
    PostPersonLoginCmdEnum["Lock"] = "lock";
    PostPersonLoginCmdEnum["Delete"] = "delete";
})(PostPersonLoginCmdEnum || (PostPersonLoginCmdEnum = {}));
var PostPersonLoginQueryParams = /** @class */ (function (_super) {
    __extends(PostPersonLoginQueryParams, _super);
    function PostPersonLoginQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cmd" }),
        __metadata("design:type", String)
    ], PostPersonLoginQueryParams.prototype, "cmd", void 0);
    return PostPersonLoginQueryParams;
}(SpeakeasyBase));
export { PostPersonLoginQueryParams };
var PostPersonLoginSecurity = /** @class */ (function (_super) {
    __extends(PostPersonLoginSecurity, _super);
    function PostPersonLoginSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], PostPersonLoginSecurity.prototype, "basicAuthentication", void 0);
    return PostPersonLoginSecurity;
}(SpeakeasyBase));
export { PostPersonLoginSecurity };
var PostPersonLoginRequest = /** @class */ (function (_super) {
    __extends(PostPersonLoginRequest, _super);
    function PostPersonLoginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPersonLoginPathParams)
    ], PostPersonLoginRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPersonLoginQueryParams)
    ], PostPersonLoginRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/plain" }),
        __metadata("design:type", String)
    ], PostPersonLoginRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPersonLoginSecurity)
    ], PostPersonLoginRequest.prototype, "security", void 0);
    return PostPersonLoginRequest;
}(SpeakeasyBase));
export { PostPersonLoginRequest };
var PostPersonLoginResponse = /** @class */ (function (_super) {
    __extends(PostPersonLoginResponse, _super);
    function PostPersonLoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostPersonLoginResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPersonLoginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPersonLoginResponse.prototype, "statusCode", void 0);
    return PostPersonLoginResponse;
}(SpeakeasyBase));
export { PostPersonLoginResponse };
