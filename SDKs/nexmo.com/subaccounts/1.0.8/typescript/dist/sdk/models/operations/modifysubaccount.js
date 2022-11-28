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
var ModifySubaccountPathParams = /** @class */ (function (_super) {
    __extends(ModifySubaccountPathParams, _super);
    function ModifySubaccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], ModifySubaccountPathParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subaccount_key" }),
        __metadata("design:type", String)
    ], ModifySubaccountPathParams.prototype, "subaccountKey", void 0);
    return ModifySubaccountPathParams;
}(SpeakeasyBase));
export { ModifySubaccountPathParams };
var ModifySubaccountSecurity = /** @class */ (function (_super) {
    __extends(ModifySubaccountSecurity, _super);
    function ModifySubaccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], ModifySubaccountSecurity.prototype, "basicAuth", void 0);
    return ModifySubaccountSecurity;
}(SpeakeasyBase));
export { ModifySubaccountSecurity };
var ModifySubaccount401ApplicationJson = /** @class */ (function (_super) {
    __extends(ModifySubaccount401ApplicationJson, _super);
    function ModifySubaccount401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], ModifySubaccount401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], ModifySubaccount401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ModifySubaccount401ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ModifySubaccount401ApplicationJson.prototype, "type", void 0);
    return ModifySubaccount401ApplicationJson;
}(SpeakeasyBase));
export { ModifySubaccount401ApplicationJson };
// ModifySubaccount404ApplicationJson
/**
 * Invalid API Key
**/
var ModifySubaccount404ApplicationJson = /** @class */ (function (_super) {
    __extends(ModifySubaccount404ApplicationJson, _super);
    function ModifySubaccount404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], ModifySubaccount404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], ModifySubaccount404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ModifySubaccount404ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ModifySubaccount404ApplicationJson.prototype, "type", void 0);
    return ModifySubaccount404ApplicationJson;
}(SpeakeasyBase));
export { ModifySubaccount404ApplicationJson };
var ModifySubaccount422ApplicationJsonInvalidParameters = /** @class */ (function (_super) {
    __extends(ModifySubaccount422ApplicationJsonInvalidParameters, _super);
    function ModifySubaccount422ApplicationJsonInvalidParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ModifySubaccount422ApplicationJsonInvalidParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], ModifySubaccount422ApplicationJsonInvalidParameters.prototype, "reason", void 0);
    return ModifySubaccount422ApplicationJsonInvalidParameters;
}(SpeakeasyBase));
export { ModifySubaccount422ApplicationJsonInvalidParameters };
var ModifySubaccount422ApplicationJson = /** @class */ (function (_super) {
    __extends(ModifySubaccount422ApplicationJson, _super);
    function ModifySubaccount422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], ModifySubaccount422ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], ModifySubaccount422ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: ModifySubaccount422ApplicationJsonInvalidParameters }),
        __metadata("design:type", Array)
    ], ModifySubaccount422ApplicationJson.prototype, "invalidParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ModifySubaccount422ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ModifySubaccount422ApplicationJson.prototype, "type", void 0);
    return ModifySubaccount422ApplicationJson;
}(SpeakeasyBase));
export { ModifySubaccount422ApplicationJson };
var ModifySubaccountRequest = /** @class */ (function (_super) {
    __extends(ModifySubaccountRequest, _super);
    function ModifySubaccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifySubaccountPathParams)
    ], ModifySubaccountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifySubaccountRequest)
    ], ModifySubaccountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifySubaccountSecurity)
    ], ModifySubaccountRequest.prototype, "security", void 0);
    return ModifySubaccountRequest;
}(SpeakeasyBase));
export { ModifySubaccountRequest };
var ModifySubaccountResponse = /** @class */ (function (_super) {
    __extends(ModifySubaccountResponse, _super);
    function ModifySubaccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifySubaccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifySubaccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifySubaccountResponse.prototype, "subaccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], ModifySubaccountResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifySubaccount401ApplicationJson)
    ], ModifySubaccountResponse.prototype, "modifySubaccount401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifySubaccount404ApplicationJson)
    ], ModifySubaccountResponse.prototype, "modifySubaccount404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifySubaccount422ApplicationJson)
    ], ModifySubaccountResponse.prototype, "modifySubaccount422ApplicationJsonObject", void 0);
    return ModifySubaccountResponse;
}(SpeakeasyBase));
export { ModifySubaccountResponse };
