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
export var SignierteBelegdatenUnternehmenIdTypEnum;
(function (SignierteBelegdatenUnternehmenIdTypEnum) {
    SignierteBelegdatenUnternehmenIdTypEnum["Steuernummer"] = "steuernummer";
    SignierteBelegdatenUnternehmenIdTypEnum["Uid"] = "uid";
    SignierteBelegdatenUnternehmenIdTypEnum["Gln"] = "gln";
})(SignierteBelegdatenUnternehmenIdTypEnum || (SignierteBelegdatenUnternehmenIdTypEnum = {}));
// SignierteBelegdaten
/**
 * The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
**/
var SignierteBelegdaten = /** @class */ (function (_super) {
    __extends(SignierteBelegdaten, _super);
    function SignierteBelegdaten() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Beleg-Datum-Uhrzeit" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "belegDatumUhrzeit", void 0);
    __decorate([
        Metadata({ data: "json, name=Belegnummer" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "belegnummer", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Brutto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragBrutto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Netto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragNetto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Besonders-Brutto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzBesondersBrutto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Besonders-Netto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzBesondersNetto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Ermaessigt-1-Brutto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzErmaessigt1Brutto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Ermaessigt-1-Netto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzErmaessigt1Netto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Ermaessigt-2-Brutto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzErmaessigt2Brutto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Ermaessigt-2-Netto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzErmaessigt2Netto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Normal-Brutto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzNormalBrutto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Normal-Netto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzNormalNetto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Null-Brutto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzNullBrutto", void 0);
    __decorate([
        Metadata({ data: "json, name=Betrag-Satz-Null-Netto" }),
        __metadata("design:type", Number)
    ], SignierteBelegdaten.prototype, "betragSatzNullNetto", void 0);
    __decorate([
        Metadata({ data: "json, name=Externer-Beleg-Belegkreis" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "externerBelegBelegkreis", void 0);
    __decorate([
        Metadata({ data: "json, name=Externer-Beleg-Bezeichnung" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "externerBelegBezeichnung", void 0);
    __decorate([
        Metadata({ data: "json, name=Externer-Beleg-Referenz" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "externerBelegReferenz", void 0);
    __decorate([
        Metadata({ data: "json, name=Kassen-ID" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "kassenId", void 0);
    __decorate([
        Metadata({ data: "json, name=Kunde" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "kunde", void 0);
    __decorate([
        Metadata({ data: "json, name=Notizen" }),
        __metadata("design:type", Array)
    ], SignierteBelegdaten.prototype, "notizen", void 0);
    __decorate([
        Metadata({ data: "json, name=Posten", elemType: shared.Posten }),
        __metadata("design:type", Array)
    ], SignierteBelegdaten.prototype, "posten", void 0);
    __decorate([
        Metadata({ data: "json, name=Rabatte", elemType: shared.Rabatt }),
        __metadata("design:type", Array)
    ], SignierteBelegdaten.prototype, "rabatte", void 0);
    __decorate([
        Metadata({ data: "json, name=Storno" }),
        __metadata("design:type", Boolean)
    ], SignierteBelegdaten.prototype, "storno", void 0);
    __decorate([
        Metadata({ data: "json, name=Storno-Beleg-UUID" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "stornoBelegUuid", void 0);
    __decorate([
        Metadata({ data: "json, name=Storno-Text" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "stornoText", void 0);
    __decorate([
        Metadata({ data: "json, name=Training" }),
        __metadata("design:type", Boolean)
    ], SignierteBelegdaten.prototype, "training", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Adresse1" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "unternehmenAdresse1", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Adresse2" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "unternehmenAdresse2", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Fusszeile" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "unternehmenFusszeile", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-ID" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "unternehmenId", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-ID-Typ" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "unternehmenIdTyp", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Kopfzeile" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "unternehmenKopfzeile", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Name" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "unternehmenName", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-Ort" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "unternehmenOrt", void 0);
    __decorate([
        Metadata({ data: "json, name=Unternehmen-PLZ" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "unternehmenPlz", void 0);
    __decorate([
        Metadata({ data: "json, name=Zahlungen", elemType: shared.Zahlung }),
        __metadata("design:type", Array)
    ], SignierteBelegdaten.prototype, "zahlungen", void 0);
    __decorate([
        Metadata({ data: "json, name=Zertifikat-Seriennummer" }),
        __metadata("design:type", String)
    ], SignierteBelegdaten.prototype, "zertifikatSeriennummer", void 0);
    return SignierteBelegdaten;
}(SpeakeasyBase));
export { SignierteBelegdaten };
