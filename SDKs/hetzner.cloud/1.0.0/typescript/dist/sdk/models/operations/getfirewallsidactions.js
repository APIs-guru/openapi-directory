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
var GetFirewallsIdActionsPathParams = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsPathParams, _super);
    function GetFirewallsIdActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsPathParams.prototype, "id", void 0);
    return GetFirewallsIdActionsPathParams;
}(SpeakeasyBase));
export { GetFirewallsIdActionsPathParams };
export var GetFirewallsIdActionsSortParameterSortEnum;
(function (GetFirewallsIdActionsSortParameterSortEnum) {
    GetFirewallsIdActionsSortParameterSortEnum["Id"] = "id";
    GetFirewallsIdActionsSortParameterSortEnum["IdAsc"] = "id:asc";
    GetFirewallsIdActionsSortParameterSortEnum["IdDesc"] = "id:desc";
    GetFirewallsIdActionsSortParameterSortEnum["Command"] = "command";
    GetFirewallsIdActionsSortParameterSortEnum["CommandAsc"] = "command:asc";
    GetFirewallsIdActionsSortParameterSortEnum["CommandDesc"] = "command:desc";
    GetFirewallsIdActionsSortParameterSortEnum["Status"] = "status";
    GetFirewallsIdActionsSortParameterSortEnum["StatusAsc"] = "status:asc";
    GetFirewallsIdActionsSortParameterSortEnum["StatusDesc"] = "status:desc";
    GetFirewallsIdActionsSortParameterSortEnum["Progress"] = "progress";
    GetFirewallsIdActionsSortParameterSortEnum["ProgressAsc"] = "progress:asc";
    GetFirewallsIdActionsSortParameterSortEnum["ProgressDesc"] = "progress:desc";
    GetFirewallsIdActionsSortParameterSortEnum["Started"] = "started";
    GetFirewallsIdActionsSortParameterSortEnum["StartedAsc"] = "started:asc";
    GetFirewallsIdActionsSortParameterSortEnum["StartedDesc"] = "started:desc";
    GetFirewallsIdActionsSortParameterSortEnum["Finished"] = "finished";
    GetFirewallsIdActionsSortParameterSortEnum["FinishedAsc"] = "finished:asc";
    GetFirewallsIdActionsSortParameterSortEnum["FinishedDesc"] = "finished:desc";
})(GetFirewallsIdActionsSortParameterSortEnum || (GetFirewallsIdActionsSortParameterSortEnum = {}));
export var GetFirewallsIdActionsStatusParameterStatusEnum;
(function (GetFirewallsIdActionsStatusParameterStatusEnum) {
    GetFirewallsIdActionsStatusParameterStatusEnum["Running"] = "running";
    GetFirewallsIdActionsStatusParameterStatusEnum["Success"] = "success";
    GetFirewallsIdActionsStatusParameterStatusEnum["Error"] = "error";
})(GetFirewallsIdActionsStatusParameterStatusEnum || (GetFirewallsIdActionsStatusParameterStatusEnum = {}));
var GetFirewallsIdActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsQueryParams, _super);
    function GetFirewallsIdActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsQueryParams.prototype, "status", void 0);
    return GetFirewallsIdActionsQueryParams;
}(SpeakeasyBase));
export { GetFirewallsIdActionsQueryParams };
// GetFirewallsIdActionsActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetFirewallsIdActionsActionsResponseActionError = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionsResponseActionError, _super);
    function GetFirewallsIdActionsActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionsResponseActionError.prototype, "message", void 0);
    return GetFirewallsIdActionsActionsResponseActionError;
}(SpeakeasyBase));
export { GetFirewallsIdActionsActionsResponseActionError };
var GetFirewallsIdActionsActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionsResponseActionResources, _super);
    function GetFirewallsIdActionsActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionsResponseActionResources.prototype, "type", void 0);
    return GetFirewallsIdActionsActionsResponseActionResources;
}(SpeakeasyBase));
export { GetFirewallsIdActionsActionsResponseActionResources };
export var GetFirewallsIdActionsActionsResponseActionStatusEnum;
(function (GetFirewallsIdActionsActionsResponseActionStatusEnum) {
    GetFirewallsIdActionsActionsResponseActionStatusEnum["Success"] = "success";
    GetFirewallsIdActionsActionsResponseActionStatusEnum["Running"] = "running";
    GetFirewallsIdActionsActionsResponseActionStatusEnum["Error"] = "error";
})(GetFirewallsIdActionsActionsResponseActionStatusEnum || (GetFirewallsIdActionsActionsResponseActionStatusEnum = {}));
var GetFirewallsIdActionsActionsResponseAction = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionsResponseAction, _super);
    function GetFirewallsIdActionsActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetFirewallsIdActionsActionsResponseActionError)
    ], GetFirewallsIdActionsActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetFirewallsIdActionsActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], GetFirewallsIdActionsActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsActionsResponseAction.prototype, "status", void 0);
    return GetFirewallsIdActionsActionsResponseAction;
}(SpeakeasyBase));
export { GetFirewallsIdActionsActionsResponseAction };
var GetFirewallsIdActionsActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionsResponseMetaPagination, _super);
    function GetFirewallsIdActionsActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetFirewallsIdActionsActionsResponseMetaPagination;
}(SpeakeasyBase));
export { GetFirewallsIdActionsActionsResponseMetaPagination };
var GetFirewallsIdActionsActionsResponseMeta = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionsResponseMeta, _super);
    function GetFirewallsIdActionsActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetFirewallsIdActionsActionsResponseMetaPagination)
    ], GetFirewallsIdActionsActionsResponseMeta.prototype, "pagination", void 0);
    return GetFirewallsIdActionsActionsResponseMeta;
}(SpeakeasyBase));
export { GetFirewallsIdActionsActionsResponseMeta };
var GetFirewallsIdActionsActionsResponse = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsActionsResponse, _super);
    function GetFirewallsIdActionsActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: GetFirewallsIdActionsActionsResponseAction }),
        __metadata("design:type", Array)
    ], GetFirewallsIdActionsActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetFirewallsIdActionsActionsResponseMeta)
    ], GetFirewallsIdActionsActionsResponse.prototype, "meta", void 0);
    return GetFirewallsIdActionsActionsResponse;
}(SpeakeasyBase));
export { GetFirewallsIdActionsActionsResponse };
var GetFirewallsIdActionsRequest = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsRequest, _super);
    function GetFirewallsIdActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallsIdActionsPathParams)
    ], GetFirewallsIdActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallsIdActionsQueryParams)
    ], GetFirewallsIdActionsRequest.prototype, "queryParams", void 0);
    return GetFirewallsIdActionsRequest;
}(SpeakeasyBase));
export { GetFirewallsIdActionsRequest };
var GetFirewallsIdActionsResponse = /** @class */ (function (_super) {
    __extends(GetFirewallsIdActionsResponse, _super);
    function GetFirewallsIdActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallsIdActionsActionsResponse)
    ], GetFirewallsIdActionsResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallsIdActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFirewallsIdActionsResponse.prototype, "statusCode", void 0);
    return GetFirewallsIdActionsResponse;
}(SpeakeasyBase));
export { GetFirewallsIdActionsResponse };
