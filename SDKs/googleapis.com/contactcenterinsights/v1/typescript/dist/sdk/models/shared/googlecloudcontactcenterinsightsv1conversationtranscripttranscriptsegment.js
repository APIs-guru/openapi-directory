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
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationParticipant } from "./googlecloudcontactcenterinsightsv1conversationparticipant";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo";
// GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment
/**
 * A segment of a full transcript.
**/
var GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment, _super);
    function GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelTag" }),
        __metadata("design:type", Number)
    ], GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.prototype, "channelTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogflowSegmentMetadata" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata)
    ], GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.prototype, "dialogflowSegmentMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.prototype, "messageTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentParticipant" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ConversationParticipant)
    ], GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.prototype, "segmentParticipant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentiment" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1SentimentData)
    ], GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.prototype, "sentiment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=words", elemType: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment.prototype, "words", void 0);
    return GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment };
