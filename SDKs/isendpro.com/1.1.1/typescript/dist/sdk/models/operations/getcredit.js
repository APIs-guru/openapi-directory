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
export var GetCreditCreditEnum;
(function (GetCreditCreditEnum) {
    GetCreditCreditEnum["One"] = "1";
    GetCreditCreditEnum["Two"] = "2";
})(GetCreditCreditEnum || (GetCreditCreditEnum = {}));
var GetCreditQueryParams = /** @class */ (function (_super) {
    __extends(GetCreditQueryParams, _super);
    function GetCreditQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=credit" }),
        __metadata("design:type", String)
    ], GetCreditQueryParams.prototype, "credit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyid" }),
        __metadata("design:type", String)
    ], GetCreditQueryParams.prototype, "keyid", void 0);
    return GetCreditQueryParams;
}(SpeakeasyBase));
export { GetCreditQueryParams };
var GetCreditRequest = /** @class */ (function (_super) {
    __extends(GetCreditRequest, _super);
    function GetCreditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreditQueryParams)
    ], GetCreditRequest.prototype, "queryParams", void 0);
    return GetCreditRequest;
}(SpeakeasyBase));
export { GetCreditRequest };
var GetCreditResponse = /** @class */ (function (_super) {
    __extends(GetCreditResponse, _super);
    function GetCreditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreditResponse)
    ], GetCreditResponse.prototype, "creditResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Erreur)
    ], GetCreditResponse.prototype, "erreur", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreditResponse.prototype, "statusCode", void 0);
    return GetCreditResponse;
}(SpeakeasyBase));
export { GetCreditResponse };
