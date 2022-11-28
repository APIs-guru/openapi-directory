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
import { GoogleCloudHealthcareV1ConsentPolicy } from "./googlecloudhealthcarev1consentpolicy";
export var ConsentStateEnum;
(function (ConsentStateEnum) {
    ConsentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ConsentStateEnum["Active"] = "ACTIVE";
    ConsentStateEnum["Archived"] = "ARCHIVED";
    ConsentStateEnum["Revoked"] = "REVOKED";
    ConsentStateEnum["Draft"] = "DRAFT";
    ConsentStateEnum["Rejected"] = "REJECTED";
})(ConsentStateEnum || (ConsentStateEnum = {}));
// Consent
/**
 * Represents a user's consent.
**/
var Consent = /** @class */ (function (_super) {
    __extends(Consent, _super);
    function Consent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", String)
    ], Consent.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], Consent.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], Consent.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Consent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policies", elemType: GoogleCloudHealthcareV1ConsentPolicy }),
        __metadata("design:type", Array)
    ], Consent.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionCreateTime" }),
        __metadata("design:type", String)
    ], Consent.prototype, "revisionCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], Consent.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Consent.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], Consent.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], Consent.prototype, "userId", void 0);
    return Consent;
}(SpeakeasyBase));
export { Consent };
// ConsentInput
/**
 * Represents a user's consent.
**/
var ConsentInput = /** @class */ (function (_super) {
    __extends(ConsentInput, _super);
    function ConsentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentArtifact" }),
        __metadata("design:type", String)
    ], ConsentInput.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], ConsentInput.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ConsentInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConsentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policies", elemType: GoogleCloudHealthcareV1ConsentPolicy }),
        __metadata("design:type", Array)
    ], ConsentInput.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ConsentInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], ConsentInput.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], ConsentInput.prototype, "userId", void 0);
    return ConsentInput;
}(SpeakeasyBase));
export { ConsentInput };
