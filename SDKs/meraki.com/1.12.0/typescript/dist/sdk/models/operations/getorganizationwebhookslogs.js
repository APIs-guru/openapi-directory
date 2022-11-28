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
var GetOrganizationWebhooksLogsPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationWebhooksLogsPathParams, _super);
    function GetOrganizationWebhooksLogsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationWebhooksLogsPathParams.prototype, "organizationId", void 0);
    return GetOrganizationWebhooksLogsPathParams;
}(SpeakeasyBase));
export { GetOrganizationWebhooksLogsPathParams };
var GetOrganizationWebhooksLogsQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationWebhooksLogsQueryParams, _super);
    function GetOrganizationWebhooksLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationWebhooksLogsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationWebhooksLogsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationWebhooksLogsQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetOrganizationWebhooksLogsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetOrganizationWebhooksLogsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetOrganizationWebhooksLogsQueryParams.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], GetOrganizationWebhooksLogsQueryParams.prototype, "url", void 0);
    return GetOrganizationWebhooksLogsQueryParams;
}(SpeakeasyBase));
export { GetOrganizationWebhooksLogsQueryParams };
var GetOrganizationWebhooksLogsRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationWebhooksLogsRequest, _super);
    function GetOrganizationWebhooksLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationWebhooksLogsPathParams)
    ], GetOrganizationWebhooksLogsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationWebhooksLogsQueryParams)
    ], GetOrganizationWebhooksLogsRequest.prototype, "queryParams", void 0);
    return GetOrganizationWebhooksLogsRequest;
}(SpeakeasyBase));
export { GetOrganizationWebhooksLogsRequest };
var GetOrganizationWebhooksLogsResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationWebhooksLogsResponse, _super);
    function GetOrganizationWebhooksLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationWebhooksLogsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationWebhooksLogsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationWebhooksLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationWebhooksLogsResponse.prototype, "getOrganizationWebhooksLogs200ApplicationJsonObject", void 0);
    return GetOrganizationWebhooksLogsResponse;
}(SpeakeasyBase));
export { GetOrganizationWebhooksLogsResponse };
