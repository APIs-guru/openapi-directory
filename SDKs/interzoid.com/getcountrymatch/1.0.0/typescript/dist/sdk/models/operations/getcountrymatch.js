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
var GetcountrymatchQueryParams = /** @class */ (function (_super) {
    __extends(GetcountrymatchQueryParams, _super);
    function GetcountrymatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetcountrymatchQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetcountrymatchQueryParams.prototype, "license", void 0);
    return GetcountrymatchQueryParams;
}(SpeakeasyBase));
export { GetcountrymatchQueryParams };
var Getcountrymatch200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getcountrymatch200ApplicationJson, _super);
    function Getcountrymatch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getcountrymatch200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getcountrymatch200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Simkey" }),
        __metadata("design:type", String)
    ], Getcountrymatch200ApplicationJson.prototype, "simkey", void 0);
    return Getcountrymatch200ApplicationJson;
}(SpeakeasyBase));
export { Getcountrymatch200ApplicationJson };
var GetcountrymatchRequest = /** @class */ (function (_super) {
    __extends(GetcountrymatchRequest, _super);
    function GetcountrymatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetcountrymatchQueryParams)
    ], GetcountrymatchRequest.prototype, "queryParams", void 0);
    return GetcountrymatchRequest;
}(SpeakeasyBase));
export { GetcountrymatchRequest };
var GetcountrymatchResponse = /** @class */ (function (_super) {
    __extends(GetcountrymatchResponse, _super);
    function GetcountrymatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetcountrymatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetcountrymatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Getcountrymatch200ApplicationJson)
    ], GetcountrymatchResponse.prototype, "getcountrymatch200ApplicationJsonObject", void 0);
    return GetcountrymatchResponse;
}(SpeakeasyBase));
export { GetcountrymatchResponse };
