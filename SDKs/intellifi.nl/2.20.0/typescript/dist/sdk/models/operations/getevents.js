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
var GetEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetEventsQueryParams, _super);
    function GetEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", Date)
    ], GetEventsQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after_id" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "afterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_id" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "beforeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_id" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "fromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_only" }),
        __metadata("design:type", Boolean)
    ], GetEventsQueryParams.prototype, "idOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetEventsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=populate" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "populate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results_only" }),
        __metadata("design:type", Boolean)
    ], GetEventsQueryParams.prototype, "resultsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_created" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_event" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "timeEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_expire" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "timeExpire", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout_s" }),
        __metadata("design:type", Number)
    ], GetEventsQueryParams.prototype, "timeoutS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic.action" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "topicAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic.resource" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "topicResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic.resource_type" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "topicResourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "until", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until_id" }),
        __metadata("design:type", String)
    ], GetEventsQueryParams.prototype, "untilId", void 0);
    return GetEventsQueryParams;
}(SpeakeasyBase));
export { GetEventsQueryParams };
var GetEvents200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEvents200ApplicationJson, _super);
    function GetEvents200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetEvents200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_current" }),
        __metadata("design:type", Number)
    ], GetEvents200ApplicationJson.prototype, "countCurrent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_limited" }),
        __metadata("design:type", Boolean)
    ], GetEvents200ApplicationJson.prototype, "isLimited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_url" }),
        __metadata("design:type", String)
    ], GetEvents200ApplicationJson.prototype, "nextUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_duration_ms" }),
        __metadata("design:type", Number)
    ], GetEvents200ApplicationJson.prototype, "queryDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Event }),
        __metadata("design:type", Array)
    ], GetEvents200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetEvents200ApplicationJson.prototype, "url", void 0);
    return GetEvents200ApplicationJson;
}(SpeakeasyBase));
export { GetEvents200ApplicationJson };
var GetEventsRequest = /** @class */ (function (_super) {
    __extends(GetEventsRequest, _super);
    function GetEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsQueryParams)
    ], GetEventsRequest.prototype, "queryParams", void 0);
    return GetEventsRequest;
}(SpeakeasyBase));
export { GetEventsRequest };
var GetEventsResponse = /** @class */ (function (_super) {
    __extends(GetEventsResponse, _super);
    function GetEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvents200ApplicationJson)
    ], GetEventsResponse.prototype, "getEvents200ApplicationJsonObject", void 0);
    return GetEventsResponse;
}(SpeakeasyBase));
export { GetEventsResponse };
