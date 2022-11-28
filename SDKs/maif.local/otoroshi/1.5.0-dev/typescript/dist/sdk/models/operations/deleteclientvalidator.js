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
var DeleteClientValidatorPathParams = /** @class */ (function (_super) {
    __extends(DeleteClientValidatorPathParams, _super);
    function DeleteClientValidatorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteClientValidatorPathParams.prototype, "id", void 0);
    return DeleteClientValidatorPathParams;
}(SpeakeasyBase));
export { DeleteClientValidatorPathParams };
var DeleteClientValidatorSecurity = /** @class */ (function (_super) {
    __extends(DeleteClientValidatorSecurity, _super);
    function DeleteClientValidatorSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], DeleteClientValidatorSecurity.prototype, "otoroshiAuth", void 0);
    return DeleteClientValidatorSecurity;
}(SpeakeasyBase));
export { DeleteClientValidatorSecurity };
var DeleteClientValidatorRequest = /** @class */ (function (_super) {
    __extends(DeleteClientValidatorRequest, _super);
    function DeleteClientValidatorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteClientValidatorPathParams)
    ], DeleteClientValidatorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteClientValidatorSecurity)
    ], DeleteClientValidatorRequest.prototype, "security", void 0);
    return DeleteClientValidatorRequest;
}(SpeakeasyBase));
export { DeleteClientValidatorRequest };
var DeleteClientValidatorResponse = /** @class */ (function (_super) {
    __extends(DeleteClientValidatorResponse, _super);
    function DeleteClientValidatorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteClientValidatorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Deleted)
    ], DeleteClientValidatorResponse.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteClientValidatorResponse.prototype, "statusCode", void 0);
    return DeleteClientValidatorResponse;
}(SpeakeasyBase));
export { DeleteClientValidatorResponse };
