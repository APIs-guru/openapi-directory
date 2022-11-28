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
var GetcitystandardQueryParams = /** @class */ (function (_super) {
    __extends(GetcitystandardQueryParams, _super);
    function GetcitystandardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetcitystandardQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetcitystandardQueryParams.prototype, "license", void 0);
    return GetcitystandardQueryParams;
}(SpeakeasyBase));
export { GetcitystandardQueryParams };
var Getcitystandard200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getcitystandard200ApplicationJson, _super);
    function Getcitystandard200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CityStandard" }),
        __metadata("design:type", String)
    ], Getcitystandard200ApplicationJson.prototype, "cityStandard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getcitystandard200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getcitystandard200ApplicationJson.prototype, "credits", void 0);
    return Getcitystandard200ApplicationJson;
}(SpeakeasyBase));
export { Getcitystandard200ApplicationJson };
var GetcitystandardRequest = /** @class */ (function (_super) {
    __extends(GetcitystandardRequest, _super);
    function GetcitystandardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetcitystandardQueryParams)
    ], GetcitystandardRequest.prototype, "queryParams", void 0);
    return GetcitystandardRequest;
}(SpeakeasyBase));
export { GetcitystandardRequest };
var GetcitystandardResponse = /** @class */ (function (_super) {
    __extends(GetcitystandardResponse, _super);
    function GetcitystandardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetcitystandardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetcitystandardResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Getcitystandard200ApplicationJson)
    ], GetcitystandardResponse.prototype, "getcitystandard200ApplicationJsonObject", void 0);
    return GetcitystandardResponse;
}(SpeakeasyBase));
export { GetcitystandardResponse };
