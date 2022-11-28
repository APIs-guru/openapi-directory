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
var GetSubtitlePlaylistPathParams = /** @class */ (function (_super) {
    __extends(GetSubtitlePlaylistPathParams, _super);
    function GetSubtitlePlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" }),
        __metadata("design:type", Number)
    ], GetSubtitlePlaylistPathParams.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetSubtitlePlaylistPathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaSourceId" }),
        __metadata("design:type", String)
    ], GetSubtitlePlaylistPathParams.prototype, "mediaSourceId", void 0);
    return GetSubtitlePlaylistPathParams;
}(SpeakeasyBase));
export { GetSubtitlePlaylistPathParams };
var GetSubtitlePlaylistQueryParams = /** @class */ (function (_super) {
    __extends(GetSubtitlePlaylistQueryParams, _super);
    function GetSubtitlePlaylistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentLength" }),
        __metadata("design:type", Number)
    ], GetSubtitlePlaylistQueryParams.prototype, "segmentLength", void 0);
    return GetSubtitlePlaylistQueryParams;
}(SpeakeasyBase));
export { GetSubtitlePlaylistQueryParams };
var GetSubtitlePlaylistSecurity = /** @class */ (function (_super) {
    __extends(GetSubtitlePlaylistSecurity, _super);
    function GetSubtitlePlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetSubtitlePlaylistSecurity.prototype, "customAuthentication", void 0);
    return GetSubtitlePlaylistSecurity;
}(SpeakeasyBase));
export { GetSubtitlePlaylistSecurity };
var GetSubtitlePlaylistRequest = /** @class */ (function (_super) {
    __extends(GetSubtitlePlaylistRequest, _super);
    function GetSubtitlePlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubtitlePlaylistPathParams)
    ], GetSubtitlePlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubtitlePlaylistQueryParams)
    ], GetSubtitlePlaylistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubtitlePlaylistSecurity)
    ], GetSubtitlePlaylistRequest.prototype, "security", void 0);
    return GetSubtitlePlaylistRequest;
}(SpeakeasyBase));
export { GetSubtitlePlaylistRequest };
var GetSubtitlePlaylistResponse = /** @class */ (function (_super) {
    __extends(GetSubtitlePlaylistResponse, _super);
    function GetSubtitlePlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSubtitlePlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSubtitlePlaylistResponse.prototype, "getSubtitlePlaylist200ApplicationXMpegurlBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSubtitlePlaylistResponse.prototype, "statusCode", void 0);
    return GetSubtitlePlaylistResponse;
}(SpeakeasyBase));
export { GetSubtitlePlaylistResponse };
