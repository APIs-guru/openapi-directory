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
var GetImagesIdActionsPathParams = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsPathParams, _super);
    function GetImagesIdActionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsPathParams.prototype, "id", void 0);
    return GetImagesIdActionsPathParams;
}(SpeakeasyBase));
export { GetImagesIdActionsPathParams };
export var GetImagesIdActionsSortParameterSortEnum;
(function (GetImagesIdActionsSortParameterSortEnum) {
    GetImagesIdActionsSortParameterSortEnum["Id"] = "id";
    GetImagesIdActionsSortParameterSortEnum["IdAsc"] = "id:asc";
    GetImagesIdActionsSortParameterSortEnum["IdDesc"] = "id:desc";
    GetImagesIdActionsSortParameterSortEnum["Command"] = "command";
    GetImagesIdActionsSortParameterSortEnum["CommandAsc"] = "command:asc";
    GetImagesIdActionsSortParameterSortEnum["CommandDesc"] = "command:desc";
    GetImagesIdActionsSortParameterSortEnum["Status"] = "status";
    GetImagesIdActionsSortParameterSortEnum["StatusAsc"] = "status:asc";
    GetImagesIdActionsSortParameterSortEnum["StatusDesc"] = "status:desc";
    GetImagesIdActionsSortParameterSortEnum["Progress"] = "progress";
    GetImagesIdActionsSortParameterSortEnum["ProgressAsc"] = "progress:asc";
    GetImagesIdActionsSortParameterSortEnum["ProgressDesc"] = "progress:desc";
    GetImagesIdActionsSortParameterSortEnum["Started"] = "started";
    GetImagesIdActionsSortParameterSortEnum["StartedAsc"] = "started:asc";
    GetImagesIdActionsSortParameterSortEnum["StartedDesc"] = "started:desc";
    GetImagesIdActionsSortParameterSortEnum["Finished"] = "finished";
    GetImagesIdActionsSortParameterSortEnum["FinishedAsc"] = "finished:asc";
    GetImagesIdActionsSortParameterSortEnum["FinishedDesc"] = "finished:desc";
})(GetImagesIdActionsSortParameterSortEnum || (GetImagesIdActionsSortParameterSortEnum = {}));
export var GetImagesIdActionsStatusParameterStatusEnum;
(function (GetImagesIdActionsStatusParameterStatusEnum) {
    GetImagesIdActionsStatusParameterStatusEnum["Running"] = "running";
    GetImagesIdActionsStatusParameterStatusEnum["Success"] = "success";
    GetImagesIdActionsStatusParameterStatusEnum["Error"] = "error";
})(GetImagesIdActionsStatusParameterStatusEnum || (GetImagesIdActionsStatusParameterStatusEnum = {}));
var GetImagesIdActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsQueryParams, _super);
    function GetImagesIdActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsQueryParams.prototype, "status", void 0);
    return GetImagesIdActionsQueryParams;
}(SpeakeasyBase));
export { GetImagesIdActionsQueryParams };
// GetImagesIdActionsActionsResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetImagesIdActionsActionsResponseActionError = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionsResponseActionError, _super);
    function GetImagesIdActionsActionsResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionsResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionsResponseActionError.prototype, "message", void 0);
    return GetImagesIdActionsActionsResponseActionError;
}(SpeakeasyBase));
export { GetImagesIdActionsActionsResponseActionError };
var GetImagesIdActionsActionsResponseActionResources = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionsResponseActionResources, _super);
    function GetImagesIdActionsActionsResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionsResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionsResponseActionResources.prototype, "type", void 0);
    return GetImagesIdActionsActionsResponseActionResources;
}(SpeakeasyBase));
export { GetImagesIdActionsActionsResponseActionResources };
export var GetImagesIdActionsActionsResponseActionStatusEnum;
(function (GetImagesIdActionsActionsResponseActionStatusEnum) {
    GetImagesIdActionsActionsResponseActionStatusEnum["Success"] = "success";
    GetImagesIdActionsActionsResponseActionStatusEnum["Running"] = "running";
    GetImagesIdActionsActionsResponseActionStatusEnum["Error"] = "error";
})(GetImagesIdActionsActionsResponseActionStatusEnum || (GetImagesIdActionsActionsResponseActionStatusEnum = {}));
var GetImagesIdActionsActionsResponseAction = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionsResponseAction, _super);
    function GetImagesIdActionsActionsResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionsResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetImagesIdActionsActionsResponseActionError)
    ], GetImagesIdActionsActionsResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionsResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionsResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionsResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetImagesIdActionsActionsResponseActionResources }),
        __metadata("design:type", Array)
    ], GetImagesIdActionsActionsResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionsResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionsResponseAction.prototype, "status", void 0);
    return GetImagesIdActionsActionsResponseAction;
}(SpeakeasyBase));
export { GetImagesIdActionsActionsResponseAction };
var GetImagesIdActionsActionsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionsResponseMetaPagination, _super);
    function GetImagesIdActionsActionsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetImagesIdActionsActionsResponseMetaPagination;
}(SpeakeasyBase));
export { GetImagesIdActionsActionsResponseMetaPagination };
var GetImagesIdActionsActionsResponseMeta = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionsResponseMeta, _super);
    function GetImagesIdActionsActionsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetImagesIdActionsActionsResponseMetaPagination)
    ], GetImagesIdActionsActionsResponseMeta.prototype, "pagination", void 0);
    return GetImagesIdActionsActionsResponseMeta;
}(SpeakeasyBase));
export { GetImagesIdActionsActionsResponseMeta };
var GetImagesIdActionsActionsResponse = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionsResponse, _super);
    function GetImagesIdActionsActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: GetImagesIdActionsActionsResponseAction }),
        __metadata("design:type", Array)
    ], GetImagesIdActionsActionsResponse.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetImagesIdActionsActionsResponseMeta)
    ], GetImagesIdActionsActionsResponse.prototype, "meta", void 0);
    return GetImagesIdActionsActionsResponse;
}(SpeakeasyBase));
export { GetImagesIdActionsActionsResponse };
var GetImagesIdActionsRequest = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsRequest, _super);
    function GetImagesIdActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesIdActionsPathParams)
    ], GetImagesIdActionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesIdActionsQueryParams)
    ], GetImagesIdActionsRequest.prototype, "queryParams", void 0);
    return GetImagesIdActionsRequest;
}(SpeakeasyBase));
export { GetImagesIdActionsRequest };
var GetImagesIdActionsResponse = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsResponse, _super);
    function GetImagesIdActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesIdActionsActionsResponse)
    ], GetImagesIdActionsResponse.prototype, "actionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetImagesIdActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagesIdActionsResponse.prototype, "statusCode", void 0);
    return GetImagesIdActionsResponse;
}(SpeakeasyBase));
export { GetImagesIdActionsResponse };
