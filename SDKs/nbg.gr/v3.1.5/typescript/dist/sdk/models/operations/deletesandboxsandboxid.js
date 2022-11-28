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
var DeleteSandboxSandboxIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteSandboxSandboxIdPathParams, _super);
    function DeleteSandboxSandboxIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sandboxId" }),
        __metadata("design:type", String)
    ], DeleteSandboxSandboxIdPathParams.prototype, "sandboxId", void 0);
    return DeleteSandboxSandboxIdPathParams;
}(SpeakeasyBase));
export { DeleteSandboxSandboxIdPathParams };
var DeleteSandboxSandboxIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteSandboxSandboxIdSecurity, _super);
    function DeleteSandboxSandboxIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuthorizationCodeToken)
    ], DeleteSandboxSandboxIdSecurity.prototype, "authorizationCodeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DeleteSandboxSandboxIdSecurity.prototype, "clientId", void 0);
    return DeleteSandboxSandboxIdSecurity;
}(SpeakeasyBase));
export { DeleteSandboxSandboxIdSecurity };
var DeleteSandboxSandboxIdRequest = /** @class */ (function (_super) {
    __extends(DeleteSandboxSandboxIdRequest, _super);
    function DeleteSandboxSandboxIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSandboxSandboxIdPathParams)
    ], DeleteSandboxSandboxIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSandboxSandboxIdSecurity)
    ], DeleteSandboxSandboxIdRequest.prototype, "security", void 0);
    return DeleteSandboxSandboxIdRequest;
}(SpeakeasyBase));
export { DeleteSandboxSandboxIdRequest };
var DeleteSandboxSandboxIdResponse = /** @class */ (function (_super) {
    __extends(DeleteSandboxSandboxIdResponse, _super);
    function DeleteSandboxSandboxIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSandboxSandboxIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DeleteSandboxSandboxIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteSandboxSandboxIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSandboxSandboxIdResponse.prototype, "statusCode", void 0);
    return DeleteSandboxSandboxIdResponse;
}(SpeakeasyBase));
export { DeleteSandboxSandboxIdResponse };
