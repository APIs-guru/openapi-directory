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
var GetPaymentsQueryParams = /** @class */ (function (_super) {
    __extends(GetPaymentsQueryParams, _super);
    function GetPaymentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPaymentsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetPaymentsQueryParams.prototype, "pageSize", void 0);
    return GetPaymentsQueryParams;
}(SpeakeasyBase));
export { GetPaymentsQueryParams };
var GetPaymentsSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentsSecurity, _super);
    function GetPaymentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetPaymentsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetPaymentsSecurity.prototype, "oauth", void 0);
    return GetPaymentsSecurity;
}(SpeakeasyBase));
export { GetPaymentsSecurity };
var GetPayments200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPayments200ApplicationJson, _super);
    function GetPayments200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Payment }),
        __metadata("design:type", Array)
    ], GetPayments200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetPayments200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetPayments200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetPayments200ApplicationJson.prototype, "results", void 0);
    return GetPayments200ApplicationJson;
}(SpeakeasyBase));
export { GetPayments200ApplicationJson };
var GetPaymentsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetPaymentsDefaultApplicationJson, _super);
    function GetPaymentsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetPaymentsDefaultApplicationJson.prototype, "errors", void 0);
    return GetPaymentsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetPaymentsDefaultApplicationJson };
var GetPaymentsRequest = /** @class */ (function (_super) {
    __extends(GetPaymentsRequest, _super);
    function GetPaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentsQueryParams)
    ], GetPaymentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentsSecurity)
    ], GetPaymentsRequest.prototype, "security", void 0);
    return GetPaymentsRequest;
}(SpeakeasyBase));
export { GetPaymentsRequest };
var GetPaymentsResponse = /** @class */ (function (_super) {
    __extends(GetPaymentsResponse, _super);
    function GetPaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayments200ApplicationJson)
    ], GetPaymentsResponse.prototype, "getPayments200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentsDefaultApplicationJson)
    ], GetPaymentsResponse.prototype, "getPaymentsDefaultApplicationJsonObject", void 0);
    return GetPaymentsResponse;
}(SpeakeasyBase));
export { GetPaymentsResponse };
