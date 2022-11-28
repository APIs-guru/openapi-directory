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
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowCxV3beta1SessionEntityType } from "./googleclouddialogflowcxv3beta1sessionentitytype";
// GoogleCloudDialogflowCxV3beta1QueryParameters
/**
 * Represents the parameters of a conversational query.
**/
var GoogleCloudDialogflowCxV3beta1QueryParameters = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1QueryParameters, _super);
    function GoogleCloudDialogflowCxV3beta1QueryParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analyzeQueryTextSentiment" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "analyzeQueryTextSentiment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableWebhook" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "disableWebhook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowVersions" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "flowVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geoLocation" }),
        __metadata("design:type", GoogleTypeLatLng)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "geoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowCxV3beta1SessionEntityType }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "sessionEntityTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookHeaders" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1QueryParameters.prototype, "webhookHeaders", void 0);
    return GoogleCloudDialogflowCxV3beta1QueryParameters;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1QueryParameters };
