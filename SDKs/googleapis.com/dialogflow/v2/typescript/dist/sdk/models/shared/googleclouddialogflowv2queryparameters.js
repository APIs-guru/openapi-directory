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
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowV2SentimentAnalysisRequestConfig } from "./googleclouddialogflowv2sentimentanalysisrequestconfig";
import { GoogleCloudDialogflowV2SessionEntityType } from "./googleclouddialogflowv2sessionentitytype";
// GoogleCloudDialogflowV2QueryParameters
/**
 * Represents the parameters of the conversational query.
**/
var GoogleCloudDialogflowV2QueryParameters = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2QueryParameters, _super);
    function GoogleCloudDialogflowV2QueryParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts", elemType: GoogleCloudDialogflowV2Context }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2QueryParameters.prototype, "contexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoLocation" }),
        __metadata("design:type", GoogleTypeLatLng)
    ], GoogleCloudDialogflowV2QueryParameters.prototype, "geoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2QueryParameters.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetContexts" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2QueryParameters.prototype, "resetContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentimentAnalysisRequestConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2SentimentAnalysisRequestConfig)
    ], GoogleCloudDialogflowV2QueryParameters.prototype, "sentimentAnalysisRequestConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowV2SessionEntityType }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2QueryParameters.prototype, "sessionEntityTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2QueryParameters.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookHeaders" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2QueryParameters.prototype, "webhookHeaders", void 0);
    return GoogleCloudDialogflowV2QueryParameters;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2QueryParameters };
