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
var GetAddWordQueryParams = /** @class */ (function (_super) {
    __extends(GetAddWordQueryParams, _super);
    function GetAddWordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=author" }),
        __metadata("design:type", String)
    ], GetAddWordQueryParams.prototype, "author", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=definition" }),
        __metadata("design:type", String)
    ], GetAddWordQueryParams.prototype, "definition", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=related" }),
        __metadata("design:type", String)
    ], GetAddWordQueryParams.prototype, "related", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=word" }),
        __metadata("design:type", String)
    ], GetAddWordQueryParams.prototype, "word", void 0);
    return GetAddWordQueryParams;
}(SpeakeasyBase));
export { GetAddWordQueryParams };
var GetAddWordRequest = /** @class */ (function (_super) {
    __extends(GetAddWordRequest, _super);
    function GetAddWordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAddWordQueryParams)
    ], GetAddWordRequest.prototype, "queryParams", void 0);
    return GetAddWordRequest;
}(SpeakeasyBase));
export { GetAddWordRequest };
var GetAddWordResponse = /** @class */ (function (_super) {
    __extends(GetAddWordResponse, _super);
    function GetAddWordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAddWordResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAddWordResponse.prototype, "statusCode", void 0);
    return GetAddWordResponse;
}(SpeakeasyBase));
export { GetAddWordResponse };
