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
var ImportLibraryV2PathParams = /** @class */ (function (_super) {
    __extends(ImportLibraryV2PathParams, _super);
    function ImportLibraryV2PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" }),
        __metadata("design:type", String)
    ], ImportLibraryV2PathParams.prototype, "organizationUuid", void 0);
    return ImportLibraryV2PathParams;
}(SpeakeasyBase));
export { ImportLibraryV2PathParams };
var ImportLibraryV2Security = /** @class */ (function (_super) {
    __extends(ImportLibraryV2Security, _super);
    function ImportLibraryV2Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], ImportLibraryV2Security.prototype, "zettleApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], ImportLibraryV2Security.prototype, "zettleOauth", void 0);
    return ImportLibraryV2Security;
}(SpeakeasyBase));
export { ImportLibraryV2Security };
var ImportLibraryV2Request = /** @class */ (function (_super) {
    __extends(ImportLibraryV2Request, _super);
    function ImportLibraryV2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportLibraryV2PathParams)
    ], ImportLibraryV2Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkImportRequest)
    ], ImportLibraryV2Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImportLibraryV2Security)
    ], ImportLibraryV2Request.prototype, "security", void 0);
    return ImportLibraryV2Request;
}(SpeakeasyBase));
export { ImportLibraryV2Request };
var ImportLibraryV2Response = /** @class */ (function (_super) {
    __extends(ImportLibraryV2Response, _super);
    function ImportLibraryV2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImportLibraryV2Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], ImportLibraryV2Response.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImportResponse)
    ], ImportLibraryV2Response.prototype, "importResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImportLibraryV2Response.prototype, "statusCode", void 0);
    return ImportLibraryV2Response;
}(SpeakeasyBase));
export { ImportLibraryV2Response };
