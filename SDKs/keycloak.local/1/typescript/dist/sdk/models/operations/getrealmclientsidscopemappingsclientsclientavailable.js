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
var GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams, _super);
    function GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams.prototype, "realm", void 0);
    return GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams;
}(SpeakeasyBase));
export { GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams };
var GetRealmClientsIdScopeMappingsClientsClientAvailableRequest = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdScopeMappingsClientsClientAvailableRequest, _super);
    function GetRealmClientsIdScopeMappingsClientsClientAvailableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsIdScopeMappingsClientsClientAvailablePathParams)
    ], GetRealmClientsIdScopeMappingsClientsClientAvailableRequest.prototype, "pathParams", void 0);
    return GetRealmClientsIdScopeMappingsClientsClientAvailableRequest;
}(SpeakeasyBase));
export { GetRealmClientsIdScopeMappingsClientsClientAvailableRequest };
var GetRealmClientsIdScopeMappingsClientsClientAvailableResponse = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdScopeMappingsClientsClientAvailableResponse, _super);
    function GetRealmClientsIdScopeMappingsClientsClientAvailableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmClientsIdScopeMappingsClientsClientAvailableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RoleRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmClientsIdScopeMappingsClientsClientAvailableResponse.prototype, "roleRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmClientsIdScopeMappingsClientsClientAvailableResponse.prototype, "statusCode", void 0);
    return GetRealmClientsIdScopeMappingsClientsClientAvailableResponse;
}(SpeakeasyBase));
export { GetRealmClientsIdScopeMappingsClientsClientAvailableResponse };
