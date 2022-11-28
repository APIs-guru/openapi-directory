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
var UpdateInitialConfigurationRequests = /** @class */ (function (_super) {
    __extends(UpdateInitialConfigurationRequests, _super);
    function UpdateInitialConfigurationRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.StartupConfigurationDto)
    ], UpdateInitialConfigurationRequests.prototype, "startupConfigurationDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartupConfigurationDto)
    ], UpdateInitialConfigurationRequests.prototype, "startupConfigurationDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.StartupConfigurationDto)
    ], UpdateInitialConfigurationRequests.prototype, "startupConfigurationDto2", void 0);
    return UpdateInitialConfigurationRequests;
}(SpeakeasyBase));
export { UpdateInitialConfigurationRequests };
var UpdateInitialConfigurationSecurity = /** @class */ (function (_super) {
    __extends(UpdateInitialConfigurationSecurity, _super);
    function UpdateInitialConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], UpdateInitialConfigurationSecurity.prototype, "customAuthentication", void 0);
    return UpdateInitialConfigurationSecurity;
}(SpeakeasyBase));
export { UpdateInitialConfigurationSecurity };
var UpdateInitialConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateInitialConfigurationRequest, _super);
    function UpdateInitialConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInitialConfigurationRequests)
    ], UpdateInitialConfigurationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateInitialConfigurationSecurity)
    ], UpdateInitialConfigurationRequest.prototype, "security", void 0);
    return UpdateInitialConfigurationRequest;
}(SpeakeasyBase));
export { UpdateInitialConfigurationRequest };
var UpdateInitialConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateInitialConfigurationResponse, _super);
    function UpdateInitialConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateInitialConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateInitialConfigurationResponse.prototype, "statusCode", void 0);
    return UpdateInitialConfigurationResponse;
}(SpeakeasyBase));
export { UpdateInitialConfigurationResponse };
