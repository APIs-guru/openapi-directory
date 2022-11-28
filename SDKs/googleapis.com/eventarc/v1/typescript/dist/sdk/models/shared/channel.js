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
export var ChannelStateEnum;
(function (ChannelStateEnum) {
    ChannelStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ChannelStateEnum["Pending"] = "PENDING";
    ChannelStateEnum["Active"] = "ACTIVE";
    ChannelStateEnum["Inactive"] = "INACTIVE";
})(ChannelStateEnum || (ChannelStateEnum = {}));
// Channel
/**
 * A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
**/
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationToken" }),
        __metadata("design:type", String)
    ], Channel.prototype, "activationToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Channel.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoKeyName" }),
        __metadata("design:type", String)
    ], Channel.prototype, "cryptoKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Channel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], Channel.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubTopic" }),
        __metadata("design:type", String)
    ], Channel.prototype, "pubsubTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Channel.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Channel.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Channel.prototype, "updateTime", void 0);
    return Channel;
}(SpeakeasyBase));
export { Channel };
// ChannelInput
/**
 * A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
**/
var ChannelInput = /** @class */ (function (_super) {
    __extends(ChannelInput, _super);
    function ChannelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoKeyName" }),
        __metadata("design:type", String)
    ], ChannelInput.prototype, "cryptoKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ChannelInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], ChannelInput.prototype, "provider", void 0);
    return ChannelInput;
}(SpeakeasyBase));
export { ChannelInput };
