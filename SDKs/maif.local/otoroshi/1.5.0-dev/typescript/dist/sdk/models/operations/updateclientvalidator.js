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
var UpdateClientValidatorPathParams = /** @class */ (function (_super) {
    __extends(UpdateClientValidatorPathParams, _super);
    function UpdateClientValidatorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateClientValidatorPathParams.prototype, "id", void 0);
    return UpdateClientValidatorPathParams;
}(SpeakeasyBase));
export { UpdateClientValidatorPathParams };
var UpdateClientValidatorSecurity = /** @class */ (function (_super) {
    __extends(UpdateClientValidatorSecurity, _super);
    function UpdateClientValidatorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], UpdateClientValidatorSecurity.prototype, "otoroshiAuth", void 0);
    return UpdateClientValidatorSecurity;
}(SpeakeasyBase));
export { UpdateClientValidatorSecurity };
var UpdateClientValidatorRequest = /** @class */ (function (_super) {
    __extends(UpdateClientValidatorRequest, _super);
    function UpdateClientValidatorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateClientValidatorPathParams)
    ], UpdateClientValidatorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ValidationAuthority)
    ], UpdateClientValidatorRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateClientValidatorSecurity)
    ], UpdateClientValidatorRequest.prototype, "security", void 0);
    return UpdateClientValidatorRequest;
}(SpeakeasyBase));
export { UpdateClientValidatorRequest };
var UpdateClientValidatorResponse = /** @class */ (function (_super) {
    __extends(UpdateClientValidatorResponse, _super);
    function UpdateClientValidatorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateClientValidatorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateClientValidatorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationAuthority)
    ], UpdateClientValidatorResponse.prototype, "validationAuthority", void 0);
    return UpdateClientValidatorResponse;
}(SpeakeasyBase));
export { UpdateClientValidatorResponse };
