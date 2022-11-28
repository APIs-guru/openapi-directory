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
var RetrieveSubaccountsListPathParams = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountsListPathParams, _super);
    function RetrieveSubaccountsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountsListPathParams.prototype, "apiKey", void 0);
    return RetrieveSubaccountsListPathParams;
}(SpeakeasyBase));
export { RetrieveSubaccountsListPathParams };
var RetrieveSubaccountsListSecurity = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountsListSecurity, _super);
    function RetrieveSubaccountsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], RetrieveSubaccountsListSecurity.prototype, "basicAuth", void 0);
    return RetrieveSubaccountsListSecurity;
}(SpeakeasyBase));
export { RetrieveSubaccountsListSecurity };
var RetrieveSubaccountsList401ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountsList401ApplicationJson, _super);
    function RetrieveSubaccountsList401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountsList401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountsList401ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountsList401ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountsList401ApplicationJson.prototype, "type", void 0);
    return RetrieveSubaccountsList401ApplicationJson;
}(SpeakeasyBase));
export { RetrieveSubaccountsList401ApplicationJson };
// RetrieveSubaccountsList404ApplicationJson
/**
 * Invalid API Key
**/
var RetrieveSubaccountsList404ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountsList404ApplicationJson, _super);
    function RetrieveSubaccountsList404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountsList404ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountsList404ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountsList404ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveSubaccountsList404ApplicationJson.prototype, "type", void 0);
    return RetrieveSubaccountsList404ApplicationJson;
}(SpeakeasyBase));
export { RetrieveSubaccountsList404ApplicationJson };
var RetrieveSubaccountsListRequest = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountsListRequest, _super);
    function RetrieveSubaccountsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveSubaccountsListPathParams)
    ], RetrieveSubaccountsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveSubaccountsListSecurity)
    ], RetrieveSubaccountsListRequest.prototype, "security", void 0);
    return RetrieveSubaccountsListRequest;
}(SpeakeasyBase));
export { RetrieveSubaccountsListRequest };
var RetrieveSubaccountsListResponse = /** @class */ (function (_super) {
    __extends(RetrieveSubaccountsListResponse, _super);
    function RetrieveSubaccountsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveSubaccountsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveSubaccountsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RetrieveSubaccountsListResponse.prototype, "subaccountsAllResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UnprovisionedErrorResponse)
    ], RetrieveSubaccountsListResponse.prototype, "unprovisionedErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveSubaccountsList401ApplicationJson)
    ], RetrieveSubaccountsListResponse.prototype, "retrieveSubaccountsList401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveSubaccountsList404ApplicationJson)
    ], RetrieveSubaccountsListResponse.prototype, "retrieveSubaccountsList404ApplicationJsonObject", void 0);
    return RetrieveSubaccountsListResponse;
}(SpeakeasyBase));
export { RetrieveSubaccountsListResponse };
