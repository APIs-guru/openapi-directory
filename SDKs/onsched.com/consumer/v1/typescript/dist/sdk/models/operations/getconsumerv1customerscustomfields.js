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
var GetConsumerV1CustomersCustomfieldsQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersCustomfieldsQueryParams, _super);
    function GetConsumerV1CustomersCustomfieldsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=leadQuestions" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1CustomersCustomfieldsQueryParams.prototype, "leadQuestions", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersCustomfieldsQueryParams.prototype, "locationId", void 0);
    return GetConsumerV1CustomersCustomfieldsQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1CustomersCustomfieldsQueryParams };
var GetConsumerV1CustomersCustomfieldsRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersCustomfieldsRequest, _super);
    function GetConsumerV1CustomersCustomfieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1CustomersCustomfieldsQueryParams)
    ], GetConsumerV1CustomersCustomfieldsRequest.prototype, "queryParams", void 0);
    return GetConsumerV1CustomersCustomfieldsRequest;
}(SpeakeasyBase));
export { GetConsumerV1CustomersCustomfieldsRequest };
var GetConsumerV1CustomersCustomfieldsResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1CustomersCustomfieldsResponse, _super);
    function GetConsumerV1CustomersCustomfieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConsumerV1CustomersCustomfieldsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CustomFieldDefinitionListViewModel)
    ], GetConsumerV1CustomersCustomfieldsResponse.prototype, "customFieldDefinitionListViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1CustomersCustomfieldsResponse.prototype, "statusCode", void 0);
    return GetConsumerV1CustomersCustomfieldsResponse;
}(SpeakeasyBase));
export { GetConsumerV1CustomersCustomfieldsResponse };
