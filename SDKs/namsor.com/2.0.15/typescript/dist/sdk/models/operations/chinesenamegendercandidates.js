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
var ChineseNameGenderCandidatesPathParams = /** @class */ (function (_super) {
    __extends(ChineseNameGenderCandidatesPathParams, _super);
    function ChineseNameGenderCandidatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" }),
        __metadata("design:type", String)
    ], ChineseNameGenderCandidatesPathParams.prototype, "chineseGivenNameLatin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" }),
        __metadata("design:type", String)
    ], ChineseNameGenderCandidatesPathParams.prototype, "chineseSurnameLatin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=knownGender" }),
        __metadata("design:type", String)
    ], ChineseNameGenderCandidatesPathParams.prototype, "knownGender", void 0);
    return ChineseNameGenderCandidatesPathParams;
}(SpeakeasyBase));
export { ChineseNameGenderCandidatesPathParams };
var ChineseNameGenderCandidatesSecurity = /** @class */ (function (_super) {
    __extends(ChineseNameGenderCandidatesSecurity, _super);
    function ChineseNameGenderCandidatesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ChineseNameGenderCandidatesSecurity.prototype, "apiKey", void 0);
    return ChineseNameGenderCandidatesSecurity;
}(SpeakeasyBase));
export { ChineseNameGenderCandidatesSecurity };
var ChineseNameGenderCandidatesRequest = /** @class */ (function (_super) {
    __extends(ChineseNameGenderCandidatesRequest, _super);
    function ChineseNameGenderCandidatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChineseNameGenderCandidatesPathParams)
    ], ChineseNameGenderCandidatesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChineseNameGenderCandidatesSecurity)
    ], ChineseNameGenderCandidatesRequest.prototype, "security", void 0);
    return ChineseNameGenderCandidatesRequest;
}(SpeakeasyBase));
export { ChineseNameGenderCandidatesRequest };
var ChineseNameGenderCandidatesResponse = /** @class */ (function (_super) {
    __extends(ChineseNameGenderCandidatesResponse, _super);
    function ChineseNameGenderCandidatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChineseNameGenderCandidatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NameMatchCandidatesOut)
    ], ChineseNameGenderCandidatesResponse.prototype, "nameMatchCandidatesOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChineseNameGenderCandidatesResponse.prototype, "statusCode", void 0);
    return ChineseNameGenderCandidatesResponse;
}(SpeakeasyBase));
export { ChineseNameGenderCandidatesResponse };
