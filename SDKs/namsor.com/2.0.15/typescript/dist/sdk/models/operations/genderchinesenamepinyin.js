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
var GenderChineseNamePinyinPathParams = /** @class */ (function (_super) {
    __extends(GenderChineseNamePinyinPathParams, _super);
    function GenderChineseNamePinyinPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" }),
        __metadata("design:type", String)
    ], GenderChineseNamePinyinPathParams.prototype, "chineseGivenNameLatin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" }),
        __metadata("design:type", String)
    ], GenderChineseNamePinyinPathParams.prototype, "chineseSurnameLatin", void 0);
    return GenderChineseNamePinyinPathParams;
}(SpeakeasyBase));
export { GenderChineseNamePinyinPathParams };
var GenderChineseNamePinyinSecurity = /** @class */ (function (_super) {
    __extends(GenderChineseNamePinyinSecurity, _super);
    function GenderChineseNamePinyinSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GenderChineseNamePinyinSecurity.prototype, "apiKey", void 0);
    return GenderChineseNamePinyinSecurity;
}(SpeakeasyBase));
export { GenderChineseNamePinyinSecurity };
var GenderChineseNamePinyinRequest = /** @class */ (function (_super) {
    __extends(GenderChineseNamePinyinRequest, _super);
    function GenderChineseNamePinyinRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenderChineseNamePinyinPathParams)
    ], GenderChineseNamePinyinRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenderChineseNamePinyinSecurity)
    ], GenderChineseNamePinyinRequest.prototype, "security", void 0);
    return GenderChineseNamePinyinRequest;
}(SpeakeasyBase));
export { GenderChineseNamePinyinRequest };
var GenderChineseNamePinyinResponse = /** @class */ (function (_super) {
    __extends(GenderChineseNamePinyinResponse, _super);
    function GenderChineseNamePinyinResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenderChineseNamePinyinResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirstLastNameGenderedOut)
    ], GenderChineseNamePinyinResponse.prototype, "firstLastNameGenderedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenderChineseNamePinyinResponse.prototype, "statusCode", void 0);
    return GenderChineseNamePinyinResponse;
}(SpeakeasyBase));
export { GenderChineseNamePinyinResponse };
