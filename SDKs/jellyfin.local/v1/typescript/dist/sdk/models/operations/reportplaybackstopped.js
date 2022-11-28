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
var ReportPlaybackStoppedRequestsInput = /** @class */ (function (_super) {
    __extends(ReportPlaybackStoppedRequestsInput, _super);
    function ReportPlaybackStoppedRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PlaybackStopInfoInput)
    ], ReportPlaybackStoppedRequestsInput.prototype, "playbackStopInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlaybackStopInfoInput)
    ], ReportPlaybackStoppedRequestsInput.prototype, "playbackStopInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PlaybackStopInfoInput)
    ], ReportPlaybackStoppedRequestsInput.prototype, "playbackStopInfo2", void 0);
    return ReportPlaybackStoppedRequestsInput;
}(SpeakeasyBase));
export { ReportPlaybackStoppedRequestsInput };
var ReportPlaybackStoppedSecurity = /** @class */ (function (_super) {
    __extends(ReportPlaybackStoppedSecurity, _super);
    function ReportPlaybackStoppedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], ReportPlaybackStoppedSecurity.prototype, "customAuthentication", void 0);
    return ReportPlaybackStoppedSecurity;
}(SpeakeasyBase));
export { ReportPlaybackStoppedSecurity };
var ReportPlaybackStoppedRequest = /** @class */ (function (_super) {
    __extends(ReportPlaybackStoppedRequest, _super);
    function ReportPlaybackStoppedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportPlaybackStoppedRequestsInput)
    ], ReportPlaybackStoppedRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportPlaybackStoppedSecurity)
    ], ReportPlaybackStoppedRequest.prototype, "security", void 0);
    return ReportPlaybackStoppedRequest;
}(SpeakeasyBase));
export { ReportPlaybackStoppedRequest };
var ReportPlaybackStoppedResponse = /** @class */ (function (_super) {
    __extends(ReportPlaybackStoppedResponse, _super);
    function ReportPlaybackStoppedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportPlaybackStoppedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportPlaybackStoppedResponse.prototype, "statusCode", void 0);
    return ReportPlaybackStoppedResponse;
}(SpeakeasyBase));
export { ReportPlaybackStoppedResponse };
