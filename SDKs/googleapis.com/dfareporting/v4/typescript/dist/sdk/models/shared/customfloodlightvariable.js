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
export var CustomFloodlightVariableTypeEnum;
(function (CustomFloodlightVariableTypeEnum) {
    CustomFloodlightVariableTypeEnum["U1"] = "U1";
    CustomFloodlightVariableTypeEnum["U2"] = "U2";
    CustomFloodlightVariableTypeEnum["U3"] = "U3";
    CustomFloodlightVariableTypeEnum["U4"] = "U4";
    CustomFloodlightVariableTypeEnum["U5"] = "U5";
    CustomFloodlightVariableTypeEnum["U6"] = "U6";
    CustomFloodlightVariableTypeEnum["U7"] = "U7";
    CustomFloodlightVariableTypeEnum["U8"] = "U8";
    CustomFloodlightVariableTypeEnum["U9"] = "U9";
    CustomFloodlightVariableTypeEnum["U10"] = "U10";
    CustomFloodlightVariableTypeEnum["U11"] = "U11";
    CustomFloodlightVariableTypeEnum["U12"] = "U12";
    CustomFloodlightVariableTypeEnum["U13"] = "U13";
    CustomFloodlightVariableTypeEnum["U14"] = "U14";
    CustomFloodlightVariableTypeEnum["U15"] = "U15";
    CustomFloodlightVariableTypeEnum["U16"] = "U16";
    CustomFloodlightVariableTypeEnum["U17"] = "U17";
    CustomFloodlightVariableTypeEnum["U18"] = "U18";
    CustomFloodlightVariableTypeEnum["U19"] = "U19";
    CustomFloodlightVariableTypeEnum["U20"] = "U20";
    CustomFloodlightVariableTypeEnum["U21"] = "U21";
    CustomFloodlightVariableTypeEnum["U22"] = "U22";
    CustomFloodlightVariableTypeEnum["U23"] = "U23";
    CustomFloodlightVariableTypeEnum["U24"] = "U24";
    CustomFloodlightVariableTypeEnum["U25"] = "U25";
    CustomFloodlightVariableTypeEnum["U26"] = "U26";
    CustomFloodlightVariableTypeEnum["U27"] = "U27";
    CustomFloodlightVariableTypeEnum["U28"] = "U28";
    CustomFloodlightVariableTypeEnum["U29"] = "U29";
    CustomFloodlightVariableTypeEnum["U30"] = "U30";
    CustomFloodlightVariableTypeEnum["U31"] = "U31";
    CustomFloodlightVariableTypeEnum["U32"] = "U32";
    CustomFloodlightVariableTypeEnum["U33"] = "U33";
    CustomFloodlightVariableTypeEnum["U34"] = "U34";
    CustomFloodlightVariableTypeEnum["U35"] = "U35";
    CustomFloodlightVariableTypeEnum["U36"] = "U36";
    CustomFloodlightVariableTypeEnum["U37"] = "U37";
    CustomFloodlightVariableTypeEnum["U38"] = "U38";
    CustomFloodlightVariableTypeEnum["U39"] = "U39";
    CustomFloodlightVariableTypeEnum["U40"] = "U40";
    CustomFloodlightVariableTypeEnum["U41"] = "U41";
    CustomFloodlightVariableTypeEnum["U42"] = "U42";
    CustomFloodlightVariableTypeEnum["U43"] = "U43";
    CustomFloodlightVariableTypeEnum["U44"] = "U44";
    CustomFloodlightVariableTypeEnum["U45"] = "U45";
    CustomFloodlightVariableTypeEnum["U46"] = "U46";
    CustomFloodlightVariableTypeEnum["U47"] = "U47";
    CustomFloodlightVariableTypeEnum["U48"] = "U48";
    CustomFloodlightVariableTypeEnum["U49"] = "U49";
    CustomFloodlightVariableTypeEnum["U50"] = "U50";
    CustomFloodlightVariableTypeEnum["U51"] = "U51";
    CustomFloodlightVariableTypeEnum["U52"] = "U52";
    CustomFloodlightVariableTypeEnum["U53"] = "U53";
    CustomFloodlightVariableTypeEnum["U54"] = "U54";
    CustomFloodlightVariableTypeEnum["U55"] = "U55";
    CustomFloodlightVariableTypeEnum["U56"] = "U56";
    CustomFloodlightVariableTypeEnum["U57"] = "U57";
    CustomFloodlightVariableTypeEnum["U58"] = "U58";
    CustomFloodlightVariableTypeEnum["U59"] = "U59";
    CustomFloodlightVariableTypeEnum["U60"] = "U60";
    CustomFloodlightVariableTypeEnum["U61"] = "U61";
    CustomFloodlightVariableTypeEnum["U62"] = "U62";
    CustomFloodlightVariableTypeEnum["U63"] = "U63";
    CustomFloodlightVariableTypeEnum["U64"] = "U64";
    CustomFloodlightVariableTypeEnum["U65"] = "U65";
    CustomFloodlightVariableTypeEnum["U66"] = "U66";
    CustomFloodlightVariableTypeEnum["U67"] = "U67";
    CustomFloodlightVariableTypeEnum["U68"] = "U68";
    CustomFloodlightVariableTypeEnum["U69"] = "U69";
    CustomFloodlightVariableTypeEnum["U70"] = "U70";
    CustomFloodlightVariableTypeEnum["U71"] = "U71";
    CustomFloodlightVariableTypeEnum["U72"] = "U72";
    CustomFloodlightVariableTypeEnum["U73"] = "U73";
    CustomFloodlightVariableTypeEnum["U74"] = "U74";
    CustomFloodlightVariableTypeEnum["U75"] = "U75";
    CustomFloodlightVariableTypeEnum["U76"] = "U76";
    CustomFloodlightVariableTypeEnum["U77"] = "U77";
    CustomFloodlightVariableTypeEnum["U78"] = "U78";
    CustomFloodlightVariableTypeEnum["U79"] = "U79";
    CustomFloodlightVariableTypeEnum["U80"] = "U80";
    CustomFloodlightVariableTypeEnum["U81"] = "U81";
    CustomFloodlightVariableTypeEnum["U82"] = "U82";
    CustomFloodlightVariableTypeEnum["U83"] = "U83";
    CustomFloodlightVariableTypeEnum["U84"] = "U84";
    CustomFloodlightVariableTypeEnum["U85"] = "U85";
    CustomFloodlightVariableTypeEnum["U86"] = "U86";
    CustomFloodlightVariableTypeEnum["U87"] = "U87";
    CustomFloodlightVariableTypeEnum["U88"] = "U88";
    CustomFloodlightVariableTypeEnum["U89"] = "U89";
    CustomFloodlightVariableTypeEnum["U90"] = "U90";
    CustomFloodlightVariableTypeEnum["U91"] = "U91";
    CustomFloodlightVariableTypeEnum["U92"] = "U92";
    CustomFloodlightVariableTypeEnum["U93"] = "U93";
    CustomFloodlightVariableTypeEnum["U94"] = "U94";
    CustomFloodlightVariableTypeEnum["U95"] = "U95";
    CustomFloodlightVariableTypeEnum["U96"] = "U96";
    CustomFloodlightVariableTypeEnum["U97"] = "U97";
    CustomFloodlightVariableTypeEnum["U98"] = "U98";
    CustomFloodlightVariableTypeEnum["U99"] = "U99";
    CustomFloodlightVariableTypeEnum["U100"] = "U100";
})(CustomFloodlightVariableTypeEnum || (CustomFloodlightVariableTypeEnum = {}));
// CustomFloodlightVariable
/**
 * A custom floodlight variable. This field may only be used when calling batchinsert; it is not supported by batchupdate.
**/
var CustomFloodlightVariable = /** @class */ (function (_super) {
    __extends(CustomFloodlightVariable, _super);
    function CustomFloodlightVariable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CustomFloodlightVariable.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomFloodlightVariable.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CustomFloodlightVariable.prototype, "value", void 0);
    return CustomFloodlightVariable;
}(SpeakeasyBase));
export { CustomFloodlightVariable };
