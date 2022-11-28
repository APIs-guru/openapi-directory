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
var GetareacodefromnumberQueryParams = /** @class */ (function (_super) {
    __extends(GetareacodefromnumberQueryParams, _super);
    function GetareacodefromnumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetareacodefromnumberQueryParams.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", String)
    ], GetareacodefromnumberQueryParams.prototype, "number", void 0);
    return GetareacodefromnumberQueryParams;
}(SpeakeasyBase));
export { GetareacodefromnumberQueryParams };
var Getareacodefromnumber200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getareacodefromnumber200ApplicationJson, _super);
    function Getareacodefromnumber200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Abbreviation" }),
        __metadata("design:type", String)
    ], Getareacodefromnumber200ApplicationJson.prototype, "abbreviation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AreaCode" }),
        __metadata("design:type", String)
    ], Getareacodefromnumber200ApplicationJson.prototype, "areaCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getareacodefromnumber200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getareacodefromnumber200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Locale" }),
        __metadata("design:type", String)
    ], Getareacodefromnumber200ApplicationJson.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryCity" }),
        __metadata("design:type", String)
    ], Getareacodefromnumber200ApplicationJson.prototype, "primaryCity", void 0);
    return Getareacodefromnumber200ApplicationJson;
}(SpeakeasyBase));
export { Getareacodefromnumber200ApplicationJson };
var GetareacodefromnumberRequest = /** @class */ (function (_super) {
    __extends(GetareacodefromnumberRequest, _super);
    function GetareacodefromnumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetareacodefromnumberQueryParams)
    ], GetareacodefromnumberRequest.prototype, "queryParams", void 0);
    return GetareacodefromnumberRequest;
}(SpeakeasyBase));
export { GetareacodefromnumberRequest };
var GetareacodefromnumberResponse = /** @class */ (function (_super) {
    __extends(GetareacodefromnumberResponse, _super);
    function GetareacodefromnumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetareacodefromnumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetareacodefromnumberResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Getareacodefromnumber200ApplicationJson)
    ], GetareacodefromnumberResponse.prototype, "getareacodefromnumber200ApplicationJsonObject", void 0);
    return GetareacodefromnumberResponse;
}(SpeakeasyBase));
export { GetareacodefromnumberResponse };
