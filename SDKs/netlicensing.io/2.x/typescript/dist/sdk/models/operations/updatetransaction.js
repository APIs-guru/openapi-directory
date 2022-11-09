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
var UpdateTransactionPathParams = /** @class */ (function (_super) {
    __extends(UpdateTransactionPathParams, _super);
    function UpdateTransactionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=transactionNumber" }),
        __metadata("design:type", String)
    ], UpdateTransactionPathParams.prototype, "transactionNumber", void 0);
    return UpdateTransactionPathParams;
}(SpeakeasyBase));
export { UpdateTransactionPathParams };
export var UpdateTransactionRequestBodySourceEnum;
(function (UpdateTransactionRequestBodySourceEnum) {
    UpdateTransactionRequestBodySourceEnum["Shop"] = "SHOP";
})(UpdateTransactionRequestBodySourceEnum || (UpdateTransactionRequestBodySourceEnum = {}));
export var UpdateTransactionRequestBodyStatusEnum;
(function (UpdateTransactionRequestBodyStatusEnum) {
    UpdateTransactionRequestBodyStatusEnum["Cancelled"] = "CANCELLED";
    UpdateTransactionRequestBodyStatusEnum["Closed"] = "CLOSED";
    UpdateTransactionRequestBodyStatusEnum["Pending"] = "PENDING";
})(UpdateTransactionRequestBodyStatusEnum || (UpdateTransactionRequestBodyStatusEnum = {}));
var UpdateTransactionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateTransactionRequestBody, _super);
    function UpdateTransactionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], UpdateTransactionRequestBody.prototype, "active", void 0);
    __decorate([
        Metadata({ data: "form, name=dateClosed;" }),
        __metadata("design:type", Date)
    ], UpdateTransactionRequestBody.prototype, "dateClosed", void 0);
    __decorate([
        Metadata({ data: "form, name=dateCreated;" }),
        __metadata("design:type", Date)
    ], UpdateTransactionRequestBody.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], UpdateTransactionRequestBody.prototype, "number", void 0);
    __decorate([
        Metadata({ data: "form, name=paymentMethod;" }),
        __metadata("design:type", String)
    ], UpdateTransactionRequestBody.prototype, "paymentMethod", void 0);
    __decorate([
        Metadata({ data: "form, name=source;" }),
        __metadata("design:type", String)
    ], UpdateTransactionRequestBody.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "form, name=status;" }),
        __metadata("design:type", String)
    ], UpdateTransactionRequestBody.prototype, "status", void 0);
    return UpdateTransactionRequestBody;
}(SpeakeasyBase));
export { UpdateTransactionRequestBody };
var UpdateTransactionSecurity = /** @class */ (function (_super) {
    __extends(UpdateTransactionSecurity, _super);
    function UpdateTransactionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UpdateTransactionSecurity.prototype, "basicAuth", void 0);
    return UpdateTransactionSecurity;
}(SpeakeasyBase));
export { UpdateTransactionSecurity };
var UpdateTransactionRequest = /** @class */ (function (_super) {
    __extends(UpdateTransactionRequest, _super);
    function UpdateTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTransactionPathParams)
    ], UpdateTransactionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateTransactionRequestBody)
    ], UpdateTransactionRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTransactionSecurity)
    ], UpdateTransactionRequest.prototype, "security", void 0);
    return UpdateTransactionRequest;
}(SpeakeasyBase));
export { UpdateTransactionRequest };
var UpdateTransactionResponse = /** @class */ (function (_super) {
    __extends(UpdateTransactionResponse, _super);
    function UpdateTransactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateTransactionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateTransactionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateTransactionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateTransactionResponse.prototype, "netlicensing", void 0);
    return UpdateTransactionResponse;
}(SpeakeasyBase));
export { UpdateTransactionResponse };
