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
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { Requester } from "./requester";
import { ConsentStatusEnum } from "./consentstatusenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
var ConsentArtefactResponseConsentConsentDetailCareContexts = /** @class */ (function (_super) {
    __extends(ConsentArtefactResponseConsentConsentDetailCareContexts, _super);
    function ConsentArtefactResponseConsentConsentDetailCareContexts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=careContextReference" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponseConsentConsentDetailCareContexts.prototype, "careContextReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patientReference" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponseConsentConsentDetailCareContexts.prototype, "patientReference", void 0);
    return ConsentArtefactResponseConsentConsentDetailCareContexts;
}(SpeakeasyBase));
export { ConsentArtefactResponseConsentConsentDetailCareContexts };
var ConsentArtefactResponseConsentConsentDetailConsentManager = /** @class */ (function (_super) {
    __extends(ConsentArtefactResponseConsentConsentDetailConsentManager, _super);
    function ConsentArtefactResponseConsentConsentDetailConsentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponseConsentConsentDetailConsentManager.prototype, "id", void 0);
    return ConsentArtefactResponseConsentConsentDetailConsentManager;
}(SpeakeasyBase));
export { ConsentArtefactResponseConsentConsentDetailConsentManager };
var ConsentArtefactResponseConsentConsentDetailHip = /** @class */ (function (_super) {
    __extends(ConsentArtefactResponseConsentConsentDetailHip, _super);
    function ConsentArtefactResponseConsentConsentDetailHip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponseConsentConsentDetailHip.prototype, "id", void 0);
    return ConsentArtefactResponseConsentConsentDetailHip;
}(SpeakeasyBase));
export { ConsentArtefactResponseConsentConsentDetailHip };
var ConsentArtefactResponseConsentConsentDetailHiu = /** @class */ (function (_super) {
    __extends(ConsentArtefactResponseConsentConsentDetailHiu, _super);
    function ConsentArtefactResponseConsentConsentDetailHiu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponseConsentConsentDetailHiu.prototype, "id", void 0);
    return ConsentArtefactResponseConsentConsentDetailHiu;
}(SpeakeasyBase));
export { ConsentArtefactResponseConsentConsentDetailHiu };
var ConsentArtefactResponseConsentConsentDetail = /** @class */ (function (_super) {
    __extends(ConsentArtefactResponseConsentConsentDetail, _super);
    function ConsentArtefactResponseConsentConsentDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=careContexts", elemType: ConsentArtefactResponseConsentConsentDetailCareContexts }),
        __metadata("design:type", Array)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "careContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentId" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentManager" }),
        __metadata("design:type", ConsentArtefactResponseConsentConsentDetailConsentManager)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "consentManager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiTypes" }),
        __metadata("design:type", Array)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "hiTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hip" }),
        __metadata("design:type", ConsentArtefactResponseConsentConsentDetailHip)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "hip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiu" }),
        __metadata("design:type", ConsentArtefactResponseConsentConsentDetailHiu)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "hiu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patient" }),
        __metadata("design:type", ConsentManagerPatientId)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "patient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", Permission)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", UsePurpose)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requester" }),
        __metadata("design:type", Requester)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "requester", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaVersion" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponseConsentConsentDetail.prototype, "schemaVersion", void 0);
    return ConsentArtefactResponseConsentConsentDetail;
}(SpeakeasyBase));
export { ConsentArtefactResponseConsentConsentDetail };
var ConsentArtefactResponseConsent = /** @class */ (function (_super) {
    __extends(ConsentArtefactResponseConsent, _super);
    function ConsentArtefactResponseConsent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentDetail" }),
        __metadata("design:type", ConsentArtefactResponseConsentConsentDetail)
    ], ConsentArtefactResponseConsent.prototype, "consentDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signature" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponseConsent.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponseConsent.prototype, "status", void 0);
    return ConsentArtefactResponseConsent;
}(SpeakeasyBase));
export { ConsentArtefactResponseConsent };
var ConsentArtefactResponse = /** @class */ (function (_super) {
    __extends(ConsentArtefactResponse, _super);
    function ConsentArtefactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consent" }),
        __metadata("design:type", ConsentArtefactResponseConsent)
    ], ConsentArtefactResponse.prototype, "consent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Error)
    ], ConsentArtefactResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], ConsentArtefactResponse.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resp" }),
        __metadata("design:type", RequestReference)
    ], ConsentArtefactResponse.prototype, "resp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], ConsentArtefactResponse.prototype, "timestamp", void 0);
    return ConsentArtefactResponse;
}(SpeakeasyBase));
export { ConsentArtefactResponse };
