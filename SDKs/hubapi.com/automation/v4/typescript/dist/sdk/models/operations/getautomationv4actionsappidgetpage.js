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
var GetAutomationV4ActionsAppIdGetPagePathParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPagePathParams, _super);
    function GetAutomationV4ActionsAppIdGetPagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdGetPagePathParams.prototype, "appId", void 0);
    return GetAutomationV4ActionsAppIdGetPagePathParams;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdGetPagePathParams };
var GetAutomationV4ActionsAppIdGetPageQueryParams = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPageQueryParams, _super);
    function GetAutomationV4ActionsAppIdGetPageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdGetPageQueryParams.prototype, "after", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=archived" }),
        __metadata("design:type", Boolean)
    ], GetAutomationV4ActionsAppIdGetPageQueryParams.prototype, "archived", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdGetPageQueryParams.prototype, "limit", void 0);
    return GetAutomationV4ActionsAppIdGetPageQueryParams;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdGetPageQueryParams };
var GetAutomationV4ActionsAppIdGetPageSecurity = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPageSecurity, _super);
    function GetAutomationV4ActionsAppIdGetPageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetAutomationV4ActionsAppIdGetPageSecurity.prototype, "developerHapikey", void 0);
    return GetAutomationV4ActionsAppIdGetPageSecurity;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdGetPageSecurity };
var GetAutomationV4ActionsAppIdGetPageRequest = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPageRequest, _super);
    function GetAutomationV4ActionsAppIdGetPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdGetPagePathParams)
    ], GetAutomationV4ActionsAppIdGetPageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdGetPageQueryParams)
    ], GetAutomationV4ActionsAppIdGetPageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAutomationV4ActionsAppIdGetPageSecurity)
    ], GetAutomationV4ActionsAppIdGetPageRequest.prototype, "security", void 0);
    return GetAutomationV4ActionsAppIdGetPageRequest;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdGetPageRequest };
var GetAutomationV4ActionsAppIdGetPageResponse = /** @class */ (function (_super) {
    __extends(GetAutomationV4ActionsAppIdGetPageResponse, _super);
    function GetAutomationV4ActionsAppIdGetPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAutomationV4ActionsAppIdGetPageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CollectionResponseExtensionActionDefinitionForwardPaging)
    ], GetAutomationV4ActionsAppIdGetPageResponse.prototype, "collectionResponseExtensionActionDefinitionForwardPaging", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAutomationV4ActionsAppIdGetPageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAutomationV4ActionsAppIdGetPageResponse.prototype, "statusCode", void 0);
    return GetAutomationV4ActionsAppIdGetPageResponse;
}(SpeakeasyBase));
export { GetAutomationV4ActionsAppIdGetPageResponse };
