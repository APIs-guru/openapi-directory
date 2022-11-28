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
var GetPresencesQueryParams = /** @class */ (function (_super) {
    __extends(GetPresencesQueryParams, _super);
    function GetPresencesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", Date)
    ], GetPresencesQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after_id" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "afterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_id" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "beforeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_id" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "fromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_only" }),
        __metadata("design:type", Boolean)
    ], GetPresencesQueryParams.prototype, "idOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetPresencesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=populate" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "populate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proximity" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "proximity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results_only" }),
        __metadata("design:type", Boolean)
    ], GetPresencesQueryParams.prototype, "resultsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=technology" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "technology", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_created" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_updated" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "timeUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout_s" }),
        __metadata("design:type", Number)
    ], GetPresencesQueryParams.prototype, "timeoutS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "until", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until_id" }),
        __metadata("design:type", String)
    ], GetPresencesQueryParams.prototype, "untilId", void 0);
    return GetPresencesQueryParams;
}(SpeakeasyBase));
export { GetPresencesQueryParams };
var GetPresences200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPresences200ApplicationJson, _super);
    function GetPresences200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetPresences200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_current" }),
        __metadata("design:type", Number)
    ], GetPresences200ApplicationJson.prototype, "countCurrent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_limited" }),
        __metadata("design:type", Boolean)
    ], GetPresences200ApplicationJson.prototype, "isLimited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_url" }),
        __metadata("design:type", String)
    ], GetPresences200ApplicationJson.prototype, "nextUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_duration_ms" }),
        __metadata("design:type", Number)
    ], GetPresences200ApplicationJson.prototype, "queryDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Presence }),
        __metadata("design:type", Array)
    ], GetPresences200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetPresences200ApplicationJson.prototype, "url", void 0);
    return GetPresences200ApplicationJson;
}(SpeakeasyBase));
export { GetPresences200ApplicationJson };
var GetPresencesRequest = /** @class */ (function (_super) {
    __extends(GetPresencesRequest, _super);
    function GetPresencesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPresencesQueryParams)
    ], GetPresencesRequest.prototype, "queryParams", void 0);
    return GetPresencesRequest;
}(SpeakeasyBase));
export { GetPresencesRequest };
var GetPresencesResponse = /** @class */ (function (_super) {
    __extends(GetPresencesResponse, _super);
    function GetPresencesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPresencesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPresencesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPresences200ApplicationJson)
    ], GetPresencesResponse.prototype, "getPresences200ApplicationJsonObject", void 0);
    return GetPresencesResponse;
}(SpeakeasyBase));
export { GetPresencesResponse };
