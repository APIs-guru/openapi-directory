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
var SubscriptionsApiDeleteSubscription2PathParams = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscription2PathParams, _super);
    function SubscriptionsApiDeleteSubscription2PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], SubscriptionsApiDeleteSubscription2PathParams.prototype, "serial", void 0);
    return SubscriptionsApiDeleteSubscription2PathParams;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscription2PathParams };
var SubscriptionsApiDeleteSubscription2QueryParams = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscription2QueryParams, _super);
    function SubscriptionsApiDeleteSubscription2QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=keep" }),
        __metadata("design:type", Boolean)
    ], SubscriptionsApiDeleteSubscription2QueryParams.prototype, "keep", void 0);
    return SubscriptionsApiDeleteSubscription2QueryParams;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscription2QueryParams };
var SubscriptionsApiDeleteSubscription2Headers = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscription2Headers, _super);
    function SubscriptionsApiDeleteSubscription2Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], SubscriptionsApiDeleteSubscription2Headers.prototype, "xApiKey", void 0);
    return SubscriptionsApiDeleteSubscription2Headers;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscription2Headers };
var SubscriptionsApiDeleteSubscription2Request = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscription2Request, _super);
    function SubscriptionsApiDeleteSubscription2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SubscriptionsApiDeleteSubscription2PathParams)
    ], SubscriptionsApiDeleteSubscription2Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SubscriptionsApiDeleteSubscription2QueryParams)
    ], SubscriptionsApiDeleteSubscription2Request.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SubscriptionsApiDeleteSubscription2Headers)
    ], SubscriptionsApiDeleteSubscription2Request.prototype, "headers", void 0);
    return SubscriptionsApiDeleteSubscription2Request;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscription2Request };
var SubscriptionsApiDeleteSubscription2Response = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscription2Response, _super);
    function SubscriptionsApiDeleteSubscription2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SubscriptionsApiDeleteSubscription2Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SubscriptionsApiDeleteSubscription2Response.prototype, "statusCode", void 0);
    return SubscriptionsApiDeleteSubscription2Response;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscription2Response };
