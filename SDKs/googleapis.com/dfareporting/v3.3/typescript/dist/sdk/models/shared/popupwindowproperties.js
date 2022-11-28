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
import { Size } from "./size";
import { OffsetPosition } from "./offsetposition";
export var PopupWindowPropertiesPositionTypeEnum;
(function (PopupWindowPropertiesPositionTypeEnum) {
    PopupWindowPropertiesPositionTypeEnum["Center"] = "CENTER";
    PopupWindowPropertiesPositionTypeEnum["Coordinates"] = "COORDINATES";
})(PopupWindowPropertiesPositionTypeEnum || (PopupWindowPropertiesPositionTypeEnum = {}));
// PopupWindowProperties
/**
 * Popup Window Properties.
**/
var PopupWindowProperties = /** @class */ (function (_super) {
    __extends(PopupWindowProperties, _super);
    function PopupWindowProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", Size)
    ], PopupWindowProperties.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", OffsetPosition)
    ], PopupWindowProperties.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionType" }),
        __metadata("design:type", String)
    ], PopupWindowProperties.prototype, "positionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showAddressBar" }),
        __metadata("design:type", Boolean)
    ], PopupWindowProperties.prototype, "showAddressBar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showMenuBar" }),
        __metadata("design:type", Boolean)
    ], PopupWindowProperties.prototype, "showMenuBar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showScrollBar" }),
        __metadata("design:type", Boolean)
    ], PopupWindowProperties.prototype, "showScrollBar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showStatusBar" }),
        __metadata("design:type", Boolean)
    ], PopupWindowProperties.prototype, "showStatusBar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showToolBar" }),
        __metadata("design:type", Boolean)
    ], PopupWindowProperties.prototype, "showToolBar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PopupWindowProperties.prototype, "title", void 0);
    return PopupWindowProperties;
}(SpeakeasyBase));
export { PopupWindowProperties };
