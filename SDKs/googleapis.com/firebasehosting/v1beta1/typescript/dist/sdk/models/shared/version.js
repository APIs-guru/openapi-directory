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
import { ServingConfig } from "./servingconfig";
import { ActingUser } from "./actinguser";
export var VersionStatusEnum;
(function (VersionStatusEnum) {
    VersionStatusEnum["VersionStatusUnspecified"] = "VERSION_STATUS_UNSPECIFIED";
    VersionStatusEnum["Created"] = "CREATED";
    VersionStatusEnum["Finalized"] = "FINALIZED";
    VersionStatusEnum["Deleted"] = "DELETED";
    VersionStatusEnum["Abandoned"] = "ABANDONED";
    VersionStatusEnum["Expired"] = "EXPIRED";
    VersionStatusEnum["Cloning"] = "CLONING";
})(VersionStatusEnum || (VersionStatusEnum = {}));
// Version
/**
 * A `Version` is a configuration and a collection of static files which determine how a site is displayed.
**/
var Version = /** @class */ (function (_super) {
    __extends(Version, _super);
    function Version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", ServingConfig)
    ], Version.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Version.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createUser" }),
        __metadata("design:type", ActingUser)
    ], Version.prototype, "createUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], Version.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteUser" }),
        __metadata("design:type", ActingUser)
    ], Version.prototype, "deleteUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileCount" }),
        __metadata("design:type", String)
    ], Version.prototype, "fileCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalizeTime" }),
        __metadata("design:type", String)
    ], Version.prototype, "finalizeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalizeUser" }),
        __metadata("design:type", ActingUser)
    ], Version.prototype, "finalizeUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Version.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Version.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Version.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionBytes" }),
        __metadata("design:type", String)
    ], Version.prototype, "versionBytes", void 0);
    return Version;
}(SpeakeasyBase));
export { Version };
