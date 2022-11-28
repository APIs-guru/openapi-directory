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
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams.prototype, "definitionId", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams };
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams.prototype, "limit", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams };
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity.prototype, "developerHapikey", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity };
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest.prototype, "security", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest };
var GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse, _super);
    function GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CollectionResponseActionRevisionForwardPaging)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse.prototype, "collectionResponseActionRevisionForwardPaging", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse.prototype, "statusCode", void 0);
    return GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse };
