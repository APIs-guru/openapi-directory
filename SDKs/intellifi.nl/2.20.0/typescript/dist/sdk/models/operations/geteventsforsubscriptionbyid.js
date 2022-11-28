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
var GetEventsForSubscriptionByIdPathParams = /** @class */ (function (_super) {
    __extends(GetEventsForSubscriptionByIdPathParams, _super);
    function GetEventsForSubscriptionByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdPathParams.prototype, "id", void 0);
    return GetEventsForSubscriptionByIdPathParams;
}(SpeakeasyBase));
export { GetEventsForSubscriptionByIdPathParams };
var GetEventsForSubscriptionByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetEventsForSubscriptionByIdQueryParams, _super);
    function GetEventsForSubscriptionByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", Date)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after_id" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "afterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before_id" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "beforeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_id" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "fromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_only" }),
        __metadata("design:type", Boolean)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "idOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=populate" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "populate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=results_only" }),
        __metadata("design:type", Boolean)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "resultsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_created" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_event" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "timeEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_expire" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "timeExpire", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout_s" }),
        __metadata("design:type", Number)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "timeoutS", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic.action" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "topicAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic.resource" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "topicResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic.resource_type" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "topicResourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "until", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until_id" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdQueryParams.prototype, "untilId", void 0);
    return GetEventsForSubscriptionByIdQueryParams;
}(SpeakeasyBase));
export { GetEventsForSubscriptionByIdQueryParams };
var GetEventsForSubscriptionById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEventsForSubscriptionById200ApplicationJson, _super);
    function GetEventsForSubscriptionById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetEventsForSubscriptionById200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_current" }),
        __metadata("design:type", Number)
    ], GetEventsForSubscriptionById200ApplicationJson.prototype, "countCurrent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_limited" }),
        __metadata("design:type", Boolean)
    ], GetEventsForSubscriptionById200ApplicationJson.prototype, "isLimited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_url" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionById200ApplicationJson.prototype, "nextUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_duration_ms" }),
        __metadata("design:type", Number)
    ], GetEventsForSubscriptionById200ApplicationJson.prototype, "queryDurationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Event }),
        __metadata("design:type", Array)
    ], GetEventsForSubscriptionById200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionById200ApplicationJson.prototype, "url", void 0);
    return GetEventsForSubscriptionById200ApplicationJson;
}(SpeakeasyBase));
export { GetEventsForSubscriptionById200ApplicationJson };
var GetEventsForSubscriptionByIdRequest = /** @class */ (function (_super) {
    __extends(GetEventsForSubscriptionByIdRequest, _super);
    function GetEventsForSubscriptionByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsForSubscriptionByIdPathParams)
    ], GetEventsForSubscriptionByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsForSubscriptionByIdQueryParams)
    ], GetEventsForSubscriptionByIdRequest.prototype, "queryParams", void 0);
    return GetEventsForSubscriptionByIdRequest;
}(SpeakeasyBase));
export { GetEventsForSubscriptionByIdRequest };
var GetEventsForSubscriptionByIdResponse = /** @class */ (function (_super) {
    __extends(GetEventsForSubscriptionByIdResponse, _super);
    function GetEventsForSubscriptionByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventsForSubscriptionByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventsForSubscriptionByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsForSubscriptionById200ApplicationJson)
    ], GetEventsForSubscriptionByIdResponse.prototype, "getEventsForSubscriptionById200ApplicationJsonObject", void 0);
    return GetEventsForSubscriptionByIdResponse;
}(SpeakeasyBase));
export { GetEventsForSubscriptionByIdResponse };
