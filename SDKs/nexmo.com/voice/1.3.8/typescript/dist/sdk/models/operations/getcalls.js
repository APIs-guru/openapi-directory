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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var GetCallsOrderEnum;
(function (GetCallsOrderEnum) {
    GetCallsOrderEnum["Asc"] = "asc";
    GetCallsOrderEnum["Desc"] = "desc";
})(GetCallsOrderEnum || (GetCallsOrderEnum = {}));
export var GetCallsStatusEnum;
(function (GetCallsStatusEnum) {
    GetCallsStatusEnum["Started"] = "started";
    GetCallsStatusEnum["Ringing"] = "ringing";
    GetCallsStatusEnum["Answered"] = "answered";
    GetCallsStatusEnum["Machine"] = "machine";
    GetCallsStatusEnum["Completed"] = "completed";
    GetCallsStatusEnum["Busy"] = "busy";
    GetCallsStatusEnum["Cancelled"] = "cancelled";
    GetCallsStatusEnum["Failed"] = "failed";
    GetCallsStatusEnum["Rejected"] = "rejected";
    GetCallsStatusEnum["Timeout"] = "timeout";
    GetCallsStatusEnum["Unanswered"] = "unanswered";
})(GetCallsStatusEnum || (GetCallsStatusEnum = {}));
var GetCallsQueryParams = /** @class */ (function (_super) {
    __extends(GetCallsQueryParams, _super);
    function GetCallsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=conversation_uuid" }),
        __metadata("design:type", String)
    ], GetCallsQueryParams.prototype, "conversationUuid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date_end" }),
        __metadata("design:type", Date)
    ], GetCallsQueryParams.prototype, "dateEnd", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date_start" }),
        __metadata("design:type", Date)
    ], GetCallsQueryParams.prototype, "dateStart", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetCallsQueryParams.prototype, "order", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetCallsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=record_index" }),
        __metadata("design:type", Number)
    ], GetCallsQueryParams.prototype, "recordIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetCallsQueryParams.prototype, "status", void 0);
    return GetCallsQueryParams;
}(SpeakeasyBase));
export { GetCallsQueryParams };
var GetCallsSecurity = /** @class */ (function (_super) {
    __extends(GetCallsSecurity, _super);
    function GetCallsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetCallsSecurity.prototype, "bearerAuth", void 0);
    return GetCallsSecurity;
}(SpeakeasyBase));
export { GetCallsSecurity };
var GetCallsRequest = /** @class */ (function (_super) {
    __extends(GetCallsRequest, _super);
    function GetCallsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCallsQueryParams)
    ], GetCallsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCallsSecurity)
    ], GetCallsRequest.prototype, "security", void 0);
    return GetCallsRequest;
}(SpeakeasyBase));
export { GetCallsRequest };
var GetCallsResponse = /** @class */ (function (_super) {
    __extends(GetCallsResponse, _super);
    function GetCallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCallsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetCallsResponse)
    ], GetCallsResponse.prototype, "getCallsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCallsResponse.prototype, "statusCode", void 0);
    return GetCallsResponse;
}(SpeakeasyBase));
export { GetCallsResponse };
