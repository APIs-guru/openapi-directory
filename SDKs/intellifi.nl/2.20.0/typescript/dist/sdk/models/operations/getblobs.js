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
var GetBlobsQueryParams = /** @class */ (function (_super) {
    __extends(GetBlobsQueryParams, _super);
    function GetBlobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", Date)
    ], GetBlobsQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after_id" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "afterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_id" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "beforeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=blob_key" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "blobKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content_type" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filename" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_id" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "fromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hash" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_only" }),
        __metadata("design:type", Boolean)
    ], GetBlobsQueryParams.prototype, "idOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetBlobsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=populate" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "populate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results_only" }),
        __metadata("design:type", Boolean)
    ], GetBlobsQueryParams.prototype, "resultsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_created" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_last_accessed" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "timeLastAccessed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_updated" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "timeUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout_s" }),
        __metadata("design:type", Number)
    ], GetBlobsQueryParams.prototype, "timeoutS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "until", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until_id" }),
        __metadata("design:type", String)
    ], GetBlobsQueryParams.prototype, "untilId", void 0);
    return GetBlobsQueryParams;
}(SpeakeasyBase));
export { GetBlobsQueryParams };
var GetBlobs200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetBlobs200ApplicationJson, _super);
    function GetBlobs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetBlobs200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_current" }),
        __metadata("design:type", Number)
    ], GetBlobs200ApplicationJson.prototype, "countCurrent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_limited" }),
        __metadata("design:type", Boolean)
    ], GetBlobs200ApplicationJson.prototype, "isLimited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_url" }),
        __metadata("design:type", String)
    ], GetBlobs200ApplicationJson.prototype, "nextUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_duration_ms" }),
        __metadata("design:type", Number)
    ], GetBlobs200ApplicationJson.prototype, "queryDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Blob }),
        __metadata("design:type", Array)
    ], GetBlobs200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetBlobs200ApplicationJson.prototype, "url", void 0);
    return GetBlobs200ApplicationJson;
}(SpeakeasyBase));
export { GetBlobs200ApplicationJson };
var GetBlobsRequest = /** @class */ (function (_super) {
    __extends(GetBlobsRequest, _super);
    function GetBlobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBlobsQueryParams)
    ], GetBlobsRequest.prototype, "queryParams", void 0);
    return GetBlobsRequest;
}(SpeakeasyBase));
export { GetBlobsRequest };
var GetBlobsResponse = /** @class */ (function (_super) {
    __extends(GetBlobsResponse, _super);
    function GetBlobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBlobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBlobsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBlobs200ApplicationJson)
    ], GetBlobsResponse.prototype, "getBlobs200ApplicationJsonObject", void 0);
    return GetBlobsResponse;
}(SpeakeasyBase));
export { GetBlobsResponse };
