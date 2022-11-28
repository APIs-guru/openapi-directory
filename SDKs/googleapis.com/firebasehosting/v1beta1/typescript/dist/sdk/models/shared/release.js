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
import { ActingUser } from "./actinguser";
import { Version } from "./version";
export var ReleaseTypeEnum;
(function (ReleaseTypeEnum) {
    ReleaseTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    ReleaseTypeEnum["Deploy"] = "DEPLOY";
    ReleaseTypeEnum["Rollback"] = "ROLLBACK";
    ReleaseTypeEnum["SiteDisable"] = "SITE_DISABLE";
})(ReleaseTypeEnum || (ReleaseTypeEnum = {}));
// Release
/**
 *  A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
**/
var Release = /** @class */ (function (_super) {
    __extends(Release, _super);
    function Release() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Release.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Release.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseTime" }),
        __metadata("design:type", String)
    ], Release.prototype, "releaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseUser" }),
        __metadata("design:type", ActingUser)
    ], Release.prototype, "releaseUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Release.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Version)
    ], Release.prototype, "version", void 0);
    return Release;
}(SpeakeasyBase));
export { Release };
