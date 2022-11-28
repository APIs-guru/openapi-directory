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
var JapaneseNameLatinCandidatesPathParams = /** @class */ (function (_super) {
    __extends(JapaneseNameLatinCandidatesPathParams, _super);
    function JapaneseNameLatinCandidatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameKanji" }),
        __metadata("design:type", String)
    ], JapaneseNameLatinCandidatesPathParams.prototype, "japaneseGivenNameKanji", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameKanji" }),
        __metadata("design:type", String)
    ], JapaneseNameLatinCandidatesPathParams.prototype, "japaneseSurnameKanji", void 0);
    return JapaneseNameLatinCandidatesPathParams;
}(SpeakeasyBase));
export { JapaneseNameLatinCandidatesPathParams };
var JapaneseNameLatinCandidatesSecurity = /** @class */ (function (_super) {
    __extends(JapaneseNameLatinCandidatesSecurity, _super);
    function JapaneseNameLatinCandidatesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], JapaneseNameLatinCandidatesSecurity.prototype, "apiKey", void 0);
    return JapaneseNameLatinCandidatesSecurity;
}(SpeakeasyBase));
export { JapaneseNameLatinCandidatesSecurity };
var JapaneseNameLatinCandidatesRequest = /** @class */ (function (_super) {
    __extends(JapaneseNameLatinCandidatesRequest, _super);
    function JapaneseNameLatinCandidatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JapaneseNameLatinCandidatesPathParams)
    ], JapaneseNameLatinCandidatesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JapaneseNameLatinCandidatesSecurity)
    ], JapaneseNameLatinCandidatesRequest.prototype, "security", void 0);
    return JapaneseNameLatinCandidatesRequest;
}(SpeakeasyBase));
export { JapaneseNameLatinCandidatesRequest };
var JapaneseNameLatinCandidatesResponse = /** @class */ (function (_super) {
    __extends(JapaneseNameLatinCandidatesResponse, _super);
    function JapaneseNameLatinCandidatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JapaneseNameLatinCandidatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NameMatchCandidatesOut)
    ], JapaneseNameLatinCandidatesResponse.prototype, "nameMatchCandidatesOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JapaneseNameLatinCandidatesResponse.prototype, "statusCode", void 0);
    return JapaneseNameLatinCandidatesResponse;
}(SpeakeasyBase));
export { JapaneseNameLatinCandidatesResponse };
