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
export var ChannelStatusLongUploadsStatusEnum;
(function (ChannelStatusLongUploadsStatusEnum) {
    ChannelStatusLongUploadsStatusEnum["LongUploadsUnspecified"] = "longUploadsUnspecified";
    ChannelStatusLongUploadsStatusEnum["Allowed"] = "allowed";
    ChannelStatusLongUploadsStatusEnum["Eligible"] = "eligible";
    ChannelStatusLongUploadsStatusEnum["Disallowed"] = "disallowed";
})(ChannelStatusLongUploadsStatusEnum || (ChannelStatusLongUploadsStatusEnum = {}));
export var ChannelStatusPrivacyStatusEnum;
(function (ChannelStatusPrivacyStatusEnum) {
    ChannelStatusPrivacyStatusEnum["Public"] = "public";
    ChannelStatusPrivacyStatusEnum["Unlisted"] = "unlisted";
    ChannelStatusPrivacyStatusEnum["Private"] = "private";
})(ChannelStatusPrivacyStatusEnum || (ChannelStatusPrivacyStatusEnum = {}));
// ChannelStatus
/**
 * JSON template for the status part of a channel.
**/
var ChannelStatus = /** @class */ (function (_super) {
    __extends(ChannelStatus, _super);
    function ChannelStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLinked" }),
        __metadata("design:type", Boolean)
    ], ChannelStatus.prototype, "isLinked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longUploadsStatus" }),
        __metadata("design:type", String)
    ], ChannelStatus.prototype, "longUploadsStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=madeForKids" }),
        __metadata("design:type", Boolean)
    ], ChannelStatus.prototype, "madeForKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacyStatus" }),
        __metadata("design:type", String)
    ], ChannelStatus.prototype, "privacyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfDeclaredMadeForKids" }),
        __metadata("design:type", Boolean)
    ], ChannelStatus.prototype, "selfDeclaredMadeForKids", void 0);
    return ChannelStatus;
}(SpeakeasyBase));
export { ChannelStatus };
