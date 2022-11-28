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
var SendMessageCommandPathParams = /** @class */ (function (_super) {
    __extends(SendMessageCommandPathParams, _super);
    function SendMessageCommandPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" }),
        __metadata("design:type", String)
    ], SendMessageCommandPathParams.prototype, "sessionId", void 0);
    return SendMessageCommandPathParams;
}(SpeakeasyBase));
export { SendMessageCommandPathParams };
var SendMessageCommandQueryParams = /** @class */ (function (_super) {
    __extends(SendMessageCommandQueryParams, _super);
    function SendMessageCommandQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=header" }),
        __metadata("design:type", String)
    ], SendMessageCommandQueryParams.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SendMessageCommandQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutMs" }),
        __metadata("design:type", Number)
    ], SendMessageCommandQueryParams.prototype, "timeoutMs", void 0);
    return SendMessageCommandQueryParams;
}(SpeakeasyBase));
export { SendMessageCommandQueryParams };
var SendMessageCommandSecurity = /** @class */ (function (_super) {
    __extends(SendMessageCommandSecurity, _super);
    function SendMessageCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], SendMessageCommandSecurity.prototype, "customAuthentication", void 0);
    return SendMessageCommandSecurity;
}(SpeakeasyBase));
export { SendMessageCommandSecurity };
var SendMessageCommandRequest = /** @class */ (function (_super) {
    __extends(SendMessageCommandRequest, _super);
    function SendMessageCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendMessageCommandPathParams)
    ], SendMessageCommandRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendMessageCommandQueryParams)
    ], SendMessageCommandRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SendMessageCommandSecurity)
    ], SendMessageCommandRequest.prototype, "security", void 0);
    return SendMessageCommandRequest;
}(SpeakeasyBase));
export { SendMessageCommandRequest };
var SendMessageCommandResponse = /** @class */ (function (_super) {
    __extends(SendMessageCommandResponse, _super);
    function SendMessageCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SendMessageCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SendMessageCommandResponse.prototype, "statusCode", void 0);
    return SendMessageCommandResponse;
}(SpeakeasyBase));
export { SendMessageCommandResponse };
