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
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3DtmfInput } from "./googleclouddialogflowcxv3dtmfinput";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";
import { GoogleCloudDialogflowCxV3ResponseMessage } from "./googleclouddialogflowcxv3responsemessage";
import { GoogleCloudDialogflowCxV3SentimentAnalysisResult } from "./googleclouddialogflowcxv3sentimentanalysisresult";
import { GoogleRpcStatus } from "./googlerpcstatus";
// GoogleCloudDialogflowCxV3QueryResult
/**
 * Represents the result of a conversational query.
**/
var GoogleCloudDialogflowCxV3QueryResult = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3QueryResult, _super);
    function GoogleCloudDialogflowCxV3QueryResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPage" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Page)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diagnosticInfo" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "diagnosticInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dtmf" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3DtmfInput)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "dtmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Intent)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentDetectionConfidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "intentDetectionConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=match" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Match)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "match", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseMessages", elemType: GoogleCloudDialogflowCxV3ResponseMessage }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "responseMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentimentAnalysisResult" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3SentimentAnalysisResult)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "sentimentAnalysisResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transcript" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "transcript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerEvent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "triggerEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerIntent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "triggerIntent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookPayloads" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "webhookPayloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookStatuses", elemType: GoogleRpcStatus }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3QueryResult.prototype, "webhookStatuses", void 0);
    return GoogleCloudDialogflowCxV3QueryResult;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3QueryResult };
