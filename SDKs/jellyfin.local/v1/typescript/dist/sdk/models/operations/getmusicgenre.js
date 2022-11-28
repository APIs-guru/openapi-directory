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
var GetMusicGenrePathParams = /** @class */ (function (_super) {
    __extends(GetMusicGenrePathParams, _super);
    function GetMusicGenrePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=genreName" }),
        __metadata("design:type", String)
    ], GetMusicGenrePathParams.prototype, "genreName", void 0);
    return GetMusicGenrePathParams;
}(SpeakeasyBase));
export { GetMusicGenrePathParams };
var GetMusicGenreQueryParams = /** @class */ (function (_super) {
    __extends(GetMusicGenreQueryParams, _super);
    function GetMusicGenreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetMusicGenreQueryParams.prototype, "userId", void 0);
    return GetMusicGenreQueryParams;
}(SpeakeasyBase));
export { GetMusicGenreQueryParams };
var GetMusicGenreSecurity = /** @class */ (function (_super) {
    __extends(GetMusicGenreSecurity, _super);
    function GetMusicGenreSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetMusicGenreSecurity.prototype, "customAuthentication", void 0);
    return GetMusicGenreSecurity;
}(SpeakeasyBase));
export { GetMusicGenreSecurity };
var GetMusicGenreRequest = /** @class */ (function (_super) {
    __extends(GetMusicGenreRequest, _super);
    function GetMusicGenreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMusicGenrePathParams)
    ], GetMusicGenreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMusicGenreQueryParams)
    ], GetMusicGenreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMusicGenreSecurity)
    ], GetMusicGenreRequest.prototype, "security", void 0);
    return GetMusicGenreRequest;
}(SpeakeasyBase));
export { GetMusicGenreRequest };
var GetMusicGenreResponse = /** @class */ (function (_super) {
    __extends(GetMusicGenreResponse, _super);
    function GetMusicGenreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDto)
    ], GetMusicGenreResponse.prototype, "baseItemDto", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMusicGenreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMusicGenreResponse.prototype, "statusCode", void 0);
    return GetMusicGenreResponse;
}(SpeakeasyBase));
export { GetMusicGenreResponse };
