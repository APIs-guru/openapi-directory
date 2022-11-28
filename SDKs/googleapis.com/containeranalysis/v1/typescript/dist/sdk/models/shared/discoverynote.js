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
export var DiscoveryNoteAnalysisKindEnum;
(function (DiscoveryNoteAnalysisKindEnum) {
    DiscoveryNoteAnalysisKindEnum["NoteKindUnspecified"] = "NOTE_KIND_UNSPECIFIED";
    DiscoveryNoteAnalysisKindEnum["Vulnerability"] = "VULNERABILITY";
    DiscoveryNoteAnalysisKindEnum["Build"] = "BUILD";
    DiscoveryNoteAnalysisKindEnum["Image"] = "IMAGE";
    DiscoveryNoteAnalysisKindEnum["Package"] = "PACKAGE";
    DiscoveryNoteAnalysisKindEnum["Deployment"] = "DEPLOYMENT";
    DiscoveryNoteAnalysisKindEnum["Discovery"] = "DISCOVERY";
    DiscoveryNoteAnalysisKindEnum["Attestation"] = "ATTESTATION";
    DiscoveryNoteAnalysisKindEnum["Upgrade"] = "UPGRADE";
    DiscoveryNoteAnalysisKindEnum["Compliance"] = "COMPLIANCE";
    DiscoveryNoteAnalysisKindEnum["DsseAttestation"] = "DSSE_ATTESTATION";
})(DiscoveryNoteAnalysisKindEnum || (DiscoveryNoteAnalysisKindEnum = {}));
// DiscoveryNote
/**
 * A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
**/
var DiscoveryNote = /** @class */ (function (_super) {
    __extends(DiscoveryNote, _super);
    function DiscoveryNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analysisKind" }),
        __metadata("design:type", String)
    ], DiscoveryNote.prototype, "analysisKind", void 0);
    return DiscoveryNote;
}(SpeakeasyBase));
export { DiscoveryNote };
