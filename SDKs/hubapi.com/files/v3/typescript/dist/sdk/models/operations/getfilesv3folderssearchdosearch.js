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
var GetFilesV3FoldersSearchDoSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersSearchDoSearchQueryParams, _super);
    function GetFilesV3FoldersSearchDoSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt" }),
        __metadata("design:type", Date)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAtGte" }),
        __metadata("design:type", Date)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "createdAtGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAtLte" }),
        __metadata("design:type", Date)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "createdAtLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentFolderId" }),
        __metadata("design:type", Number)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=properties" }),
        __metadata("design:type", Array)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt" }),
        __metadata("design:type", Date)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAtGte" }),
        __metadata("design:type", Date)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "updatedAtGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAtLte" }),
        __metadata("design:type", Date)
    ], GetFilesV3FoldersSearchDoSearchQueryParams.prototype, "updatedAtLte", void 0);
    return GetFilesV3FoldersSearchDoSearchQueryParams;
}(SpeakeasyBase));
export { GetFilesV3FoldersSearchDoSearchQueryParams };
var GetFilesV3FoldersSearchDoSearchSecurity = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersSearchDoSearchSecurity, _super);
    function GetFilesV3FoldersSearchDoSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], GetFilesV3FoldersSearchDoSearchSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FoldersSearchDoSearchSecurity.prototype, "oauth2Legacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetFilesV3FoldersSearchDoSearchSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], GetFilesV3FoldersSearchDoSearchSecurity.prototype, "privateAppsLegacy1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FoldersSearchDoSearchSecurity.prototype, "oauth2Legacy1", void 0);
    return GetFilesV3FoldersSearchDoSearchSecurity;
}(SpeakeasyBase));
export { GetFilesV3FoldersSearchDoSearchSecurity };
var GetFilesV3FoldersSearchDoSearchRequest = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersSearchDoSearchRequest, _super);
    function GetFilesV3FoldersSearchDoSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilesV3FoldersSearchDoSearchQueryParams)
    ], GetFilesV3FoldersSearchDoSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilesV3FoldersSearchDoSearchSecurity)
    ], GetFilesV3FoldersSearchDoSearchRequest.prototype, "security", void 0);
    return GetFilesV3FoldersSearchDoSearchRequest;
}(SpeakeasyBase));
export { GetFilesV3FoldersSearchDoSearchRequest };
var GetFilesV3FoldersSearchDoSearchResponse = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersSearchDoSearchResponse, _super);
    function GetFilesV3FoldersSearchDoSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilesV3FoldersSearchDoSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CollectionResponseFolder)
    ], GetFilesV3FoldersSearchDoSearchResponse.prototype, "collectionResponseFolder", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFilesV3FoldersSearchDoSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFilesV3FoldersSearchDoSearchResponse.prototype, "statusCode", void 0);
    return GetFilesV3FoldersSearchDoSearchResponse;
}(SpeakeasyBase));
export { GetFilesV3FoldersSearchDoSearchResponse };
