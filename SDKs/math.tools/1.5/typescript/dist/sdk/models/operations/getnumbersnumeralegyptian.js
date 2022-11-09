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
import * as shared from "../shared";
var GetNumbersNumeralEgyptianQueryParams = /** @class */ (function (_super) {
    __extends(GetNumbersNumeralEgyptianQueryParams, _super);
    function GetNumbersNumeralEgyptianQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", Number)
    ], GetNumbersNumeralEgyptianQueryParams.prototype, "number", void 0);
    return GetNumbersNumeralEgyptianQueryParams;
}(SpeakeasyBase));
export { GetNumbersNumeralEgyptianQueryParams };
var GetNumbersNumeralEgyptianSecurity = /** @class */ (function (_super) {
    __extends(GetNumbersNumeralEgyptianSecurity, _super);
    function GetNumbersNumeralEgyptianSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXMathtoolsApiSecret)
    ], GetNumbersNumeralEgyptianSecurity.prototype, "xMathtoolsApiSecret", void 0);
    return GetNumbersNumeralEgyptianSecurity;
}(SpeakeasyBase));
export { GetNumbersNumeralEgyptianSecurity };
var GetNumbersNumeralEgyptianRequest = /** @class */ (function (_super) {
    __extends(GetNumbersNumeralEgyptianRequest, _super);
    function GetNumbersNumeralEgyptianRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNumbersNumeralEgyptianQueryParams)
    ], GetNumbersNumeralEgyptianRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetNumbersNumeralEgyptianSecurity)
    ], GetNumbersNumeralEgyptianRequest.prototype, "security", void 0);
    return GetNumbersNumeralEgyptianRequest;
}(SpeakeasyBase));
export { GetNumbersNumeralEgyptianRequest };
var GetNumbersNumeralEgyptianResponse = /** @class */ (function (_super) {
    __extends(GetNumbersNumeralEgyptianResponse, _super);
    function GetNumbersNumeralEgyptianResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNumbersNumeralEgyptianResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNumbersNumeralEgyptianResponse.prototype, "statusCode", void 0);
    return GetNumbersNumeralEgyptianResponse;
}(SpeakeasyBase));
export { GetNumbersNumeralEgyptianResponse };
