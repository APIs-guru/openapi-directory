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
var ValidatePathRequests = /** @class */ (function (_super) {
    __extends(ValidatePathRequests, _super);
    function ValidatePathRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ValidatePathDto)
    ], ValidatePathRequests.prototype, "validatePathDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ValidatePathDto)
    ], ValidatePathRequests.prototype, "validatePathDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ValidatePathDto)
    ], ValidatePathRequests.prototype, "validatePathDto2", void 0);
    return ValidatePathRequests;
}(SpeakeasyBase));
export { ValidatePathRequests };
var ValidatePathSecurity = /** @class */ (function (_super) {
    __extends(ValidatePathSecurity, _super);
    function ValidatePathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], ValidatePathSecurity.prototype, "customAuthentication", void 0);
    return ValidatePathSecurity;
}(SpeakeasyBase));
export { ValidatePathSecurity };
var ValidatePathRequest = /** @class */ (function (_super) {
    __extends(ValidatePathRequest, _super);
    function ValidatePathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ValidatePathRequests)
    ], ValidatePathRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ValidatePathSecurity)
    ], ValidatePathRequest.prototype, "security", void 0);
    return ValidatePathRequest;
}(SpeakeasyBase));
export { ValidatePathRequest };
var ValidatePathResponse = /** @class */ (function (_super) {
    __extends(ValidatePathResponse, _super);
    function ValidatePathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ValidatePathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ValidatePathResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ValidatePathResponse.prototype, "statusCode", void 0);
    return ValidatePathResponse;
}(SpeakeasyBase));
export { ValidatePathResponse };
