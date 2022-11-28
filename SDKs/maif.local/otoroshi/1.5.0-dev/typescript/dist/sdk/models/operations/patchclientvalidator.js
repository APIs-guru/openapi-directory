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
var PatchClientValidatorPathParams = /** @class */ (function (_super) {
    __extends(PatchClientValidatorPathParams, _super);
    function PatchClientValidatorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchClientValidatorPathParams.prototype, "id", void 0);
    return PatchClientValidatorPathParams;
}(SpeakeasyBase));
export { PatchClientValidatorPathParams };
var PatchClientValidatorSecurity = /** @class */ (function (_super) {
    __extends(PatchClientValidatorSecurity, _super);
    function PatchClientValidatorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], PatchClientValidatorSecurity.prototype, "otoroshiAuth", void 0);
    return PatchClientValidatorSecurity;
}(SpeakeasyBase));
export { PatchClientValidatorSecurity };
var PatchClientValidatorRequest = /** @class */ (function (_super) {
    __extends(PatchClientValidatorRequest, _super);
    function PatchClientValidatorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchClientValidatorPathParams)
    ], PatchClientValidatorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch }),
        __metadata("design:type", Array)
    ], PatchClientValidatorRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchClientValidatorSecurity)
    ], PatchClientValidatorRequest.prototype, "security", void 0);
    return PatchClientValidatorRequest;
}(SpeakeasyBase));
export { PatchClientValidatorRequest };
var PatchClientValidatorResponse = /** @class */ (function (_super) {
    __extends(PatchClientValidatorResponse, _super);
    function PatchClientValidatorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchClientValidatorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchClientValidatorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationAuthority)
    ], PatchClientValidatorResponse.prototype, "validationAuthority", void 0);
    return PatchClientValidatorResponse;
}(SpeakeasyBase));
export { PatchClientValidatorResponse };
