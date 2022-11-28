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
var CreateNetworkWebhooksHttpServerPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkWebhooksHttpServerPathParams, _super);
    function CreateNetworkWebhooksHttpServerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkWebhooksHttpServerPathParams.prototype, "networkId", void 0);
    return CreateNetworkWebhooksHttpServerPathParams;
}(SpeakeasyBase));
export { CreateNetworkWebhooksHttpServerPathParams };
var CreateNetworkWebhooksHttpServerRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkWebhooksHttpServerRequestBody, _super);
    function CreateNetworkWebhooksHttpServerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkWebhooksHttpServerRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedSecret" }),
        __metadata("design:type", String)
    ], CreateNetworkWebhooksHttpServerRequestBody.prototype, "sharedSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CreateNetworkWebhooksHttpServerRequestBody.prototype, "url", void 0);
    return CreateNetworkWebhooksHttpServerRequestBody;
}(SpeakeasyBase));
export { CreateNetworkWebhooksHttpServerRequestBody };
var CreateNetworkWebhooksHttpServerRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkWebhooksHttpServerRequest, _super);
    function CreateNetworkWebhooksHttpServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkWebhooksHttpServerPathParams)
    ], CreateNetworkWebhooksHttpServerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkWebhooksHttpServerRequestBody)
    ], CreateNetworkWebhooksHttpServerRequest.prototype, "request", void 0);
    return CreateNetworkWebhooksHttpServerRequest;
}(SpeakeasyBase));
export { CreateNetworkWebhooksHttpServerRequest };
var CreateNetworkWebhooksHttpServerResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkWebhooksHttpServerResponse, _super);
    function CreateNetworkWebhooksHttpServerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkWebhooksHttpServerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkWebhooksHttpServerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkWebhooksHttpServerResponse.prototype, "createNetworkWebhooksHttpServer201ApplicationJsonObject", void 0);
    return CreateNetworkWebhooksHttpServerResponse;
}(SpeakeasyBase));
export { CreateNetworkWebhooksHttpServerResponse };
