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
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaCompletionDetail } from "./googlecloudretailv2alphacompletiondetail";
import { GoogleCloudRetailV2alphaProductDetail } from "./googlecloudretailv2alphaproductdetail";
import { GoogleCloudRetailV2alphaPurchaseTransaction } from "./googlecloudretailv2alphapurchasetransaction";
import { GoogleCloudRetailV2alphaUserInfo } from "./googlecloudretailv2alphauserinfo";
import { GoogleCloudRetailV2alphaProductDetailInput } from "./googlecloudretailv2alphaproductdetail";
// GoogleCloudRetailV2alphaUserEvent
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
var GoogleCloudRetailV2alphaUserEvent = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaUserEvent, _super);
    function GoogleCloudRetailV2alphaUserEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cartId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "cartId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionDetail" }),
        __metadata("design:type", GoogleCloudRetailV2alphaCompletionDetail)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "completionDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experimentIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "experimentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCategories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "pageCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageViewId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "pageViewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2alphaProductDetail }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "productDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseTransaction" }),
        __metadata("design:type", GoogleCloudRetailV2alphaPurchaseTransaction)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "purchaseTransaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrerUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "referrerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "searchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRetailV2alphaUserInfo)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitorId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEvent.prototype, "visitorId", void 0);
    return GoogleCloudRetailV2alphaUserEvent;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaUserEvent };
// GoogleCloudRetailV2alphaUserEventInput
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
var GoogleCloudRetailV2alphaUserEventInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaUserEventInput, _super);
    function GoogleCloudRetailV2alphaUserEventInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cartId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "cartId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionDetail" }),
        __metadata("design:type", GoogleCloudRetailV2alphaCompletionDetail)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "completionDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experimentIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "experimentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCategories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "pageCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageViewId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "pageViewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2alphaProductDetailInput }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "productDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseTransaction" }),
        __metadata("design:type", GoogleCloudRetailV2alphaPurchaseTransaction)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "purchaseTransaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrerUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "referrerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "searchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRetailV2alphaUserInfo)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitorId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaUserEventInput.prototype, "visitorId", void 0);
    return GoogleCloudRetailV2alphaUserEventInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaUserEventInput };
