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
import { AdBreak } from "./adbreak";
import { EditAtom } from "./editatom";
import { ElementaryStream } from "./elementarystream";
import { Input } from "./input";
import { Manifest } from "./manifest";
import { MuxStream } from "./muxstream";
import { Output } from "./output";
import { Overlay } from "./overlay";
import { PubsubDestination } from "./pubsubdestination";
import { SpriteSheet } from "./spritesheet";
// JobConfig
/**
 * Job configuration
**/
var JobConfig = /** @class */ (function (_super) {
    __extends(JobConfig, _super);
    function JobConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adBreaks", elemType: AdBreak }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "adBreaks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editList", elemType: EditAtom }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "editList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elementaryStreams", elemType: ElementaryStream }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "elementaryStreams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputs", elemType: Input }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "inputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manifests", elemType: Manifest }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "manifests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=muxStreams", elemType: MuxStream }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "muxStreams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=output" }),
        __metadata("design:type", Output)
    ], JobConfig.prototype, "output", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overlays", elemType: Overlay }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "overlays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubDestination" }),
        __metadata("design:type", PubsubDestination)
    ], JobConfig.prototype, "pubsubDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spriteSheets", elemType: SpriteSheet }),
        __metadata("design:type", Array)
    ], JobConfig.prototype, "spriteSheets", void 0);
    return JobConfig;
}(SpeakeasyBase));
export { JobConfig };
