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
import * as shared from "../shared";
export var BelegdatenUnternehmenIdTypEnum;
(function (BelegdatenUnternehmenIdTypEnum) {
    BelegdatenUnternehmenIdTypEnum["Steuernummer"] = "steuernummer";
    BelegdatenUnternehmenIdTypEnum["Uid"] = "uid";
    BelegdatenUnternehmenIdTypEnum["Gln"] = "gln";
})(BelegdatenUnternehmenIdTypEnum || (BelegdatenUnternehmenIdTypEnum = {}));
// Belegdaten
/**
 * The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
**/
var Belegdaten = /** @class */ (function (_super) {
    __extends(Belegdaten, _super);
    function Belegdaten() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Externer-Beleg-Belegkreis" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "externerBelegBelegkreis", void 0);
    __decorate([
        Metadata({ data: "json, name=Externer-Beleg-Bezeichnung" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "externerBelegBezeichnung", void 0);
    __decorate([
        Metadata({ data: "json, name=Externer-Beleg-Referenz" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "externerBelegReferenz", void 0);
    __decorate([
        Metadata({ data: "json, name=Kunde" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "kunde", void 0);
    __decorate([
        Metadata({ data: "json, name=Notizen" }),
        __metadata("design:type", Array)
    ], Belegdaten.prototype, "notizen", void 0);
    __decorate([
        Metadata({ data: "json, name=Posten", elemType: shared.Posten }),
        __metadata("design:type", Array)
    ], Belegdaten.prototype, "posten", void 0);
    __decorate([
        Metadata({ data: "json, name=Rabatte", elemType: shared.Rabatt }),
        __metadata("design:type", Array)
    ], Belegdaten.prototype, "rabatte", void 0);
    __decorate([
        Metadata({ data: "json, name=Storno" }),
        __metadata("design:type", Boolean)
    ], Belegdaten.prototype, "storno", void 0);
    __decorate([
        Metadata({ data: "json, name=Storno-Beleg-UUID" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "stornoBelegUuid", void 0);
    __decorate([
        Metadata({ data: "json, name=Storno-Text" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "stornoText", void 0);
    __decorate([
        Metadata({ data: "json, name=Training" }),
        __metadata("design:type", Boolean)
    ], Belegdaten.prototype, "training", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Adresse1" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "unternehmenAdresse1", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Adresse2" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "unternehmenAdresse2", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Fusszeile" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "unternehmenFusszeile", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-ID" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "unternehmenId", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-ID-Typ" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "unternehmenIdTyp", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Kopfzeile" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "unternehmenKopfzeile", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Name" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "unternehmenName", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Ort" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "unternehmenOrt", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-PLZ" }),
        __metadata("design:type", String)
    ], Belegdaten.prototype, "unternehmenPlz", void 0);
    __decorate([
        Metadata({ data: "json, name=Zahlungen", elemType: shared.Zahlung }),
        __metadata("design:type", Array)
    ], Belegdaten.prototype, "zahlungen", void 0);
    return Belegdaten;
}(SpeakeasyBase));
export { Belegdaten };
