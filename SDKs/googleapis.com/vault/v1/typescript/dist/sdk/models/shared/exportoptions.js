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
import { DriveExportOptions } from "./driveexportoptions";
import { GroupsExportOptions } from "./groupsexportoptions";
import { HangoutsChatExportOptions } from "./hangoutschatexportoptions";
import { MailExportOptions } from "./mailexportoptions";
import { VoiceExportOptions } from "./voiceexportoptions";
export var ExportOptionsRegionEnum;
(function (ExportOptionsRegionEnum) {
    ExportOptionsRegionEnum["ExportRegionUnspecified"] = "EXPORT_REGION_UNSPECIFIED";
    ExportOptionsRegionEnum["Any"] = "ANY";
    ExportOptionsRegionEnum["Us"] = "US";
    ExportOptionsRegionEnum["Europe"] = "EUROPE";
})(ExportOptionsRegionEnum || (ExportOptionsRegionEnum = {}));
// ExportOptions
/**
 * Additional options for exports
**/
var ExportOptions = /** @class */ (function (_super) {
    __extends(ExportOptions, _super);
    function ExportOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=driveOptions" }),
        __metadata("design:type", DriveExportOptions)
    ], ExportOptions.prototype, "driveOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=groupsOptions" }),
        __metadata("design:type", GroupsExportOptions)
    ], ExportOptions.prototype, "groupsOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=hangoutsChatOptions" }),
        __metadata("design:type", HangoutsChatExportOptions)
    ], ExportOptions.prototype, "hangoutsChatOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=mailOptions" }),
        __metadata("design:type", MailExportOptions)
    ], ExportOptions.prototype, "mailOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ExportOptions.prototype, "region", void 0);
    __decorate([
        Metadata({ data: "json, name=voiceOptions" }),
        __metadata("design:type", VoiceExportOptions)
    ], ExportOptions.prototype, "voiceOptions", void 0);
    return ExportOptions;
}(SpeakeasyBase));
export { ExportOptions };
