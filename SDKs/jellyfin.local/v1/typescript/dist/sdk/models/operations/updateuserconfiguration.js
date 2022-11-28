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
var UpdateUserConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserConfigurationPathParams, _super);
    function UpdateUserConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], UpdateUserConfigurationPathParams.prototype, "userId", void 0);
    return UpdateUserConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateUserConfigurationPathParams };
var UpdateUserConfigurationRequests = /** @class */ (function (_super) {
    __extends(UpdateUserConfigurationRequests, _super);
    function UpdateUserConfigurationRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UserConfiguration)
    ], UpdateUserConfigurationRequests.prototype, "userConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserConfiguration)
    ], UpdateUserConfigurationRequests.prototype, "userConfiguration1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UserConfiguration)
    ], UpdateUserConfigurationRequests.prototype, "userConfiguration2", void 0);
    return UpdateUserConfigurationRequests;
}(SpeakeasyBase));
export { UpdateUserConfigurationRequests };
var UpdateUserConfigurationSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserConfigurationSecurity, _super);
    function UpdateUserConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], UpdateUserConfigurationSecurity.prototype, "customAuthentication", void 0);
    return UpdateUserConfigurationSecurity;
}(SpeakeasyBase));
export { UpdateUserConfigurationSecurity };
var UpdateUserConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateUserConfigurationRequest, _super);
    function UpdateUserConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserConfigurationPathParams)
    ], UpdateUserConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserConfigurationRequests)
    ], UpdateUserConfigurationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserConfigurationSecurity)
    ], UpdateUserConfigurationRequest.prototype, "security", void 0);
    return UpdateUserConfigurationRequest;
}(SpeakeasyBase));
export { UpdateUserConfigurationRequest };
var UpdateUserConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateUserConfigurationResponse, _super);
    function UpdateUserConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUserConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateUserConfigurationResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUserConfigurationResponse.prototype, "statusCode", void 0);
    return UpdateUserConfigurationResponse;
}(SpeakeasyBase));
export { UpdateUserConfigurationResponse };
