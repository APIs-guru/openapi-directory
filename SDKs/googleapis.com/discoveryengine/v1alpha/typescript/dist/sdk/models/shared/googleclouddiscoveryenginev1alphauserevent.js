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
import { GoogleCloudDiscoveryengineV1alphaCustomAttribute } from "./googleclouddiscoveryenginev1alphacustomattribute";
import { GoogleCloudDiscoveryengineV1alphaCompletionInfo } from "./googleclouddiscoveryenginev1alphacompletioninfo";
import { GoogleCloudDiscoveryengineV1alphaDocumentInfo } from "./googleclouddiscoveryenginev1alphadocumentinfo";
import { GoogleCloudDiscoveryengineV1alphaMediaInfo } from "./googleclouddiscoveryenginev1alphamediainfo";
import { GoogleCloudDiscoveryengineV1alphaPageInfo } from "./googleclouddiscoveryenginev1alphapageinfo";
import { GoogleCloudDiscoveryengineV1alphaPanelInfo } from "./googleclouddiscoveryenginev1alphapanelinfo";
import { GoogleCloudDiscoveryengineV1alphaSearchInfo } from "./googleclouddiscoveryenginev1alphasearchinfo";
import { GoogleCloudDiscoveryengineV1alphaTransactionInfo } from "./googleclouddiscoveryenginev1alphatransactioninfo";
import { GoogleCloudDiscoveryengineV1alphaUserInfo } from "./googleclouddiscoveryenginev1alphauserinfo";
// GoogleCloudDiscoveryengineV1alphaUserEvent
/**
 * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
**/
var GoogleCloudDiscoveryengineV1alphaUserEvent = /** @class */ (function (_super) {
    __extends(GoogleCloudDiscoveryengineV1alphaUserEvent, _super);
    function GoogleCloudDiscoveryengineV1alphaUserEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudDiscoveryengineV1alphaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaCompletionInfo)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "completionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directUserRequest" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "directUserRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDiscoveryengineV1alphaDocumentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaMediaInfo)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "mediaInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaPageInfo)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "pageInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panel" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaPanelInfo)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "panel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "promotionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaSearchInfo)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "searchInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "tagIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaTransactionInfo)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "transactionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1alphaUserInfo)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPseudoId" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1alphaUserEvent.prototype, "userPseudoId", void 0);
    return GoogleCloudDiscoveryengineV1alphaUserEvent;
}(SpeakeasyBase));
export { GoogleCloudDiscoveryengineV1alphaUserEvent };
