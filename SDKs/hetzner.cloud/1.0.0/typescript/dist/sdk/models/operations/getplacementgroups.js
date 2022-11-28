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
export var GetPlacementGroupsSortEnum;
(function (GetPlacementGroupsSortEnum) {
    GetPlacementGroupsSortEnum["Id"] = "id";
    GetPlacementGroupsSortEnum["IdAsc"] = "id:asc";
    GetPlacementGroupsSortEnum["IdDesc"] = "id:desc";
    GetPlacementGroupsSortEnum["Name"] = "name";
    GetPlacementGroupsSortEnum["NameAsc"] = "name:asc";
    GetPlacementGroupsSortEnum["NameDesc"] = "name:desc";
    GetPlacementGroupsSortEnum["Created"] = "created";
    GetPlacementGroupsSortEnum["CreatedAsc"] = "created:asc";
    GetPlacementGroupsSortEnum["CreatedDesc"] = "created:desc";
})(GetPlacementGroupsSortEnum || (GetPlacementGroupsSortEnum = {}));
export var GetPlacementGroupsTypeParameterTypeEnum;
(function (GetPlacementGroupsTypeParameterTypeEnum) {
    GetPlacementGroupsTypeParameterTypeEnum["Spread"] = "spread";
})(GetPlacementGroupsTypeParameterTypeEnum || (GetPlacementGroupsTypeParameterTypeEnum = {}));
var GetPlacementGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsQueryParams, _super);
    function GetPlacementGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsQueryParams.prototype, "type", void 0);
    return GetPlacementGroupsQueryParams;
}(SpeakeasyBase));
export { GetPlacementGroupsQueryParams };
var GetPlacementGroupsPlacementGroupsResponseMetaPagination = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsPlacementGroupsResponseMetaPagination, _super);
    function GetPlacementGroupsPlacementGroupsResponseMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetPlacementGroupsPlacementGroupsResponseMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetPlacementGroupsPlacementGroupsResponseMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetPlacementGroupsPlacementGroupsResponseMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetPlacementGroupsPlacementGroupsResponseMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetPlacementGroupsPlacementGroupsResponseMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetPlacementGroupsPlacementGroupsResponseMetaPagination.prototype, "totalEntries", void 0);
    return GetPlacementGroupsPlacementGroupsResponseMetaPagination;
}(SpeakeasyBase));
export { GetPlacementGroupsPlacementGroupsResponseMetaPagination };
var GetPlacementGroupsPlacementGroupsResponseMeta = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsPlacementGroupsResponseMeta, _super);
    function GetPlacementGroupsPlacementGroupsResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetPlacementGroupsPlacementGroupsResponseMetaPagination)
    ], GetPlacementGroupsPlacementGroupsResponseMeta.prototype, "pagination", void 0);
    return GetPlacementGroupsPlacementGroupsResponseMeta;
}(SpeakeasyBase));
export { GetPlacementGroupsPlacementGroupsResponseMeta };
export var GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum;
(function (GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum) {
    GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum["Spread"] = "spread";
})(GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum || (GetPlacementGroupsPlacementGroupsResponsePlacementGroupTypeEnum = {}));
var GetPlacementGroupsPlacementGroupsResponsePlacementGroup = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsPlacementGroupsResponsePlacementGroup, _super);
    function GetPlacementGroupsPlacementGroupsResponsePlacementGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsPlacementGroupsResponsePlacementGroup.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetPlacementGroupsPlacementGroupsResponsePlacementGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetPlacementGroupsPlacementGroupsResponsePlacementGroup.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsPlacementGroupsResponsePlacementGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], GetPlacementGroupsPlacementGroupsResponsePlacementGroup.prototype, "servers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPlacementGroupsPlacementGroupsResponsePlacementGroup.prototype, "type", void 0);
    return GetPlacementGroupsPlacementGroupsResponsePlacementGroup;
}(SpeakeasyBase));
export { GetPlacementGroupsPlacementGroupsResponsePlacementGroup };
var GetPlacementGroupsPlacementGroupsResponse = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsPlacementGroupsResponse, _super);
    function GetPlacementGroupsPlacementGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetPlacementGroupsPlacementGroupsResponseMeta)
    ], GetPlacementGroupsPlacementGroupsResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement_groups", elemType: GetPlacementGroupsPlacementGroupsResponsePlacementGroup }),
        __metadata("design:type", Array)
    ], GetPlacementGroupsPlacementGroupsResponse.prototype, "placementGroups", void 0);
    return GetPlacementGroupsPlacementGroupsResponse;
}(SpeakeasyBase));
export { GetPlacementGroupsPlacementGroupsResponse };
var GetPlacementGroupsRequest = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsRequest, _super);
    function GetPlacementGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlacementGroupsQueryParams)
    ], GetPlacementGroupsRequest.prototype, "queryParams", void 0);
    return GetPlacementGroupsRequest;
}(SpeakeasyBase));
export { GetPlacementGroupsRequest };
var GetPlacementGroupsResponse = /** @class */ (function (_super) {
    __extends(GetPlacementGroupsResponse, _super);
    function GetPlacementGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPlacementGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlacementGroupsPlacementGroupsResponse)
    ], GetPlacementGroupsResponse.prototype, "placementGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPlacementGroupsResponse.prototype, "statusCode", void 0);
    return GetPlacementGroupsResponse;
}(SpeakeasyBase));
export { GetPlacementGroupsResponse };
