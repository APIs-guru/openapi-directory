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
var GetLibraryPathParams = /** @class */ (function (_super) {
    __extends(GetLibraryPathParams, _super);
    function GetLibraryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" }),
        __metadata("design:type", String)
    ], GetLibraryPathParams.prototype, "organizationUuid", void 0);
    return GetLibraryPathParams;
}(SpeakeasyBase));
export { GetLibraryPathParams };
var GetLibraryQueryParams = /** @class */ (function (_super) {
    __extends(GetLibraryQueryParams, _super);
    function GetLibraryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], GetLibraryQueryParams.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventLogUuid" }),
        __metadata("design:type", String)
    ], GetLibraryQueryParams.prototype, "eventLogUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetLibraryQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetLibraryQueryParams.prototype, "offset", void 0);
    return GetLibraryQueryParams;
}(SpeakeasyBase));
export { GetLibraryQueryParams };
var GetLibrarySecurity = /** @class */ (function (_super) {
    __extends(GetLibrarySecurity, _super);
    function GetLibrarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], GetLibrarySecurity.prototype, "zettleOauth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], GetLibrarySecurity.prototype, "zettleApiKey", void 0);
    return GetLibrarySecurity;
}(SpeakeasyBase));
export { GetLibrarySecurity };
var GetLibraryRequest = /** @class */ (function (_super) {
    __extends(GetLibraryRequest, _super);
    function GetLibraryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLibraryPathParams)
    ], GetLibraryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLibraryQueryParams)
    ], GetLibraryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLibrarySecurity)
    ], GetLibraryRequest.prototype, "security", void 0);
    return GetLibraryRequest;
}(SpeakeasyBase));
export { GetLibraryRequest };
var GetLibraryResponse = /** @class */ (function (_super) {
    __extends(GetLibraryResponse, _super);
    function GetLibraryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLibraryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetLibraryResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LibraryResponse)
    ], GetLibraryResponse.prototype, "libraryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLibraryResponse.prototype, "statusCode", void 0);
    return GetLibraryResponse;
}(SpeakeasyBase));
export { GetLibraryResponse };
