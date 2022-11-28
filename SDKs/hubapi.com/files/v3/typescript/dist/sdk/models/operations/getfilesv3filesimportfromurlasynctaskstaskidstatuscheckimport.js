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
var GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams, _super);
    function GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams.prototype, "taskId", void 0);
    return GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams;
}(SpeakeasyBase));
export { GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams };
var GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity, _super);
    function GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity.prototype, "oauth2Legacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity.prototype, "privateAppsLegacy1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity.prototype, "oauth2Legacy1", void 0);
    return GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity;
}(SpeakeasyBase));
export { GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity };
var GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest, _super);
    function GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest.prototype, "security", void 0);
    return GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest;
}(SpeakeasyBase));
export { GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest };
var GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse = /** @class */ (function (_super) {
    __extends(GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse, _super);
    function GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileActionResponse)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse.prototype, "fileActionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse.prototype, "statusCode", void 0);
    return GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse;
}(SpeakeasyBase));
export { GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse };
