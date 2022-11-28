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
var GetGenresQueryParams = /** @class */ (function (_super) {
    __extends(GetGenresQueryParams, _super);
    function GetGenresQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top_level_only" }),
        __metadata("design:type", Number)
    ], GetGenresQueryParams.prototype, "topLevelOnly", void 0);
    return GetGenresQueryParams;
}(SpeakeasyBase));
export { GetGenresQueryParams };
var GetGenresHeaders = /** @class */ (function (_super) {
    __extends(GetGenresHeaders, _super);
    function GetGenresHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], GetGenresHeaders.prototype, "xListenApiKey", void 0);
    return GetGenresHeaders;
}(SpeakeasyBase));
export { GetGenresHeaders };
var GetGenresRequest = /** @class */ (function (_super) {
    __extends(GetGenresRequest, _super);
    function GetGenresRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGenresQueryParams)
    ], GetGenresRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGenresHeaders)
    ], GetGenresRequest.prototype, "headers", void 0);
    return GetGenresRequest;
}(SpeakeasyBase));
export { GetGenresRequest };
var GetGenresResponse = /** @class */ (function (_super) {
    __extends(GetGenresResponse, _super);
    function GetGenresResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGenresResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetGenresResponse)
    ], GetGenresResponse.prototype, "getGenresResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetGenresResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGenresResponse.prototype, "statusCode", void 0);
    return GetGenresResponse;
}(SpeakeasyBase));
export { GetGenresResponse };
