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
var GetServersIdActionsPathParams = /** @class */ (function (_super) {
    __extends(GetServersIdActionsPathParams, _super);
    function GetServersIdActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsPathParams.prototype, "id", void 0);
    return GetServersIdActionsPathParams;
}(SpeakeasyBase));
export { GetServersIdActionsPathParams };
export var GetServersIdActionsSortParameterSortEnum;
(function (GetServersIdActionsSortParameterSortEnum) {
    GetServersIdActionsSortParameterSortEnum["Id"] = "id";
    GetServersIdActionsSortParameterSortEnum["IdAsc"] = "id:asc";
    GetServersIdActionsSortParameterSortEnum["IdDesc"] = "id:desc";
    GetServersIdActionsSortParameterSortEnum["Command"] = "command";
    GetServersIdActionsSortParameterSortEnum["CommandAsc"] = "command:asc";
    GetServersIdActionsSortParameterSortEnum["CommandDesc"] = "command:desc";
    GetServersIdActionsSortParameterSortEnum["Status"] = "status";
    GetServersIdActionsSortParameterSortEnum["StatusAsc"] = "status:asc";
    GetServersIdActionsSortParameterSortEnum["StatusDesc"] = "status:desc";
    GetServersIdActionsSortParameterSortEnum["Progress"] = "progress";
    GetServersIdActionsSortParameterSortEnum["ProgressAsc"] = "progress:asc";
    GetServersIdActionsSortParameterSortEnum["ProgressDesc"] = "progress:desc";
    GetServersIdActionsSortParameterSortEnum["Started"] = "started";
    GetServersIdActionsSortParameterSortEnum["StartedAsc"] = "started:asc";
    GetServersIdActionsSortParameterSortEnum["StartedDesc"] = "started:desc";
    GetServersIdActionsSortParameterSortEnum["Finished"] = "finished";
    GetServersIdActionsSortParameterSortEnum["FinishedAsc"] = "finished:asc";
    GetServersIdActionsSortParameterSortEnum["FinishedDesc"] = "finished:desc";
})(GetServersIdActionsSortParameterSortEnum || (GetServersIdActionsSortParameterSortEnum = {}));
export var GetServersIdActionsStatusParameterStatusEnum;
(function (GetServersIdActionsStatusParameterStatusEnum) {
    GetServersIdActionsStatusParameterStatusEnum["Running"] = "running";
    GetServersIdActionsStatusParameterStatusEnum["Success"] = "success";
    GetServersIdActionsStatusParameterStatusEnum["Error"] = "error";
})(GetServersIdActionsStatusParameterStatusEnum || (GetServersIdActionsStatusParameterStatusEnum = {}));
var GetServersIdActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetServersIdActionsQueryParams, _super);
    function GetServersIdActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetServersIdActionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetServersIdActionsQueryParams.prototype, "status", void 0);
    return GetServersIdActionsQueryParams;
}(SpeakeasyBase));
export { GetServersIdActionsQueryParams };
// GetServersIdActionsActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetServersIdActionsActionsResponseActionError = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionsResponseActionError, _super);
    function GetServersIdActionsActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionsResponseActionError.prototype, "message", void 0);
    return GetServersIdActionsActionsResponseActionError;
}(SpeakeasyBase));
export { GetServersIdActionsActionsResponseActionError };
var GetServersIdActionsActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionsResponseActionResources, _super);
    function GetServersIdActionsActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionsResponseActionResources.prototype, "type", void 0);
    return GetServersIdActionsActionsResponseActionResources;
}(SpeakeasyBase));
export { GetServersIdActionsActionsResponseActionResources };
export var GetServersIdActionsActionsResponseActionStatusEnum;
(function (GetServersIdActionsActionsResponseActionStatusEnum) {
    GetServersIdActionsActionsResponseActionStatusEnum["Success"] = "success";
    GetServersIdActionsActionsResponseActionStatusEnum["Running"] = "running";
    GetServersIdActionsActionsResponseActionStatusEnum["Error"] = "error";
})(GetServersIdActionsActionsResponseActionStatusEnum || (GetServersIdActionsActionsResponseActionStatusEnum = {}));
var GetServersIdActionsActionsResponseAction = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionsResponseAction, _super);
    function GetServersIdActionsActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetServersIdActionsActionsResponseActionError)
    ], GetServersIdActionsActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetServersIdActionsActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], GetServersIdActionsActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionsResponseAction.prototype, "status", void 0);
    return GetServersIdActionsActionsResponseAction;
}(SpeakeasyBase));
export { GetServersIdActionsActionsResponseAction };
var GetServersIdActionsActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionsResponseMetaPagination, _super);
    function GetServersIdActionsActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetServersIdActionsActionsResponseMetaPagination;
}(SpeakeasyBase));
export { GetServersIdActionsActionsResponseMetaPagination };
var GetServersIdActionsActionsResponseMeta = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionsResponseMeta, _super);
    function GetServersIdActionsActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetServersIdActionsActionsResponseMetaPagination)
    ], GetServersIdActionsActionsResponseMeta.prototype, "pagination", void 0);
    return GetServersIdActionsActionsResponseMeta;
}(SpeakeasyBase));
export { GetServersIdActionsActionsResponseMeta };
var GetServersIdActionsActionsResponse = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionsResponse, _super);
    function GetServersIdActionsActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: GetServersIdActionsActionsResponseAction }),
        __metadata("design:type", Array)
    ], GetServersIdActionsActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetServersIdActionsActionsResponseMeta)
    ], GetServersIdActionsActionsResponse.prototype, "meta", void 0);
    return GetServersIdActionsActionsResponse;
}(SpeakeasyBase));
export { GetServersIdActionsActionsResponse };
var GetServersIdActionsRequest = /** @class */ (function (_super) {
    __extends(GetServersIdActionsRequest, _super);
    function GetServersIdActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersIdActionsPathParams)
    ], GetServersIdActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersIdActionsQueryParams)
    ], GetServersIdActionsRequest.prototype, "queryParams", void 0);
    return GetServersIdActionsRequest;
}(SpeakeasyBase));
export { GetServersIdActionsRequest };
var GetServersIdActionsResponse = /** @class */ (function (_super) {
    __extends(GetServersIdActionsResponse, _super);
    function GetServersIdActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersIdActionsActionsResponse)
    ], GetServersIdActionsResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetServersIdActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetServersIdActionsResponse.prototype, "statusCode", void 0);
    return GetServersIdActionsResponse;
}(SpeakeasyBase));
export { GetServersIdActionsResponse };
