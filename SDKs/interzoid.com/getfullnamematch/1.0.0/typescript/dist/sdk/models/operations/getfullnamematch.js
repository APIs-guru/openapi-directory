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
var GetfullnamematchQueryParams = /** @class */ (function (_super) {
    __extends(GetfullnamematchQueryParams, _super);
    function GetfullnamematchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fullname" }),
        __metadata("design:type", String)
    ], GetfullnamematchQueryParams.prototype, "fullname", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetfullnamematchQueryParams.prototype, "license", void 0);
    return GetfullnamematchQueryParams;
}(SpeakeasyBase));
export { GetfullnamematchQueryParams };
var GetfullnamematchRequest = /** @class */ (function (_super) {
    __extends(GetfullnamematchRequest, _super);
    function GetfullnamematchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetfullnamematchQueryParams)
    ], GetfullnamematchRequest.prototype, "queryParams", void 0);
    return GetfullnamematchRequest;
}(SpeakeasyBase));
export { GetfullnamematchRequest };
var Getfullnamematch200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getfullnamematch200ApplicationJson, _super);
    function Getfullnamematch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getfullnamematch200ApplicationJson.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getfullnamematch200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        Metadata({ data: "json, name=Simkey" }),
        __metadata("design:type", String)
    ], Getfullnamematch200ApplicationJson.prototype, "simkey", void 0);
    return Getfullnamematch200ApplicationJson;
}(SpeakeasyBase));
export { Getfullnamematch200ApplicationJson };
var GetfullnamematchResponse = /** @class */ (function (_super) {
    __extends(GetfullnamematchResponse, _super);
    function GetfullnamematchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetfullnamematchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetfullnamematchResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Getfullnamematch200ApplicationJson)
    ], GetfullnamematchResponse.prototype, "getfullnamematch200ApplicationJsonObject", void 0);
    return GetfullnamematchResponse;
}(SpeakeasyBase));
export { GetfullnamematchResponse };
