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
import { MatterPermission } from "./matterpermission";
export var MatterStateEnum;
(function (MatterStateEnum) {
    MatterStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    MatterStateEnum["Open"] = "OPEN";
    MatterStateEnum["Closed"] = "CLOSED";
    MatterStateEnum["Deleted"] = "DELETED";
})(MatterStateEnum || (MatterStateEnum = {}));
// Matter
/**
 * Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
var Matter = /** @class */ (function (_super) {
    __extends(Matter, _super);
    function Matter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Matter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matterId" }),
        __metadata("design:type", String)
    ], Matter.prototype, "matterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matterPermissions", elemType: MatterPermission }),
        __metadata("design:type", Array)
    ], Matter.prototype, "matterPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Matter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Matter.prototype, "state", void 0);
    return Matter;
}(SpeakeasyBase));
export { Matter };
