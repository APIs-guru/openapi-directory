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
var ChineseNameMatchPathParams = /** @class */ (function (_super) {
    __extends(ChineseNameMatchPathParams, _super);
    function ChineseNameMatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" }),
        __metadata("design:type", String)
    ], ChineseNameMatchPathParams.prototype, "chineseGivenNameLatin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseName" }),
        __metadata("design:type", String)
    ], ChineseNameMatchPathParams.prototype, "chineseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" }),
        __metadata("design:type", String)
    ], ChineseNameMatchPathParams.prototype, "chineseSurnameLatin", void 0);
    return ChineseNameMatchPathParams;
}(SpeakeasyBase));
export { ChineseNameMatchPathParams };
var ChineseNameMatchSecurity = /** @class */ (function (_super) {
    __extends(ChineseNameMatchSecurity, _super);
    function ChineseNameMatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ChineseNameMatchSecurity.prototype, "apiKey", void 0);
    return ChineseNameMatchSecurity;
}(SpeakeasyBase));
export { ChineseNameMatchSecurity };
var ChineseNameMatchRequest = /** @class */ (function (_super) {
    __extends(ChineseNameMatchRequest, _super);
    function ChineseNameMatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChineseNameMatchPathParams)
    ], ChineseNameMatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChineseNameMatchSecurity)
    ], ChineseNameMatchRequest.prototype, "security", void 0);
    return ChineseNameMatchRequest;
}(SpeakeasyBase));
export { ChineseNameMatchRequest };
var ChineseNameMatchResponse = /** @class */ (function (_super) {
    __extends(ChineseNameMatchResponse, _super);
    function ChineseNameMatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChineseNameMatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NameMatchedOut)
    ], ChineseNameMatchResponse.prototype, "nameMatchedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChineseNameMatchResponse.prototype, "statusCode", void 0);
    return ChineseNameMatchResponse;
}(SpeakeasyBase));
export { ChineseNameMatchResponse };
