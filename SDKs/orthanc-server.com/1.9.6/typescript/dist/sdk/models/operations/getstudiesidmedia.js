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
var GetStudiesIdMediaPathParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdMediaPathParams, _super);
    function GetStudiesIdMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudiesIdMediaPathParams.prototype, "id", void 0);
    return GetStudiesIdMediaPathParams;
}(SpeakeasyBase));
export { GetStudiesIdMediaPathParams };
var GetStudiesIdMediaQueryParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdMediaQueryParams, _super);
    function GetStudiesIdMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=extended" }),
        __metadata("design:type", String)
    ], GetStudiesIdMediaQueryParams.prototype, "extended", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=transcode" }),
        __metadata("design:type", String)
    ], GetStudiesIdMediaQueryParams.prototype, "transcode", void 0);
    return GetStudiesIdMediaQueryParams;
}(SpeakeasyBase));
export { GetStudiesIdMediaQueryParams };
var GetStudiesIdMediaRequest = /** @class */ (function (_super) {
    __extends(GetStudiesIdMediaRequest, _super);
    function GetStudiesIdMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdMediaPathParams)
    ], GetStudiesIdMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdMediaQueryParams)
    ], GetStudiesIdMediaRequest.prototype, "queryParams", void 0);
    return GetStudiesIdMediaRequest;
}(SpeakeasyBase));
export { GetStudiesIdMediaRequest };
var GetStudiesIdMediaResponse = /** @class */ (function (_super) {
    __extends(GetStudiesIdMediaResponse, _super);
    function GetStudiesIdMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetStudiesIdMediaResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStudiesIdMediaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStudiesIdMediaResponse.prototype, "statusCode", void 0);
    return GetStudiesIdMediaResponse;
}(SpeakeasyBase));
export { GetStudiesIdMediaResponse };
