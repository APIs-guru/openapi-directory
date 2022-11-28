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
export var GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum;
(function (GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum) {
    GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum["HeightUnspecified"] = "HEIGHT_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum["Short"] = "SHORT";
    GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum["Medium"] = "MEDIUM";
    GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum["Tall"] = "TALL";
})(GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum || (GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum = {}));
// GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia
/**
 * Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
**/
var GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia, _super);
    function GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileUri" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia.prototype, "fileUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailUri" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia.prototype, "thumbnailUri", void 0);
    return GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia };
