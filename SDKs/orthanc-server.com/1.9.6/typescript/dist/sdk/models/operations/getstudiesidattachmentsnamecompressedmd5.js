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
var GetStudiesIdAttachmentsNameCompressedMd5PathParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameCompressedMd5PathParams, _super);
    function GetStudiesIdAttachmentsNameCompressedMd5PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameCompressedMd5PathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameCompressedMd5PathParams.prototype, "name", void 0);
    return GetStudiesIdAttachmentsNameCompressedMd5PathParams;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameCompressedMd5PathParams };
var GetStudiesIdAttachmentsNameCompressedMd5Headers = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameCompressedMd5Headers, _super);
    function GetStudiesIdAttachmentsNameCompressedMd5Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameCompressedMd5Headers.prototype, "ifNoneMatch", void 0);
    return GetStudiesIdAttachmentsNameCompressedMd5Headers;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameCompressedMd5Headers };
var GetStudiesIdAttachmentsNameCompressedMd5Request = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameCompressedMd5Request, _super);
    function GetStudiesIdAttachmentsNameCompressedMd5Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStudiesIdAttachmentsNameCompressedMd5PathParams)
    ], GetStudiesIdAttachmentsNameCompressedMd5Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStudiesIdAttachmentsNameCompressedMd5Headers)
    ], GetStudiesIdAttachmentsNameCompressedMd5Request.prototype, "headers", void 0);
    return GetStudiesIdAttachmentsNameCompressedMd5Request;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameCompressedMd5Request };
var GetStudiesIdAttachmentsNameCompressedMd5Response = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameCompressedMd5Response, _super);
    function GetStudiesIdAttachmentsNameCompressedMd5Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetStudiesIdAttachmentsNameCompressedMd5Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameCompressedMd5Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetStudiesIdAttachmentsNameCompressedMd5Response.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStudiesIdAttachmentsNameCompressedMd5Response.prototype, "statusCode", void 0);
    return GetStudiesIdAttachmentsNameCompressedMd5Response;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameCompressedMd5Response };
