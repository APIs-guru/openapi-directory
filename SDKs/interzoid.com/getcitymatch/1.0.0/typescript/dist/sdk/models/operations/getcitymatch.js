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
var GetcitymatchQueryParams = /** @class */ (function (_super) {
    __extends(GetcitymatchQueryParams, _super);
    function GetcitymatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetcitymatchQueryParams.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetcitymatchQueryParams.prototype, "license", void 0);
    return GetcitymatchQueryParams;
}(SpeakeasyBase));
export { GetcitymatchQueryParams };
var GetcitymatchRequest = /** @class */ (function (_super) {
    __extends(GetcitymatchRequest, _super);
    function GetcitymatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetcitymatchQueryParams)
    ], GetcitymatchRequest.prototype, "queryParams", void 0);
    return GetcitymatchRequest;
}(SpeakeasyBase));
export { GetcitymatchRequest };
var Getcitymatch200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getcitymatch200ApplicationJson, _super);
    function Getcitymatch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getcitymatch200ApplicationJson.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getcitymatch200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        Metadata({ data: "json, name=Simkey" }),
        __metadata("design:type", String)
    ], Getcitymatch200ApplicationJson.prototype, "simkey", void 0);
    return Getcitymatch200ApplicationJson;
}(SpeakeasyBase));
export { Getcitymatch200ApplicationJson };
var GetcitymatchResponse = /** @class */ (function (_super) {
    __extends(GetcitymatchResponse, _super);
    function GetcitymatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetcitymatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetcitymatchResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Getcitymatch200ApplicationJson)
    ], GetcitymatchResponse.prototype, "getcitymatch200ApplicationJsonObject", void 0);
    return GetcitymatchResponse;
}(SpeakeasyBase));
export { GetcitymatchResponse };
