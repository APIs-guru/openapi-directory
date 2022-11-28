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
export var GetReviewsResourceTypeJsonResourceTypeEnum;
(function (GetReviewsResourceTypeJsonResourceTypeEnum) {
    GetReviewsResourceTypeJsonResourceTypeEnum["All"] = "all";
    GetReviewsResourceTypeJsonResourceTypeEnum["Picks"] = "picks";
})(GetReviewsResourceTypeJsonResourceTypeEnum || (GetReviewsResourceTypeJsonResourceTypeEnum = {}));
var GetReviewsResourceTypeJsonPathParams = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJsonPathParams, _super);
    function GetReviewsResourceTypeJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource-type" }),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJsonPathParams.prototype, "resourceType", void 0);
    return GetReviewsResourceTypeJsonPathParams;
}(SpeakeasyBase));
export { GetReviewsResourceTypeJsonPathParams };
export var GetReviewsResourceTypeJsonOrderEnum;
(function (GetReviewsResourceTypeJsonOrderEnum) {
    GetReviewsResourceTypeJsonOrderEnum["ByTitle"] = "by-title";
    GetReviewsResourceTypeJsonOrderEnum["ByPublicationDate"] = "by-publication-date";
    GetReviewsResourceTypeJsonOrderEnum["ByOpeningDate"] = "by-opening-date";
})(GetReviewsResourceTypeJsonOrderEnum || (GetReviewsResourceTypeJsonOrderEnum = {}));
var GetReviewsResourceTypeJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJsonQueryParams, _super);
    function GetReviewsResourceTypeJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetReviewsResourceTypeJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJsonQueryParams.prototype, "order", void 0);
    return GetReviewsResourceTypeJsonQueryParams;
}(SpeakeasyBase));
export { GetReviewsResourceTypeJsonQueryParams };
var GetReviewsResourceTypeJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJson200ApplicationJson, _super);
    function GetReviewsResourceTypeJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetReviewsResourceTypeJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Movie }),
        __metadata("design:type", Array)
    ], GetReviewsResourceTypeJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJson200ApplicationJson.prototype, "status", void 0);
    return GetReviewsResourceTypeJson200ApplicationJson;
}(SpeakeasyBase));
export { GetReviewsResourceTypeJson200ApplicationJson };
var GetReviewsResourceTypeJsonRequest = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJsonRequest, _super);
    function GetReviewsResourceTypeJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReviewsResourceTypeJsonPathParams)
    ], GetReviewsResourceTypeJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReviewsResourceTypeJsonQueryParams)
    ], GetReviewsResourceTypeJsonRequest.prototype, "queryParams", void 0);
    return GetReviewsResourceTypeJsonRequest;
}(SpeakeasyBase));
export { GetReviewsResourceTypeJsonRequest };
var GetReviewsResourceTypeJsonResponse = /** @class */ (function (_super) {
    __extends(GetReviewsResourceTypeJsonResponse, _super);
    function GetReviewsResourceTypeJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReviewsResourceTypeJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReviewsResourceTypeJson200ApplicationJson)
    ], GetReviewsResourceTypeJsonResponse.prototype, "getReviewsResourceTypeJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReviewsResourceTypeJsonResponse.prototype, "statusCode", void 0);
    return GetReviewsResourceTypeJsonResponse;
}(SpeakeasyBase));
export { GetReviewsResourceTypeJsonResponse };
