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
var GetEpisodesInBatchHeaders = /** @class */ (function (_super) {
    __extends(GetEpisodesInBatchHeaders, _super);
    function GetEpisodesInBatchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], GetEpisodesInBatchHeaders.prototype, "xListenApiKey", void 0);
    return GetEpisodesInBatchHeaders;
}(SpeakeasyBase));
export { GetEpisodesInBatchHeaders };
var GetEpisodesInBatchRequest = /** @class */ (function (_super) {
    __extends(GetEpisodesInBatchRequest, _super);
    function GetEpisodesInBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEpisodesInBatchHeaders)
    ], GetEpisodesInBatchRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.GetEpisodesInBatchForm)
    ], GetEpisodesInBatchRequest.prototype, "request", void 0);
    return GetEpisodesInBatchRequest;
}(SpeakeasyBase));
export { GetEpisodesInBatchRequest };
var GetEpisodesInBatchResponse = /** @class */ (function (_super) {
    __extends(GetEpisodesInBatchResponse, _super);
    function GetEpisodesInBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEpisodesInBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetEpisodesInBatchResponse)
    ], GetEpisodesInBatchResponse.prototype, "getEpisodesInBatchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEpisodesInBatchResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEpisodesInBatchResponse.prototype, "statusCode", void 0);
    return GetEpisodesInBatchResponse;
}(SpeakeasyBase));
export { GetEpisodesInBatchResponse };
