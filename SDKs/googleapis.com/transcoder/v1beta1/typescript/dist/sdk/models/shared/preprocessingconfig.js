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
import { Audio } from "./audio";
import { Color } from "./color";
import { Crop } from "./crop";
import { Deblock } from "./deblock";
import { Denoise } from "./denoise";
import { Pad } from "./pad";
// PreprocessingConfig
/**
 * Preprocessing configurations.
**/
var PreprocessingConfig = /** @class */ (function (_super) {
    __extends(PreprocessingConfig, _super);
    function PreprocessingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio" }),
        __metadata("design:type", Audio)
    ], PreprocessingConfig.prototype, "audio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", Color)
    ], PreprocessingConfig.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crop" }),
        __metadata("design:type", Crop)
    ], PreprocessingConfig.prototype, "crop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deblock" }),
        __metadata("design:type", Deblock)
    ], PreprocessingConfig.prototype, "deblock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=denoise" }),
        __metadata("design:type", Denoise)
    ], PreprocessingConfig.prototype, "denoise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pad" }),
        __metadata("design:type", Pad)
    ], PreprocessingConfig.prototype, "pad", void 0);
    return PreprocessingConfig;
}(SpeakeasyBase));
export { PreprocessingConfig };
