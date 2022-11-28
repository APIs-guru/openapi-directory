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
import { TagConsentSetting } from "./tagconsentsetting";
import { Parameter } from "./parameter";
import { SetupTag } from "./setuptag";
import { TeardownTag } from "./teardowntag";
export var TagTagFiringOptionEnum;
(function (TagTagFiringOptionEnum) {
    TagTagFiringOptionEnum["TagFiringOptionUnspecified"] = "tagFiringOptionUnspecified";
    TagTagFiringOptionEnum["Unlimited"] = "unlimited";
    TagTagFiringOptionEnum["OncePerEvent"] = "oncePerEvent";
    TagTagFiringOptionEnum["OncePerLoad"] = "oncePerLoad";
})(TagTagFiringOptionEnum || (TagTagFiringOptionEnum = {}));
// Tag
/**
 * Represents a Google Tag Manager Tag.
**/
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Tag.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockingRuleId" }),
        __metadata("design:type", Array)
    ], Tag.prototype, "blockingRuleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockingTriggerId" }),
        __metadata("design:type", Array)
    ], Tag.prototype, "blockingTriggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentSettings" }),
        __metadata("design:type", TagConsentSetting)
    ], Tag.prototype, "consentSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerId" }),
        __metadata("design:type", String)
    ], Tag.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], Tag.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firingRuleId" }),
        __metadata("design:type", Array)
    ], Tag.prototype, "firingRuleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firingTriggerId" }),
        __metadata("design:type", Array)
    ], Tag.prototype, "firingTriggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveOnly" }),
        __metadata("design:type", Boolean)
    ], Tag.prototype, "liveOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoringMetadata" }),
        __metadata("design:type", Parameter)
    ], Tag.prototype, "monitoringMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoringMetadataTagNameKey" }),
        __metadata("design:type", String)
    ], Tag.prototype, "monitoringMetadataTagNameKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Tag.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Tag.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameter", elemType: Parameter }),
        __metadata("design:type", Array)
    ], Tag.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentFolderId" }),
        __metadata("design:type", String)
    ], Tag.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], Tag.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paused" }),
        __metadata("design:type", Boolean)
    ], Tag.prototype, "paused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Parameter)
    ], Tag.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleEndMs" }),
        __metadata("design:type", String)
    ], Tag.prototype, "scheduleEndMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleStartMs" }),
        __metadata("design:type", String)
    ], Tag.prototype, "scheduleStartMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setupTag", elemType: SetupTag }),
        __metadata("design:type", Array)
    ], Tag.prototype, "setupTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagFiringOption" }),
        __metadata("design:type", String)
    ], Tag.prototype, "tagFiringOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagId" }),
        __metadata("design:type", String)
    ], Tag.prototype, "tagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagManagerUrl" }),
        __metadata("design:type", String)
    ], Tag.prototype, "tagManagerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teardownTag", elemType: TeardownTag }),
        __metadata("design:type", Array)
    ], Tag.prototype, "teardownTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Tag.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspaceId" }),
        __metadata("design:type", String)
    ], Tag.prototype, "workspaceId", void 0);
    return Tag;
}(SpeakeasyBase));
export { Tag };
