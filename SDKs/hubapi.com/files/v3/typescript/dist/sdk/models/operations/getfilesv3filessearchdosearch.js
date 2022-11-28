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
var GetFilesV3FilesSearchDoSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesSearchDoSearchQueryParams, _super);
    function GetFilesV3FilesSearchDoSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowsAnonymousAccess" }),
        __metadata("design:type", Boolean)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "allowsAnonymousAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt" }),
        __metadata("design:type", Date)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAtGte" }),
        __metadata("design:type", Date)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "createdAtGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAtLte" }),
        __metadata("design:type", Date)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "createdAtLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=encoding" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extension" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isUsableInContent" }),
        __metadata("design:type", Boolean)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "isUsableInContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentFolderId" }),
        __metadata("design:type", Number)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=properties" }),
        __metadata("design:type", Array)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt" }),
        __metadata("design:type", Date)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAtGte" }),
        __metadata("design:type", Date)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "updatedAtGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAtLte" }),
        __metadata("design:type", Date)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "updatedAtLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetFilesV3FilesSearchDoSearchQueryParams.prototype, "width", void 0);
    return GetFilesV3FilesSearchDoSearchQueryParams;
}(SpeakeasyBase));
export { GetFilesV3FilesSearchDoSearchQueryParams };
var GetFilesV3FilesSearchDoSearchSecurity = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesSearchDoSearchSecurity, _super);
    function GetFilesV3FilesSearchDoSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], GetFilesV3FilesSearchDoSearchSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FilesSearchDoSearchSecurity.prototype, "oauth2Legacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetFilesV3FilesSearchDoSearchSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], GetFilesV3FilesSearchDoSearchSecurity.prototype, "privateAppsLegacy1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FilesSearchDoSearchSecurity.prototype, "oauth2Legacy1", void 0);
    return GetFilesV3FilesSearchDoSearchSecurity;
}(SpeakeasyBase));
export { GetFilesV3FilesSearchDoSearchSecurity };
var GetFilesV3FilesSearchDoSearchRequest = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesSearchDoSearchRequest, _super);
    function GetFilesV3FilesSearchDoSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilesV3FilesSearchDoSearchQueryParams)
    ], GetFilesV3FilesSearchDoSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilesV3FilesSearchDoSearchSecurity)
    ], GetFilesV3FilesSearchDoSearchRequest.prototype, "security", void 0);
    return GetFilesV3FilesSearchDoSearchRequest;
}(SpeakeasyBase));
export { GetFilesV3FilesSearchDoSearchRequest };
var GetFilesV3FilesSearchDoSearchResponse = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesSearchDoSearchResponse, _super);
    function GetFilesV3FilesSearchDoSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilesV3FilesSearchDoSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CollectionResponseFile)
    ], GetFilesV3FilesSearchDoSearchResponse.prototype, "collectionResponseFile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFilesV3FilesSearchDoSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFilesV3FilesSearchDoSearchResponse.prototype, "statusCode", void 0);
    return GetFilesV3FilesSearchDoSearchResponse;
}(SpeakeasyBase));
export { GetFilesV3FilesSearchDoSearchResponse };
