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
var GetWorkspaceIdMembersMemberIdActivitiesPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdActivitiesPathParams, _super);
    function GetWorkspaceIdMembersMemberIdActivitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdActivitiesPathParams.prototype, "memberId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdActivitiesPathParams.prototype, "workspaceId", void 0);
    return GetWorkspaceIdMembersMemberIdActivitiesPathParams;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdActivitiesPathParams };
export var GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum;
(function (GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum) {
    GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum["Asc"] = "ASC";
    GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum["Desc"] = "DESC";
})(GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum || (GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum = {}));
export var GetWorkspaceIdMembersMemberIdActivitiesItemsEnum;
(function (GetWorkspaceIdMembersMemberIdActivitiesItemsEnum) {
    GetWorkspaceIdMembersMemberIdActivitiesItemsEnum["Ten"] = "10";
    GetWorkspaceIdMembersMemberIdActivitiesItemsEnum["Fifty"] = "50";
    GetWorkspaceIdMembersMemberIdActivitiesItemsEnum["OneHundred"] = "100";
})(GetWorkspaceIdMembersMemberIdActivitiesItemsEnum || (GetWorkspaceIdMembersMemberIdActivitiesItemsEnum = {}));
export var GetWorkspaceIdMembersMemberIdActivitiesSortEnum;
(function (GetWorkspaceIdMembersMemberIdActivitiesSortEnum) {
    GetWorkspaceIdMembersMemberIdActivitiesSortEnum["OccurredAt"] = "occurred_at";
    GetWorkspaceIdMembersMemberIdActivitiesSortEnum["Member"] = "member";
})(GetWorkspaceIdMembersMemberIdActivitiesSortEnum || (GetWorkspaceIdMembersMemberIdActivitiesSortEnum = {}));
var GetWorkspaceIdMembersMemberIdActivitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdActivitiesQueryParams, _super);
    function GetWorkspaceIdMembersMemberIdActivitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activity_type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdActivitiesQueryParams.prototype, "activityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdActivitiesQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=items" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdActivitiesQueryParams.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdActivitiesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdActivitiesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdActivitiesQueryParams.prototype, "type", void 0);
    return GetWorkspaceIdMembersMemberIdActivitiesQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdActivitiesQueryParams };
var GetWorkspaceIdMembersMemberIdActivitiesSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdActivitiesSecurity, _super);
    function GetWorkspaceIdMembersMemberIdActivitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], GetWorkspaceIdMembersMemberIdActivitiesSecurity.prototype, "bearer", void 0);
    return GetWorkspaceIdMembersMemberIdActivitiesSecurity;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdActivitiesSecurity };
var GetWorkspaceIdMembersMemberIdActivitiesRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdActivitiesRequest, _super);
    function GetWorkspaceIdMembersMemberIdActivitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdMembersMemberIdActivitiesPathParams)
    ], GetWorkspaceIdMembersMemberIdActivitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdMembersMemberIdActivitiesQueryParams)
    ], GetWorkspaceIdMembersMemberIdActivitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdMembersMemberIdActivitiesSecurity)
    ], GetWorkspaceIdMembersMemberIdActivitiesRequest.prototype, "security", void 0);
    return GetWorkspaceIdMembersMemberIdActivitiesRequest;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdActivitiesRequest };
var GetWorkspaceIdMembersMemberIdActivitiesResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersMemberIdActivitiesResponse, _super);
    function GetWorkspaceIdMembersMemberIdActivitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersMemberIdActivitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceIdMembersMemberIdActivitiesResponse.prototype, "statusCode", void 0);
    return GetWorkspaceIdMembersMemberIdActivitiesResponse;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersMemberIdActivitiesResponse };
