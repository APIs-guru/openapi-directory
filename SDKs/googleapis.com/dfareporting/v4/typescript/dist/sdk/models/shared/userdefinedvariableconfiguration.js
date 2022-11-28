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
export var UserDefinedVariableConfigurationDataTypeEnum;
(function (UserDefinedVariableConfigurationDataTypeEnum) {
    UserDefinedVariableConfigurationDataTypeEnum["String"] = "STRING";
    UserDefinedVariableConfigurationDataTypeEnum["Number"] = "NUMBER";
})(UserDefinedVariableConfigurationDataTypeEnum || (UserDefinedVariableConfigurationDataTypeEnum = {}));
export var UserDefinedVariableConfigurationVariableTypeEnum;
(function (UserDefinedVariableConfigurationVariableTypeEnum) {
    UserDefinedVariableConfigurationVariableTypeEnum["U1"] = "U1";
    UserDefinedVariableConfigurationVariableTypeEnum["U2"] = "U2";
    UserDefinedVariableConfigurationVariableTypeEnum["U3"] = "U3";
    UserDefinedVariableConfigurationVariableTypeEnum["U4"] = "U4";
    UserDefinedVariableConfigurationVariableTypeEnum["U5"] = "U5";
    UserDefinedVariableConfigurationVariableTypeEnum["U6"] = "U6";
    UserDefinedVariableConfigurationVariableTypeEnum["U7"] = "U7";
    UserDefinedVariableConfigurationVariableTypeEnum["U8"] = "U8";
    UserDefinedVariableConfigurationVariableTypeEnum["U9"] = "U9";
    UserDefinedVariableConfigurationVariableTypeEnum["U10"] = "U10";
    UserDefinedVariableConfigurationVariableTypeEnum["U11"] = "U11";
    UserDefinedVariableConfigurationVariableTypeEnum["U12"] = "U12";
    UserDefinedVariableConfigurationVariableTypeEnum["U13"] = "U13";
    UserDefinedVariableConfigurationVariableTypeEnum["U14"] = "U14";
    UserDefinedVariableConfigurationVariableTypeEnum["U15"] = "U15";
    UserDefinedVariableConfigurationVariableTypeEnum["U16"] = "U16";
    UserDefinedVariableConfigurationVariableTypeEnum["U17"] = "U17";
    UserDefinedVariableConfigurationVariableTypeEnum["U18"] = "U18";
    UserDefinedVariableConfigurationVariableTypeEnum["U19"] = "U19";
    UserDefinedVariableConfigurationVariableTypeEnum["U20"] = "U20";
    UserDefinedVariableConfigurationVariableTypeEnum["U21"] = "U21";
    UserDefinedVariableConfigurationVariableTypeEnum["U22"] = "U22";
    UserDefinedVariableConfigurationVariableTypeEnum["U23"] = "U23";
    UserDefinedVariableConfigurationVariableTypeEnum["U24"] = "U24";
    UserDefinedVariableConfigurationVariableTypeEnum["U25"] = "U25";
    UserDefinedVariableConfigurationVariableTypeEnum["U26"] = "U26";
    UserDefinedVariableConfigurationVariableTypeEnum["U27"] = "U27";
    UserDefinedVariableConfigurationVariableTypeEnum["U28"] = "U28";
    UserDefinedVariableConfigurationVariableTypeEnum["U29"] = "U29";
    UserDefinedVariableConfigurationVariableTypeEnum["U30"] = "U30";
    UserDefinedVariableConfigurationVariableTypeEnum["U31"] = "U31";
    UserDefinedVariableConfigurationVariableTypeEnum["U32"] = "U32";
    UserDefinedVariableConfigurationVariableTypeEnum["U33"] = "U33";
    UserDefinedVariableConfigurationVariableTypeEnum["U34"] = "U34";
    UserDefinedVariableConfigurationVariableTypeEnum["U35"] = "U35";
    UserDefinedVariableConfigurationVariableTypeEnum["U36"] = "U36";
    UserDefinedVariableConfigurationVariableTypeEnum["U37"] = "U37";
    UserDefinedVariableConfigurationVariableTypeEnum["U38"] = "U38";
    UserDefinedVariableConfigurationVariableTypeEnum["U39"] = "U39";
    UserDefinedVariableConfigurationVariableTypeEnum["U40"] = "U40";
    UserDefinedVariableConfigurationVariableTypeEnum["U41"] = "U41";
    UserDefinedVariableConfigurationVariableTypeEnum["U42"] = "U42";
    UserDefinedVariableConfigurationVariableTypeEnum["U43"] = "U43";
    UserDefinedVariableConfigurationVariableTypeEnum["U44"] = "U44";
    UserDefinedVariableConfigurationVariableTypeEnum["U45"] = "U45";
    UserDefinedVariableConfigurationVariableTypeEnum["U46"] = "U46";
    UserDefinedVariableConfigurationVariableTypeEnum["U47"] = "U47";
    UserDefinedVariableConfigurationVariableTypeEnum["U48"] = "U48";
    UserDefinedVariableConfigurationVariableTypeEnum["U49"] = "U49";
    UserDefinedVariableConfigurationVariableTypeEnum["U50"] = "U50";
    UserDefinedVariableConfigurationVariableTypeEnum["U51"] = "U51";
    UserDefinedVariableConfigurationVariableTypeEnum["U52"] = "U52";
    UserDefinedVariableConfigurationVariableTypeEnum["U53"] = "U53";
    UserDefinedVariableConfigurationVariableTypeEnum["U54"] = "U54";
    UserDefinedVariableConfigurationVariableTypeEnum["U55"] = "U55";
    UserDefinedVariableConfigurationVariableTypeEnum["U56"] = "U56";
    UserDefinedVariableConfigurationVariableTypeEnum["U57"] = "U57";
    UserDefinedVariableConfigurationVariableTypeEnum["U58"] = "U58";
    UserDefinedVariableConfigurationVariableTypeEnum["U59"] = "U59";
    UserDefinedVariableConfigurationVariableTypeEnum["U60"] = "U60";
    UserDefinedVariableConfigurationVariableTypeEnum["U61"] = "U61";
    UserDefinedVariableConfigurationVariableTypeEnum["U62"] = "U62";
    UserDefinedVariableConfigurationVariableTypeEnum["U63"] = "U63";
    UserDefinedVariableConfigurationVariableTypeEnum["U64"] = "U64";
    UserDefinedVariableConfigurationVariableTypeEnum["U65"] = "U65";
    UserDefinedVariableConfigurationVariableTypeEnum["U66"] = "U66";
    UserDefinedVariableConfigurationVariableTypeEnum["U67"] = "U67";
    UserDefinedVariableConfigurationVariableTypeEnum["U68"] = "U68";
    UserDefinedVariableConfigurationVariableTypeEnum["U69"] = "U69";
    UserDefinedVariableConfigurationVariableTypeEnum["U70"] = "U70";
    UserDefinedVariableConfigurationVariableTypeEnum["U71"] = "U71";
    UserDefinedVariableConfigurationVariableTypeEnum["U72"] = "U72";
    UserDefinedVariableConfigurationVariableTypeEnum["U73"] = "U73";
    UserDefinedVariableConfigurationVariableTypeEnum["U74"] = "U74";
    UserDefinedVariableConfigurationVariableTypeEnum["U75"] = "U75";
    UserDefinedVariableConfigurationVariableTypeEnum["U76"] = "U76";
    UserDefinedVariableConfigurationVariableTypeEnum["U77"] = "U77";
    UserDefinedVariableConfigurationVariableTypeEnum["U78"] = "U78";
    UserDefinedVariableConfigurationVariableTypeEnum["U79"] = "U79";
    UserDefinedVariableConfigurationVariableTypeEnum["U80"] = "U80";
    UserDefinedVariableConfigurationVariableTypeEnum["U81"] = "U81";
    UserDefinedVariableConfigurationVariableTypeEnum["U82"] = "U82";
    UserDefinedVariableConfigurationVariableTypeEnum["U83"] = "U83";
    UserDefinedVariableConfigurationVariableTypeEnum["U84"] = "U84";
    UserDefinedVariableConfigurationVariableTypeEnum["U85"] = "U85";
    UserDefinedVariableConfigurationVariableTypeEnum["U86"] = "U86";
    UserDefinedVariableConfigurationVariableTypeEnum["U87"] = "U87";
    UserDefinedVariableConfigurationVariableTypeEnum["U88"] = "U88";
    UserDefinedVariableConfigurationVariableTypeEnum["U89"] = "U89";
    UserDefinedVariableConfigurationVariableTypeEnum["U90"] = "U90";
    UserDefinedVariableConfigurationVariableTypeEnum["U91"] = "U91";
    UserDefinedVariableConfigurationVariableTypeEnum["U92"] = "U92";
    UserDefinedVariableConfigurationVariableTypeEnum["U93"] = "U93";
    UserDefinedVariableConfigurationVariableTypeEnum["U94"] = "U94";
    UserDefinedVariableConfigurationVariableTypeEnum["U95"] = "U95";
    UserDefinedVariableConfigurationVariableTypeEnum["U96"] = "U96";
    UserDefinedVariableConfigurationVariableTypeEnum["U97"] = "U97";
    UserDefinedVariableConfigurationVariableTypeEnum["U98"] = "U98";
    UserDefinedVariableConfigurationVariableTypeEnum["U99"] = "U99";
    UserDefinedVariableConfigurationVariableTypeEnum["U100"] = "U100";
})(UserDefinedVariableConfigurationVariableTypeEnum || (UserDefinedVariableConfigurationVariableTypeEnum = {}));
// UserDefinedVariableConfiguration
/**
 * User Defined Variable configuration.
**/
var UserDefinedVariableConfiguration = /** @class */ (function (_super) {
    __extends(UserDefinedVariableConfiguration, _super);
    function UserDefinedVariableConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], UserDefinedVariableConfiguration.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportName" }),
        __metadata("design:type", String)
    ], UserDefinedVariableConfiguration.prototype, "reportName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variableType" }),
        __metadata("design:type", String)
    ], UserDefinedVariableConfiguration.prototype, "variableType", void 0);
    return UserDefinedVariableConfiguration;
}(SpeakeasyBase));
export { UserDefinedVariableConfiguration };
