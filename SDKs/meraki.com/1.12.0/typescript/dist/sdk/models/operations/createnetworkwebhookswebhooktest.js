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
var CreateNetworkWebhooksWebhookTestPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkWebhooksWebhookTestPathParams, _super);
    function CreateNetworkWebhooksWebhookTestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkWebhooksWebhookTestPathParams.prototype, "networkId", void 0);
    return CreateNetworkWebhooksWebhookTestPathParams;
}(SpeakeasyBase));
export { CreateNetworkWebhooksWebhookTestPathParams };
var CreateNetworkWebhooksWebhookTestRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkWebhooksWebhookTestRequestBody, _super);
    function CreateNetworkWebhooksWebhookTestRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedSecret" }),
        __metadata("design:type", String)
    ], CreateNetworkWebhooksWebhookTestRequestBody.prototype, "sharedSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CreateNetworkWebhooksWebhookTestRequestBody.prototype, "url", void 0);
    return CreateNetworkWebhooksWebhookTestRequestBody;
}(SpeakeasyBase));
export { CreateNetworkWebhooksWebhookTestRequestBody };
var CreateNetworkWebhooksWebhookTestRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkWebhooksWebhookTestRequest, _super);
    function CreateNetworkWebhooksWebhookTestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkWebhooksWebhookTestPathParams)
    ], CreateNetworkWebhooksWebhookTestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkWebhooksWebhookTestRequestBody)
    ], CreateNetworkWebhooksWebhookTestRequest.prototype, "request", void 0);
    return CreateNetworkWebhooksWebhookTestRequest;
}(SpeakeasyBase));
export { CreateNetworkWebhooksWebhookTestRequest };
var CreateNetworkWebhooksWebhookTestResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkWebhooksWebhookTestResponse, _super);
    function CreateNetworkWebhooksWebhookTestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkWebhooksWebhookTestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkWebhooksWebhookTestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkWebhooksWebhookTestResponse.prototype, "createNetworkWebhooksWebhookTest201ApplicationJsonObject", void 0);
    return CreateNetworkWebhooksWebhookTestResponse;
}(SpeakeasyBase));
export { CreateNetworkWebhooksWebhookTestResponse };
