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
var GetV1WorkgroupsWorkgroupIdQuotesPathParams = /** @class */ (function (_super) {
    __extends(GetV1WorkgroupsWorkgroupIdQuotesPathParams, _super);
    function GetV1WorkgroupsWorkgroupIdQuotesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], GetV1WorkgroupsWorkgroupIdQuotesPathParams.prototype, "workgroupId", void 0);
    return GetV1WorkgroupsWorkgroupIdQuotesPathParams;
}(SpeakeasyBase));
export { GetV1WorkgroupsWorkgroupIdQuotesPathParams };
var GetV1WorkgroupsWorkgroupIdQuotesQueryParams = /** @class */ (function (_super) {
    __extends(GetV1WorkgroupsWorkgroupIdQuotesQueryParams, _super);
    function GetV1WorkgroupsWorkgroupIdQuotesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_state_id, use filters={\"quote_state_id\":111111}" }),
        __metadata("design:type", String)
    ], GetV1WorkgroupsWorkgroupIdQuotesQueryParams.prototype, "quoteStateIdUseFiltersEqualQuoteStateId111111", void 0);
    return GetV1WorkgroupsWorkgroupIdQuotesQueryParams;
}(SpeakeasyBase));
export { GetV1WorkgroupsWorkgroupIdQuotesQueryParams };
var GetV1WorkgroupsWorkgroupIdQuotesRequest = /** @class */ (function (_super) {
    __extends(GetV1WorkgroupsWorkgroupIdQuotesRequest, _super);
    function GetV1WorkgroupsWorkgroupIdQuotesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1WorkgroupsWorkgroupIdQuotesPathParams)
    ], GetV1WorkgroupsWorkgroupIdQuotesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1WorkgroupsWorkgroupIdQuotesQueryParams)
    ], GetV1WorkgroupsWorkgroupIdQuotesRequest.prototype, "queryParams", void 0);
    return GetV1WorkgroupsWorkgroupIdQuotesRequest;
}(SpeakeasyBase));
export { GetV1WorkgroupsWorkgroupIdQuotesRequest };
var GetV1WorkgroupsWorkgroupIdQuotesResponse = /** @class */ (function (_super) {
    __extends(GetV1WorkgroupsWorkgroupIdQuotesResponse, _super);
    function GetV1WorkgroupsWorkgroupIdQuotesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetV1WorkgroupsWorkgroupIdQuotesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV1WorkgroupsWorkgroupIdQuotesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetV1WorkgroupsWorkgroupIdQuotesResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetV1WorkgroupsWorkgroupIdQuotesResponse.prototype, "quoteOfWgLevelSimpleVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV1WorkgroupsWorkgroupIdQuotesResponse.prototype, "statusCode", void 0);
    return GetV1WorkgroupsWorkgroupIdQuotesResponse;
}(SpeakeasyBase));
export { GetV1WorkgroupsWorkgroupIdQuotesResponse };
