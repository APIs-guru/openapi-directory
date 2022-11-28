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
var TransferBalancePathParams = /** @class */ (function (_super) {
    __extends(TransferBalancePathParams, _super);
    function TransferBalancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], TransferBalancePathParams.prototype, "apiKey", void 0);
    return TransferBalancePathParams;
}(SpeakeasyBase));
export { TransferBalancePathParams };
var TransferBalanceSecurity = /** @class */ (function (_super) {
    __extends(TransferBalanceSecurity, _super);
    function TransferBalanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], TransferBalanceSecurity.prototype, "basicAuth", void 0);
    return TransferBalanceSecurity;
}(SpeakeasyBase));
export { TransferBalanceSecurity };
var TransferBalance401ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferBalance401ApplicationJson, _super);
    function TransferBalance401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferBalance401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferBalance401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferBalance401ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferBalance401ApplicationJson.prototype, "type", void 0);
    return TransferBalance401ApplicationJson;
}(SpeakeasyBase));
export { TransferBalance401ApplicationJson };
// TransferBalance404ApplicationJson
/**
 * Invalid API Key
**/
var TransferBalance404ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferBalance404ApplicationJson, _super);
    function TransferBalance404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferBalance404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferBalance404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferBalance404ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferBalance404ApplicationJson.prototype, "type", void 0);
    return TransferBalance404ApplicationJson;
}(SpeakeasyBase));
export { TransferBalance404ApplicationJson };
var TransferBalance422ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(TransferBalance422ApplicationJsonInvalidParameters, _super);
    function TransferBalance422ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJsonInvalidParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJsonInvalidParameters.prototype, "reason", void 0);
    return TransferBalance422ApplicationJsonInvalidParameters;
}(SpeakeasyBase));
export { TransferBalance422ApplicationJsonInvalidParameters };
var TransferBalance422ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferBalance422ApplicationJson, _super);
    function TransferBalance422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: TransferBalance422ApplicationJsonInvalidParameters }),
        __metadata("design:type", Array)
    ], TransferBalance422ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferBalance422ApplicationJson.prototype, "type", void 0);
    return TransferBalance422ApplicationJson;
}(SpeakeasyBase));
export { TransferBalance422ApplicationJson };
var TransferBalanceRequest = /** @class */ (function (_super) {
    __extends(TransferBalanceRequest, _super);
    function TransferBalanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferBalancePathParams)
    ], TransferBalanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TransferBalanceOrCreditRequest)
    ], TransferBalanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferBalanceSecurity)
    ], TransferBalanceRequest.prototype, "security", void 0);
    return TransferBalanceRequest;
}(SpeakeasyBase));
export { TransferBalanceRequest };
var TransferBalanceResponse = /** @class */ (function (_super) {
    __extends(TransferBalanceResponse, _super);
    function TransferBalanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TransferBalanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TransferBalanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TransferBalanceResponse.prototype, "transferBalanceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], TransferBalanceResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferBalance401ApplicationJson)
    ], TransferBalanceResponse.prototype, "transferBalance401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferBalance404ApplicationJson)
    ], TransferBalanceResponse.prototype, "transferBalance404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferBalance422ApplicationJson)
    ], TransferBalanceResponse.prototype, "transferBalance422ApplicationJsonObject", void 0);
    return TransferBalanceResponse;
}(SpeakeasyBase));
export { TransferBalanceResponse };
