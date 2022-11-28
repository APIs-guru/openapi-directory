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
var GetNumbersPiQueryParams = /** @class */ (function (_super) {
    __extends(GetNumbersPiQueryParams, _super);
    function GetNumbersPiQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Number)
    ], GetNumbersPiQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Number)
    ], GetNumbersPiQueryParams.prototype, "to", void 0);
    return GetNumbersPiQueryParams;
}(SpeakeasyBase));
export { GetNumbersPiQueryParams };
var GetNumbersPiSecurity = /** @class */ (function (_super) {
    __extends(GetNumbersPiSecurity, _super);
    function GetNumbersPiSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXMathtoolsApiSecret)
    ], GetNumbersPiSecurity.prototype, "xMathtoolsApiSecret", void 0);
    return GetNumbersPiSecurity;
}(SpeakeasyBase));
export { GetNumbersPiSecurity };
var GetNumbersPiRequest = /** @class */ (function (_super) {
    __extends(GetNumbersPiRequest, _super);
    function GetNumbersPiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNumbersPiQueryParams)
    ], GetNumbersPiRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNumbersPiSecurity)
    ], GetNumbersPiRequest.prototype, "security", void 0);
    return GetNumbersPiRequest;
}(SpeakeasyBase));
export { GetNumbersPiRequest };
var GetNumbersPiResponse = /** @class */ (function (_super) {
    __extends(GetNumbersPiResponse, _super);
    function GetNumbersPiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNumbersPiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNumbersPiResponse.prototype, "statusCode", void 0);
    return GetNumbersPiResponse;
}(SpeakeasyBase));
export { GetNumbersPiResponse };
