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
import { GoogleCloudDiscoveryengineV1betaBigQuerySource } from "./googleclouddiscoveryenginev1betabigquerysource";
import { GoogleCloudDiscoveryengineV1betaImportErrorConfig } from "./googleclouddiscoveryenginev1betaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1betaGcsSource } from "./googleclouddiscoveryenginev1betagcssource";
import { GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource } from "./googleclouddiscoveryenginev1betaimportusereventsrequestinlinesource";
// GoogleCloudDiscoveryengineV1betaImportUserEventsRequest
/**
 * Request message for the ImportUserEvents request.
**/
var GoogleCloudDiscoveryengineV1betaImportUserEventsRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDiscoveryengineV1betaImportUserEventsRequest, _super);
    function GoogleCloudDiscoveryengineV1betaImportUserEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigquerySource" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaBigQuerySource)
    ], GoogleCloudDiscoveryengineV1betaImportUserEventsRequest.prototype, "bigquerySource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorConfig" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaImportErrorConfig)
    ], GoogleCloudDiscoveryengineV1betaImportUserEventsRequest.prototype, "errorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsSource" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaGcsSource)
    ], GoogleCloudDiscoveryengineV1betaImportUserEventsRequest.prototype, "gcsSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inlineSource" }),
        __metadata("design:type", GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource)
    ], GoogleCloudDiscoveryengineV1betaImportUserEventsRequest.prototype, "inlineSource", void 0);
    return GoogleCloudDiscoveryengineV1betaImportUserEventsRequest;
}(SpeakeasyBase));
export { GoogleCloudDiscoveryengineV1betaImportUserEventsRequest };
