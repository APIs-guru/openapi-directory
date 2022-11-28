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
var AuthenticateWithQuickConnectRequests = /** @class */ (function (_super) {
    __extends(AuthenticateWithQuickConnectRequests, _super);
    function AuthenticateWithQuickConnectRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.QuickConnectDto)
    ], AuthenticateWithQuickConnectRequests.prototype, "quickConnectDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QuickConnectDto)
    ], AuthenticateWithQuickConnectRequests.prototype, "quickConnectDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.QuickConnectDto)
    ], AuthenticateWithQuickConnectRequests.prototype, "quickConnectDto2", void 0);
    return AuthenticateWithQuickConnectRequests;
}(SpeakeasyBase));
export { AuthenticateWithQuickConnectRequests };
var AuthenticateWithQuickConnectRequest = /** @class */ (function (_super) {
    __extends(AuthenticateWithQuickConnectRequest, _super);
    function AuthenticateWithQuickConnectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AuthenticateWithQuickConnectRequests)
    ], AuthenticateWithQuickConnectRequest.prototype, "request", void 0);
    return AuthenticateWithQuickConnectRequest;
}(SpeakeasyBase));
export { AuthenticateWithQuickConnectRequest };
var AuthenticateWithQuickConnectResponse = /** @class */ (function (_super) {
    __extends(AuthenticateWithQuickConnectResponse, _super);
    function AuthenticateWithQuickConnectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationResult)
    ], AuthenticateWithQuickConnectResponse.prototype, "authenticationResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateWithQuickConnectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthenticateWithQuickConnectResponse.prototype, "statusCode", void 0);
    return AuthenticateWithQuickConnectResponse;
}(SpeakeasyBase));
export { AuthenticateWithQuickConnectResponse };
