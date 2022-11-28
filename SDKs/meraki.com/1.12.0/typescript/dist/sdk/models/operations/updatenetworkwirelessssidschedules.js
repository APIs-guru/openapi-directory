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
var UpdateNetworkWirelessSsidSchedulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSchedulesPathParams, _super);
    function UpdateNetworkWirelessSsidSchedulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSchedulesPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSchedulesPathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidSchedulesPathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSchedulesPathParams };
var UpdateNetworkWirelessSsidSchedulesRequestBodyRanges = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSchedulesRequestBodyRanges, _super);
    function UpdateNetworkWirelessSsidSchedulesRequestBodyRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDay" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSchedulesRequestBodyRanges.prototype, "endDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSchedulesRequestBodyRanges.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDay" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSchedulesRequestBodyRanges.prototype, "startDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSchedulesRequestBodyRanges.prototype, "startTime", void 0);
    return UpdateNetworkWirelessSsidSchedulesRequestBodyRanges;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSchedulesRequestBodyRanges };
var UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds, _super);
    function UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds.prototype, "start", void 0);
    return UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds };
var UpdateNetworkWirelessSsidSchedulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSchedulesRequestBody, _super);
    function UpdateNetworkWirelessSsidSchedulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidSchedulesRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ranges", elemType: UpdateNetworkWirelessSsidSchedulesRequestBodyRanges }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidSchedulesRequestBody.prototype, "ranges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rangesInSeconds", elemType: UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidSchedulesRequestBody.prototype, "rangesInSeconds", void 0);
    return UpdateNetworkWirelessSsidSchedulesRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSchedulesRequestBody };
var UpdateNetworkWirelessSsidSchedulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSchedulesRequest, _super);
    function UpdateNetworkWirelessSsidSchedulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessSsidSchedulesPathParams)
    ], UpdateNetworkWirelessSsidSchedulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSchedulesRequestBody)
    ], UpdateNetworkWirelessSsidSchedulesRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidSchedulesRequest;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSchedulesRequest };
var UpdateNetworkWirelessSsidSchedulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSchedulesResponse, _super);
    function UpdateNetworkWirelessSsidSchedulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSchedulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidSchedulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessSsidSchedulesResponse.prototype, "updateNetworkWirelessSsidSchedules200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessSsidSchedulesResponse;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSchedulesResponse };
