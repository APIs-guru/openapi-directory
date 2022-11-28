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
var GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams, _super);
    function GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateTimeTz" }),
        __metadata("design:type", Date)
    ], GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams.prototype, "dateTimeTz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams.prototype, "serviceId", void 0);
    return GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams;
}(SpeakeasyBase));
export { GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams };
var GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest, _super);
    function GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams)
    ], GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest.prototype, "pathParams", void 0);
    return GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest;
}(SpeakeasyBase));
export { GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest };
var GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse, _super);
    function GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse.prototype, "planLimitListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse.prototype, "statusCode", void 0);
    return GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse;
}(SpeakeasyBase));
export { GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse };
