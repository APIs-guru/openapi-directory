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
var PostConsumerV1CustomersRequests = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersRequests, _super);
    function PostConsumerV1CustomersRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CustomerInputModel)
    ], PostConsumerV1CustomersRequests.prototype, "customerInputModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomerInputModel)
    ], PostConsumerV1CustomersRequests.prototype, "customerInputModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CustomerInputModel)
    ], PostConsumerV1CustomersRequests.prototype, "customerInputModel2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CustomerInputModel)
    ], PostConsumerV1CustomersRequests.prototype, "customerInputModel3", void 0);
    return PostConsumerV1CustomersRequests;
}(SpeakeasyBase));
export { PostConsumerV1CustomersRequests };
var PostConsumerV1CustomersRequest = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersRequest, _super);
    function PostConsumerV1CustomersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostConsumerV1CustomersRequests)
    ], PostConsumerV1CustomersRequest.prototype, "request", void 0);
    return PostConsumerV1CustomersRequest;
}(SpeakeasyBase));
export { PostConsumerV1CustomersRequest };
var PostConsumerV1CustomersResponse = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersResponse, _super);
    function PostConsumerV1CustomersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostConsumerV1CustomersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CustomerViewModel)
    ], PostConsumerV1CustomersResponse.prototype, "customerViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostConsumerV1CustomersResponse.prototype, "statusCode", void 0);
    return PostConsumerV1CustomersResponse;
}(SpeakeasyBase));
export { PostConsumerV1CustomersResponse };
