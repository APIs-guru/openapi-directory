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
var GetRealmClientsIdRolesPathParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesPathParams, _super);
    function GetRealmClientsIdRolesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesPathParams.prototype, "realm", void 0);
    return GetRealmClientsIdRolesPathParams;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesPathParams };
var GetRealmClientsIdRolesQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesQueryParams, _super);
    function GetRealmClientsIdRolesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" }),
        __metadata("design:type", Boolean)
    ], GetRealmClientsIdRolesQueryParams.prototype, "briefRepresentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" }),
        __metadata("design:type", Number)
    ], GetRealmClientsIdRolesQueryParams.prototype, "first", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], GetRealmClientsIdRolesQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesQueryParams.prototype, "search", void 0);
    return GetRealmClientsIdRolesQueryParams;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesQueryParams };
var GetRealmClientsIdRolesRequest = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesRequest, _super);
    function GetRealmClientsIdRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsIdRolesPathParams)
    ], GetRealmClientsIdRolesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsIdRolesQueryParams)
    ], GetRealmClientsIdRolesRequest.prototype, "queryParams", void 0);
    return GetRealmClientsIdRolesRequest;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesRequest };
var GetRealmClientsIdRolesResponse = /** @class */ (function (_super) {
    __extends(GetRealmClientsIdRolesResponse, _super);
    function GetRealmClientsIdRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmClientsIdRolesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RoleRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmClientsIdRolesResponse.prototype, "roleRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmClientsIdRolesResponse.prototype, "statusCode", void 0);
    return GetRealmClientsIdRolesResponse;
}(SpeakeasyBase));
export { GetRealmClientsIdRolesResponse };
