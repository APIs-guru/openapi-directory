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
import { Encryption } from "./encryption";
import { SegmentSettings } from "./segmentsettings";
// MuxStream
/**
 * Multiplexing settings for output stream.
**/
var MuxStream = /** @class */ (function (_super) {
    __extends(MuxStream, _super);
    function MuxStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=container" }),
        __metadata("design:type", String)
    ], MuxStream.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elementaryStreams" }),
        __metadata("design:type", Array)
    ], MuxStream.prototype, "elementaryStreams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryption" }),
        __metadata("design:type", Encryption)
    ], MuxStream.prototype, "encryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileName" }),
        __metadata("design:type", String)
    ], MuxStream.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], MuxStream.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentSettings" }),
        __metadata("design:type", SegmentSettings)
    ], MuxStream.prototype, "segmentSettings", void 0);
    return MuxStream;
}(SpeakeasyBase));
export { MuxStream };
