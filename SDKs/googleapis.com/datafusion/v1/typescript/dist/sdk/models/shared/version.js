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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var VersionTypeEnum;
(function (VersionTypeEnum) {
    VersionTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    VersionTypeEnum["TypePreview"] = "TYPE_PREVIEW";
    VersionTypeEnum["TypeGeneralAvailability"] = "TYPE_GENERAL_AVAILABILITY";
})(VersionTypeEnum || (VersionTypeEnum = {}));
// Version
/**
 * The Data Fusion version. This proto message stores information about certain Data Fusion version, which is used for Data Fusion version upgrade.
**/
var Version = /** @class */ (function (_super) {
    __extends(Version, _super);
    function Version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=availableFeatures" }),
        __metadata("design:type", Array)
    ], Version.prototype, "availableFeatures", void 0);
    __decorate([
        Metadata({ data: "json, name=defaultVersion" }),
        __metadata("design:type", Boolean)
    ], Version.prototype, "defaultVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Version.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=versionNumber" }),
        __metadata("design:type", String)
    ], Version.prototype, "versionNumber", void 0);
    return Version;
}(SpeakeasyBase));
export { Version };
