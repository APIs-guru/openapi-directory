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
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams.prototype, "definitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionId" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams.prototype, "revisionId", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams };
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity.prototype, "developerHapikey", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity };
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest.prototype, "security", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest };
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ActionRevision)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse.prototype, "actionRevision", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse.prototype, "statusCode", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse };
