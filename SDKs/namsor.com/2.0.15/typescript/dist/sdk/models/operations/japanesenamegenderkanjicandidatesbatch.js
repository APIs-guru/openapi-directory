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
var JapaneseNameGenderKanjiCandidatesBatchSecurity = /** @class */ (function (_super) {
    __extends(JapaneseNameGenderKanjiCandidatesBatchSecurity, _super);
    function JapaneseNameGenderKanjiCandidatesBatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], JapaneseNameGenderKanjiCandidatesBatchSecurity.prototype, "apiKey", void 0);
    return JapaneseNameGenderKanjiCandidatesBatchSecurity;
}(SpeakeasyBase));
export { JapaneseNameGenderKanjiCandidatesBatchSecurity };
var JapaneseNameGenderKanjiCandidatesBatchRequest = /** @class */ (function (_super) {
    __extends(JapaneseNameGenderKanjiCandidatesBatchRequest, _super);
    function JapaneseNameGenderKanjiCandidatesBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchFirstLastNameGenderIn)
    ], JapaneseNameGenderKanjiCandidatesBatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JapaneseNameGenderKanjiCandidatesBatchSecurity)
    ], JapaneseNameGenderKanjiCandidatesBatchRequest.prototype, "security", void 0);
    return JapaneseNameGenderKanjiCandidatesBatchRequest;
}(SpeakeasyBase));
export { JapaneseNameGenderKanjiCandidatesBatchRequest };
var JapaneseNameGenderKanjiCandidatesBatchResponse = /** @class */ (function (_super) {
    __extends(JapaneseNameGenderKanjiCandidatesBatchResponse, _super);
    function JapaneseNameGenderKanjiCandidatesBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchNameMatchCandidatesOut)
    ], JapaneseNameGenderKanjiCandidatesBatchResponse.prototype, "batchNameMatchCandidatesOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JapaneseNameGenderKanjiCandidatesBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JapaneseNameGenderKanjiCandidatesBatchResponse.prototype, "statusCode", void 0);
    return JapaneseNameGenderKanjiCandidatesBatchResponse;
}(SpeakeasyBase));
export { JapaneseNameGenderKanjiCandidatesBatchResponse };
