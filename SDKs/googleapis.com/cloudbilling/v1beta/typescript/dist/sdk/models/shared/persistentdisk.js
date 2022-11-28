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
import { Usage } from "./usage";
export var PersistentDiskScopeEnum;
(function (PersistentDiskScopeEnum) {
    PersistentDiskScopeEnum["ScopeUnspecified"] = "SCOPE_UNSPECIFIED";
    PersistentDiskScopeEnum["ScopeZonal"] = "SCOPE_ZONAL";
    PersistentDiskScopeEnum["ScopeRegional"] = "SCOPE_REGIONAL";
})(PersistentDiskScopeEnum || (PersistentDiskScopeEnum = {}));
// PersistentDisk
/**
 * Specification of a persistent disk attached to a VM.
**/
var PersistentDisk = /** @class */ (function (_super) {
    __extends(PersistentDisk, _super);
    function PersistentDisk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskSize" }),
        __metadata("design:type", Usage)
    ], PersistentDisk.prototype, "diskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskType" }),
        __metadata("design:type", String)
    ], PersistentDisk.prototype, "diskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisionedIops" }),
        __metadata("design:type", Usage)
    ], PersistentDisk.prototype, "provisionedIops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], PersistentDisk.prototype, "scope", void 0);
    return PersistentDisk;
}(SpeakeasyBase));
export { PersistentDisk };
