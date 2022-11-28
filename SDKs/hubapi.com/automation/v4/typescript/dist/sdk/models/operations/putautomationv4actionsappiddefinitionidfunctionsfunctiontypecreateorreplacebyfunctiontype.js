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
export var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum;
(function (PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum) {
    PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum["PreActionExecution"] = "PRE_ACTION_EXECUTION";
    PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum["PreFetchOptions"] = "PRE_FETCH_OPTIONS";
    PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum["PostFetchOptions"] = "POST_FETCH_OPTIONS";
})(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum || (PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum = {}));
var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams = /** @class */ (function (_super) {
    __extends(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams, _super);
    function PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams.prototype, "definitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionType" }),
        __metadata("design:type", String)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams.prototype, "functionType", void 0);
    return PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams;
}(SpeakeasyBase));
export { PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams };
var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity = /** @class */ (function (_super) {
    __extends(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity, _super);
    function PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity.prototype, "developerHapikey", void 0);
    return PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity;
}(SpeakeasyBase));
export { PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity };
var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest = /** @class */ (function (_super) {
    __extends(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest, _super);
    function PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/plain" }),
        __metadata("design:type", String)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest.prototype, "security", void 0);
    return PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest;
}(SpeakeasyBase));
export { PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest };
var PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse = /** @class */ (function (_super) {
    __extends(PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse, _super);
    function PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ActionFunctionIdentifier)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse.prototype, "actionFunctionIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse.prototype, "statusCode", void 0);
    return PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse;
}(SpeakeasyBase));
export { PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse };
