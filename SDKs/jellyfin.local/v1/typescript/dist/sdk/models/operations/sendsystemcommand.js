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
var SendSystemCommandPathParams = /** @class */ (function (_super) {
    __extends(SendSystemCommandPathParams, _super);
    function SendSystemCommandPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=command" }),
        __metadata("design:type", String)
    ], SendSystemCommandPathParams.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], SendSystemCommandPathParams.prototype, "sessionId", void 0);
    return SendSystemCommandPathParams;
}(SpeakeasyBase));
export { SendSystemCommandPathParams };
var SendSystemCommandSecurity = /** @class */ (function (_super) {
    __extends(SendSystemCommandSecurity, _super);
    function SendSystemCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], SendSystemCommandSecurity.prototype, "customAuthentication", void 0);
    return SendSystemCommandSecurity;
}(SpeakeasyBase));
export { SendSystemCommandSecurity };
var SendSystemCommandRequest = /** @class */ (function (_super) {
    __extends(SendSystemCommandRequest, _super);
    function SendSystemCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendSystemCommandPathParams)
    ], SendSystemCommandRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendSystemCommandSecurity)
    ], SendSystemCommandRequest.prototype, "security", void 0);
    return SendSystemCommandRequest;
}(SpeakeasyBase));
export { SendSystemCommandRequest };
var SendSystemCommandResponse = /** @class */ (function (_super) {
    __extends(SendSystemCommandResponse, _super);
    function SendSystemCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SendSystemCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SendSystemCommandResponse.prototype, "statusCode", void 0);
    return SendSystemCommandResponse;
}(SpeakeasyBase));
export { SendSystemCommandResponse };
