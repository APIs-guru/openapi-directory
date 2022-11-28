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
export var GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum;
(function (GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum) {
    GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum["CardOrientationUnspecified"] = "CARD_ORIENTATION_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum["Horizontal"] = "HORIZONTAL";
    GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum["Vertical"] = "VERTICAL";
})(GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum || (GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum = {}));
export var GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum;
(function (GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum) {
    GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum["ThumbnailImageAlignmentUnspecified"] = "THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum["Left"] = "LEFT";
    GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum["Right"] = "RIGHT";
})(GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum || (GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum = {}));
// GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard
/**
 * Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
**/
var GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard, _super);
    function GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardContent" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent)
    ], GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard.prototype, "cardContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardOrientation" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard.prototype, "cardOrientation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailImageAlignment" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard.prototype, "thumbnailImageAlignment", void 0);
    return GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard };
