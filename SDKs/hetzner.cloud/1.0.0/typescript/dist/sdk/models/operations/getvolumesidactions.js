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
var GetVolumesIdActionsPathParams = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsPathParams, _super);
    function GetVolumesIdActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsPathParams.prototype, "id", void 0);
    return GetVolumesIdActionsPathParams;
}(SpeakeasyBase));
export { GetVolumesIdActionsPathParams };
export var GetVolumesIdActionsSortParameterSortEnum;
(function (GetVolumesIdActionsSortParameterSortEnum) {
    GetVolumesIdActionsSortParameterSortEnum["Id"] = "id";
    GetVolumesIdActionsSortParameterSortEnum["IdAsc"] = "id:asc";
    GetVolumesIdActionsSortParameterSortEnum["IdDesc"] = "id:desc";
    GetVolumesIdActionsSortParameterSortEnum["Command"] = "command";
    GetVolumesIdActionsSortParameterSortEnum["CommandAsc"] = "command:asc";
    GetVolumesIdActionsSortParameterSortEnum["CommandDesc"] = "command:desc";
    GetVolumesIdActionsSortParameterSortEnum["Status"] = "status";
    GetVolumesIdActionsSortParameterSortEnum["StatusAsc"] = "status:asc";
    GetVolumesIdActionsSortParameterSortEnum["StatusDesc"] = "status:desc";
    GetVolumesIdActionsSortParameterSortEnum["Progress"] = "progress";
    GetVolumesIdActionsSortParameterSortEnum["ProgressAsc"] = "progress:asc";
    GetVolumesIdActionsSortParameterSortEnum["ProgressDesc"] = "progress:desc";
    GetVolumesIdActionsSortParameterSortEnum["Started"] = "started";
    GetVolumesIdActionsSortParameterSortEnum["StartedAsc"] = "started:asc";
    GetVolumesIdActionsSortParameterSortEnum["StartedDesc"] = "started:desc";
    GetVolumesIdActionsSortParameterSortEnum["Finished"] = "finished";
    GetVolumesIdActionsSortParameterSortEnum["FinishedAsc"] = "finished:asc";
    GetVolumesIdActionsSortParameterSortEnum["FinishedDesc"] = "finished:desc";
})(GetVolumesIdActionsSortParameterSortEnum || (GetVolumesIdActionsSortParameterSortEnum = {}));
export var GetVolumesIdActionsStatusParameterStatusEnum;
(function (GetVolumesIdActionsStatusParameterStatusEnum) {
    GetVolumesIdActionsStatusParameterStatusEnum["Running"] = "running";
    GetVolumesIdActionsStatusParameterStatusEnum["Success"] = "success";
    GetVolumesIdActionsStatusParameterStatusEnum["Error"] = "error";
})(GetVolumesIdActionsStatusParameterStatusEnum || (GetVolumesIdActionsStatusParameterStatusEnum = {}));
var GetVolumesIdActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsQueryParams, _super);
    function GetVolumesIdActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsQueryParams.prototype, "status", void 0);
    return GetVolumesIdActionsQueryParams;
}(SpeakeasyBase));
export { GetVolumesIdActionsQueryParams };
// GetVolumesIdActionsActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetVolumesIdActionsActionsResponseActionError = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionsResponseActionError, _super);
    function GetVolumesIdActionsActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionsResponseActionError.prototype, "message", void 0);
    return GetVolumesIdActionsActionsResponseActionError;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionsResponseActionError };
var GetVolumesIdActionsActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionsResponseActionResources, _super);
    function GetVolumesIdActionsActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionsResponseActionResources.prototype, "type", void 0);
    return GetVolumesIdActionsActionsResponseActionResources;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionsResponseActionResources };
export var GetVolumesIdActionsActionsResponseActionStatusEnum;
(function (GetVolumesIdActionsActionsResponseActionStatusEnum) {
    GetVolumesIdActionsActionsResponseActionStatusEnum["Success"] = "success";
    GetVolumesIdActionsActionsResponseActionStatusEnum["Running"] = "running";
    GetVolumesIdActionsActionsResponseActionStatusEnum["Error"] = "error";
})(GetVolumesIdActionsActionsResponseActionStatusEnum || (GetVolumesIdActionsActionsResponseActionStatusEnum = {}));
var GetVolumesIdActionsActionsResponseAction = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionsResponseAction, _super);
    function GetVolumesIdActionsActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetVolumesIdActionsActionsResponseActionError)
    ], GetVolumesIdActionsActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetVolumesIdActionsActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], GetVolumesIdActionsActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionsResponseAction.prototype, "status", void 0);
    return GetVolumesIdActionsActionsResponseAction;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionsResponseAction };
var GetVolumesIdActionsActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionsResponseMetaPagination, _super);
    function GetVolumesIdActionsActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetVolumesIdActionsActionsResponseMetaPagination;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionsResponseMetaPagination };
var GetVolumesIdActionsActionsResponseMeta = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionsResponseMeta, _super);
    function GetVolumesIdActionsActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetVolumesIdActionsActionsResponseMetaPagination)
    ], GetVolumesIdActionsActionsResponseMeta.prototype, "pagination", void 0);
    return GetVolumesIdActionsActionsResponseMeta;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionsResponseMeta };
var GetVolumesIdActionsActionsResponse = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionsResponse, _super);
    function GetVolumesIdActionsActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: GetVolumesIdActionsActionsResponseAction }),
        __metadata("design:type", Array)
    ], GetVolumesIdActionsActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetVolumesIdActionsActionsResponseMeta)
    ], GetVolumesIdActionsActionsResponse.prototype, "meta", void 0);
    return GetVolumesIdActionsActionsResponse;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionsResponse };
var GetVolumesIdActionsRequest = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsRequest, _super);
    function GetVolumesIdActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesIdActionsPathParams)
    ], GetVolumesIdActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesIdActionsQueryParams)
    ], GetVolumesIdActionsRequest.prototype, "queryParams", void 0);
    return GetVolumesIdActionsRequest;
}(SpeakeasyBase));
export { GetVolumesIdActionsRequest };
var GetVolumesIdActionsResponse = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsResponse, _super);
    function GetVolumesIdActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesIdActionsActionsResponse)
    ], GetVolumesIdActionsResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVolumesIdActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsResponse.prototype, "statusCode", void 0);
    return GetVolumesIdActionsResponse;
}(SpeakeasyBase));
export { GetVolumesIdActionsResponse };
