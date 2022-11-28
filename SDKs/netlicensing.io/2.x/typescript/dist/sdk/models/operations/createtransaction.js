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
export var CreateTransactionRequestBodySourceEnum;
(function (CreateTransactionRequestBodySourceEnum) {
    CreateTransactionRequestBodySourceEnum["Shop"] = "SHOP";
})(CreateTransactionRequestBodySourceEnum || (CreateTransactionRequestBodySourceEnum = {}));
export var CreateTransactionRequestBodyStatusEnum;
(function (CreateTransactionRequestBodyStatusEnum) {
    CreateTransactionRequestBodyStatusEnum["Cancelled"] = "CANCELLED";
    CreateTransactionRequestBodyStatusEnum["Closed"] = "CLOSED";
    CreateTransactionRequestBodyStatusEnum["Pending"] = "PENDING";
})(CreateTransactionRequestBodyStatusEnum || (CreateTransactionRequestBodyStatusEnum = {}));
var CreateTransactionRequestBody = /** @class */ (function (_super) {
    __extends(CreateTransactionRequestBody, _super);
    function CreateTransactionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=active;" }),
        __metadata("design:type", Boolean)
    ], CreateTransactionRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dateClosed;" }),
        __metadata("design:type", Date)
    ], CreateTransactionRequestBody.prototype, "dateClosed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=dateCreated;" }),
        __metadata("design:type", Date)
    ], CreateTransactionRequestBody.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=licenseeNumber;" }),
        __metadata("design:type", String)
    ], CreateTransactionRequestBody.prototype, "licenseeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], CreateTransactionRequestBody.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=paymentMethod;" }),
        __metadata("design:type", String)
    ], CreateTransactionRequestBody.prototype, "paymentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=source;" }),
        __metadata("design:type", String)
    ], CreateTransactionRequestBody.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=status;" }),
        __metadata("design:type", String)
    ], CreateTransactionRequestBody.prototype, "status", void 0);
    return CreateTransactionRequestBody;
}(SpeakeasyBase));
export { CreateTransactionRequestBody };
var CreateTransactionSecurity = /** @class */ (function (_super) {
    __extends(CreateTransactionSecurity, _super);
    function CreateTransactionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], CreateTransactionSecurity.prototype, "basicAuth", void 0);
    return CreateTransactionSecurity;
}(SpeakeasyBase));
export { CreateTransactionSecurity };
var CreateTransactionRequest = /** @class */ (function (_super) {
    __extends(CreateTransactionRequest, _super);
    function CreateTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateTransactionRequestBody)
    ], CreateTransactionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTransactionSecurity)
    ], CreateTransactionRequest.prototype, "security", void 0);
    return CreateTransactionRequest;
}(SpeakeasyBase));
export { CreateTransactionRequest };
var CreateTransactionResponse = /** @class */ (function (_super) {
    __extends(CreateTransactionResponse, _super);
    function CreateTransactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateTransactionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTransactionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTransactionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTransactionResponse.prototype, "netlicensing", void 0);
    return CreateTransactionResponse;
}(SpeakeasyBase));
export { CreateTransactionResponse };
