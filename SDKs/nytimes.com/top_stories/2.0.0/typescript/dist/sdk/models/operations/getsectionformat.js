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
export var GetSectionFormatFormatEnum;
(function (GetSectionFormatFormatEnum) {
    GetSectionFormatFormatEnum["Json"] = "json";
    GetSectionFormatFormatEnum["Jsonp"] = "jsonp";
})(GetSectionFormatFormatEnum || (GetSectionFormatFormatEnum = {}));
export var GetSectionFormatSectionEnum;
(function (GetSectionFormatSectionEnum) {
    GetSectionFormatSectionEnum["Home"] = "home";
    GetSectionFormatSectionEnum["Opinion"] = "opinion";
    GetSectionFormatSectionEnum["World"] = "world";
    GetSectionFormatSectionEnum["National"] = "national";
    GetSectionFormatSectionEnum["Politics"] = "politics";
    GetSectionFormatSectionEnum["Upshot"] = "upshot";
    GetSectionFormatSectionEnum["Nyregion"] = "nyregion";
    GetSectionFormatSectionEnum["Business"] = "business";
    GetSectionFormatSectionEnum["Technology"] = "technology";
    GetSectionFormatSectionEnum["Science"] = "science";
    GetSectionFormatSectionEnum["Health"] = "health";
    GetSectionFormatSectionEnum["Sports"] = "sports";
    GetSectionFormatSectionEnum["Arts"] = "arts";
    GetSectionFormatSectionEnum["Books"] = "books";
    GetSectionFormatSectionEnum["Movies"] = "movies";
    GetSectionFormatSectionEnum["Theater"] = "theater";
    GetSectionFormatSectionEnum["Sundayreview"] = "sundayreview";
    GetSectionFormatSectionEnum["Fashion"] = "fashion";
    GetSectionFormatSectionEnum["Tmagazine"] = "tmagazine";
    GetSectionFormatSectionEnum["Food"] = "food";
    GetSectionFormatSectionEnum["Travel"] = "travel";
    GetSectionFormatSectionEnum["Magazine"] = "magazine";
    GetSectionFormatSectionEnum["Realestate"] = "realestate";
    GetSectionFormatSectionEnum["Automobiles"] = "automobiles";
    GetSectionFormatSectionEnum["Obituaries"] = "obituaries";
    GetSectionFormatSectionEnum["Insider"] = "insider";
})(GetSectionFormatSectionEnum || (GetSectionFormatSectionEnum = {}));
var GetSectionFormatPathParams = /** @class */ (function (_super) {
    __extends(GetSectionFormatPathParams, _super);
    function GetSectionFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetSectionFormatPathParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=section" }),
        __metadata("design:type", String)
    ], GetSectionFormatPathParams.prototype, "section", void 0);
    return GetSectionFormatPathParams;
}(SpeakeasyBase));
export { GetSectionFormatPathParams };
var GetSectionFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetSectionFormatQueryParams, _super);
    function GetSectionFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetSectionFormatQueryParams.prototype, "callback", void 0);
    return GetSectionFormatQueryParams;
}(SpeakeasyBase));
export { GetSectionFormatQueryParams };
var GetSectionFormatRequest = /** @class */ (function (_super) {
    __extends(GetSectionFormatRequest, _super);
    function GetSectionFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSectionFormatPathParams)
    ], GetSectionFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSectionFormatQueryParams)
    ], GetSectionFormatRequest.prototype, "queryParams", void 0);
    return GetSectionFormatRequest;
}(SpeakeasyBase));
export { GetSectionFormatRequest };
var GetSectionFormat200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSectionFormat200ApplicationJson, _super);
    function GetSectionFormat200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.Article }),
        __metadata("design:type", Array)
    ], GetSectionFormat200ApplicationJson.prototype, "results", void 0);
    return GetSectionFormat200ApplicationJson;
}(SpeakeasyBase));
export { GetSectionFormat200ApplicationJson };
var GetSectionFormatResponse = /** @class */ (function (_super) {
    __extends(GetSectionFormatResponse, _super);
    function GetSectionFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSectionFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSectionFormat200ApplicationJson)
    ], GetSectionFormatResponse.prototype, "getSectionFormat200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSectionFormatResponse.prototype, "statusCode", void 0);
    return GetSectionFormatResponse;
}(SpeakeasyBase));
export { GetSectionFormatResponse };
