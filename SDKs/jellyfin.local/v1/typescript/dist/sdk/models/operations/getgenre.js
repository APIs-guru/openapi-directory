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
var GetGenrePathParams = /** @class */ (function (_super) {
    __extends(GetGenrePathParams, _super);
    function GetGenrePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=genreName" }),
        __metadata("design:type", String)
    ], GetGenrePathParams.prototype, "genreName", void 0);
    return GetGenrePathParams;
}(SpeakeasyBase));
export { GetGenrePathParams };
var GetGenreQueryParams = /** @class */ (function (_super) {
    __extends(GetGenreQueryParams, _super);
    function GetGenreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetGenreQueryParams.prototype, "userId", void 0);
    return GetGenreQueryParams;
}(SpeakeasyBase));
export { GetGenreQueryParams };
var GetGenreSecurity = /** @class */ (function (_super) {
    __extends(GetGenreSecurity, _super);
    function GetGenreSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetGenreSecurity.prototype, "customAuthentication", void 0);
    return GetGenreSecurity;
}(SpeakeasyBase));
export { GetGenreSecurity };
var GetGenreRequest = /** @class */ (function (_super) {
    __extends(GetGenreRequest, _super);
    function GetGenreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGenrePathParams)
    ], GetGenreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGenreQueryParams)
    ], GetGenreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGenreSecurity)
    ], GetGenreRequest.prototype, "security", void 0);
    return GetGenreRequest;
}(SpeakeasyBase));
export { GetGenreRequest };
var GetGenreResponse = /** @class */ (function (_super) {
    __extends(GetGenreResponse, _super);
    function GetGenreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDto)
    ], GetGenreResponse.prototype, "baseItemDto", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGenreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGenreResponse.prototype, "statusCode", void 0);
    return GetGenreResponse;
}(SpeakeasyBase));
export { GetGenreResponse };
