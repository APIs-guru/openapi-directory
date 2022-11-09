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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams = /** @class */ (function (_super) {
    __extends(DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams, _super);
    function DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams.prototype, "definitionId", void 0);
    return DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams;
}(SpeakeasyBase));
export { DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams };
var DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity = /** @class */ (function (_super) {
    __extends(DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity, _super);
    function DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity.prototype, "developerHapikey", void 0);
    return DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity;
}(SpeakeasyBase));
export { DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity };
var DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest = /** @class */ (function (_super) {
    __extends(DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest, _super);
    function DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest.prototype, "security", void 0);
    return DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest;
}(SpeakeasyBase));
export { DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest };
var DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse = /** @class */ (function (_super) {
    __extends(DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse, _super);
    function DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse.prototype, "statusCode", void 0);
    return DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse;
}(SpeakeasyBase));
export { DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse };
