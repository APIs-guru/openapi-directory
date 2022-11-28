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
var JapaneseNameKanjiCandidatesPathParams = /** @class */ (function (_super) {
    __extends(JapaneseNameKanjiCandidatesPathParams, _super);
    function JapaneseNameKanjiCandidatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" }),
        __metadata("design:type", String)
    ], JapaneseNameKanjiCandidatesPathParams.prototype, "japaneseGivenNameLatin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" }),
        __metadata("design:type", String)
    ], JapaneseNameKanjiCandidatesPathParams.prototype, "japaneseSurnameLatin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=knownGender" }),
        __metadata("design:type", String)
    ], JapaneseNameKanjiCandidatesPathParams.prototype, "knownGender", void 0);
    return JapaneseNameKanjiCandidatesPathParams;
}(SpeakeasyBase));
export { JapaneseNameKanjiCandidatesPathParams };
var JapaneseNameKanjiCandidatesSecurity = /** @class */ (function (_super) {
    __extends(JapaneseNameKanjiCandidatesSecurity, _super);
    function JapaneseNameKanjiCandidatesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], JapaneseNameKanjiCandidatesSecurity.prototype, "apiKey", void 0);
    return JapaneseNameKanjiCandidatesSecurity;
}(SpeakeasyBase));
export { JapaneseNameKanjiCandidatesSecurity };
var JapaneseNameKanjiCandidatesRequest = /** @class */ (function (_super) {
    __extends(JapaneseNameKanjiCandidatesRequest, _super);
    function JapaneseNameKanjiCandidatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JapaneseNameKanjiCandidatesPathParams)
    ], JapaneseNameKanjiCandidatesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JapaneseNameKanjiCandidatesSecurity)
    ], JapaneseNameKanjiCandidatesRequest.prototype, "security", void 0);
    return JapaneseNameKanjiCandidatesRequest;
}(SpeakeasyBase));
export { JapaneseNameKanjiCandidatesRequest };
var JapaneseNameKanjiCandidatesResponse = /** @class */ (function (_super) {
    __extends(JapaneseNameKanjiCandidatesResponse, _super);
    function JapaneseNameKanjiCandidatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JapaneseNameKanjiCandidatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NameMatchCandidatesOut)
    ], JapaneseNameKanjiCandidatesResponse.prototype, "nameMatchCandidatesOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JapaneseNameKanjiCandidatesResponse.prototype, "statusCode", void 0);
    return JapaneseNameKanjiCandidatesResponse;
}(SpeakeasyBase));
export { JapaneseNameKanjiCandidatesResponse };
