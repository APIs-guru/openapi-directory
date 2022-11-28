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
import { ColorStop } from "./colorstop";
export var RecolorNameEnum;
(function (RecolorNameEnum) {
    RecolorNameEnum["None"] = "NONE";
    RecolorNameEnum["Light1"] = "LIGHT1";
    RecolorNameEnum["Light2"] = "LIGHT2";
    RecolorNameEnum["Light3"] = "LIGHT3";
    RecolorNameEnum["Light4"] = "LIGHT4";
    RecolorNameEnum["Light5"] = "LIGHT5";
    RecolorNameEnum["Light6"] = "LIGHT6";
    RecolorNameEnum["Light7"] = "LIGHT7";
    RecolorNameEnum["Light8"] = "LIGHT8";
    RecolorNameEnum["Light9"] = "LIGHT9";
    RecolorNameEnum["Light10"] = "LIGHT10";
    RecolorNameEnum["Dark1"] = "DARK1";
    RecolorNameEnum["Dark2"] = "DARK2";
    RecolorNameEnum["Dark3"] = "DARK3";
    RecolorNameEnum["Dark4"] = "DARK4";
    RecolorNameEnum["Dark5"] = "DARK5";
    RecolorNameEnum["Dark6"] = "DARK6";
    RecolorNameEnum["Dark7"] = "DARK7";
    RecolorNameEnum["Dark8"] = "DARK8";
    RecolorNameEnum["Dark9"] = "DARK9";
    RecolorNameEnum["Dark10"] = "DARK10";
    RecolorNameEnum["Grayscale"] = "GRAYSCALE";
    RecolorNameEnum["Negative"] = "NEGATIVE";
    RecolorNameEnum["Sepia"] = "SEPIA";
    RecolorNameEnum["Custom"] = "CUSTOM";
})(RecolorNameEnum || (RecolorNameEnum = {}));
// Recolor
/**
 * A recolor effect applied on an image.
**/
var Recolor = /** @class */ (function (_super) {
    __extends(Recolor, _super);
    function Recolor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Recolor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recolorStops", elemType: ColorStop }),
        __metadata("design:type", Array)
    ], Recolor.prototype, "recolorStops", void 0);
    return Recolor;
}(SpeakeasyBase));
export { Recolor };
