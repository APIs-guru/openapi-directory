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
var GetRealmAdminEventsPathParams = /** @class */ (function (_super) {
    __extends(GetRealmAdminEventsPathParams, _super);
    function GetRealmAdminEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmAdminEventsPathParams.prototype, "realm", void 0);
    return GetRealmAdminEventsPathParams;
}(SpeakeasyBase));
export { GetRealmAdminEventsPathParams };
var GetRealmAdminEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmAdminEventsQueryParams, _super);
    function GetRealmAdminEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authClient" }),
        __metadata("design:type", String)
    ], GetRealmAdminEventsQueryParams.prototype, "authClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authIpAddress" }),
        __metadata("design:type", String)
    ], GetRealmAdminEventsQueryParams.prototype, "authIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authRealm" }),
        __metadata("design:type", String)
    ], GetRealmAdminEventsQueryParams.prototype, "authRealm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authUser" }),
        __metadata("design:type", String)
    ], GetRealmAdminEventsQueryParams.prototype, "authUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" }),
        __metadata("design:type", String)
    ], GetRealmAdminEventsQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" }),
        __metadata("design:type", String)
    ], GetRealmAdminEventsQueryParams.prototype, "dateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" }),
        __metadata("design:type", Number)
    ], GetRealmAdminEventsQueryParams.prototype, "first", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], GetRealmAdminEventsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=operationTypes" }),
        __metadata("design:type", Array)
    ], GetRealmAdminEventsQueryParams.prototype, "operationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourcePath" }),
        __metadata("design:type", String)
    ], GetRealmAdminEventsQueryParams.prototype, "resourcePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceTypes" }),
        __metadata("design:type", Array)
    ], GetRealmAdminEventsQueryParams.prototype, "resourceTypes", void 0);
    return GetRealmAdminEventsQueryParams;
}(SpeakeasyBase));
export { GetRealmAdminEventsQueryParams };
var GetRealmAdminEventsRequest = /** @class */ (function (_super) {
    __extends(GetRealmAdminEventsRequest, _super);
    function GetRealmAdminEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmAdminEventsPathParams)
    ], GetRealmAdminEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmAdminEventsQueryParams)
    ], GetRealmAdminEventsRequest.prototype, "queryParams", void 0);
    return GetRealmAdminEventsRequest;
}(SpeakeasyBase));
export { GetRealmAdminEventsRequest };
var GetRealmAdminEventsResponse = /** @class */ (function (_super) {
    __extends(GetRealmAdminEventsResponse, _super);
    function GetRealmAdminEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AdminEventRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmAdminEventsResponse.prototype, "adminEventRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmAdminEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmAdminEventsResponse.prototype, "statusCode", void 0);
    return GetRealmAdminEventsResponse;
}(SpeakeasyBase));
export { GetRealmAdminEventsResponse };
