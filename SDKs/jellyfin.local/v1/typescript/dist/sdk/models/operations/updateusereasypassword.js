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
var UpdateUserEasyPasswordPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserEasyPasswordPathParams, _super);
    function UpdateUserEasyPasswordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UpdateUserEasyPasswordPathParams.prototype, "userId", void 0);
    return UpdateUserEasyPasswordPathParams;
}(SpeakeasyBase));
export { UpdateUserEasyPasswordPathParams };
var UpdateUserEasyPasswordRequests = /** @class */ (function (_super) {
    __extends(UpdateUserEasyPasswordRequests, _super);
    function UpdateUserEasyPasswordRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdateUserEasyPassword)
    ], UpdateUserEasyPasswordRequests.prototype, "updateUserEasyPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateUserEasyPassword)
    ], UpdateUserEasyPasswordRequests.prototype, "updateUserEasyPassword1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateUserEasyPassword)
    ], UpdateUserEasyPasswordRequests.prototype, "updateUserEasyPassword2", void 0);
    return UpdateUserEasyPasswordRequests;
}(SpeakeasyBase));
export { UpdateUserEasyPasswordRequests };
var UpdateUserEasyPasswordSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserEasyPasswordSecurity, _super);
    function UpdateUserEasyPasswordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], UpdateUserEasyPasswordSecurity.prototype, "customAuthentication", void 0);
    return UpdateUserEasyPasswordSecurity;
}(SpeakeasyBase));
export { UpdateUserEasyPasswordSecurity };
var UpdateUserEasyPasswordRequest = /** @class */ (function (_super) {
    __extends(UpdateUserEasyPasswordRequest, _super);
    function UpdateUserEasyPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserEasyPasswordPathParams)
    ], UpdateUserEasyPasswordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserEasyPasswordRequests)
    ], UpdateUserEasyPasswordRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserEasyPasswordSecurity)
    ], UpdateUserEasyPasswordRequest.prototype, "security", void 0);
    return UpdateUserEasyPasswordRequest;
}(SpeakeasyBase));
export { UpdateUserEasyPasswordRequest };
var UpdateUserEasyPasswordResponse = /** @class */ (function (_super) {
    __extends(UpdateUserEasyPasswordResponse, _super);
    function UpdateUserEasyPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUserEasyPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateUserEasyPasswordResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUserEasyPasswordResponse.prototype, "statusCode", void 0);
    return UpdateUserEasyPasswordResponse;
}(SpeakeasyBase));
export { UpdateUserEasyPasswordResponse };
