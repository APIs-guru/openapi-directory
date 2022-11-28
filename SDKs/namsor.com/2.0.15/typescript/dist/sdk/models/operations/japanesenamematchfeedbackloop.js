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
var JapaneseNameMatchFeedbackLoopPathParams = /** @class */ (function (_super) {
    __extends(JapaneseNameMatchFeedbackLoopPathParams, _super);
    function JapaneseNameMatchFeedbackLoopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" }),
        __metadata("design:type", String)
    ], JapaneseNameMatchFeedbackLoopPathParams.prototype, "japaneseGivenNameLatin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseName" }),
        __metadata("design:type", String)
    ], JapaneseNameMatchFeedbackLoopPathParams.prototype, "japaneseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" }),
        __metadata("design:type", String)
    ], JapaneseNameMatchFeedbackLoopPathParams.prototype, "japaneseSurnameLatin", void 0);
    return JapaneseNameMatchFeedbackLoopPathParams;
}(SpeakeasyBase));
export { JapaneseNameMatchFeedbackLoopPathParams };
var JapaneseNameMatchFeedbackLoopSecurity = /** @class */ (function (_super) {
    __extends(JapaneseNameMatchFeedbackLoopSecurity, _super);
    function JapaneseNameMatchFeedbackLoopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], JapaneseNameMatchFeedbackLoopSecurity.prototype, "apiKey", void 0);
    return JapaneseNameMatchFeedbackLoopSecurity;
}(SpeakeasyBase));
export { JapaneseNameMatchFeedbackLoopSecurity };
var JapaneseNameMatchFeedbackLoopRequest = /** @class */ (function (_super) {
    __extends(JapaneseNameMatchFeedbackLoopRequest, _super);
    function JapaneseNameMatchFeedbackLoopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JapaneseNameMatchFeedbackLoopPathParams)
    ], JapaneseNameMatchFeedbackLoopRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JapaneseNameMatchFeedbackLoopSecurity)
    ], JapaneseNameMatchFeedbackLoopRequest.prototype, "security", void 0);
    return JapaneseNameMatchFeedbackLoopRequest;
}(SpeakeasyBase));
export { JapaneseNameMatchFeedbackLoopRequest };
var JapaneseNameMatchFeedbackLoopResponse = /** @class */ (function (_super) {
    __extends(JapaneseNameMatchFeedbackLoopResponse, _super);
    function JapaneseNameMatchFeedbackLoopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JapaneseNameMatchFeedbackLoopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FeedbackLoopOut)
    ], JapaneseNameMatchFeedbackLoopResponse.prototype, "feedbackLoopOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JapaneseNameMatchFeedbackLoopResponse.prototype, "statusCode", void 0);
    return JapaneseNameMatchFeedbackLoopResponse;
}(SpeakeasyBase));
export { JapaneseNameMatchFeedbackLoopResponse };
