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
var GetRealmUsersIdGroupsPathParams = /** @class */ (function (_super) {
    __extends(GetRealmUsersIdGroupsPathParams, _super);
    function GetRealmUsersIdGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetRealmUsersIdGroupsPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmUsersIdGroupsPathParams.prototype, "realm", void 0);
    return GetRealmUsersIdGroupsPathParams;
}(SpeakeasyBase));
export { GetRealmUsersIdGroupsPathParams };
var GetRealmUsersIdGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmUsersIdGroupsQueryParams, _super);
    function GetRealmUsersIdGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" }),
        __metadata("design:type", Boolean)
    ], GetRealmUsersIdGroupsQueryParams.prototype, "briefRepresentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" }),
        __metadata("design:type", Number)
    ], GetRealmUsersIdGroupsQueryParams.prototype, "first", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], GetRealmUsersIdGroupsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetRealmUsersIdGroupsQueryParams.prototype, "search", void 0);
    return GetRealmUsersIdGroupsQueryParams;
}(SpeakeasyBase));
export { GetRealmUsersIdGroupsQueryParams };
var GetRealmUsersIdGroupsRequest = /** @class */ (function (_super) {
    __extends(GetRealmUsersIdGroupsRequest, _super);
    function GetRealmUsersIdGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmUsersIdGroupsPathParams)
    ], GetRealmUsersIdGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmUsersIdGroupsQueryParams)
    ], GetRealmUsersIdGroupsRequest.prototype, "queryParams", void 0);
    return GetRealmUsersIdGroupsRequest;
}(SpeakeasyBase));
export { GetRealmUsersIdGroupsRequest };
var GetRealmUsersIdGroupsResponse = /** @class */ (function (_super) {
    __extends(GetRealmUsersIdGroupsResponse, _super);
    function GetRealmUsersIdGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmUsersIdGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.GroupRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmUsersIdGroupsResponse.prototype, "groupRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmUsersIdGroupsResponse.prototype, "statusCode", void 0);
    return GetRealmUsersIdGroupsResponse;
}(SpeakeasyBase));
export { GetRealmUsersIdGroupsResponse };
