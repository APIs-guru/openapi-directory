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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AutoCheckInPathParams = /** @class */ (function (_super) {
    __extends(AutoCheckInPathParams, _super);
    function AutoCheckInPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ticketnumber" }),
        __metadata("design:type", String)
    ], AutoCheckInPathParams.prototype, "ticketnumber", void 0);
    return AutoCheckInPathParams;
}(SpeakeasyBase));
export { AutoCheckInPathParams };
var AutoCheckInQueryParams = /** @class */ (function (_super) {
    __extends(AutoCheckInQueryParams, _super);
    function AutoCheckInQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=emailAddress" }),
        __metadata("design:type", String)
    ], AutoCheckInQueryParams.prototype, "emailAddress", void 0);
    return AutoCheckInQueryParams;
}(SpeakeasyBase));
export { AutoCheckInQueryParams };
var AutoCheckInHeaders = /** @class */ (function (_super) {
    __extends(AutoCheckInHeaders, _super);
    function AutoCheckInHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], AutoCheckInHeaders.prototype, "accept", void 0);
    return AutoCheckInHeaders;
}(SpeakeasyBase));
export { AutoCheckInHeaders };
var AutoCheckInSecurity = /** @class */ (function (_super) {
    __extends(AutoCheckInSecurity, _super);
    function AutoCheckInSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], AutoCheckInSecurity.prototype, "auth", void 0);
    return AutoCheckInSecurity;
}(SpeakeasyBase));
export { AutoCheckInSecurity };
var AutoCheckInRequest = /** @class */ (function (_super) {
    __extends(AutoCheckInRequest, _super);
    function AutoCheckInRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AutoCheckInPathParams)
    ], AutoCheckInRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AutoCheckInQueryParams)
    ], AutoCheckInRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AutoCheckInHeaders)
    ], AutoCheckInRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AutoCheckInSecurity)
    ], AutoCheckInRequest.prototype, "security", void 0);
    return AutoCheckInRequest;
}(SpeakeasyBase));
export { AutoCheckInRequest };
var AutoCheckInResponse = /** @class */ (function (_super) {
    __extends(AutoCheckInResponse, _super);
    function AutoCheckInResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AutoCheckInResponse.prototype, "autoCheckIn200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AutoCheckInResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AutoCheckInResponse.prototype, "statusCode", void 0);
    return AutoCheckInResponse;
}(SpeakeasyBase));
export { AutoCheckInResponse };
