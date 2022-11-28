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
import * as shared from "../shared";
var PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity = /** @class */ (function (_super) {
    __extends(PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity, _super);
    function PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity.prototype, "oauth2Legacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity.prototype, "oauth2Legacy1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity.prototype, "privateAppsLegacy1", void 0);
    return PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity;
}(SpeakeasyBase));
export { PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity };
var PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest = /** @class */ (function (_super) {
    __extends(PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest, _super);
    function PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PublicUpdateSubscriptionStatusRequest)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest.prototype, "security", void 0);
    return PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest;
}(SpeakeasyBase));
export { PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest };
var PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse = /** @class */ (function (_super) {
    __extends(PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse, _super);
    function PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublicSubscriptionStatus)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse.prototype, "publicSubscriptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse.prototype, "statusCode", void 0);
    return PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse;
}(SpeakeasyBase));
export { PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse };
