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
var PinyinChineseNamePathParams = /** @class */ (function (_super) {
    __extends(PinyinChineseNamePathParams, _super);
    function PinyinChineseNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseName" }),
        __metadata("design:type", String)
    ], PinyinChineseNamePathParams.prototype, "chineseName", void 0);
    return PinyinChineseNamePathParams;
}(SpeakeasyBase));
export { PinyinChineseNamePathParams };
var PinyinChineseNameSecurity = /** @class */ (function (_super) {
    __extends(PinyinChineseNameSecurity, _super);
    function PinyinChineseNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PinyinChineseNameSecurity.prototype, "apiKey", void 0);
    return PinyinChineseNameSecurity;
}(SpeakeasyBase));
export { PinyinChineseNameSecurity };
var PinyinChineseNameRequest = /** @class */ (function (_super) {
    __extends(PinyinChineseNameRequest, _super);
    function PinyinChineseNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PinyinChineseNamePathParams)
    ], PinyinChineseNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PinyinChineseNameSecurity)
    ], PinyinChineseNameRequest.prototype, "security", void 0);
    return PinyinChineseNameRequest;
}(SpeakeasyBase));
export { PinyinChineseNameRequest };
var PinyinChineseNameResponse = /** @class */ (function (_super) {
    __extends(PinyinChineseNameResponse, _super);
    function PinyinChineseNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PinyinChineseNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PersonalNameParsedOut)
    ], PinyinChineseNameResponse.prototype, "personalNameParsedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PinyinChineseNameResponse.prototype, "statusCode", void 0);
    return PinyinChineseNameResponse;
}(SpeakeasyBase));
export { PinyinChineseNameResponse };
