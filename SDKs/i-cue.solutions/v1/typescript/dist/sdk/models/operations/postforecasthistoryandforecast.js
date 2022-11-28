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
var PostForecastHistoryAndForecastHeaders = /** @class */ (function (_super) {
    __extends(PostForecastHistoryAndForecastHeaders, _super);
    function PostForecastHistoryAndForecastHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], PostForecastHistoryAndForecastHeaders.prototype, "token", void 0);
    return PostForecastHistoryAndForecastHeaders;
}(SpeakeasyBase));
export { PostForecastHistoryAndForecastHeaders };
var PostForecastHistoryAndForecastRequests = /** @class */ (function (_super) {
    __extends(PostForecastHistoryAndForecastRequests, _super);
    function PostForecastHistoryAndForecastRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PlanningLevelRequest)
    ], PostForecastHistoryAndForecastRequests.prototype, "planningLevelRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlanningLevelRequest)
    ], PostForecastHistoryAndForecastRequests.prototype, "planningLevelRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PlanningLevelRequest)
    ], PostForecastHistoryAndForecastRequests.prototype, "planningLevelRequest2", void 0);
    return PostForecastHistoryAndForecastRequests;
}(SpeakeasyBase));
export { PostForecastHistoryAndForecastRequests };
var PostForecastHistoryAndForecastRequest = /** @class */ (function (_super) {
    __extends(PostForecastHistoryAndForecastRequest, _super);
    function PostForecastHistoryAndForecastRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostForecastHistoryAndForecastHeaders)
    ], PostForecastHistoryAndForecastRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostForecastHistoryAndForecastRequests)
    ], PostForecastHistoryAndForecastRequest.prototype, "request", void 0);
    return PostForecastHistoryAndForecastRequest;
}(SpeakeasyBase));
export { PostForecastHistoryAndForecastRequest };
var PostForecastHistoryAndForecastResponse = /** @class */ (function (_super) {
    __extends(PostForecastHistoryAndForecastResponse, _super);
    function PostForecastHistoryAndForecastResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostForecastHistoryAndForecastResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostForecastHistoryAndForecastResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HistoryAndForecastResponse)
    ], PostForecastHistoryAndForecastResponse.prototype, "historyAndForecastResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostForecastHistoryAndForecastResponse.prototype, "statusCode", void 0);
    return PostForecastHistoryAndForecastResponse;
}(SpeakeasyBase));
export { PostForecastHistoryAndForecastResponse };
