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
var AuthenticateUserPathParams = /** @class */ (function (_super) {
    __extends(AuthenticateUserPathParams, _super);
    function AuthenticateUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AuthenticateUserPathParams.prototype, "userId", void 0);
    return AuthenticateUserPathParams;
}(SpeakeasyBase));
export { AuthenticateUserPathParams };
var AuthenticateUserQueryParams = /** @class */ (function (_super) {
    __extends(AuthenticateUserQueryParams, _super);
    function AuthenticateUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" }),
        __metadata("design:type", String)
    ], AuthenticateUserQueryParams.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pw" }),
        __metadata("design:type", String)
    ], AuthenticateUserQueryParams.prototype, "pw", void 0);
    return AuthenticateUserQueryParams;
}(SpeakeasyBase));
export { AuthenticateUserQueryParams };
var AuthenticateUserRequest = /** @class */ (function (_super) {
    __extends(AuthenticateUserRequest, _super);
    function AuthenticateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthenticateUserPathParams)
    ], AuthenticateUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthenticateUserQueryParams)
    ], AuthenticateUserRequest.prototype, "queryParams", void 0);
    return AuthenticateUserRequest;
}(SpeakeasyBase));
export { AuthenticateUserRequest };
var AuthenticateUserResponse = /** @class */ (function (_super) {
    __extends(AuthenticateUserResponse, _super);
    function AuthenticateUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationResult)
    ], AuthenticateUserResponse.prototype, "authenticationResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AuthenticateUserResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthenticateUserResponse.prototype, "statusCode", void 0);
    return AuthenticateUserResponse;
}(SpeakeasyBase));
export { AuthenticateUserResponse };
