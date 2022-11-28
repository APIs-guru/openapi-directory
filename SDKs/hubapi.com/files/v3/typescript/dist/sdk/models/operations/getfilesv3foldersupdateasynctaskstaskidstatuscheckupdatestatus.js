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
var GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams, _super);
    function GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" }),
        __metadata("design:type", String)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams.prototype, "taskId", void 0);
    return GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams;
}(SpeakeasyBase));
export { GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams };
var GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity, _super);
    function GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity.prototype, "oauth2Legacy", void 0);
    return GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity;
}(SpeakeasyBase));
export { GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity };
var GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest, _super);
    function GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest.prototype, "security", void 0);
    return GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest;
}(SpeakeasyBase));
export { GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest };
var GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse = /** @class */ (function (_super) {
    __extends(GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse, _super);
    function GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FolderActionResponse)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse.prototype, "folderActionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse.prototype, "statusCode", void 0);
    return GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse;
}(SpeakeasyBase));
export { GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse };
