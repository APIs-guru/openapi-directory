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
var DeleteAdministrationEntityIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteAdministrationEntityIdPathParams, _super);
    function DeleteAdministrationEntityIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteAdministrationEntityIdPathParams.prototype, "id", void 0);
    return DeleteAdministrationEntityIdPathParams;
}(SpeakeasyBase));
export { DeleteAdministrationEntityIdPathParams };
var DeleteAdministrationEntityIdHeaders = /** @class */ (function (_super) {
    __extends(DeleteAdministrationEntityIdHeaders, _super);
    function DeleteAdministrationEntityIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], DeleteAdministrationEntityIdHeaders.prototype, "token", void 0);
    return DeleteAdministrationEntityIdHeaders;
}(SpeakeasyBase));
export { DeleteAdministrationEntityIdHeaders };
var DeleteAdministrationEntityIdRequest = /** @class */ (function (_super) {
    __extends(DeleteAdministrationEntityIdRequest, _super);
    function DeleteAdministrationEntityIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAdministrationEntityIdPathParams)
    ], DeleteAdministrationEntityIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAdministrationEntityIdHeaders)
    ], DeleteAdministrationEntityIdRequest.prototype, "headers", void 0);
    return DeleteAdministrationEntityIdRequest;
}(SpeakeasyBase));
export { DeleteAdministrationEntityIdRequest };
var DeleteAdministrationEntityIdResponse = /** @class */ (function (_super) {
    __extends(DeleteAdministrationEntityIdResponse, _super);
    function DeleteAdministrationEntityIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAdministrationEntityIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAdministrationEntityIdResponse.prototype, "statusCode", void 0);
    return DeleteAdministrationEntityIdResponse;
}(SpeakeasyBase));
export { DeleteAdministrationEntityIdResponse };
