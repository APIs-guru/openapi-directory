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
var ExtrasRecentActivityListQueryParams = /** @class */ (function (_super) {
    __extends(ExtrasRecentActivityListQueryParams, _super);
    function ExtrasRecentActivityListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ExtrasRecentActivityListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ExtrasRecentActivityListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], ExtrasRecentActivityListQueryParams.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], ExtrasRecentActivityListQueryParams.prototype, "username", void 0);
    return ExtrasRecentActivityListQueryParams;
}(SpeakeasyBase));
export { ExtrasRecentActivityListQueryParams };
var ExtrasRecentActivityList200ApplicationJson = /** @class */ (function (_super) {
    __extends(ExtrasRecentActivityList200ApplicationJson, _super);
    function ExtrasRecentActivityList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ExtrasRecentActivityList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ExtrasRecentActivityList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], ExtrasRecentActivityList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.UserAction }),
        __metadata("design:type", Array)
    ], ExtrasRecentActivityList200ApplicationJson.prototype, "results", void 0);
    return ExtrasRecentActivityList200ApplicationJson;
}(SpeakeasyBase));
export { ExtrasRecentActivityList200ApplicationJson };
var ExtrasRecentActivityListRequest = /** @class */ (function (_super) {
    __extends(ExtrasRecentActivityListRequest, _super);
    function ExtrasRecentActivityListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasRecentActivityListQueryParams)
    ], ExtrasRecentActivityListRequest.prototype, "queryParams", void 0);
    return ExtrasRecentActivityListRequest;
}(SpeakeasyBase));
export { ExtrasRecentActivityListRequest };
var ExtrasRecentActivityListResponse = /** @class */ (function (_super) {
    __extends(ExtrasRecentActivityListResponse, _super);
    function ExtrasRecentActivityListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtrasRecentActivityListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExtrasRecentActivityListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasRecentActivityList200ApplicationJson)
    ], ExtrasRecentActivityListResponse.prototype, "extrasRecentActivityList200ApplicationJsonObject", void 0);
    return ExtrasRecentActivityListResponse;
}(SpeakeasyBase));
export { ExtrasRecentActivityListResponse };
