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
var PutSellOrderPathParams = /** @class */ (function (_super) {
    __extends(PutSellOrderPathParams, _super);
    function PutSellOrderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" }),
        __metadata("design:type", String)
    ], PutSellOrderPathParams.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], PutSellOrderPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], PutSellOrderPathParams.prototype, "workgroupId", void 0);
    return PutSellOrderPathParams;
}(SpeakeasyBase));
export { PutSellOrderPathParams };
var PutSellOrderRequests = /** @class */ (function (_super) {
    __extends(PutSellOrderRequests, _super);
    function PutSellOrderRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PutSellOrderRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], PutSellOrderRequests.prototype, "applicationXYaml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PutSellOrderRequests.prototype, "orderUpdPersistVo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" }),
        __metadata("design:type", Object)
    ], PutSellOrderRequests.prototype, "orderUpdPersistVo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/csv" }),
        __metadata("design:type", Uint8Array)
    ], PutSellOrderRequests.prototype, "textCsv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PutSellOrderRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" }),
        __metadata("design:type", Uint8Array)
    ], PutSellOrderRequests.prototype, "textXYaml", void 0);
    return PutSellOrderRequests;
}(SpeakeasyBase));
export { PutSellOrderRequests };
var PutSellOrderRequest = /** @class */ (function (_super) {
    __extends(PutSellOrderRequest, _super);
    function PutSellOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSellOrderPathParams)
    ], PutSellOrderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSellOrderRequests)
    ], PutSellOrderRequest.prototype, "request", void 0);
    return PutSellOrderRequest;
}(SpeakeasyBase));
export { PutSellOrderRequest };
var PutSellOrderResponse = /** @class */ (function (_super) {
    __extends(PutSellOrderResponse, _super);
    function PutSellOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutSellOrderResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSellOrderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutSellOrderResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutSellOrderResponse.prototype, "orderVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSellOrderResponse.prototype, "statusCode", void 0);
    return PutSellOrderResponse;
}(SpeakeasyBase));
export { PutSellOrderResponse };
