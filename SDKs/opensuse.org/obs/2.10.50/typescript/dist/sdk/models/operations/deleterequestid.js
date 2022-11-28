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
var DeleteRequestIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteRequestIdPathParams, _super);
    function DeleteRequestIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteRequestIdPathParams.prototype, "id", void 0);
    return DeleteRequestIdPathParams;
}(SpeakeasyBase));
export { DeleteRequestIdPathParams };
var DeleteRequestIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteRequestIdSecurity, _super);
    function DeleteRequestIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], DeleteRequestIdSecurity.prototype, "basicAuthentication", void 0);
    return DeleteRequestIdSecurity;
}(SpeakeasyBase));
export { DeleteRequestIdSecurity };
var DeleteRequestIdRequest = /** @class */ (function (_super) {
    __extends(DeleteRequestIdRequest, _super);
    function DeleteRequestIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRequestIdPathParams)
    ], DeleteRequestIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRequestIdSecurity)
    ], DeleteRequestIdRequest.prototype, "security", void 0);
    return DeleteRequestIdRequest;
}(SpeakeasyBase));
export { DeleteRequestIdRequest };
var DeleteRequestIdResponse = /** @class */ (function (_super) {
    __extends(DeleteRequestIdResponse, _super);
    function DeleteRequestIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteRequestIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteRequestIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteRequestIdResponse.prototype, "statusCode", void 0);
    return DeleteRequestIdResponse;
}(SpeakeasyBase));
export { DeleteRequestIdResponse };
