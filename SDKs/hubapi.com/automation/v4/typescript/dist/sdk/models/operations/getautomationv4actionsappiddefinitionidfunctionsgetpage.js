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
var GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams.prototype, "definitionId", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams };
var GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity.prototype, "developerHapikey", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity };
var GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams)
    ], GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity)
    ], GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest.prototype, "security", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest };
var GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CollectionResponseActionFunctionIdentifierNoPaging)
    ], GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse.prototype, "collectionResponseActionFunctionIdentifierNoPaging", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse.prototype, "statusCode", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse };
