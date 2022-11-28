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
var PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams = /** @class */ (function (_super) {
    __extends(PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams, _super);
    function PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams.prototype, "definitionId", void 0);
    return PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams;
}(SpeakeasyBase));
export { PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams };
var PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity = /** @class */ (function (_super) {
    __extends(PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity, _super);
    function PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity.prototype, "developerHapikey", void 0);
    return PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity;
}(SpeakeasyBase));
export { PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity };
var PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest = /** @class */ (function (_super) {
    __extends(PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest, _super);
    function PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExtensionActionDefinitionPatch)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest.prototype, "security", void 0);
    return PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest;
}(SpeakeasyBase));
export { PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest };
var PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse = /** @class */ (function (_super) {
    __extends(PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse, _super);
    function PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExtensionActionDefinition)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse.prototype, "extensionActionDefinition", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse.prototype, "statusCode", void 0);
    return PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse;
}(SpeakeasyBase));
export { PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse };
