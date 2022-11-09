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
var GetConsumerV1ResourcesIdServicesPathParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1ResourcesIdServicesPathParams, _super);
    function GetConsumerV1ResourcesIdServicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ResourcesIdServicesPathParams.prototype, "id", void 0);
    return GetConsumerV1ResourcesIdServicesPathParams;
}(SpeakeasyBase));
export { GetConsumerV1ResourcesIdServicesPathParams };
var GetConsumerV1ResourcesIdServicesQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1ResourcesIdServicesQueryParams, _super);
    function GetConsumerV1ResourcesIdServicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ResourcesIdServicesQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ResourcesIdServicesQueryParams.prototype, "offset", void 0);
    return GetConsumerV1ResourcesIdServicesQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1ResourcesIdServicesQueryParams };
var GetConsumerV1ResourcesIdServicesRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1ResourcesIdServicesRequest, _super);
    function GetConsumerV1ResourcesIdServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1ResourcesIdServicesPathParams)
    ], GetConsumerV1ResourcesIdServicesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1ResourcesIdServicesQueryParams)
    ], GetConsumerV1ResourcesIdServicesRequest.prototype, "queryParams", void 0);
    return GetConsumerV1ResourcesIdServicesRequest;
}(SpeakeasyBase));
export { GetConsumerV1ResourcesIdServicesRequest };
var GetConsumerV1ResourcesIdServicesResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1ResourcesIdServicesResponse, _super);
    function GetConsumerV1ResourcesIdServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConsumerV1ResourcesIdServicesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetConsumerV1ResourcesIdServicesResponse.prototype, "resourceServiceListViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1ResourcesIdServicesResponse.prototype, "statusCode", void 0);
    return GetConsumerV1ResourcesIdServicesResponse;
}(SpeakeasyBase));
export { GetConsumerV1ResourcesIdServicesResponse };
