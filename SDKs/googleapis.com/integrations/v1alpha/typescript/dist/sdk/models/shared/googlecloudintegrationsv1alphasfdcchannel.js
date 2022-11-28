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
// GoogleCloudIntegrationsV1alphaSfdcChannelInput
/**
 * The SfdcChannel that points to a CDC or Platform Event Channel.
**/
var GoogleCloudIntegrationsV1alphaSfdcChannelInput = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaSfdcChannelInput, _super);
    function GoogleCloudIntegrationsV1alphaSfdcChannelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelTopic" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannelInput.prototype, "channelTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannelInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannelInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIntegrationsV1alphaSfdcChannelInput.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastReplayId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannelInput.prototype, "lastReplayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannelInput.prototype, "name", void 0);
    return GoogleCloudIntegrationsV1alphaSfdcChannelInput;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaSfdcChannelInput };
// GoogleCloudIntegrationsV1alphaSfdcChannel
/**
 * The SfdcChannel that points to a CDC or Platform Event Channel.
**/
var GoogleCloudIntegrationsV1alphaSfdcChannel = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaSfdcChannel, _super);
    function GoogleCloudIntegrationsV1alphaSfdcChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelTopic" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannel.prototype, "channelTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannel.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannel.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannel.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIntegrationsV1alphaSfdcChannel.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastReplayId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannel.prototype, "lastReplayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaSfdcChannel.prototype, "updateTime", void 0);
    return GoogleCloudIntegrationsV1alphaSfdcChannel;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaSfdcChannel };
