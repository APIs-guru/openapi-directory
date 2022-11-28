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
var GetBelegePathParams = /** @class */ (function (_super) {
    __extends(GetBelegePathParams, _super);
    function GetBelegePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" }),
        __metadata("design:type", String)
    ], GetBelegePathParams.prototype, "registrierkasseUuid", void 0);
    return GetBelegePathParams;
}(SpeakeasyBase));
export { GetBelegePathParams };
export var GetBelegeFormatEnum;
(function (GetBelegeFormatEnum) {
    GetBelegeFormatEnum["Export"] = "export";
    GetBelegeFormatEnum["Beleg"] = "beleg";
    GetBelegeFormatEnum["Uuidlist"] = "uuidlist";
})(GetBelegeFormatEnum || (GetBelegeFormatEnum = {}));
export var GetBelegeOrderEnum;
(function (GetBelegeOrderEnum) {
    GetBelegeOrderEnum["Asc"] = "asc";
    GetBelegeOrderEnum["Desc"] = "desc";
})(GetBelegeOrderEnum || (GetBelegeOrderEnum = {}));
var GetBelegeQueryParams = /** @class */ (function (_super) {
    __extends(GetBelegeQueryParams, _super);
    function GetBelegeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetBelegeQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetBelegeQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetBelegeQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gte" }),
        __metadata("design:type", Number)
    ], GetBelegeQueryParams.prototype, "gte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetBelegeQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lte" }),
        __metadata("design:type", Number)
    ], GetBelegeQueryParams.prototype, "lte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetBelegeQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetBelegeQueryParams.prototype, "order", void 0);
    return GetBelegeQueryParams;
}(SpeakeasyBase));
export { GetBelegeQueryParams };
var GetBelegeRequest = /** @class */ (function (_super) {
    __extends(GetBelegeRequest, _super);
    function GetBelegeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBelegePathParams)
    ], GetBelegeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBelegeQueryParams)
    ], GetBelegeRequest.prototype, "queryParams", void 0);
    return GetBelegeRequest;
}(SpeakeasyBase));
export { GetBelegeRequest };
var GetBelegeResponse = /** @class */ (function (_super) {
    __extends(GetBelegeResponse, _super);
    function GetBelegeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Belege)
    ], GetBelegeResponse.prototype, "belege", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBelegeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBelegeResponse.prototype, "statusCode", void 0);
    return GetBelegeResponse;
}(SpeakeasyBase));
export { GetBelegeResponse };
