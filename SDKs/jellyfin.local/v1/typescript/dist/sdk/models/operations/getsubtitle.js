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
var GetSubtitlePathParams = /** @class */ (function (_super) {
    __extends(GetSubtitlePathParams, _super);
    function GetSubtitlePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetSubtitlePathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" }),
        __metadata("design:type", Number)
    ], GetSubtitlePathParams.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetSubtitlePathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaSourceId" }),
        __metadata("design:type", String)
    ], GetSubtitlePathParams.prototype, "mediaSourceId", void 0);
    return GetSubtitlePathParams;
}(SpeakeasyBase));
export { GetSubtitlePathParams };
var GetSubtitleQueryParams = /** @class */ (function (_super) {
    __extends(GetSubtitleQueryParams, _super);
    function GetSubtitleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addVttTimeMap" }),
        __metadata("design:type", Boolean)
    ], GetSubtitleQueryParams.prototype, "addVttTimeMap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=copyTimestamps" }),
        __metadata("design:type", Boolean)
    ], GetSubtitleQueryParams.prototype, "copyTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endPositionTicks" }),
        __metadata("design:type", Number)
    ], GetSubtitleQueryParams.prototype, "endPositionTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startPositionTicks" }),
        __metadata("design:type", Number)
    ], GetSubtitleQueryParams.prototype, "startPositionTicks", void 0);
    return GetSubtitleQueryParams;
}(SpeakeasyBase));
export { GetSubtitleQueryParams };
var GetSubtitleRequest = /** @class */ (function (_super) {
    __extends(GetSubtitleRequest, _super);
    function GetSubtitleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubtitlePathParams)
    ], GetSubtitleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubtitleQueryParams)
    ], GetSubtitleRequest.prototype, "queryParams", void 0);
    return GetSubtitleRequest;
}(SpeakeasyBase));
export { GetSubtitleRequest };
var GetSubtitleResponse = /** @class */ (function (_super) {
    __extends(GetSubtitleResponse, _super);
    function GetSubtitleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSubtitleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSubtitleResponse.prototype, "getSubtitle200TextWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSubtitleResponse.prototype, "statusCode", void 0);
    return GetSubtitleResponse;
}(SpeakeasyBase));
export { GetSubtitleResponse };
