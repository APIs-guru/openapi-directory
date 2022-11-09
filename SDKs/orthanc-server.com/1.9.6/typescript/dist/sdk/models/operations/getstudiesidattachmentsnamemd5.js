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
var GetStudiesIdAttachmentsNameMd5PathParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameMd5PathParams, _super);
    function GetStudiesIdAttachmentsNameMd5PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameMd5PathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameMd5PathParams.prototype, "name", void 0);
    return GetStudiesIdAttachmentsNameMd5PathParams;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameMd5PathParams };
var GetStudiesIdAttachmentsNameMd5Headers = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameMd5Headers, _super);
    function GetStudiesIdAttachmentsNameMd5Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameMd5Headers.prototype, "ifNoneMatch", void 0);
    return GetStudiesIdAttachmentsNameMd5Headers;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameMd5Headers };
var GetStudiesIdAttachmentsNameMd5Request = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameMd5Request, _super);
    function GetStudiesIdAttachmentsNameMd5Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdAttachmentsNameMd5PathParams)
    ], GetStudiesIdAttachmentsNameMd5Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdAttachmentsNameMd5Headers)
    ], GetStudiesIdAttachmentsNameMd5Request.prototype, "headers", void 0);
    return GetStudiesIdAttachmentsNameMd5Request;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameMd5Request };
var GetStudiesIdAttachmentsNameMd5Response = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameMd5Response, _super);
    function GetStudiesIdAttachmentsNameMd5Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetStudiesIdAttachmentsNameMd5Response.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameMd5Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetStudiesIdAttachmentsNameMd5Response.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStudiesIdAttachmentsNameMd5Response.prototype, "statusCode", void 0);
    return GetStudiesIdAttachmentsNameMd5Response;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameMd5Response };
