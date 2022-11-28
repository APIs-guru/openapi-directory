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
var GetInvoiceItemsPathParams = /** @class */ (function (_super) {
    __extends(GetInvoiceItemsPathParams, _super);
    function GetInvoiceItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" }),
        __metadata("design:type", Number)
    ], GetInvoiceItemsPathParams.prototype, "invoiceId", void 0);
    return GetInvoiceItemsPathParams;
}(SpeakeasyBase));
export { GetInvoiceItemsPathParams };
var GetInvoiceItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetInvoiceItemsQueryParams, _super);
    function GetInvoiceItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetInvoiceItemsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetInvoiceItemsQueryParams.prototype, "pageSize", void 0);
    return GetInvoiceItemsQueryParams;
}(SpeakeasyBase));
export { GetInvoiceItemsQueryParams };
var GetInvoiceItemsSecurity = /** @class */ (function (_super) {
    __extends(GetInvoiceItemsSecurity, _super);
    function GetInvoiceItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetInvoiceItemsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetInvoiceItemsSecurity.prototype, "oauth", void 0);
    return GetInvoiceItemsSecurity;
}(SpeakeasyBase));
export { GetInvoiceItemsSecurity };
var GetInvoiceItems200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetInvoiceItems200ApplicationJson, _super);
    function GetInvoiceItems200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.InvoiceItem }),
        __metadata("design:type", Array)
    ], GetInvoiceItems200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetInvoiceItems200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetInvoiceItems200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetInvoiceItems200ApplicationJson.prototype, "results", void 0);
    return GetInvoiceItems200ApplicationJson;
}(SpeakeasyBase));
export { GetInvoiceItems200ApplicationJson };
var GetInvoiceItemsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetInvoiceItemsDefaultApplicationJson, _super);
    function GetInvoiceItemsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetInvoiceItemsDefaultApplicationJson.prototype, "errors", void 0);
    return GetInvoiceItemsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetInvoiceItemsDefaultApplicationJson };
var GetInvoiceItemsRequest = /** @class */ (function (_super) {
    __extends(GetInvoiceItemsRequest, _super);
    function GetInvoiceItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInvoiceItemsPathParams)
    ], GetInvoiceItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInvoiceItemsQueryParams)
    ], GetInvoiceItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInvoiceItemsSecurity)
    ], GetInvoiceItemsRequest.prototype, "security", void 0);
    return GetInvoiceItemsRequest;
}(SpeakeasyBase));
export { GetInvoiceItemsRequest };
var GetInvoiceItemsResponse = /** @class */ (function (_super) {
    __extends(GetInvoiceItemsResponse, _super);
    function GetInvoiceItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInvoiceItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInvoiceItemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInvoiceItems200ApplicationJson)
    ], GetInvoiceItemsResponse.prototype, "getInvoiceItems200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInvoiceItemsDefaultApplicationJson)
    ], GetInvoiceItemsResponse.prototype, "getInvoiceItemsDefaultApplicationJsonObject", void 0);
    return GetInvoiceItemsResponse;
}(SpeakeasyBase));
export { GetInvoiceItemsResponse };
