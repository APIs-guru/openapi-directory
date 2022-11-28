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
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2CompletionDetail } from "./googlecloudretailv2completiondetail";
import { GoogleCloudRetailV2ProductDetailInput } from "./googlecloudretailv2productdetail";
import { GoogleCloudRetailV2PurchaseTransaction } from "./googlecloudretailv2purchasetransaction";
import { GoogleCloudRetailV2UserInfo } from "./googlecloudretailv2userinfo";
import { GoogleCloudRetailV2ProductDetail } from "./googlecloudretailv2productdetail";
// GoogleCloudRetailV2UserEventInput
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
var GoogleCloudRetailV2UserEventInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2UserEventInput, _super);
    function GoogleCloudRetailV2UserEventInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2UserEventInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cartId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "cartId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionDetail" }),
        __metadata("design:type", GoogleCloudRetailV2CompletionDetail)
    ], GoogleCloudRetailV2UserEventInput.prototype, "completionDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experimentIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2UserEventInput.prototype, "experimentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2UserEventInput.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCategories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2UserEventInput.prototype, "pageCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageViewId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "pageViewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2ProductDetailInput }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2UserEventInput.prototype, "productDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseTransaction" }),
        __metadata("design:type", GoogleCloudRetailV2PurchaseTransaction)
    ], GoogleCloudRetailV2UserEventInput.prototype, "purchaseTransaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrerUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "referrerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "searchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRetailV2UserInfo)
    ], GoogleCloudRetailV2UserEventInput.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitorId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEventInput.prototype, "visitorId", void 0);
    return GoogleCloudRetailV2UserEventInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2UserEventInput };
// GoogleCloudRetailV2UserEvent
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
var GoogleCloudRetailV2UserEvent = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2UserEvent, _super);
    function GoogleCloudRetailV2UserEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2UserEvent.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cartId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "cartId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionDetail" }),
        __metadata("design:type", GoogleCloudRetailV2CompletionDetail)
    ], GoogleCloudRetailV2UserEvent.prototype, "completionDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experimentIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2UserEvent.prototype, "experimentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2UserEvent.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCategories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2UserEvent.prototype, "pageCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageViewId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "pageViewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2ProductDetail }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2UserEvent.prototype, "productDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseTransaction" }),
        __metadata("design:type", GoogleCloudRetailV2PurchaseTransaction)
    ], GoogleCloudRetailV2UserEvent.prototype, "purchaseTransaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrerUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "referrerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "searchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRetailV2UserInfo)
    ], GoogleCloudRetailV2UserEvent.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitorId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2UserEvent.prototype, "visitorId", void 0);
    return GoogleCloudRetailV2UserEvent;
}(SpeakeasyBase));
export { GoogleCloudRetailV2UserEvent };
