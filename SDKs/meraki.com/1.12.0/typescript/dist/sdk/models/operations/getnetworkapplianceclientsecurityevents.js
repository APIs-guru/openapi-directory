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
var GetNetworkApplianceClientSecurityEventsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceClientSecurityEventsPathParams, _super);
    function GetNetworkApplianceClientSecurityEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceClientSecurityEventsPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceClientSecurityEventsPathParams.prototype, "networkId", void 0);
    return GetNetworkApplianceClientSecurityEventsPathParams;
}(SpeakeasyBase));
export { GetNetworkApplianceClientSecurityEventsPathParams };
export var GetNetworkApplianceClientSecurityEventsSortOrderEnum;
(function (GetNetworkApplianceClientSecurityEventsSortOrderEnum) {
    GetNetworkApplianceClientSecurityEventsSortOrderEnum["Ascending"] = "ascending";
    GetNetworkApplianceClientSecurityEventsSortOrderEnum["Descending"] = "descending";
})(GetNetworkApplianceClientSecurityEventsSortOrderEnum || (GetNetworkApplianceClientSecurityEventsSortOrderEnum = {}));
var GetNetworkApplianceClientSecurityEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceClientSecurityEventsQueryParams, _super);
    function GetNetworkApplianceClientSecurityEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceClientSecurityEventsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkApplianceClientSecurityEventsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceClientSecurityEventsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceClientSecurityEventsQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceClientSecurityEventsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceClientSecurityEventsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkApplianceClientSecurityEventsQueryParams.prototype, "timespan", void 0);
    return GetNetworkApplianceClientSecurityEventsQueryParams;
}(SpeakeasyBase));
export { GetNetworkApplianceClientSecurityEventsQueryParams };
var GetNetworkApplianceClientSecurityEventsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceClientSecurityEventsRequest, _super);
    function GetNetworkApplianceClientSecurityEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkApplianceClientSecurityEventsPathParams)
    ], GetNetworkApplianceClientSecurityEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkApplianceClientSecurityEventsQueryParams)
    ], GetNetworkApplianceClientSecurityEventsRequest.prototype, "queryParams", void 0);
    return GetNetworkApplianceClientSecurityEventsRequest;
}(SpeakeasyBase));
export { GetNetworkApplianceClientSecurityEventsRequest };
var GetNetworkApplianceClientSecurityEventsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceClientSecurityEventsResponse, _super);
    function GetNetworkApplianceClientSecurityEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkApplianceClientSecurityEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkApplianceClientSecurityEventsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkApplianceClientSecurityEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkApplianceClientSecurityEventsResponse.prototype, "getNetworkApplianceClientSecurityEvents200ApplicationJsonObject", void 0);
    return GetNetworkApplianceClientSecurityEventsResponse;
}(SpeakeasyBase));
export { GetNetworkApplianceClientSecurityEventsResponse };
