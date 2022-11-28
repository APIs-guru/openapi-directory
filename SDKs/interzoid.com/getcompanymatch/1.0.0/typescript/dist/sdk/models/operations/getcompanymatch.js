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
var GetcompanymatchQueryParams = /** @class */ (function (_super) {
    __extends(GetcompanymatchQueryParams, _super);
    function GetcompanymatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company" }),
        __metadata("design:type", String)
    ], GetcompanymatchQueryParams.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetcompanymatchQueryParams.prototype, "license", void 0);
    return GetcompanymatchQueryParams;
}(SpeakeasyBase));
export { GetcompanymatchQueryParams };
var Getcompanymatch200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getcompanymatch200ApplicationJson, _super);
    function Getcompanymatch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getcompanymatch200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getcompanymatch200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Simkey" }),
        __metadata("design:type", String)
    ], Getcompanymatch200ApplicationJson.prototype, "simkey", void 0);
    return Getcompanymatch200ApplicationJson;
}(SpeakeasyBase));
export { Getcompanymatch200ApplicationJson };
var GetcompanymatchRequest = /** @class */ (function (_super) {
    __extends(GetcompanymatchRequest, _super);
    function GetcompanymatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetcompanymatchQueryParams)
    ], GetcompanymatchRequest.prototype, "queryParams", void 0);
    return GetcompanymatchRequest;
}(SpeakeasyBase));
export { GetcompanymatchRequest };
var GetcompanymatchResponse = /** @class */ (function (_super) {
    __extends(GetcompanymatchResponse, _super);
    function GetcompanymatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetcompanymatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetcompanymatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Getcompanymatch200ApplicationJson)
    ], GetcompanymatchResponse.prototype, "getcompanymatch200ApplicationJsonObject", void 0);
    return GetcompanymatchResponse;
}(SpeakeasyBase));
export { GetcompanymatchResponse };
