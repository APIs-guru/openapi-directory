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
var GetNumbersRandomQueryParams = /** @class */ (function (_super) {
    __extends(GetNumbersRandomQueryParams, _super);
    function GetNumbersRandomQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], GetNumbersRandomQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", Number)
    ], GetNumbersRandomQueryParams.prototype, "min", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=total" }),
        __metadata("design:type", Number)
    ], GetNumbersRandomQueryParams.prototype, "total", void 0);
    return GetNumbersRandomQueryParams;
}(SpeakeasyBase));
export { GetNumbersRandomQueryParams };
var GetNumbersRandomSecurity = /** @class */ (function (_super) {
    __extends(GetNumbersRandomSecurity, _super);
    function GetNumbersRandomSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXMathtoolsApiSecret)
    ], GetNumbersRandomSecurity.prototype, "xMathtoolsApiSecret", void 0);
    return GetNumbersRandomSecurity;
}(SpeakeasyBase));
export { GetNumbersRandomSecurity };
var GetNumbersRandomRequest = /** @class */ (function (_super) {
    __extends(GetNumbersRandomRequest, _super);
    function GetNumbersRandomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNumbersRandomQueryParams)
    ], GetNumbersRandomRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetNumbersRandomSecurity)
    ], GetNumbersRandomRequest.prototype, "security", void 0);
    return GetNumbersRandomRequest;
}(SpeakeasyBase));
export { GetNumbersRandomRequest };
var GetNumbersRandomResponse = /** @class */ (function (_super) {
    __extends(GetNumbersRandomResponse, _super);
    function GetNumbersRandomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNumbersRandomResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNumbersRandomResponse.prototype, "statusCode", void 0);
    return GetNumbersRandomResponse;
}(SpeakeasyBase));
export { GetNumbersRandomResponse };
