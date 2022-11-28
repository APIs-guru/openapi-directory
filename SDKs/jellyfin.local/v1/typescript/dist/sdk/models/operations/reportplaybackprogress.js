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
var ReportPlaybackProgressRequestsInput = /** @class */ (function (_super) {
    __extends(ReportPlaybackProgressRequestsInput, _super);
    function ReportPlaybackProgressRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PlaybackProgressInfoInput)
    ], ReportPlaybackProgressRequestsInput.prototype, "playbackProgressInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlaybackProgressInfoInput)
    ], ReportPlaybackProgressRequestsInput.prototype, "playbackProgressInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PlaybackProgressInfoInput)
    ], ReportPlaybackProgressRequestsInput.prototype, "playbackProgressInfo2", void 0);
    return ReportPlaybackProgressRequestsInput;
}(SpeakeasyBase));
export { ReportPlaybackProgressRequestsInput };
var ReportPlaybackProgressSecurity = /** @class */ (function (_super) {
    __extends(ReportPlaybackProgressSecurity, _super);
    function ReportPlaybackProgressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], ReportPlaybackProgressSecurity.prototype, "customAuthentication", void 0);
    return ReportPlaybackProgressSecurity;
}(SpeakeasyBase));
export { ReportPlaybackProgressSecurity };
var ReportPlaybackProgressRequest = /** @class */ (function (_super) {
    __extends(ReportPlaybackProgressRequest, _super);
    function ReportPlaybackProgressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportPlaybackProgressRequestsInput)
    ], ReportPlaybackProgressRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportPlaybackProgressSecurity)
    ], ReportPlaybackProgressRequest.prototype, "security", void 0);
    return ReportPlaybackProgressRequest;
}(SpeakeasyBase));
export { ReportPlaybackProgressRequest };
var ReportPlaybackProgressResponse = /** @class */ (function (_super) {
    __extends(ReportPlaybackProgressResponse, _super);
    function ReportPlaybackProgressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportPlaybackProgressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportPlaybackProgressResponse.prototype, "statusCode", void 0);
    return ReportPlaybackProgressResponse;
}(SpeakeasyBase));
export { ReportPlaybackProgressResponse };
