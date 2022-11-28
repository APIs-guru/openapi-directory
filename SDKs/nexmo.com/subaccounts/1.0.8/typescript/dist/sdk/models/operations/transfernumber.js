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
var TransferNumberPathParams = /** @class */ (function (_super) {
    __extends(TransferNumberPathParams, _super);
    function TransferNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], TransferNumberPathParams.prototype, "apiKey", void 0);
    return TransferNumberPathParams;
}(SpeakeasyBase));
export { TransferNumberPathParams };
var TransferNumberSecurity = /** @class */ (function (_super) {
    __extends(TransferNumberSecurity, _super);
    function TransferNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], TransferNumberSecurity.prototype, "basicAuth", void 0);
    return TransferNumberSecurity;
}(SpeakeasyBase));
export { TransferNumberSecurity };
var TransferNumber401ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferNumber401ApplicationJson, _super);
    function TransferNumber401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferNumber401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferNumber401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferNumber401ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferNumber401ApplicationJson.prototype, "type", void 0);
    return TransferNumber401ApplicationJson;
}(SpeakeasyBase));
export { TransferNumber401ApplicationJson };
var TransferNumber409ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferNumber409ApplicationJson, _super);
    function TransferNumber409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferNumber409ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferNumber409ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferNumber409ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferNumber409ApplicationJson.prototype, "type", void 0);
    return TransferNumber409ApplicationJson;
}(SpeakeasyBase));
export { TransferNumber409ApplicationJson };
var TransferNumber422ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(TransferNumber422ApplicationJsonInvalidParameters, _super);
    function TransferNumber422ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJsonInvalidParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJsonInvalidParameters.prototype, "reason", void 0);
    return TransferNumber422ApplicationJsonInvalidParameters;
}(SpeakeasyBase));
export { TransferNumber422ApplicationJsonInvalidParameters };
var TransferNumber422ApplicationJson = /** @class */ (function (_super) {
    __extends(TransferNumber422ApplicationJson, _super);
    function TransferNumber422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: TransferNumber422ApplicationJsonInvalidParameters }),
        __metadata("design:type", Array)
    ], TransferNumber422ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransferNumber422ApplicationJson.prototype, "type", void 0);
    return TransferNumber422ApplicationJson;
}(SpeakeasyBase));
export { TransferNumber422ApplicationJson };
var TransferNumberRequest = /** @class */ (function (_super) {
    __extends(TransferNumberRequest, _super);
    function TransferNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferNumberPathParams)
    ], TransferNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TransferNumberRequest)
    ], TransferNumberRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferNumberSecurity)
    ], TransferNumberRequest.prototype, "security", void 0);
    return TransferNumberRequest;
}(SpeakeasyBase));
export { TransferNumberRequest };
var TransferNumberResponse = /** @class */ (function (_super) {
    __extends(TransferNumberResponse, _super);
    function TransferNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TransferNumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TransferNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TransferNumberResponse.prototype, "transferNumberResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferNumber401ApplicationJson)
    ], TransferNumberResponse.prototype, "transferNumber401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TransferNumberResponse.prototype, "transferNumber403ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TransferNumberResponse.prototype, "transferNumber404ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferNumber409ApplicationJson)
    ], TransferNumberResponse.prototype, "transferNumber409ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferNumber422ApplicationJson)
    ], TransferNumberResponse.prototype, "transferNumber422ApplicationJsonObject", void 0);
    return TransferNumberResponse;
}(SpeakeasyBase));
export { TransferNumberResponse };
