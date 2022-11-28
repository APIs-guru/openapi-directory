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
var TransferCreditPathParams = /** @class */ (function (_super) {
    __extends(TransferCreditPathParams, _super);
    function TransferCreditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], TransferCreditPathParams.prototype, "apiKey", void 0);
    return TransferCreditPathParams;
}(SpeakeasyBase));
export { TransferCreditPathParams };
var TransferCreditSecurity = /** @class */ (function (_super) {
    __extends(TransferCreditSecurity, _super);
    function TransferCreditSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], TransferCreditSecurity.prototype, "basicAuth", void 0);
    return TransferCreditSecurity;
}(SpeakeasyBase));
export { TransferCreditSecurity };
var TransferCredit401ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferCredit401ApplicationJson, _super);
    function TransferCredit401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferCredit401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferCredit401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferCredit401ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferCredit401ApplicationJson.prototype, "type", void 0);
    return TransferCredit401ApplicationJson;
}(SpeakeasyBase));
export { TransferCredit401ApplicationJson };
// TransferCredit404ApplicationJson
/**
 * Invalid API Key
**/
var TransferCredit404ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferCredit404ApplicationJson, _super);
    function TransferCredit404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferCredit404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferCredit404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferCredit404ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferCredit404ApplicationJson.prototype, "type", void 0);
    return TransferCredit404ApplicationJson;
}(SpeakeasyBase));
export { TransferCredit404ApplicationJson };
var TransferCredit422ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(TransferCredit422ApplicationJsonInvalidParameters, _super);
    function TransferCredit422ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransferCredit422ApplicationJsonInvalidParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], TransferCredit422ApplicationJsonInvalidParameters.prototype, "reason", void 0);
    return TransferCredit422ApplicationJsonInvalidParameters;
}(SpeakeasyBase));
export { TransferCredit422ApplicationJsonInvalidParameters };
var TransferCredit422ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferCredit422ApplicationJson, _super);
    function TransferCredit422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferCredit422ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferCredit422ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: TransferCredit422ApplicationJsonInvalidParameters }),
        __metadata("design:type", Array)
    ], TransferCredit422ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferCredit422ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferCredit422ApplicationJson.prototype, "type", void 0);
    return TransferCredit422ApplicationJson;
}(SpeakeasyBase));
export { TransferCredit422ApplicationJson };
var TransferCreditRequest = /** @class */ (function (_super) {
    __extends(TransferCreditRequest, _super);
    function TransferCreditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferCreditPathParams)
    ], TransferCreditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TransferBalanceOrCreditRequest)
    ], TransferCreditRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferCreditSecurity)
    ], TransferCreditRequest.prototype, "security", void 0);
    return TransferCreditRequest;
}(SpeakeasyBase));
export { TransferCreditRequest };
var TransferCreditResponse = /** @class */ (function (_super) {
    __extends(TransferCreditResponse, _super);
    function TransferCreditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TransferCreditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TransferCreditResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TransferCreditResponse.prototype, "transferCreditResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], TransferCreditResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferCredit401ApplicationJson)
    ], TransferCreditResponse.prototype, "transferCredit401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferCredit404ApplicationJson)
    ], TransferCreditResponse.prototype, "transferCredit404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferCredit422ApplicationJson)
    ], TransferCreditResponse.prototype, "transferCredit422ApplicationJsonObject", void 0);
    return TransferCreditResponse;
}(SpeakeasyBase));
export { TransferCreditResponse };
