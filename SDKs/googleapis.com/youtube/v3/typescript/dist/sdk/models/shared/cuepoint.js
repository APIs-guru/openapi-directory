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
export var CuepointCueTypeEnum;
(function (CuepointCueTypeEnum) {
    CuepointCueTypeEnum["CueTypeUnspecified"] = "cueTypeUnspecified";
    CuepointCueTypeEnum["CueTypeAd"] = "cueTypeAd";
})(CuepointCueTypeEnum || (CuepointCueTypeEnum = {}));
// Cuepoint
/**
 * Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.
**/
var Cuepoint = /** @class */ (function (_super) {
    __extends(Cuepoint, _super);
    function Cuepoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cueType" }),
        __metadata("design:type", String)
    ], Cuepoint.prototype, "cueType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationSecs" }),
        __metadata("design:type", Number)
    ], Cuepoint.prototype, "durationSecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Cuepoint.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Cuepoint.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertionOffsetTimeMs" }),
        __metadata("design:type", String)
    ], Cuepoint.prototype, "insertionOffsetTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=walltimeMs" }),
        __metadata("design:type", String)
    ], Cuepoint.prototype, "walltimeMs", void 0);
    return Cuepoint;
}(SpeakeasyBase));
export { Cuepoint };
