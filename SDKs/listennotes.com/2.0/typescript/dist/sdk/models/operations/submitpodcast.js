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
var SubmitPodcastHeaders = /** @class */ (function (_super) {
    __extends(SubmitPodcastHeaders, _super);
    function SubmitPodcastHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], SubmitPodcastHeaders.prototype, "xListenApiKey", void 0);
    return SubmitPodcastHeaders;
}(SpeakeasyBase));
export { SubmitPodcastHeaders };
var SubmitPodcastRequest = /** @class */ (function (_super) {
    __extends(SubmitPodcastRequest, _super);
    function SubmitPodcastRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubmitPodcastHeaders)
    ], SubmitPodcastRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.SubmitPodcastForm)
    ], SubmitPodcastRequest.prototype, "request", void 0);
    return SubmitPodcastRequest;
}(SpeakeasyBase));
export { SubmitPodcastRequest };
var SubmitPodcastResponse = /** @class */ (function (_super) {
    __extends(SubmitPodcastResponse, _super);
    function SubmitPodcastResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubmitPodcastResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SubmitPodcastResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubmitPodcastResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubmitPodcastResponse)
    ], SubmitPodcastResponse.prototype, "submitPodcastResponse", void 0);
    return SubmitPodcastResponse;
}(SpeakeasyBase));
export { SubmitPodcastResponse };
