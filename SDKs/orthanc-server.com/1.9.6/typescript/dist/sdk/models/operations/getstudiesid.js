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
var GetStudiesIdPathParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdPathParams, _super);
    function GetStudiesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudiesIdPathParams.prototype, "id", void 0);
    return GetStudiesIdPathParams;
}(SpeakeasyBase));
export { GetStudiesIdPathParams };
var GetStudiesIdQueryParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdQueryParams, _super);
    function GetStudiesIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" }),
        __metadata("design:type", Boolean)
    ], GetStudiesIdQueryParams.prototype, "full", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetStudiesIdQueryParams.prototype, "short", void 0);
    return GetStudiesIdQueryParams;
}(SpeakeasyBase));
export { GetStudiesIdQueryParams };
var GetStudiesIdRequest = /** @class */ (function (_super) {
    __extends(GetStudiesIdRequest, _super);
    function GetStudiesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStudiesIdPathParams)
    ], GetStudiesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStudiesIdQueryParams)
    ], GetStudiesIdRequest.prototype, "queryParams", void 0);
    return GetStudiesIdRequest;
}(SpeakeasyBase));
export { GetStudiesIdRequest };
var GetStudiesIdResponse = /** @class */ (function (_super) {
    __extends(GetStudiesIdResponse, _super);
    function GetStudiesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStudiesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetStudiesIdResponse.prototype, "getStudiesId200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStudiesIdResponse.prototype, "statusCode", void 0);
    return GetStudiesIdResponse;
}(SpeakeasyBase));
export { GetStudiesIdResponse };
