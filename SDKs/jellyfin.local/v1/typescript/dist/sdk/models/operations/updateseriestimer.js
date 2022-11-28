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
var UpdateSeriesTimerPathParams = /** @class */ (function (_super) {
    __extends(UpdateSeriesTimerPathParams, _super);
    function UpdateSeriesTimerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timerId" }),
        __metadata("design:type", String)
    ], UpdateSeriesTimerPathParams.prototype, "timerId", void 0);
    return UpdateSeriesTimerPathParams;
}(SpeakeasyBase));
export { UpdateSeriesTimerPathParams };
var UpdateSeriesTimerRequests = /** @class */ (function (_super) {
    __extends(UpdateSeriesTimerRequests, _super);
    function UpdateSeriesTimerRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.SeriesTimerInfoDto)
    ], UpdateSeriesTimerRequests.prototype, "seriesTimerInfoDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SeriesTimerInfoDto)
    ], UpdateSeriesTimerRequests.prototype, "seriesTimerInfoDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.SeriesTimerInfoDto)
    ], UpdateSeriesTimerRequests.prototype, "seriesTimerInfoDto2", void 0);
    return UpdateSeriesTimerRequests;
}(SpeakeasyBase));
export { UpdateSeriesTimerRequests };
var UpdateSeriesTimerSecurity = /** @class */ (function (_super) {
    __extends(UpdateSeriesTimerSecurity, _super);
    function UpdateSeriesTimerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], UpdateSeriesTimerSecurity.prototype, "customAuthentication", void 0);
    return UpdateSeriesTimerSecurity;
}(SpeakeasyBase));
export { UpdateSeriesTimerSecurity };
var UpdateSeriesTimerRequest = /** @class */ (function (_super) {
    __extends(UpdateSeriesTimerRequest, _super);
    function UpdateSeriesTimerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSeriesTimerPathParams)
    ], UpdateSeriesTimerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSeriesTimerRequests)
    ], UpdateSeriesTimerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSeriesTimerSecurity)
    ], UpdateSeriesTimerRequest.prototype, "security", void 0);
    return UpdateSeriesTimerRequest;
}(SpeakeasyBase));
export { UpdateSeriesTimerRequest };
var UpdateSeriesTimerResponse = /** @class */ (function (_super) {
    __extends(UpdateSeriesTimerResponse, _super);
    function UpdateSeriesTimerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSeriesTimerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSeriesTimerResponse.prototype, "statusCode", void 0);
    return UpdateSeriesTimerResponse;
}(SpeakeasyBase));
export { UpdateSeriesTimerResponse };
