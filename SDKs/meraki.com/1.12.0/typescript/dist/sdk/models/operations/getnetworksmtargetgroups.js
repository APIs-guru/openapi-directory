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
var GetNetworkSmTargetGroupsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmTargetGroupsPathParams, _super);
    function GetNetworkSmTargetGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSmTargetGroupsPathParams.prototype, "networkId", void 0);
    return GetNetworkSmTargetGroupsPathParams;
}(SpeakeasyBase));
export { GetNetworkSmTargetGroupsPathParams };
var GetNetworkSmTargetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmTargetGroupsQueryParams, _super);
    function GetNetworkSmTargetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withDetails" }),
        __metadata("design:type", Boolean)
    ], GetNetworkSmTargetGroupsQueryParams.prototype, "withDetails", void 0);
    return GetNetworkSmTargetGroupsQueryParams;
}(SpeakeasyBase));
export { GetNetworkSmTargetGroupsQueryParams };
var GetNetworkSmTargetGroupsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSmTargetGroupsRequest, _super);
    function GetNetworkSmTargetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmTargetGroupsPathParams)
    ], GetNetworkSmTargetGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmTargetGroupsQueryParams)
    ], GetNetworkSmTargetGroupsRequest.prototype, "queryParams", void 0);
    return GetNetworkSmTargetGroupsRequest;
}(SpeakeasyBase));
export { GetNetworkSmTargetGroupsRequest };
var GetNetworkSmTargetGroupsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSmTargetGroupsResponse, _super);
    function GetNetworkSmTargetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkSmTargetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkSmTargetGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmTargetGroupsResponse.prototype, "getNetworkSmTargetGroups200ApplicationJsonObject", void 0);
    return GetNetworkSmTargetGroupsResponse;
}(SpeakeasyBase));
export { GetNetworkSmTargetGroupsResponse };
