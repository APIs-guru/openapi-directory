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
import { SignierteBelegdaten } from "./signiertebelegdaten";
export var BelegBelegTypenEnum;
(function (BelegBelegTypenEnum) {
    BelegBelegTypenEnum["Belegkreisinitialisierung"] = "Belegkreisinitialisierung";
    BelegBelegTypenEnum["Kassenbericht"] = "Kassenbericht";
    BelegBelegTypenEnum["Monatsabschluss"] = "Monatsabschluss";
    BelegBelegTypenEnum["Startbeleg"] = "Startbeleg";
    BelegBelegTypenEnum["Storno"] = "Storno";
    BelegBelegTypenEnum["Systembeleg"] = "Systembeleg";
    BelegBelegTypenEnum["Training"] = "Training";
})(BelegBelegTypenEnum || (BelegBelegTypenEnum = {}));
var Beleg = /** @class */ (function (_super) {
    __extends(Beleg, _super);
    function Beleg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Beleg-Codes" }),
        __metadata("design:type", Array)
    ], Beleg.prototype, "belegCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=Beleg-Typen" }),
        __metadata("design:type", Array)
    ], Beleg.prototype, "belegTypen", void 0);
    __decorate([
        Metadata({ data: "json, name=Belegdaten" }),
        __metadata("design:type", SignierteBelegdaten)
    ], Beleg.prototype, "belegdaten", void 0);
    __decorate([
        Metadata({ data: "json, name=JWS" }),
        __metadata("design:type", String)
    ], Beleg.prototype, "jws", void 0);
    __decorate([
        Metadata({ data: "json, name=QR" }),
        __metadata("design:type", String)
    ], Beleg.prototype, "qr", void 0);
    __decorate([
        Metadata({ data: "json, name=QR-Link" }),
        __metadata("design:type", String)
    ], Beleg.prototype, "qrLink", void 0);
    __decorate([
        Metadata({ data: "json, name=Registrierkasse-UUID" }),
        __metadata("design:type", String)
    ], Beleg.prototype, "registrierkasseUuid", void 0);
    __decorate([
        Metadata({ data: "json, name=Signaturerstellungseinheit-UUID" }),
        __metadata("design:type", String)
    ], Beleg.prototype, "signaturerstellungseinheitUuid", void 0);
    __decorate([
        Metadata({ data: "json, name=_href" }),
        __metadata("design:type", String)
    ], Beleg.prototype, "href", void 0);
    __decorate([
        Metadata({ data: "json, name=_uuid" }),
        __metadata("design:type", String)
    ], Beleg.prototype, "uuid", void 0);
    return Beleg;
}(SpeakeasyBase));
export { Beleg };
