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
import { Dimensions } from "./dimensions";
export var ObaIconPositionEnum;
(function (ObaIconPositionEnum) {
    ObaIconPositionEnum["ObaIconPositionUnspecified"] = "OBA_ICON_POSITION_UNSPECIFIED";
    ObaIconPositionEnum["ObaIconPositionUpperRight"] = "OBA_ICON_POSITION_UPPER_RIGHT";
    ObaIconPositionEnum["ObaIconPositionUpperLeft"] = "OBA_ICON_POSITION_UPPER_LEFT";
    ObaIconPositionEnum["ObaIconPositionLowerRight"] = "OBA_ICON_POSITION_LOWER_RIGHT";
    ObaIconPositionEnum["ObaIconPositionLowerLeft"] = "OBA_ICON_POSITION_LOWER_LEFT";
})(ObaIconPositionEnum || (ObaIconPositionEnum = {}));
// ObaIcon
/**
 * OBA Icon for a Creative
**/
var ObaIcon = /** @class */ (function (_super) {
    __extends(ObaIcon, _super);
    function ObaIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickTrackingUrl" }),
        __metadata("design:type", String)
    ], ObaIcon.prototype, "clickTrackingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Dimensions)
    ], ObaIcon.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landingPageUrl" }),
        __metadata("design:type", String)
    ], ObaIcon.prototype, "landingPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], ObaIcon.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=program" }),
        __metadata("design:type", String)
    ], ObaIcon.prototype, "program", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceMimeType" }),
        __metadata("design:type", String)
    ], ObaIcon.prototype, "resourceMimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUrl" }),
        __metadata("design:type", String)
    ], ObaIcon.prototype, "resourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewTrackingUrl" }),
        __metadata("design:type", String)
    ], ObaIcon.prototype, "viewTrackingUrl", void 0);
    return ObaIcon;
}(SpeakeasyBase));
export { ObaIcon };
