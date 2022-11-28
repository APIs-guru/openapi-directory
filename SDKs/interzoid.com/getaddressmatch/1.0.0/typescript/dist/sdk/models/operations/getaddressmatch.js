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
var GetaddressmatchQueryParams = /** @class */ (function (_super) {
    __extends(GetaddressmatchQueryParams, _super);
    function GetaddressmatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" }),
        __metadata("design:type", String)
    ], GetaddressmatchQueryParams.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetaddressmatchQueryParams.prototype, "license", void 0);
    return GetaddressmatchQueryParams;
}(SpeakeasyBase));
export { GetaddressmatchQueryParams };
var Getaddressmatch200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getaddressmatch200ApplicationJson, _super);
    function Getaddressmatch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getaddressmatch200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getaddressmatch200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Simkey" }),
        __metadata("design:type", String)
    ], Getaddressmatch200ApplicationJson.prototype, "simkey", void 0);
    return Getaddressmatch200ApplicationJson;
}(SpeakeasyBase));
export { Getaddressmatch200ApplicationJson };
var GetaddressmatchRequest = /** @class */ (function (_super) {
    __extends(GetaddressmatchRequest, _super);
    function GetaddressmatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetaddressmatchQueryParams)
    ], GetaddressmatchRequest.prototype, "queryParams", void 0);
    return GetaddressmatchRequest;
}(SpeakeasyBase));
export { GetaddressmatchRequest };
var GetaddressmatchResponse = /** @class */ (function (_super) {
    __extends(GetaddressmatchResponse, _super);
    function GetaddressmatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetaddressmatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetaddressmatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Getaddressmatch200ApplicationJson)
    ], GetaddressmatchResponse.prototype, "getaddressmatch200ApplicationJsonObject", void 0);
    return GetaddressmatchResponse;
}(SpeakeasyBase));
export { GetaddressmatchResponse };
