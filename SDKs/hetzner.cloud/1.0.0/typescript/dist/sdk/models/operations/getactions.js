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
export var GetActionsSortParameterSortEnum;
(function (GetActionsSortParameterSortEnum) {
    GetActionsSortParameterSortEnum["Id"] = "id";
    GetActionsSortParameterSortEnum["IdAsc"] = "id:asc";
    GetActionsSortParameterSortEnum["IdDesc"] = "id:desc";
    GetActionsSortParameterSortEnum["Command"] = "command";
    GetActionsSortParameterSortEnum["CommandAsc"] = "command:asc";
    GetActionsSortParameterSortEnum["CommandDesc"] = "command:desc";
    GetActionsSortParameterSortEnum["Status"] = "status";
    GetActionsSortParameterSortEnum["StatusAsc"] = "status:asc";
    GetActionsSortParameterSortEnum["StatusDesc"] = "status:desc";
    GetActionsSortParameterSortEnum["Progress"] = "progress";
    GetActionsSortParameterSortEnum["ProgressAsc"] = "progress:asc";
    GetActionsSortParameterSortEnum["ProgressDesc"] = "progress:desc";
    GetActionsSortParameterSortEnum["Started"] = "started";
    GetActionsSortParameterSortEnum["StartedAsc"] = "started:asc";
    GetActionsSortParameterSortEnum["StartedDesc"] = "started:desc";
    GetActionsSortParameterSortEnum["Finished"] = "finished";
    GetActionsSortParameterSortEnum["FinishedAsc"] = "finished:asc";
    GetActionsSortParameterSortEnum["FinishedDesc"] = "finished:desc";
})(GetActionsSortParameterSortEnum || (GetActionsSortParameterSortEnum = {}));
export var GetActionsStatusParameterStatusEnum;
(function (GetActionsStatusParameterStatusEnum) {
    GetActionsStatusParameterStatusEnum["Running"] = "running";
    GetActionsStatusParameterStatusEnum["Success"] = "success";
    GetActionsStatusParameterStatusEnum["Error"] = "error";
})(GetActionsStatusParameterStatusEnum || (GetActionsStatusParameterStatusEnum = {}));
var GetActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetActionsQueryParams, _super);
    function GetActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Number)
    ], GetActionsQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetActionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetActionsQueryParams.prototype, "status", void 0);
    return GetActionsQueryParams;
}(SpeakeasyBase));
export { GetActionsQueryParams };
// GetActionsActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetActionsActionsResponseActionError = /** @class */ (function (_super) {
    __extends(GetActionsActionsResponseActionError, _super);
    function GetActionsActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetActionsActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetActionsActionsResponseActionError.prototype, "message", void 0);
    return GetActionsActionsResponseActionError;
}(SpeakeasyBase));
export { GetActionsActionsResponseActionError };
var GetActionsActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(GetActionsActionsResponseActionResources, _super);
    function GetActionsActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetActionsActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetActionsActionsResponseActionResources.prototype, "type", void 0);
    return GetActionsActionsResponseActionResources;
}(SpeakeasyBase));
export { GetActionsActionsResponseActionResources };
export var GetActionsActionsResponseActionStatusEnum;
(function (GetActionsActionsResponseActionStatusEnum) {
    GetActionsActionsResponseActionStatusEnum["Success"] = "success";
    GetActionsActionsResponseActionStatusEnum["Running"] = "running";
    GetActionsActionsResponseActionStatusEnum["Error"] = "error";
})(GetActionsActionsResponseActionStatusEnum || (GetActionsActionsResponseActionStatusEnum = {}));
var GetActionsActionsResponseAction = /** @class */ (function (_super) {
    __extends(GetActionsActionsResponseAction, _super);
    function GetActionsActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetActionsActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetActionsActionsResponseActionError)
    ], GetActionsActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetActionsActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetActionsActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetActionsActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetActionsActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], GetActionsActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetActionsActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetActionsActionsResponseAction.prototype, "status", void 0);
    return GetActionsActionsResponseAction;
}(SpeakeasyBase));
export { GetActionsActionsResponseAction };
var GetActionsActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetActionsActionsResponseMetaPagination, _super);
    function GetActionsActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetActionsActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetActionsActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetActionsActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetActionsActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetActionsActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetActionsActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetActionsActionsResponseMetaPagination;
}(SpeakeasyBase));
export { GetActionsActionsResponseMetaPagination };
var GetActionsActionsResponseMeta = /** @class */ (function (_super) {
    __extends(GetActionsActionsResponseMeta, _super);
    function GetActionsActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetActionsActionsResponseMetaPagination)
    ], GetActionsActionsResponseMeta.prototype, "pagination", void 0);
    return GetActionsActionsResponseMeta;
}(SpeakeasyBase));
export { GetActionsActionsResponseMeta };
var GetActionsActionsResponse = /** @class */ (function (_super) {
    __extends(GetActionsActionsResponse, _super);
    function GetActionsActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: GetActionsActionsResponseAction }),
        __metadata("design:type", Array)
    ], GetActionsActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetActionsActionsResponseMeta)
    ], GetActionsActionsResponse.prototype, "meta", void 0);
    return GetActionsActionsResponse;
}(SpeakeasyBase));
export { GetActionsActionsResponse };
var GetActionsRequest = /** @class */ (function (_super) {
    __extends(GetActionsRequest, _super);
    function GetActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetActionsQueryParams)
    ], GetActionsRequest.prototype, "queryParams", void 0);
    return GetActionsRequest;
}(SpeakeasyBase));
export { GetActionsRequest };
var GetActionsResponse = /** @class */ (function (_super) {
    __extends(GetActionsResponse, _super);
    function GetActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetActionsActionsResponse)
    ], GetActionsResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetActionsResponse.prototype, "statusCode", void 0);
    return GetActionsResponse;
}(SpeakeasyBase));
export { GetActionsResponse };
