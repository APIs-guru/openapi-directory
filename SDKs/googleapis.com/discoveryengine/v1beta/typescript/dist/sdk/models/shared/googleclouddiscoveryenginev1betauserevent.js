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
import { GoogleCloudDiscoveryengineV1betaCustomAttribute } from "./googleclouddiscoveryenginev1betacustomattribute";
import { GoogleCloudDiscoveryengineV1betaCompletionInfo } from "./googleclouddiscoveryenginev1betacompletioninfo";
import { GoogleCloudDiscoveryengineV1betaDocumentInfo } from "./googleclouddiscoveryenginev1betadocumentinfo";
import { GoogleCloudDiscoveryengineV1betaMediaInfo } from "./googleclouddiscoveryenginev1betamediainfo";
import { GoogleCloudDiscoveryengineV1betaPageInfo } from "./googleclouddiscoveryenginev1betapageinfo";
import { GoogleCloudDiscoveryengineV1betaPanelInfo } from "./googleclouddiscoveryenginev1betapanelinfo";
import { GoogleCloudDiscoveryengineV1betaSearchInfo } from "./googleclouddiscoveryenginev1betasearchinfo";
import { GoogleCloudDiscoveryengineV1betaTransactionInfo } from "./googleclouddiscoveryenginev1betatransactioninfo";
import { GoogleCloudDiscoveryengineV1betaUserInfo } from "./googleclouddiscoveryenginev1betauserinfo";
// GoogleCloudDiscoveryengineV1betaUserEvent
/**
 * UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website.
**/
var GoogleCloudDiscoveryengineV1betaUserEvent = /** @class */ (function (_super) {
    __extends(GoogleCloudDiscoveryengineV1betaUserEvent, _super);
    function GoogleCloudDiscoveryengineV1betaUserEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudDiscoveryengineV1betaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionToken" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "attributionToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaCompletionInfo)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "completionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directUserRequest" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "directUserRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDiscoveryengineV1betaDocumentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaMediaInfo)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "mediaInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaPageInfo)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "pageInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panel" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaPanelInfo)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "panel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotionIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "promotionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaSearchInfo)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "searchInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "tagIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaTransactionInfo)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "transactionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaUserInfo)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPseudoId" }),
        __metadata("design:type", String)
    ], GoogleCloudDiscoveryengineV1betaUserEvent.prototype, "userPseudoId", void 0);
    return GoogleCloudDiscoveryengineV1betaUserEvent;
}(SpeakeasyBase));
export { GoogleCloudDiscoveryengineV1betaUserEvent };
