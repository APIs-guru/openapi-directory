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
import { Version } from "./version";
export var DistributionArchitectureEnum;
(function (DistributionArchitectureEnum) {
    DistributionArchitectureEnum["ArchitectureUnspecified"] = "ARCHITECTURE_UNSPECIFIED";
    DistributionArchitectureEnum["X86"] = "X86";
    DistributionArchitectureEnum["X64"] = "X64";
})(DistributionArchitectureEnum || (DistributionArchitectureEnum = {}));
// Distribution
/**
 * This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror.
**/
var Distribution = /** @class */ (function (_super) {
    __extends(Distribution, _super);
    function Distribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=architecture" }),
        __metadata("design:type", String)
    ], Distribution.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpeUri" }),
        __metadata("design:type", String)
    ], Distribution.prototype, "cpeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Distribution.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestVersion" }),
        __metadata("design:type", Version)
    ], Distribution.prototype, "latestVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintainer" }),
        __metadata("design:type", String)
    ], Distribution.prototype, "maintainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Distribution.prototype, "url", void 0);
    return Distribution;
}(SpeakeasyBase));
export { Distribution };
