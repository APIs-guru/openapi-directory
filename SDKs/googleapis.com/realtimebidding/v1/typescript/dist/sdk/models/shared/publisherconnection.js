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
export var PublisherConnectionBiddingStateEnum;
(function (PublisherConnectionBiddingStateEnum) {
    PublisherConnectionBiddingStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    PublisherConnectionBiddingStateEnum["Pending"] = "PENDING";
    PublisherConnectionBiddingStateEnum["Rejected"] = "REJECTED";
    PublisherConnectionBiddingStateEnum["Approved"] = "APPROVED";
})(PublisherConnectionBiddingStateEnum || (PublisherConnectionBiddingStateEnum = {}));
export var PublisherConnectionPublisherPlatformEnum;
(function (PublisherConnectionPublisherPlatformEnum) {
    PublisherConnectionPublisherPlatformEnum["PublisherPlatformUnspecified"] = "PUBLISHER_PLATFORM_UNSPECIFIED";
    PublisherConnectionPublisherPlatformEnum["GoogleAdManager"] = "GOOGLE_AD_MANAGER";
    PublisherConnectionPublisherPlatformEnum["Admob"] = "ADMOB";
})(PublisherConnectionPublisherPlatformEnum || (PublisherConnectionPublisherPlatformEnum = {}));
// PublisherConnection
/**
 * An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher.
**/
var PublisherConnection = /** @class */ (function (_super) {
    __extends(PublisherConnection, _super);
    function PublisherConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=biddingState" }),
        __metadata("design:type", String)
    ], PublisherConnection.prototype, "biddingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], PublisherConnection.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PublisherConnection.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PublisherConnection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherPlatform" }),
        __metadata("design:type", String)
    ], PublisherConnection.prototype, "publisherPlatform", void 0);
    return PublisherConnection;
}(SpeakeasyBase));
export { PublisherConnection };
