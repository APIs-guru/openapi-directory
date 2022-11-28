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
var DeleteUserPathParams = /** @class */ (function (_super) {
    __extends(DeleteUserPathParams, _super);
    function DeleteUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], DeleteUserPathParams.prototype, "username", void 0);
    return DeleteUserPathParams;
}(SpeakeasyBase));
export { DeleteUserPathParams };
var DeleteUserSecurity = /** @class */ (function (_super) {
    __extends(DeleteUserSecurity, _super);
    function DeleteUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteUserSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteUserSecurity.prototype, "oauth", void 0);
    return DeleteUserSecurity;
}(SpeakeasyBase));
export { DeleteUserSecurity };
var DeleteUserDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteUserDefaultApplicationJson, _super);
    function DeleteUserDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteUserDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteUserDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteUserDefaultApplicationJson };
var DeleteUserRequest = /** @class */ (function (_super) {
    __extends(DeleteUserRequest, _super);
    function DeleteUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUserPathParams)
    ], DeleteUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUserSecurity)
    ], DeleteUserRequest.prototype, "security", void 0);
    return DeleteUserRequest;
}(SpeakeasyBase));
export { DeleteUserRequest };
var DeleteUserResponse = /** @class */ (function (_super) {
    __extends(DeleteUserResponse, _super);
    function DeleteUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteUserResponse.prototype, "deleteUser200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteUserDefaultApplicationJson)
    ], DeleteUserResponse.prototype, "deleteUserDefaultApplicationJsonObject", void 0);
    return DeleteUserResponse;
}(SpeakeasyBase));
export { DeleteUserResponse };
