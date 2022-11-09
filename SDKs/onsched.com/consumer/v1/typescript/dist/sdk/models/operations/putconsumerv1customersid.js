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
var PutConsumerV1CustomersIdPathParams = /** @class */ (function (_super) {
    __extends(PutConsumerV1CustomersIdPathParams, _super);
    function PutConsumerV1CustomersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutConsumerV1CustomersIdPathParams.prototype, "id", void 0);
    return PutConsumerV1CustomersIdPathParams;
}(SpeakeasyBase));
export { PutConsumerV1CustomersIdPathParams };
var PutConsumerV1CustomersIdRequests = /** @class */ (function (_super) {
    __extends(PutConsumerV1CustomersIdRequests, _super);
    function PutConsumerV1CustomersIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CustomerUpdateModel)
    ], PutConsumerV1CustomersIdRequests.prototype, "customerUpdateModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomerUpdateModel)
    ], PutConsumerV1CustomersIdRequests.prototype, "customerUpdateModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CustomerUpdateModel)
    ], PutConsumerV1CustomersIdRequests.prototype, "customerUpdateModel2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CustomerUpdateModel)
    ], PutConsumerV1CustomersIdRequests.prototype, "customerUpdateModel3", void 0);
    return PutConsumerV1CustomersIdRequests;
}(SpeakeasyBase));
export { PutConsumerV1CustomersIdRequests };
var PutConsumerV1CustomersIdRequest = /** @class */ (function (_super) {
    __extends(PutConsumerV1CustomersIdRequest, _super);
    function PutConsumerV1CustomersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutConsumerV1CustomersIdPathParams)
    ], PutConsumerV1CustomersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutConsumerV1CustomersIdRequests)
    ], PutConsumerV1CustomersIdRequest.prototype, "request", void 0);
    return PutConsumerV1CustomersIdRequest;
}(SpeakeasyBase));
export { PutConsumerV1CustomersIdRequest };
var PutConsumerV1CustomersIdResponse = /** @class */ (function (_super) {
    __extends(PutConsumerV1CustomersIdResponse, _super);
    function PutConsumerV1CustomersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutConsumerV1CustomersIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutConsumerV1CustomersIdResponse.prototype, "statusCode", void 0);
    return PutConsumerV1CustomersIdResponse;
}(SpeakeasyBase));
export { PutConsumerV1CustomersIdResponse };
