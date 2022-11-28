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
import { Contact } from "./contact";
export var ContactSettingsPrivacyEnum;
(function (ContactSettingsPrivacyEnum) {
    ContactSettingsPrivacyEnum["ContactPrivacyUnspecified"] = "CONTACT_PRIVACY_UNSPECIFIED";
    ContactSettingsPrivacyEnum["PublicContactData"] = "PUBLIC_CONTACT_DATA";
    ContactSettingsPrivacyEnum["PrivateContactData"] = "PRIVATE_CONTACT_DATA";
    ContactSettingsPrivacyEnum["RedactedContactData"] = "REDACTED_CONTACT_DATA";
})(ContactSettingsPrivacyEnum || (ContactSettingsPrivacyEnum = {}));
// ContactSettings
/**
 * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
**/
var ContactSettings = /** @class */ (function (_super) {
    __extends(ContactSettings, _super);
    function ContactSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminContact" }),
        __metadata("design:type", Contact)
    ], ContactSettings.prototype, "adminContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], ContactSettings.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrantContact" }),
        __metadata("design:type", Contact)
    ], ContactSettings.prototype, "registrantContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=technicalContact" }),
        __metadata("design:type", Contact)
    ], ContactSettings.prototype, "technicalContact", void 0);
    return ContactSettings;
}(SpeakeasyBase));
export { ContactSettings };
