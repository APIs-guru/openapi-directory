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
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaCompletionDetail } from "./googlecloudretailv2betacompletiondetail";
import { GoogleCloudRetailV2betaProductDetail } from "./googlecloudretailv2betaproductdetail";
import { GoogleCloudRetailV2betaPurchaseTransaction } from "./googlecloudretailv2betapurchasetransaction";
import { GoogleCloudRetailV2betaUserInfo } from "./googlecloudretailv2betauserinfo";
import { GoogleCloudRetailV2betaProductDetailInput } from "./googlecloudretailv2betaproductdetail";
// GoogleCloudRetailV2betaUserEvent
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
var GoogleCloudRetailV2betaUserEvent = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaUserEvent, _super);
    function GoogleCloudRetailV2betaUserEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cartId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "cartId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionDetail" }),
        __metadata("design:type", GoogleCloudRetailV2betaCompletionDetail)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "completionDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experimentIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "experimentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCategories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "pageCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageViewId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "pageViewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2betaProductDetail }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "productDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseTransaction" }),
        __metadata("design:type", GoogleCloudRetailV2betaPurchaseTransaction)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "purchaseTransaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrerUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "referrerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "searchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRetailV2betaUserInfo)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitorId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEvent.prototype, "visitorId", void 0);
    return GoogleCloudRetailV2betaUserEvent;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaUserEvent };
// GoogleCloudRetailV2betaUserEventInput
/**
 * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
**/
var GoogleCloudRetailV2betaUserEventInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaUserEventInput, _super);
    function GoogleCloudRetailV2betaUserEventInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cartId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "cartId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionDetail" }),
        __metadata("design:type", GoogleCloudRetailV2betaCompletionDetail)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "completionDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experimentIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "experimentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCategories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "pageCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageViewId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "pageViewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRetailV2betaProductDetailInput }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "productDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseTransaction" }),
        __metadata("design:type", GoogleCloudRetailV2betaPurchaseTransaction)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "purchaseTransaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrerUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "referrerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "searchQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRetailV2betaUserInfo)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitorId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaUserEventInput.prototype, "visitorId", void 0);
    return GoogleCloudRetailV2betaUserEventInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaUserEventInput };
