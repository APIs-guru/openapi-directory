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
export var PackageDesiredStateEnum;
(function (PackageDesiredStateEnum) {
    PackageDesiredStateEnum["DesiredStateUnspecified"] = "DESIRED_STATE_UNSPECIFIED";
    PackageDesiredStateEnum["Installed"] = "INSTALLED";
    PackageDesiredStateEnum["Updated"] = "UPDATED";
    PackageDesiredStateEnum["Removed"] = "REMOVED";
})(PackageDesiredStateEnum || (PackageDesiredStateEnum = {}));
export var PackageManagerEnum;
(function (PackageManagerEnum) {
    PackageManagerEnum["ManagerUnspecified"] = "MANAGER_UNSPECIFIED";
    PackageManagerEnum["Any"] = "ANY";
    PackageManagerEnum["Apt"] = "APT";
    PackageManagerEnum["Yum"] = "YUM";
    PackageManagerEnum["Zypper"] = "ZYPPER";
    PackageManagerEnum["Goo"] = "GOO";
})(PackageManagerEnum || (PackageManagerEnum = {}));
// Package
/**
 * Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3`
**/
var Package = /** @class */ (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredState" }),
        __metadata("design:type", String)
    ], Package.prototype, "desiredState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manager" }),
        __metadata("design:type", String)
    ], Package.prototype, "manager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Package.prototype, "name", void 0);
    return Package;
}(SpeakeasyBase));
export { Package };
