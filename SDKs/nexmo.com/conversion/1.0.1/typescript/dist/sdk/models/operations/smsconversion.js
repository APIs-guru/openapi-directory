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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var SmsConversionQueryParams = /** @class */ (function (_super) {
    __extends(SmsConversionQueryParams, _super);
    function SmsConversionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=delivered" }),
        __metadata("design:type", Object)
    ], SmsConversionQueryParams.prototype, "delivered", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=message-id" }),
        __metadata("design:type", String)
    ], SmsConversionQueryParams.prototype, "messageId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", String)
    ], SmsConversionQueryParams.prototype, "timestamp", void 0);
    return SmsConversionQueryParams;
}(SpeakeasyBase));
export { SmsConversionQueryParams };
var SmsConversionRequest = /** @class */ (function (_super) {
    __extends(SmsConversionRequest, _super);
    function SmsConversionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SmsConversionQueryParams)
    ], SmsConversionRequest.prototype, "queryParams", void 0);
    return SmsConversionRequest;
}(SpeakeasyBase));
export { SmsConversionRequest };
var SmsConversionResponse = /** @class */ (function (_super) {
    __extends(SmsConversionResponse, _super);
    function SmsConversionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SmsConversionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SmsConversionResponse.prototype, "statusCode", void 0);
    return SmsConversionResponse;
}(SpeakeasyBase));
export { SmsConversionResponse };
