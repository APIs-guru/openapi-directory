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
var CreateSubAccountPathParams = /** @class */ (function (_super) {
    __extends(CreateSubAccountPathParams, _super);
    function CreateSubAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], CreateSubAccountPathParams.prototype, "apiKey", void 0);
    return CreateSubAccountPathParams;
}(SpeakeasyBase));
export { CreateSubAccountPathParams };
var CreateSubAccountSecurity = /** @class */ (function (_super) {
    __extends(CreateSubAccountSecurity, _super);
    function CreateSubAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], CreateSubAccountSecurity.prototype, "basicAuth", void 0);
    return CreateSubAccountSecurity;
}(SpeakeasyBase));
export { CreateSubAccountSecurity };
var CreateSubAccount401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSubAccount401ApplicationJson, _super);
    function CreateSubAccount401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], CreateSubAccount401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], CreateSubAccount401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CreateSubAccount401ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateSubAccount401ApplicationJson.prototype, "type", void 0);
    return CreateSubAccount401ApplicationJson;
}(SpeakeasyBase));
export { CreateSubAccount401ApplicationJson };
// CreateSubAccount404ApplicationJson
/**
 * Invalid API Key
**/
var CreateSubAccount404ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSubAccount404ApplicationJson, _super);
    function CreateSubAccount404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], CreateSubAccount404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], CreateSubAccount404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CreateSubAccount404ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateSubAccount404ApplicationJson.prototype, "type", void 0);
    return CreateSubAccount404ApplicationJson;
}(SpeakeasyBase));
export { CreateSubAccount404ApplicationJson };
var CreateSubAccount422ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(CreateSubAccount422ApplicationJsonInvalidParameters, _super);
    function CreateSubAccount422ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateSubAccount422ApplicationJsonInvalidParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], CreateSubAccount422ApplicationJsonInvalidParameters.prototype, "reason", void 0);
    return CreateSubAccount422ApplicationJsonInvalidParameters;
}(SpeakeasyBase));
export { CreateSubAccount422ApplicationJsonInvalidParameters };
var CreateSubAccount422ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateSubAccount422ApplicationJson, _super);
    function CreateSubAccount422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], CreateSubAccount422ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], CreateSubAccount422ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: CreateSubAccount422ApplicationJsonInvalidParameters }),
        __metadata("design:type", Array)
    ], CreateSubAccount422ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CreateSubAccount422ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateSubAccount422ApplicationJson.prototype, "type", void 0);
    return CreateSubAccount422ApplicationJson;
}(SpeakeasyBase));
export { CreateSubAccount422ApplicationJson };
var CreateSubAccountRequest = /** @class */ (function (_super) {
    __extends(CreateSubAccountRequest, _super);
    function CreateSubAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSubAccountPathParams)
    ], CreateSubAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NewSubaccountRequest)
    ], CreateSubAccountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSubAccountSecurity)
    ], CreateSubAccountRequest.prototype, "security", void 0);
    return CreateSubAccountRequest;
}(SpeakeasyBase));
export { CreateSubAccountRequest };
var CreateSubAccountResponse = /** @class */ (function (_super) {
    __extends(CreateSubAccountResponse, _super);
    function CreateSubAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSubAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSubAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubaccountCreateResponse)
    ], CreateSubAccountResponse.prototype, "subaccountCreateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], CreateSubAccountResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSubAccount401ApplicationJson)
    ], CreateSubAccountResponse.prototype, "createSubAccount401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSubAccount404ApplicationJson)
    ], CreateSubAccountResponse.prototype, "createSubAccount404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSubAccount422ApplicationJson)
    ], CreateSubAccountResponse.prototype, "createSubAccount422ApplicationJsonObject", void 0);
    return CreateSubAccountResponse;
}(SpeakeasyBase));
export { CreateSubAccountResponse };
