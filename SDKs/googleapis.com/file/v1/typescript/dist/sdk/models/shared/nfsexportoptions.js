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
export var NfsExportOptionsAccessModeEnum;
(function (NfsExportOptionsAccessModeEnum) {
    NfsExportOptionsAccessModeEnum["AccessModeUnspecified"] = "ACCESS_MODE_UNSPECIFIED";
    NfsExportOptionsAccessModeEnum["ReadOnly"] = "READ_ONLY";
    NfsExportOptionsAccessModeEnum["ReadWrite"] = "READ_WRITE";
})(NfsExportOptionsAccessModeEnum || (NfsExportOptionsAccessModeEnum = {}));
export var NfsExportOptionsSquashModeEnum;
(function (NfsExportOptionsSquashModeEnum) {
    NfsExportOptionsSquashModeEnum["SquashModeUnspecified"] = "SQUASH_MODE_UNSPECIFIED";
    NfsExportOptionsSquashModeEnum["NoRootSquash"] = "NO_ROOT_SQUASH";
    NfsExportOptionsSquashModeEnum["RootSquash"] = "ROOT_SQUASH";
})(NfsExportOptionsSquashModeEnum || (NfsExportOptionsSquashModeEnum = {}));
// NfsExportOptions
/**
 * NFS export options specifications.
**/
var NfsExportOptions = /** @class */ (function (_super) {
    __extends(NfsExportOptions, _super);
    function NfsExportOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accessMode" }),
        __metadata("design:type", String)
    ], NfsExportOptions.prototype, "accessMode", void 0);
    __decorate([
        Metadata({ data: "json, name=anonGid" }),
        __metadata("design:type", String)
    ], NfsExportOptions.prototype, "anonGid", void 0);
    __decorate([
        Metadata({ data: "json, name=anonUid" }),
        __metadata("design:type", String)
    ], NfsExportOptions.prototype, "anonUid", void 0);
    __decorate([
        Metadata({ data: "json, name=ipRanges" }),
        __metadata("design:type", Array)
    ], NfsExportOptions.prototype, "ipRanges", void 0);
    __decorate([
        Metadata({ data: "json, name=squashMode" }),
        __metadata("design:type", String)
    ], NfsExportOptions.prototype, "squashMode", void 0);
    return NfsExportOptions;
}(SpeakeasyBase));
export { NfsExportOptions };
