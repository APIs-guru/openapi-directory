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
var GetConsumerV1CustomersPlansQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersPlansQueryParams, _super);
    function GetConsumerV1CustomersPlansQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersPlansQueryParams.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersPlansQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersPlansQueryParams.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersPlansQueryParams.prototype, "offset", void 0);
    return GetConsumerV1CustomersPlansQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1CustomersPlansQueryParams };
var GetConsumerV1CustomersPlansRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersPlansRequest, _super);
    function GetConsumerV1CustomersPlansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1CustomersPlansQueryParams)
    ], GetConsumerV1CustomersPlansRequest.prototype, "queryParams", void 0);
    return GetConsumerV1CustomersPlansRequest;
}(SpeakeasyBase));
export { GetConsumerV1CustomersPlansRequest };
var GetConsumerV1CustomersPlansResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersPlansResponse, _super);
    function GetConsumerV1CustomersPlansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersPlansResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetConsumerV1CustomersPlansResponse.prototype, "customerPlanListViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersPlansResponse.prototype, "statusCode", void 0);
    return GetConsumerV1CustomersPlansResponse;
}(SpeakeasyBase));
export { GetConsumerV1CustomersPlansResponse };
