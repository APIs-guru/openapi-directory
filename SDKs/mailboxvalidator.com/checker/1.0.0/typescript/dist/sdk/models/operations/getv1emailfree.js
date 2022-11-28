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
export var GetV1EmailFreeFormatEnum;
(function (GetV1EmailFreeFormatEnum) {
    GetV1EmailFreeFormatEnum["Json"] = "json";
    GetV1EmailFreeFormatEnum["Xml"] = "xml";
})(GetV1EmailFreeFormatEnum || (GetV1EmailFreeFormatEnum = {}));
var GetV1EmailFreeQueryParams = /** @class */ (function (_super) {
    __extends(GetV1EmailFreeQueryParams, _super);
    function GetV1EmailFreeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetV1EmailFreeQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetV1EmailFreeQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GetV1EmailFreeQueryParams.prototype, "key", void 0);
    return GetV1EmailFreeQueryParams;
}(SpeakeasyBase));
export { GetV1EmailFreeQueryParams };
var GetV1EmailFreeRequest = /** @class */ (function (_super) {
    __extends(GetV1EmailFreeRequest, _super);
    function GetV1EmailFreeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1EmailFreeQueryParams)
    ], GetV1EmailFreeRequest.prototype, "queryParams", void 0);
    return GetV1EmailFreeRequest;
}(SpeakeasyBase));
export { GetV1EmailFreeRequest };
var GetV1EmailFreeResponse = /** @class */ (function (_super) {
    __extends(GetV1EmailFreeResponse, _super);
    function GetV1EmailFreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV1EmailFreeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV1EmailFreeResponse.prototype, "getV1EmailFree200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV1EmailFreeResponse.prototype, "statusCode", void 0);
    return GetV1EmailFreeResponse;
}(SpeakeasyBase));
export { GetV1EmailFreeResponse };
