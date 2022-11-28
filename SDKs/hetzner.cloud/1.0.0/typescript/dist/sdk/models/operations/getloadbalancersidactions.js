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
var GetLoadBalancersIdActionsPathParams = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsPathParams, _super);
    function GetLoadBalancersIdActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsPathParams.prototype, "id", void 0);
    return GetLoadBalancersIdActionsPathParams;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsPathParams };
export var GetLoadBalancersIdActionsSortParameterSortEnum;
(function (GetLoadBalancersIdActionsSortParameterSortEnum) {
    GetLoadBalancersIdActionsSortParameterSortEnum["Id"] = "id";
    GetLoadBalancersIdActionsSortParameterSortEnum["IdAsc"] = "id:asc";
    GetLoadBalancersIdActionsSortParameterSortEnum["IdDesc"] = "id:desc";
    GetLoadBalancersIdActionsSortParameterSortEnum["Command"] = "command";
    GetLoadBalancersIdActionsSortParameterSortEnum["CommandAsc"] = "command:asc";
    GetLoadBalancersIdActionsSortParameterSortEnum["CommandDesc"] = "command:desc";
    GetLoadBalancersIdActionsSortParameterSortEnum["Status"] = "status";
    GetLoadBalancersIdActionsSortParameterSortEnum["StatusAsc"] = "status:asc";
    GetLoadBalancersIdActionsSortParameterSortEnum["StatusDesc"] = "status:desc";
    GetLoadBalancersIdActionsSortParameterSortEnum["Progress"] = "progress";
    GetLoadBalancersIdActionsSortParameterSortEnum["ProgressAsc"] = "progress:asc";
    GetLoadBalancersIdActionsSortParameterSortEnum["ProgressDesc"] = "progress:desc";
    GetLoadBalancersIdActionsSortParameterSortEnum["Started"] = "started";
    GetLoadBalancersIdActionsSortParameterSortEnum["StartedAsc"] = "started:asc";
    GetLoadBalancersIdActionsSortParameterSortEnum["StartedDesc"] = "started:desc";
    GetLoadBalancersIdActionsSortParameterSortEnum["Finished"] = "finished";
    GetLoadBalancersIdActionsSortParameterSortEnum["FinishedAsc"] = "finished:asc";
    GetLoadBalancersIdActionsSortParameterSortEnum["FinishedDesc"] = "finished:desc";
})(GetLoadBalancersIdActionsSortParameterSortEnum || (GetLoadBalancersIdActionsSortParameterSortEnum = {}));
export var GetLoadBalancersIdActionsStatusParameterStatusEnum;
(function (GetLoadBalancersIdActionsStatusParameterStatusEnum) {
    GetLoadBalancersIdActionsStatusParameterStatusEnum["Running"] = "running";
    GetLoadBalancersIdActionsStatusParameterStatusEnum["Success"] = "success";
    GetLoadBalancersIdActionsStatusParameterStatusEnum["Error"] = "error";
})(GetLoadBalancersIdActionsStatusParameterStatusEnum || (GetLoadBalancersIdActionsStatusParameterStatusEnum = {}));
var GetLoadBalancersIdActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsQueryParams, _super);
    function GetLoadBalancersIdActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsQueryParams.prototype, "status", void 0);
    return GetLoadBalancersIdActionsQueryParams;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsQueryParams };
// GetLoadBalancersIdActionsActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetLoadBalancersIdActionsActionsResponseActionError = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionsResponseActionError, _super);
    function GetLoadBalancersIdActionsActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionsResponseActionError.prototype, "message", void 0);
    return GetLoadBalancersIdActionsActionsResponseActionError;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsActionsResponseActionError };
var GetLoadBalancersIdActionsActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionsResponseActionResources, _super);
    function GetLoadBalancersIdActionsActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionsResponseActionResources.prototype, "type", void 0);
    return GetLoadBalancersIdActionsActionsResponseActionResources;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsActionsResponseActionResources };
export var GetLoadBalancersIdActionsActionsResponseActionStatusEnum;
(function (GetLoadBalancersIdActionsActionsResponseActionStatusEnum) {
    GetLoadBalancersIdActionsActionsResponseActionStatusEnum["Success"] = "success";
    GetLoadBalancersIdActionsActionsResponseActionStatusEnum["Running"] = "running";
    GetLoadBalancersIdActionsActionsResponseActionStatusEnum["Error"] = "error";
})(GetLoadBalancersIdActionsActionsResponseActionStatusEnum || (GetLoadBalancersIdActionsActionsResponseActionStatusEnum = {}));
var GetLoadBalancersIdActionsActionsResponseAction = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionsResponseAction, _super);
    function GetLoadBalancersIdActionsActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetLoadBalancersIdActionsActionsResponseActionError)
    ], GetLoadBalancersIdActionsActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetLoadBalancersIdActionsActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], GetLoadBalancersIdActionsActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsActionsResponseAction.prototype, "status", void 0);
    return GetLoadBalancersIdActionsActionsResponseAction;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsActionsResponseAction };
var GetLoadBalancersIdActionsActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionsResponseMetaPagination, _super);
    function GetLoadBalancersIdActionsActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetLoadBalancersIdActionsActionsResponseMetaPagination;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsActionsResponseMetaPagination };
var GetLoadBalancersIdActionsActionsResponseMeta = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionsResponseMeta, _super);
    function GetLoadBalancersIdActionsActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetLoadBalancersIdActionsActionsResponseMetaPagination)
    ], GetLoadBalancersIdActionsActionsResponseMeta.prototype, "pagination", void 0);
    return GetLoadBalancersIdActionsActionsResponseMeta;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsActionsResponseMeta };
var GetLoadBalancersIdActionsActionsResponse = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsActionsResponse, _super);
    function GetLoadBalancersIdActionsActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: GetLoadBalancersIdActionsActionsResponseAction }),
        __metadata("design:type", Array)
    ], GetLoadBalancersIdActionsActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetLoadBalancersIdActionsActionsResponseMeta)
    ], GetLoadBalancersIdActionsActionsResponse.prototype, "meta", void 0);
    return GetLoadBalancersIdActionsActionsResponse;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsActionsResponse };
var GetLoadBalancersIdActionsRequest = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsRequest, _super);
    function GetLoadBalancersIdActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancersIdActionsPathParams)
    ], GetLoadBalancersIdActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancersIdActionsQueryParams)
    ], GetLoadBalancersIdActionsRequest.prototype, "queryParams", void 0);
    return GetLoadBalancersIdActionsRequest;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsRequest };
var GetLoadBalancersIdActionsResponse = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdActionsResponse, _super);
    function GetLoadBalancersIdActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancersIdActionsActionsResponse)
    ], GetLoadBalancersIdActionsResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLoadBalancersIdActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdActionsResponse.prototype, "statusCode", void 0);
    return GetLoadBalancersIdActionsResponse;
}(SpeakeasyBase));
export { GetLoadBalancersIdActionsResponse };
