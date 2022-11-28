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
import { Browser } from "./browser";
import { ConnectionType } from "./connectiontype";
import { MobileCarrier } from "./mobilecarrier";
import { OperatingSystemVersion } from "./operatingsystemversion";
import { OperatingSystem } from "./operatingsystem";
import { PlatformType } from "./platformtype";
// TechnologyTargeting
/**
 * Technology Targeting.
**/
var TechnologyTargeting = /** @class */ (function (_super) {
    __extends(TechnologyTargeting, _super);
    function TechnologyTargeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browsers", elemType: Browser }),
        __metadata("design:type", Array)
    ], TechnologyTargeting.prototype, "browsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionTypes", elemType: ConnectionType }),
        __metadata("design:type", Array)
    ], TechnologyTargeting.prototype, "connectionTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileCarriers", elemType: MobileCarrier }),
        __metadata("design:type", Array)
    ], TechnologyTargeting.prototype, "mobileCarriers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatingSystemVersions", elemType: OperatingSystemVersion }),
        __metadata("design:type", Array)
    ], TechnologyTargeting.prototype, "operatingSystemVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatingSystems", elemType: OperatingSystem }),
        __metadata("design:type", Array)
    ], TechnologyTargeting.prototype, "operatingSystems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platformTypes", elemType: PlatformType }),
        __metadata("design:type", Array)
    ], TechnologyTargeting.prototype, "platformTypes", void 0);
    return TechnologyTargeting;
}(SpeakeasyBase));
export { TechnologyTargeting };
