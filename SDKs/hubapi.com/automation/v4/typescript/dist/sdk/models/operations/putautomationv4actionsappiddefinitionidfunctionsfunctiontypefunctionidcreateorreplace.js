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
export var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum;
(function (PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum) {
    PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum["PreActionExecution"] = "PRE_ACTION_EXECUTION";
    PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum["PreFetchOptions"] = "PRE_FETCH_OPTIONS";
    PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum["PostFetchOptions"] = "POST_FETCH_OPTIONS";
})(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum || (PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum = {}));
var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams = /** @class */ (function (_super) {
    __extends(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams, _super);
    function PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams.prototype, "definitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" }),
        __metadata("design:type", String)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams.prototype, "functionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionType" }),
        __metadata("design:type", String)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams.prototype, "functionType", void 0);
    return PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams;
}(SpeakeasyBase));
export { PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams };
var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity = /** @class */ (function (_super) {
    __extends(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity, _super);
    function PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity.prototype, "developerHapikey", void 0);
    return PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity;
}(SpeakeasyBase));
export { PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity };
var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest = /** @class */ (function (_super) {
    __extends(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest, _super);
    function PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/plain" }),
        __metadata("design:type", String)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest.prototype, "security", void 0);
    return PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest;
}(SpeakeasyBase));
export { PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest };
var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse = /** @class */ (function (_super) {
    __extends(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse, _super);
    function PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ActionFunctionIdentifier)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse.prototype, "actionFunctionIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse.prototype, "statusCode", void 0);
    return PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse;
}(SpeakeasyBase));
export { PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse };
