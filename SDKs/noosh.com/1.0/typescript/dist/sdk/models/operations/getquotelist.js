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
var GetQuoteListPathParams = /** @class */ (function (_super) {
    __extends(GetQuoteListPathParams, _super);
    function GetQuoteListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], GetQuoteListPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], GetQuoteListPathParams.prototype, "workgroupId", void 0);
    return GetQuoteListPathParams;
}(SpeakeasyBase));
export { GetQuoteListPathParams };
var GetQuoteListQueryParams = /** @class */ (function (_super) {
    __extends(GetQuoteListQueryParams, _super);
    function GetQuoteListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_state_id, use filters={\"quote_state_id\":111111}" }),
        __metadata("design:type", String)
    ], GetQuoteListQueryParams.prototype, "quoteStateIdUseFiltersEqualQuoteStateId111111", void 0);
    return GetQuoteListQueryParams;
}(SpeakeasyBase));
export { GetQuoteListQueryParams };
var GetQuoteListRequest = /** @class */ (function (_super) {
    __extends(GetQuoteListRequest, _super);
    function GetQuoteListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuoteListPathParams)
    ], GetQuoteListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuoteListQueryParams)
    ], GetQuoteListRequest.prototype, "queryParams", void 0);
    return GetQuoteListRequest;
}(SpeakeasyBase));
export { GetQuoteListRequest };
var GetQuoteListResponse = /** @class */ (function (_super) {
    __extends(GetQuoteListResponse, _super);
    function GetQuoteListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetQuoteListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQuoteListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetQuoteListResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetQuoteListResponse.prototype, "quoteListVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQuoteListResponse.prototype, "statusCode", void 0);
    return GetQuoteListResponse;
}(SpeakeasyBase));
export { GetQuoteListResponse };
