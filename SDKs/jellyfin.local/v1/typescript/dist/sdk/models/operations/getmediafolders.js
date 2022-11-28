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
var GetMediaFoldersQueryParams = /** @class */ (function (_super) {
    __extends(GetMediaFoldersQueryParams, _super);
    function GetMediaFoldersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isHidden" }),
        __metadata("design:type", Boolean)
    ], GetMediaFoldersQueryParams.prototype, "isHidden", void 0);
    return GetMediaFoldersQueryParams;
}(SpeakeasyBase));
export { GetMediaFoldersQueryParams };
var GetMediaFoldersSecurity = /** @class */ (function (_super) {
    __extends(GetMediaFoldersSecurity, _super);
    function GetMediaFoldersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetMediaFoldersSecurity.prototype, "customAuthentication", void 0);
    return GetMediaFoldersSecurity;
}(SpeakeasyBase));
export { GetMediaFoldersSecurity };
var GetMediaFoldersRequest = /** @class */ (function (_super) {
    __extends(GetMediaFoldersRequest, _super);
    function GetMediaFoldersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMediaFoldersQueryParams)
    ], GetMediaFoldersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMediaFoldersSecurity)
    ], GetMediaFoldersRequest.prototype, "security", void 0);
    return GetMediaFoldersRequest;
}(SpeakeasyBase));
export { GetMediaFoldersRequest };
var GetMediaFoldersResponse = /** @class */ (function (_super) {
    __extends(GetMediaFoldersResponse, _super);
    function GetMediaFoldersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetMediaFoldersResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMediaFoldersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMediaFoldersResponse.prototype, "statusCode", void 0);
    return GetMediaFoldersResponse;
}(SpeakeasyBase));
export { GetMediaFoldersResponse };
