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
var GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams.prototype, "definitionId", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams };
var GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams.prototype, "archived", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams };
var GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity.prototype, "developerHapikey", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity };
var GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest.prototype, "security", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest };
var GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ExtensionActionDefinition)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse.prototype, "extensionActionDefinition", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse.prototype, "statusCode", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse };
