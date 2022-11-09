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
var GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams = /** @class */ (function (_super) {
    __extends(GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams, _super);
    function GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", Number)
    ], GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams.prototype, "subscriptionId", void 0);
    return GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams;
}(SpeakeasyBase));
export { GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams };
var GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity = /** @class */ (function (_super) {
    __extends(GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity, _super);
    function GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity.prototype, "developerHapikey", void 0);
    return GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity;
}(SpeakeasyBase));
export { GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity };
var GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest = /** @class */ (function (_super) {
    __extends(GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest, _super);
    function GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams)
    ], GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity)
    ], GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest.prototype, "security", void 0);
    return GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest;
}(SpeakeasyBase));
export { GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest };
var GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse = /** @class */ (function (_super) {
    __extends(GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse, _super);
    function GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SubscriptionResponse)
    ], GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse.prototype, "subscriptionResponse", void 0);
    return GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse;
}(SpeakeasyBase));
export { GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse };
