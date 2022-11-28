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
var ExtrasGraphsListQueryParams = /** @class */ (function (_super) {
    __extends(ExtrasGraphsListQueryParams, _super);
    function ExtrasGraphsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ExtrasGraphsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ExtrasGraphsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ExtrasGraphsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ExtrasGraphsListQueryParams.prototype, "type", void 0);
    return ExtrasGraphsListQueryParams;
}(SpeakeasyBase));
export { ExtrasGraphsListQueryParams };
var ExtrasGraphsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(ExtrasGraphsList200ApplicationJson, _super);
    function ExtrasGraphsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ExtrasGraphsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ExtrasGraphsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], ExtrasGraphsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Graph }),
        __metadata("design:type", Array)
    ], ExtrasGraphsList200ApplicationJson.prototype, "results", void 0);
    return ExtrasGraphsList200ApplicationJson;
}(SpeakeasyBase));
export { ExtrasGraphsList200ApplicationJson };
var ExtrasGraphsListRequest = /** @class */ (function (_super) {
    __extends(ExtrasGraphsListRequest, _super);
    function ExtrasGraphsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasGraphsListQueryParams)
    ], ExtrasGraphsListRequest.prototype, "queryParams", void 0);
    return ExtrasGraphsListRequest;
}(SpeakeasyBase));
export { ExtrasGraphsListRequest };
var ExtrasGraphsListResponse = /** @class */ (function (_super) {
    __extends(ExtrasGraphsListResponse, _super);
    function ExtrasGraphsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtrasGraphsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExtrasGraphsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasGraphsList200ApplicationJson)
    ], ExtrasGraphsListResponse.prototype, "extrasGraphsList200ApplicationJsonObject", void 0);
    return ExtrasGraphsListResponse;
}(SpeakeasyBase));
export { ExtrasGraphsListResponse };
