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
var PostForecastRerunHeaders = /** @class */ (function (_super) {
    __extends(PostForecastRerunHeaders, _super);
    function PostForecastRerunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], PostForecastRerunHeaders.prototype, "token", void 0);
    return PostForecastRerunHeaders;
}(SpeakeasyBase));
export { PostForecastRerunHeaders };
var PostForecastRerunRequests = /** @class */ (function (_super) {
    __extends(PostForecastRerunRequests, _super);
    function PostForecastRerunRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PlanningLevelReRunRequest)
    ], PostForecastRerunRequests.prototype, "planningLevelReRunRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlanningLevelReRunRequest)
    ], PostForecastRerunRequests.prototype, "planningLevelReRunRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PlanningLevelReRunRequest)
    ], PostForecastRerunRequests.prototype, "planningLevelReRunRequest2", void 0);
    return PostForecastRerunRequests;
}(SpeakeasyBase));
export { PostForecastRerunRequests };
var PostForecastRerunRequest = /** @class */ (function (_super) {
    __extends(PostForecastRerunRequest, _super);
    function PostForecastRerunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostForecastRerunHeaders)
    ], PostForecastRerunRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostForecastRerunRequests)
    ], PostForecastRerunRequest.prototype, "request", void 0);
    return PostForecastRerunRequest;
}(SpeakeasyBase));
export { PostForecastRerunRequest };
var PostForecastRerunResponse = /** @class */ (function (_super) {
    __extends(PostForecastRerunResponse, _super);
    function PostForecastRerunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostForecastRerunResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostForecastRerunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ForecastResponse)
    ], PostForecastRerunResponse.prototype, "forecastResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostForecastRerunResponse.prototype, "statusCode", void 0);
    return PostForecastRerunResponse;
}(SpeakeasyBase));
export { PostForecastRerunResponse };
