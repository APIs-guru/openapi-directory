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
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontent";
export var GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum;
(function (GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum) {
    GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum["CardWidthUnspecified"] = "CARD_WIDTH_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum["Small"] = "SMALL";
    GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum["Medium"] = "MEDIUM";
})(GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum || (GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum = {}));
// GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard
/**
 * Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
**/
var GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard, _super);
    function GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardContents", elemType: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard.prototype, "cardContents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardWidth" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard.prototype, "cardWidth", void 0);
    return GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard };
