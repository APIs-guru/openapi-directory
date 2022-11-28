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
var GetItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetItemsQueryParams, _super);
    function GetItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", Date)
    ], GetItemsQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after_code" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "afterCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after_id" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "afterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_code" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "beforeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_id" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "beforeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code_hex" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "codeHex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_code" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "fromCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_id" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "fromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_only" }),
        __metadata("design:type", Boolean)
    ], GetItemsQueryParams.prototype, "idOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_present" }),
        __metadata("design:type", Boolean)
    ], GetItemsQueryParams.prototype, "isPresent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetItemsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadata" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=move_count" }),
        __metadata("design:type", Number)
    ], GetItemsQueryParams.prototype, "moveCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=populate" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "populate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=protocol" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results_only" }),
        __metadata("design:type", Boolean)
    ], GetItemsQueryParams.prototype, "resultsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sets" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "sets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=technology" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "technology", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_created" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_last_present" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "timeLastPresent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_moved" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "timeMoved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_updated" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "timeUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout_s" }),
        __metadata("design:type", Number)
    ], GetItemsQueryParams.prototype, "timeoutS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "until", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until_code" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "untilCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until_id" }),
        __metadata("design:type", String)
    ], GetItemsQueryParams.prototype, "untilId", void 0);
    return GetItemsQueryParams;
}(SpeakeasyBase));
export { GetItemsQueryParams };
var GetItems200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetItems200ApplicationJson, _super);
    function GetItems200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetItems200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_current" }),
        __metadata("design:type", Number)
    ], GetItems200ApplicationJson.prototype, "countCurrent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_limited" }),
        __metadata("design:type", Boolean)
    ], GetItems200ApplicationJson.prototype, "isLimited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_url" }),
        __metadata("design:type", String)
    ], GetItems200ApplicationJson.prototype, "nextUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_duration_ms" }),
        __metadata("design:type", Number)
    ], GetItems200ApplicationJson.prototype, "queryDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Item }),
        __metadata("design:type", Array)
    ], GetItems200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetItems200ApplicationJson.prototype, "url", void 0);
    return GetItems200ApplicationJson;
}(SpeakeasyBase));
export { GetItems200ApplicationJson };
var GetItemsRequest = /** @class */ (function (_super) {
    __extends(GetItemsRequest, _super);
    function GetItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemsQueryParams)
    ], GetItemsRequest.prototype, "queryParams", void 0);
    return GetItemsRequest;
}(SpeakeasyBase));
export { GetItemsRequest };
var GetItemsResponse = /** @class */ (function (_super) {
    __extends(GetItemsResponse, _super);
    function GetItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItems200ApplicationJson)
    ], GetItemsResponse.prototype, "getItems200ApplicationJsonObject", void 0);
    return GetItemsResponse;
}(SpeakeasyBase));
export { GetItemsResponse };
