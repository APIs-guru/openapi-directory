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
import { ChannelTypeEnum } from "./channeltypeenum";
// ChannelFrom1
/**
 * Connect to an App User
**/
var ChannelFrom1 = /** @class */ (function (_super) {
    __extends(ChannelFrom1, _super);
    function ChannelFrom1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChannelFrom1.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ChannelFrom1.prototype, "user", void 0);
    return ChannelFrom1;
}(SpeakeasyBase));
export { ChannelFrom1 };
// ChannelFrom2
/**
 * Connect to a Phone (PSTN) number
**/
var ChannelFrom2 = /** @class */ (function (_super) {
    __extends(ChannelFrom2, _super);
    function ChannelFrom2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], ChannelFrom2.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChannelFrom2.prototype, "type", void 0);
    return ChannelFrom2;
}(SpeakeasyBase));
export { ChannelFrom2 };
// ChannelFrom3
/**
 * Connect to a SIP Endpoint
**/
var ChannelFrom3 = /** @class */ (function (_super) {
    __extends(ChannelFrom3, _super);
    function ChannelFrom3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChannelFrom3.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ChannelFrom3.prototype, "uri", void 0);
    return ChannelFrom3;
}(SpeakeasyBase));
export { ChannelFrom3 };
export var ChannelFrom4ContentTypeEnum;
(function (ChannelFrom4ContentTypeEnum) {
    ChannelFrom4ContentTypeEnum["AudioL16RateEqual8000"] = "audio/l16;rate=8000";
    ChannelFrom4ContentTypeEnum["AudioL16RateEqual16000"] = "audio/l16;rate=16000";
})(ChannelFrom4ContentTypeEnum || (ChannelFrom4ContentTypeEnum = {}));
// ChannelFrom4Headers
/**
 * Details of the Websocket you want to connect to
**/
var ChannelFrom4Headers = /** @class */ (function (_super) {
    __extends(ChannelFrom4Headers, _super);
    function ChannelFrom4Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], ChannelFrom4Headers.prototype, "customerId", void 0);
    return ChannelFrom4Headers;
}(SpeakeasyBase));
export { ChannelFrom4Headers };
// ChannelFrom4
/**
 * Connect to a Websocket
**/
var ChannelFrom4 = /** @class */ (function (_super) {
    __extends(ChannelFrom4, _super);
    function ChannelFrom4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content-type" }),
        __metadata("design:type", String)
    ], ChannelFrom4.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", ChannelFrom4Headers)
    ], ChannelFrom4.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChannelFrom4.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ChannelFrom4.prototype, "uri", void 0);
    return ChannelFrom4;
}(SpeakeasyBase));
export { ChannelFrom4 };
// ChannelFrom5
/**
 * Connect to a VBC extension
**/
var ChannelFrom5 = /** @class */ (function (_super) {
    __extends(ChannelFrom5, _super);
    function ChannelFrom5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], ChannelFrom5.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChannelFrom5.prototype, "type", void 0);
    return ChannelFrom5;
}(SpeakeasyBase));
export { ChannelFrom5 };
// ChannelTo2
/**
 * Connect to a Phone (PSTN) number
**/
var ChannelTo2 = /** @class */ (function (_super) {
    __extends(ChannelTo2, _super);
    function ChannelTo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dtmfAnswer" }),
        __metadata("design:type", String)
    ], ChannelTo2.prototype, "dtmfAnswer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], ChannelTo2.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChannelTo2.prototype, "type", void 0);
    return ChannelTo2;
}(SpeakeasyBase));
export { ChannelTo2 };
// Channel
/**
 * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
**/
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", Object)
    ], Channel.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leg_id" }),
        __metadata("design:type", String)
    ], Channel.prototype, "legId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leg_ids" }),
        __metadata("design:type", Array)
    ], Channel.prototype, "legIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", Object)
    ], Channel.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Channel.prototype, "type", void 0);
    return Channel;
}(SpeakeasyBase));
export { Channel };
