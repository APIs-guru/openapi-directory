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
export var UpgradeHistoryEntryActionEnum;
(function (UpgradeHistoryEntryActionEnum) {
    UpgradeHistoryEntryActionEnum["ActionUnspecified"] = "ACTION_UNSPECIFIED";
    UpgradeHistoryEntryActionEnum["Upgrade"] = "UPGRADE";
    UpgradeHistoryEntryActionEnum["Rollback"] = "ROLLBACK";
})(UpgradeHistoryEntryActionEnum || (UpgradeHistoryEntryActionEnum = {}));
export var UpgradeHistoryEntryStateEnum;
(function (UpgradeHistoryEntryStateEnum) {
    UpgradeHistoryEntryStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    UpgradeHistoryEntryStateEnum["Started"] = "STARTED";
    UpgradeHistoryEntryStateEnum["Succeeded"] = "SUCCEEDED";
    UpgradeHistoryEntryStateEnum["Failed"] = "FAILED";
})(UpgradeHistoryEntryStateEnum || (UpgradeHistoryEntryStateEnum = {}));
// UpgradeHistoryEntry
/**
 * The entry of VM image upgrade history.
**/
var UpgradeHistoryEntry = /** @class */ (function (_super) {
    __extends(UpgradeHistoryEntry, _super);
    function UpgradeHistoryEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "json, name=containerImage" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "containerImage", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=framework" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "framework", void 0);
    __decorate([
        Metadata({ data: "json, name=snapshot" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "snapshot", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=targetImage" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "targetImage", void 0);
    __decorate([
        Metadata({ data: "json, name=targetVersion" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "targetVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "json, name=vmImage" }),
        __metadata("design:type", String)
    ], UpgradeHistoryEntry.prototype, "vmImage", void 0);
    return UpgradeHistoryEntry;
}(SpeakeasyBase));
export { UpgradeHistoryEntry };
