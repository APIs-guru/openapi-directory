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
var GenderJapaneseNamePinyinPathParams = /** @class */ (function (_super) {
    __extends(GenderJapaneseNamePinyinPathParams, _super);
    function GenderJapaneseNamePinyinPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenName" }),
        __metadata("design:type", String)
    ], GenderJapaneseNamePinyinPathParams.prototype, "japaneseGivenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurname" }),
        __metadata("design:type", String)
    ], GenderJapaneseNamePinyinPathParams.prototype, "japaneseSurname", void 0);
    return GenderJapaneseNamePinyinPathParams;
}(SpeakeasyBase));
export { GenderJapaneseNamePinyinPathParams };
var GenderJapaneseNamePinyinSecurity = /** @class */ (function (_super) {
    __extends(GenderJapaneseNamePinyinSecurity, _super);
    function GenderJapaneseNamePinyinSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GenderJapaneseNamePinyinSecurity.prototype, "apiKey", void 0);
    return GenderJapaneseNamePinyinSecurity;
}(SpeakeasyBase));
export { GenderJapaneseNamePinyinSecurity };
var GenderJapaneseNamePinyinRequest = /** @class */ (function (_super) {
    __extends(GenderJapaneseNamePinyinRequest, _super);
    function GenderJapaneseNamePinyinRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenderJapaneseNamePinyinPathParams)
    ], GenderJapaneseNamePinyinRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenderJapaneseNamePinyinSecurity)
    ], GenderJapaneseNamePinyinRequest.prototype, "security", void 0);
    return GenderJapaneseNamePinyinRequest;
}(SpeakeasyBase));
export { GenderJapaneseNamePinyinRequest };
var GenderJapaneseNamePinyinResponse = /** @class */ (function (_super) {
    __extends(GenderJapaneseNamePinyinResponse, _super);
    function GenderJapaneseNamePinyinResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenderJapaneseNamePinyinResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirstLastNameGenderedOut)
    ], GenderJapaneseNamePinyinResponse.prototype, "firstLastNameGenderedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenderJapaneseNamePinyinResponse.prototype, "statusCode", void 0);
    return GenderJapaneseNamePinyinResponse;
}(SpeakeasyBase));
export { GenderJapaneseNamePinyinResponse };
