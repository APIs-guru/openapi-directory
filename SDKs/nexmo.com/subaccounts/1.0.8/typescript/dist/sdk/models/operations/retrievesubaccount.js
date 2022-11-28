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
var RetrieveSubaccountPathParams = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountPathParams, _super);
    function RetrieveSubaccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountPathParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subaccount_key" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountPathParams.prototype, "subaccountKey", void 0);
    return RetrieveSubaccountPathParams;
}(SpeakeasyBase));
export { RetrieveSubaccountPathParams };
var RetrieveSubaccountSecurity = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountSecurity, _super);
    function RetrieveSubaccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], RetrieveSubaccountSecurity.prototype, "basicAuth", void 0);
    return RetrieveSubaccountSecurity;
}(SpeakeasyBase));
export { RetrieveSubaccountSecurity };
var RetrieveSubaccount401ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveSubaccount401ApplicationJson, _super);
    function RetrieveSubaccount401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount401ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount401ApplicationJson.prototype, "type", void 0);
    return RetrieveSubaccount401ApplicationJson;
}(SpeakeasyBase));
export { RetrieveSubaccount401ApplicationJson };
// RetrieveSubaccount404ApplicationJson
/**
 * Invalid API Key
**/
var RetrieveSubaccount404ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveSubaccount404ApplicationJson, _super);
    function RetrieveSubaccount404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount404ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveSubaccount404ApplicationJson.prototype, "type", void 0);
    return RetrieveSubaccount404ApplicationJson;
}(SpeakeasyBase));
export { RetrieveSubaccount404ApplicationJson };
var RetrieveSubaccountRequest = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountRequest, _super);
    function RetrieveSubaccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveSubaccountPathParams)
    ], RetrieveSubaccountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveSubaccountSecurity)
    ], RetrieveSubaccountRequest.prototype, "security", void 0);
    return RetrieveSubaccountRequest;
}(SpeakeasyBase));
export { RetrieveSubaccountRequest };
var RetrieveSubaccountResponse = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountResponse, _super);
    function RetrieveSubaccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveSubaccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveSubaccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RetrieveSubaccountResponse.prototype, "subaccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], RetrieveSubaccountResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveSubaccount401ApplicationJson)
    ], RetrieveSubaccountResponse.prototype, "retrieveSubaccount401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveSubaccount404ApplicationJson)
    ], RetrieveSubaccountResponse.prototype, "retrieveSubaccount404ApplicationJsonObject", void 0);
    return RetrieveSubaccountResponse;
}(SpeakeasyBase));
export { RetrieveSubaccountResponse };
