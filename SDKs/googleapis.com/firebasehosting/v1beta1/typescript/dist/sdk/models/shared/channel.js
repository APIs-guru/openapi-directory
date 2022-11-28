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
import { Release } from "./release";
// ChannelInput
/**
 * A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.
**/
var ChannelInput = /** @class */ (function (_super) {
    __extends(ChannelInput, _super);
    function ChannelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], ChannelInput.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ChannelInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ChannelInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release" }),
        __metadata("design:type", Release)
    ], ChannelInput.prototype, "release", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retainedReleaseCount" }),
        __metadata("design:type", Number)
    ], ChannelInput.prototype, "retainedReleaseCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], ChannelInput.prototype, "ttl", void 0);
    return ChannelInput;
}(SpeakeasyBase));
export { ChannelInput };
// Channel
/**
 * A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.
**/
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Channel.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], Channel.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Channel.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Channel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=release" }),
        __metadata("design:type", Release)
    ], Channel.prototype, "release", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retainedReleaseCount" }),
        __metadata("design:type", Number)
    ], Channel.prototype, "retainedReleaseCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], Channel.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Channel.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Channel.prototype, "url", void 0);
    return Channel;
}(SpeakeasyBase));
export { Channel };
