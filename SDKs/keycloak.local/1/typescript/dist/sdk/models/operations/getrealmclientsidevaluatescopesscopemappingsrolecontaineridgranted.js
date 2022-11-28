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
var GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams, _super);
    function GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams.prototype, "realm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleContainerId" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams.prototype, "roleContainerId", void 0);
    return GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams;
}(SpeakeasyBase));
export { GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams };
var GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams, _super);
    function GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams.prototype, "scope", void 0);
    return GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams;
}(SpeakeasyBase));
export { GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams };
var GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest, _super);
    function GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedPathParams)
    ], GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedQueryParams)
    ], GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest.prototype, "queryParams", void 0);
    return GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest;
}(SpeakeasyBase));
export { GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest };
var GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse, _super);
    function GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RoleRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse.prototype, "roleRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse.prototype, "statusCode", void 0);
    return GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse;
}(SpeakeasyBase));
export { GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse };
