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
var GetEpisodeByIdPathParams = /** @class */ (function (_super) {
    __extends(GetEpisodeByIdPathParams, _super);
    function GetEpisodeByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetEpisodeByIdPathParams.prototype, "id", void 0);
    return GetEpisodeByIdPathParams;
}(SpeakeasyBase));
export { GetEpisodeByIdPathParams };
var GetEpisodeByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetEpisodeByIdQueryParams, _super);
    function GetEpisodeByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=show_transcript" }),
        __metadata("design:type", Number)
    ], GetEpisodeByIdQueryParams.prototype, "showTranscript", void 0);
    return GetEpisodeByIdQueryParams;
}(SpeakeasyBase));
export { GetEpisodeByIdQueryParams };
var GetEpisodeByIdHeaders = /** @class */ (function (_super) {
    __extends(GetEpisodeByIdHeaders, _super);
    function GetEpisodeByIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" }),
        __metadata("design:type", String)
    ], GetEpisodeByIdHeaders.prototype, "xListenApiKey", void 0);
    return GetEpisodeByIdHeaders;
}(SpeakeasyBase));
export { GetEpisodeByIdHeaders };
var GetEpisodeByIdRequest = /** @class */ (function (_super) {
    __extends(GetEpisodeByIdRequest, _super);
    function GetEpisodeByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEpisodeByIdPathParams)
    ], GetEpisodeByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEpisodeByIdQueryParams)
    ], GetEpisodeByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEpisodeByIdHeaders)
    ], GetEpisodeByIdRequest.prototype, "headers", void 0);
    return GetEpisodeByIdRequest;
}(SpeakeasyBase));
export { GetEpisodeByIdRequest };
var GetEpisodeByIdResponse = /** @class */ (function (_super) {
    __extends(GetEpisodeByIdResponse, _super);
    function GetEpisodeByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEpisodeByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EpisodeFull)
    ], GetEpisodeByIdResponse.prototype, "episodeFull", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEpisodeByIdResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEpisodeByIdResponse.prototype, "statusCode", void 0);
    return GetEpisodeByIdResponse;
}(SpeakeasyBase));
export { GetEpisodeByIdResponse };
