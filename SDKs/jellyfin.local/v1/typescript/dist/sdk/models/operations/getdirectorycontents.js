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
var GetDirectoryContentsQueryParams = /** @class */ (function (_super) {
    __extends(GetDirectoryContentsQueryParams, _super);
    function GetDirectoryContentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDirectories" }),
        __metadata("design:type", Boolean)
    ], GetDirectoryContentsQueryParams.prototype, "includeDirectories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeFiles" }),
        __metadata("design:type", Boolean)
    ], GetDirectoryContentsQueryParams.prototype, "includeFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetDirectoryContentsQueryParams.prototype, "path", void 0);
    return GetDirectoryContentsQueryParams;
}(SpeakeasyBase));
export { GetDirectoryContentsQueryParams };
var GetDirectoryContentsSecurity = /** @class */ (function (_super) {
    __extends(GetDirectoryContentsSecurity, _super);
    function GetDirectoryContentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetDirectoryContentsSecurity.prototype, "customAuthentication", void 0);
    return GetDirectoryContentsSecurity;
}(SpeakeasyBase));
export { GetDirectoryContentsSecurity };
var GetDirectoryContentsRequest = /** @class */ (function (_super) {
    __extends(GetDirectoryContentsRequest, _super);
    function GetDirectoryContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectoryContentsQueryParams)
    ], GetDirectoryContentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectoryContentsSecurity)
    ], GetDirectoryContentsRequest.prototype, "security", void 0);
    return GetDirectoryContentsRequest;
}(SpeakeasyBase));
export { GetDirectoryContentsRequest };
var GetDirectoryContentsResponse = /** @class */ (function (_super) {
    __extends(GetDirectoryContentsResponse, _super);
    function GetDirectoryContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDirectoryContentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.FileSystemEntryInfo }),
        __metadata("design:type", Array)
    ], GetDirectoryContentsResponse.prototype, "fileSystemEntryInfos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDirectoryContentsResponse.prototype, "statusCode", void 0);
    return GetDirectoryContentsResponse;
}(SpeakeasyBase));
export { GetDirectoryContentsResponse };
