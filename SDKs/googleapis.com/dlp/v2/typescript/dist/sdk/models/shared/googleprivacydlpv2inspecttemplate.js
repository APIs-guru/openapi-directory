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
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
// GooglePrivacyDlpV2InspectTemplateInput
/**
 * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
var GooglePrivacyDlpV2InspectTemplateInput = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2InspectTemplateInput, _super);
    function GooglePrivacyDlpV2InspectTemplateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InspectTemplateInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InspectTemplateInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inspectConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2InspectConfig)
    ], GooglePrivacyDlpV2InspectTemplateInput.prototype, "inspectConfig", void 0);
    return GooglePrivacyDlpV2InspectTemplateInput;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2InspectTemplateInput };
// GooglePrivacyDlpV2InspectTemplate
/**
 * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
**/
var GooglePrivacyDlpV2InspectTemplate = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2InspectTemplate, _super);
    function GooglePrivacyDlpV2InspectTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InspectTemplate.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InspectTemplate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InspectTemplate.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inspectConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2InspectConfig)
    ], GooglePrivacyDlpV2InspectTemplate.prototype, "inspectConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InspectTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2InspectTemplate.prototype, "updateTime", void 0);
    return GooglePrivacyDlpV2InspectTemplate;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2InspectTemplate };
