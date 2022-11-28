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
var GetNetworksIdActionsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsPathParams, _super);
    function GetNetworksIdActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsPathParams.prototype, "id", void 0);
    return GetNetworksIdActionsPathParams;
}(SpeakeasyBase));
export { GetNetworksIdActionsPathParams };
export var GetNetworksIdActionsSortParameterSortEnum;
(function (GetNetworksIdActionsSortParameterSortEnum) {
    GetNetworksIdActionsSortParameterSortEnum["Id"] = "id";
    GetNetworksIdActionsSortParameterSortEnum["IdAsc"] = "id:asc";
    GetNetworksIdActionsSortParameterSortEnum["IdDesc"] = "id:desc";
    GetNetworksIdActionsSortParameterSortEnum["Command"] = "command";
    GetNetworksIdActionsSortParameterSortEnum["CommandAsc"] = "command:asc";
    GetNetworksIdActionsSortParameterSortEnum["CommandDesc"] = "command:desc";
    GetNetworksIdActionsSortParameterSortEnum["Status"] = "status";
    GetNetworksIdActionsSortParameterSortEnum["StatusAsc"] = "status:asc";
    GetNetworksIdActionsSortParameterSortEnum["StatusDesc"] = "status:desc";
    GetNetworksIdActionsSortParameterSortEnum["Progress"] = "progress";
    GetNetworksIdActionsSortParameterSortEnum["ProgressAsc"] = "progress:asc";
    GetNetworksIdActionsSortParameterSortEnum["ProgressDesc"] = "progress:desc";
    GetNetworksIdActionsSortParameterSortEnum["Started"] = "started";
    GetNetworksIdActionsSortParameterSortEnum["StartedAsc"] = "started:asc";
    GetNetworksIdActionsSortParameterSortEnum["StartedDesc"] = "started:desc";
    GetNetworksIdActionsSortParameterSortEnum["Finished"] = "finished";
    GetNetworksIdActionsSortParameterSortEnum["FinishedAsc"] = "finished:asc";
    GetNetworksIdActionsSortParameterSortEnum["FinishedDesc"] = "finished:desc";
})(GetNetworksIdActionsSortParameterSortEnum || (GetNetworksIdActionsSortParameterSortEnum = {}));
export var GetNetworksIdActionsStatusParameterStatusEnum;
(function (GetNetworksIdActionsStatusParameterStatusEnum) {
    GetNetworksIdActionsStatusParameterStatusEnum["Running"] = "running";
    GetNetworksIdActionsStatusParameterStatusEnum["Success"] = "success";
    GetNetworksIdActionsStatusParameterStatusEnum["Error"] = "error";
})(GetNetworksIdActionsStatusParameterStatusEnum || (GetNetworksIdActionsStatusParameterStatusEnum = {}));
var GetNetworksIdActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsQueryParams, _super);
    function GetNetworksIdActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsQueryParams.prototype, "status", void 0);
    return GetNetworksIdActionsQueryParams;
}(SpeakeasyBase));
export { GetNetworksIdActionsQueryParams };
// GetNetworksIdActionsActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetNetworksIdActionsActionsResponseActionError = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionsResponseActionError, _super);
    function GetNetworksIdActionsActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionsResponseActionError.prototype, "message", void 0);
    return GetNetworksIdActionsActionsResponseActionError;
}(SpeakeasyBase));
export { GetNetworksIdActionsActionsResponseActionError };
var GetNetworksIdActionsActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionsResponseActionResources, _super);
    function GetNetworksIdActionsActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionsResponseActionResources.prototype, "type", void 0);
    return GetNetworksIdActionsActionsResponseActionResources;
}(SpeakeasyBase));
export { GetNetworksIdActionsActionsResponseActionResources };
export var GetNetworksIdActionsActionsResponseActionStatusEnum;
(function (GetNetworksIdActionsActionsResponseActionStatusEnum) {
    GetNetworksIdActionsActionsResponseActionStatusEnum["Success"] = "success";
    GetNetworksIdActionsActionsResponseActionStatusEnum["Running"] = "running";
    GetNetworksIdActionsActionsResponseActionStatusEnum["Error"] = "error";
})(GetNetworksIdActionsActionsResponseActionStatusEnum || (GetNetworksIdActionsActionsResponseActionStatusEnum = {}));
var GetNetworksIdActionsActionsResponseAction = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionsResponseAction, _super);
    function GetNetworksIdActionsActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetNetworksIdActionsActionsResponseActionError)
    ], GetNetworksIdActionsActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetNetworksIdActionsActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], GetNetworksIdActionsActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetNetworksIdActionsActionsResponseAction.prototype, "status", void 0);
    return GetNetworksIdActionsActionsResponseAction;
}(SpeakeasyBase));
export { GetNetworksIdActionsActionsResponseAction };
var GetNetworksIdActionsActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionsResponseMetaPagination, _super);
    function GetNetworksIdActionsActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetNetworksIdActionsActionsResponseMetaPagination;
}(SpeakeasyBase));
export { GetNetworksIdActionsActionsResponseMetaPagination };
var GetNetworksIdActionsActionsResponseMeta = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionsResponseMeta, _super);
    function GetNetworksIdActionsActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetNetworksIdActionsActionsResponseMetaPagination)
    ], GetNetworksIdActionsActionsResponseMeta.prototype, "pagination", void 0);
    return GetNetworksIdActionsActionsResponseMeta;
}(SpeakeasyBase));
export { GetNetworksIdActionsActionsResponseMeta };
var GetNetworksIdActionsActionsResponse = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsActionsResponse, _super);
    function GetNetworksIdActionsActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: GetNetworksIdActionsActionsResponseAction }),
        __metadata("design:type", Array)
    ], GetNetworksIdActionsActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetNetworksIdActionsActionsResponseMeta)
    ], GetNetworksIdActionsActionsResponse.prototype, "meta", void 0);
    return GetNetworksIdActionsActionsResponse;
}(SpeakeasyBase));
export { GetNetworksIdActionsActionsResponse };
var GetNetworksIdActionsRequest = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsRequest, _super);
    function GetNetworksIdActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworksIdActionsPathParams)
    ], GetNetworksIdActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworksIdActionsQueryParams)
    ], GetNetworksIdActionsRequest.prototype, "queryParams", void 0);
    return GetNetworksIdActionsRequest;
}(SpeakeasyBase));
export { GetNetworksIdActionsRequest };
var GetNetworksIdActionsResponse = /** @class */ (function (_super) {
    __extends(GetNetworksIdActionsResponse, _super);
    function GetNetworksIdActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworksIdActionsActionsResponse)
    ], GetNetworksIdActionsResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworksIdActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworksIdActionsResponse.prototype, "statusCode", void 0);
    return GetNetworksIdActionsResponse;
}(SpeakeasyBase));
export { GetNetworksIdActionsResponse };
