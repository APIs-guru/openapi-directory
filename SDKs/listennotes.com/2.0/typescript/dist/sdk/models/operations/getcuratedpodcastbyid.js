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
var GetCuratedPodcastByIdPathParams = /** @class */ (function (_super) {
    __extends(GetCuratedPodcastByIdPathParams, _super);
    function GetCuratedPodcastByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetCuratedPodcastByIdPathParams.prototype, "id", void 0);
    return GetCuratedPodcastByIdPathParams;
}(SpeakeasyBase));
export { GetCuratedPodcastByIdPathParams };
var GetCuratedPodcastByIdHeaders = /** @class */ (function (_super) {
    __extends(GetCuratedPodcastByIdHeaders, _super);
    function GetCuratedPodcastByIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], GetCuratedPodcastByIdHeaders.prototype, "xListenApiKey", void 0);
    return GetCuratedPodcastByIdHeaders;
}(SpeakeasyBase));
export { GetCuratedPodcastByIdHeaders };
var GetCuratedPodcastByIdRequest = /** @class */ (function (_super) {
    __extends(GetCuratedPodcastByIdRequest, _super);
    function GetCuratedPodcastByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCuratedPodcastByIdPathParams)
    ], GetCuratedPodcastByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCuratedPodcastByIdHeaders)
    ], GetCuratedPodcastByIdRequest.prototype, "headers", void 0);
    return GetCuratedPodcastByIdRequest;
}(SpeakeasyBase));
export { GetCuratedPodcastByIdRequest };
var GetCuratedPodcastByIdResponse = /** @class */ (function (_super) {
    __extends(GetCuratedPodcastByIdResponse, _super);
    function GetCuratedPodcastByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCuratedPodcastByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CuratedListFull)
    ], GetCuratedPodcastByIdResponse.prototype, "curatedListFull", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetCuratedPodcastByIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCuratedPodcastByIdResponse.prototype, "statusCode", void 0);
    return GetCuratedPodcastByIdResponse;
}(SpeakeasyBase));
export { GetCuratedPodcastByIdResponse };
