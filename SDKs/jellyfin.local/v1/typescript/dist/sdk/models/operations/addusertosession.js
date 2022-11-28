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
var AddUserToSessionPathParams = /** @class */ (function (_super) {
    __extends(AddUserToSessionPathParams, _super);
    function AddUserToSessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], AddUserToSessionPathParams.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AddUserToSessionPathParams.prototype, "userId", void 0);
    return AddUserToSessionPathParams;
}(SpeakeasyBase));
export { AddUserToSessionPathParams };
var AddUserToSessionSecurity = /** @class */ (function (_super) {
    __extends(AddUserToSessionSecurity, _super);
    function AddUserToSessionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], AddUserToSessionSecurity.prototype, "customAuthentication", void 0);
    return AddUserToSessionSecurity;
}(SpeakeasyBase));
export { AddUserToSessionSecurity };
var AddUserToSessionRequest = /** @class */ (function (_super) {
    __extends(AddUserToSessionRequest, _super);
    function AddUserToSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserToSessionPathParams)
    ], AddUserToSessionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserToSessionSecurity)
    ], AddUserToSessionRequest.prototype, "security", void 0);
    return AddUserToSessionRequest;
}(SpeakeasyBase));
export { AddUserToSessionRequest };
var AddUserToSessionResponse = /** @class */ (function (_super) {
    __extends(AddUserToSessionResponse, _super);
    function AddUserToSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddUserToSessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddUserToSessionResponse.prototype, "statusCode", void 0);
    return AddUserToSessionResponse;
}(SpeakeasyBase));
export { AddUserToSessionResponse };
