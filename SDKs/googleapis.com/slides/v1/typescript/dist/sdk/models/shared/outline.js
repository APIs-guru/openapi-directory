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
import { OutlineFill } from "./outlinefill";
import { Dimension } from "./dimension";
export var OutlineDashStyleEnum;
(function (OutlineDashStyleEnum) {
    OutlineDashStyleEnum["DashStyleUnspecified"] = "DASH_STYLE_UNSPECIFIED";
    OutlineDashStyleEnum["Solid"] = "SOLID";
    OutlineDashStyleEnum["Dot"] = "DOT";
    OutlineDashStyleEnum["Dash"] = "DASH";
    OutlineDashStyleEnum["DashDot"] = "DASH_DOT";
    OutlineDashStyleEnum["LongDash"] = "LONG_DASH";
    OutlineDashStyleEnum["LongDashDot"] = "LONG_DASH_DOT";
})(OutlineDashStyleEnum || (OutlineDashStyleEnum = {}));
export var OutlinePropertyStateEnum;
(function (OutlinePropertyStateEnum) {
    OutlinePropertyStateEnum["Rendered"] = "RENDERED";
    OutlinePropertyStateEnum["NotRendered"] = "NOT_RENDERED";
    OutlinePropertyStateEnum["Inherit"] = "INHERIT";
})(OutlinePropertyStateEnum || (OutlinePropertyStateEnum = {}));
// Outline
/**
 * The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
**/
var Outline = /** @class */ (function (_super) {
    __extends(Outline, _super);
    function Outline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dashStyle" }),
        __metadata("design:type", String)
    ], Outline.prototype, "dashStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlineFill" }),
        __metadata("design:type", OutlineFill)
    ], Outline.prototype, "outlineFill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyState" }),
        __metadata("design:type", String)
    ], Outline.prototype, "propertyState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Dimension)
    ], Outline.prototype, "weight", void 0);
    return Outline;
}(SpeakeasyBase));
export { Outline };
