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
var GetFloatingIpsIdActionsPathParams = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsPathParams, _super);
    function GetFloatingIpsIdActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActionsPathParams.prototype, "id", void 0);
    return GetFloatingIpsIdActionsPathParams;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsPathParams };
export var GetFloatingIpsIdActionsSortParameterSortEnum;
(function (GetFloatingIpsIdActionsSortParameterSortEnum) {
    GetFloatingIpsIdActionsSortParameterSortEnum["Id"] = "id";
    GetFloatingIpsIdActionsSortParameterSortEnum["IdAsc"] = "id:asc";
    GetFloatingIpsIdActionsSortParameterSortEnum["IdDesc"] = "id:desc";
    GetFloatingIpsIdActionsSortParameterSortEnum["Command"] = "command";
    GetFloatingIpsIdActionsSortParameterSortEnum["CommandAsc"] = "command:asc";
    GetFloatingIpsIdActionsSortParameterSortEnum["CommandDesc"] = "command:desc";
    GetFloatingIpsIdActionsSortParameterSortEnum["Status"] = "status";
    GetFloatingIpsIdActionsSortParameterSortEnum["StatusAsc"] = "status:asc";
    GetFloatingIpsIdActionsSortParameterSortEnum["StatusDesc"] = "status:desc";
    GetFloatingIpsIdActionsSortParameterSortEnum["Progress"] = "progress";
    GetFloatingIpsIdActionsSortParameterSortEnum["ProgressAsc"] = "progress:asc";
    GetFloatingIpsIdActionsSortParameterSortEnum["ProgressDesc"] = "progress:desc";
    GetFloatingIpsIdActionsSortParameterSortEnum["Started"] = "started";
    GetFloatingIpsIdActionsSortParameterSortEnum["StartedAsc"] = "started:asc";
    GetFloatingIpsIdActionsSortParameterSortEnum["StartedDesc"] = "started:desc";
    GetFloatingIpsIdActionsSortParameterSortEnum["Finished"] = "finished";
    GetFloatingIpsIdActionsSortParameterSortEnum["FinishedAsc"] = "finished:asc";
    GetFloatingIpsIdActionsSortParameterSortEnum["FinishedDesc"] = "finished:desc";
})(GetFloatingIpsIdActionsSortParameterSortEnum || (GetFloatingIpsIdActionsSortParameterSortEnum = {}));
export var GetFloatingIpsIdActionsStatusParameterStatusEnum;
(function (GetFloatingIpsIdActionsStatusParameterStatusEnum) {
    GetFloatingIpsIdActionsStatusParameterStatusEnum["Running"] = "running";
    GetFloatingIpsIdActionsStatusParameterStatusEnum["Success"] = "success";
    GetFloatingIpsIdActionsStatusParameterStatusEnum["Error"] = "error";
})(GetFloatingIpsIdActionsStatusParameterStatusEnum || (GetFloatingIpsIdActionsStatusParameterStatusEnum = {}));
var GetFloatingIpsIdActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsQueryParams, _super);
    function GetFloatingIpsIdActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsQueryParams.prototype, "status", void 0);
    return GetFloatingIpsIdActionsQueryParams;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsQueryParams };
// GetFloatingIpsIdActions200ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetFloatingIpsIdActions200ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActions200ApplicationJsonActionError, _super);
    function GetFloatingIpsIdActions200ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActions200ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActions200ApplicationJsonActionError.prototype, "message", void 0);
    return GetFloatingIpsIdActions200ApplicationJsonActionError;
}(SpeakeasyBase));
export { GetFloatingIpsIdActions200ApplicationJsonActionError };
var GetFloatingIpsIdActions200ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActions200ApplicationJsonActionResources, _super);
    function GetFloatingIpsIdActions200ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActions200ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActions200ApplicationJsonActionResources.prototype, "type", void 0);
    return GetFloatingIpsIdActions200ApplicationJsonActionResources;
}(SpeakeasyBase));
export { GetFloatingIpsIdActions200ApplicationJsonActionResources };
export var GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum;
(function (GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum) {
    GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum["Success"] = "success";
    GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum["Running"] = "running";
    GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum["Error"] = "error";
})(GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum || (GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum = {}));
var GetFloatingIpsIdActions200ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActions200ApplicationJsonAction, _super);
    function GetFloatingIpsIdActions200ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActions200ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetFloatingIpsIdActions200ApplicationJsonActionError)
    ], GetFloatingIpsIdActions200ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActions200ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActions200ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActions200ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetFloatingIpsIdActions200ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], GetFloatingIpsIdActions200ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActions200ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActions200ApplicationJsonAction.prototype, "status", void 0);
    return GetFloatingIpsIdActions200ApplicationJsonAction;
}(SpeakeasyBase));
export { GetFloatingIpsIdActions200ApplicationJsonAction };
var GetFloatingIpsIdActions200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActions200ApplicationJson, _super);
    function GetFloatingIpsIdActions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: GetFloatingIpsIdActions200ApplicationJsonAction }),
        __metadata("design:type", Array)
    ], GetFloatingIpsIdActions200ApplicationJson.prototype, "actions", void 0);
    return GetFloatingIpsIdActions200ApplicationJson;
}(SpeakeasyBase));
export { GetFloatingIpsIdActions200ApplicationJson };
var GetFloatingIpsIdActionsRequest = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsRequest, _super);
    function GetFloatingIpsIdActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFloatingIpsIdActionsPathParams)
    ], GetFloatingIpsIdActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFloatingIpsIdActionsQueryParams)
    ], GetFloatingIpsIdActionsRequest.prototype, "queryParams", void 0);
    return GetFloatingIpsIdActionsRequest;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsRequest };
var GetFloatingIpsIdActionsResponse = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsResponse, _super);
    function GetFloatingIpsIdActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFloatingIpsIdActions200ApplicationJson)
    ], GetFloatingIpsIdActionsResponse.prototype, "getFloatingIpsIdActions200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActionsResponse.prototype, "statusCode", void 0);
    return GetFloatingIpsIdActionsResponse;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsResponse };
