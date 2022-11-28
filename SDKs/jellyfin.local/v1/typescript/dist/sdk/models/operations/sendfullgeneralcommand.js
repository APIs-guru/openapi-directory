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
var SendFullGeneralCommandPathParams = /** @class */ (function (_super) {
    __extends(SendFullGeneralCommandPathParams, _super);
    function SendFullGeneralCommandPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], SendFullGeneralCommandPathParams.prototype, "sessionId", void 0);
    return SendFullGeneralCommandPathParams;
}(SpeakeasyBase));
export { SendFullGeneralCommandPathParams };
var SendFullGeneralCommandRequests = /** @class */ (function (_super) {
    __extends(SendFullGeneralCommandRequests, _super);
    function SendFullGeneralCommandRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.GeneralCommand)
    ], SendFullGeneralCommandRequests.prototype, "generalCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GeneralCommand)
    ], SendFullGeneralCommandRequests.prototype, "generalCommand1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.GeneralCommand)
    ], SendFullGeneralCommandRequests.prototype, "generalCommand2", void 0);
    return SendFullGeneralCommandRequests;
}(SpeakeasyBase));
export { SendFullGeneralCommandRequests };
var SendFullGeneralCommandSecurity = /** @class */ (function (_super) {
    __extends(SendFullGeneralCommandSecurity, _super);
    function SendFullGeneralCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], SendFullGeneralCommandSecurity.prototype, "customAuthentication", void 0);
    return SendFullGeneralCommandSecurity;
}(SpeakeasyBase));
export { SendFullGeneralCommandSecurity };
var SendFullGeneralCommandRequest = /** @class */ (function (_super) {
    __extends(SendFullGeneralCommandRequest, _super);
    function SendFullGeneralCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendFullGeneralCommandPathParams)
    ], SendFullGeneralCommandRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendFullGeneralCommandRequests)
    ], SendFullGeneralCommandRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendFullGeneralCommandSecurity)
    ], SendFullGeneralCommandRequest.prototype, "security", void 0);
    return SendFullGeneralCommandRequest;
}(SpeakeasyBase));
export { SendFullGeneralCommandRequest };
var SendFullGeneralCommandResponse = /** @class */ (function (_super) {
    __extends(SendFullGeneralCommandResponse, _super);
    function SendFullGeneralCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SendFullGeneralCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SendFullGeneralCommandResponse.prototype, "statusCode", void 0);
    return SendFullGeneralCommandResponse;
}(SpeakeasyBase));
export { SendFullGeneralCommandResponse };
