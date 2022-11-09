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
export var GetOrdersOrderStatusEnum;
(function (GetOrdersOrderStatusEnum) {
    GetOrdersOrderStatusEnum["Active"] = "Active";
    GetOrdersOrderStatusEnum["Cancelled"] = "Cancelled";
    GetOrdersOrderStatusEnum["Completed"] = "Completed";
})(GetOrdersOrderStatusEnum || (GetOrdersOrderStatusEnum = {}));
var GetOrdersQueryParams = /** @class */ (function (_super) {
    __extends(GetOrdersQueryParams, _super);
    function GetOrdersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderStatus" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "orderStatus", void 0);
    return GetOrdersQueryParams;
}(SpeakeasyBase));
export { GetOrdersQueryParams };
var GetOrdersRequest = /** @class */ (function (_super) {
    __extends(GetOrdersRequest, _super);
    function GetOrdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetOrdersQueryParams)
    ], GetOrdersRequest.prototype, "queryParams", void 0);
    return GetOrdersRequest;
}(SpeakeasyBase));
export { GetOrdersRequest };
var GetOrdersResponse = /** @class */ (function (_super) {
    __extends(GetOrdersResponse, _super);
    function GetOrdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetOrdersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListOfOrders)
    ], GetOrdersResponse.prototype, "listOfOrders", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetOrdersResponse.prototype, "statusCode", void 0);
    return GetOrdersResponse;
}(SpeakeasyBase));
export { GetOrdersResponse };
