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
export var PostenSatzEnum;
(function (PostenSatzEnum) {
    PostenSatzEnum["Normal"] = "NORMAL";
    PostenSatzEnum["Ermaessigt1"] = "ERMAESSIGT1";
    PostenSatzEnum["Ermaessigt2"] = "ERMAESSIGT2";
    PostenSatzEnum["Besonders"] = "BESONDERS";
    PostenSatzEnum["Null"] = "NULL";
})(PostenSatzEnum || (PostenSatzEnum = {}));
var Posten = /** @class */ (function (_super) {
    __extends(Posten, _super);
    function Posten() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Bezeichnung" }),
        __metadata("design:type", String)
    ], Posten.prototype, "bezeichnung", void 0);
    __decorate([
        Metadata({ data: "json, name=BruttoBetrag" }),
        __metadata("design:type", Number)
    ], Posten.prototype, "bruttoBetrag", void 0);
    __decorate([
        Metadata({ data: "json, name=Externer-Beleg-Belegkreis" }),
        __metadata("design:type", String)
    ], Posten.prototype, "externerBelegBelegkreis", void 0);
    __decorate([
        Metadata({ data: "json, name=Externer-Beleg-Bezeichnung" }),
        __metadata("design:type", String)
    ], Posten.prototype, "externerBelegBezeichnung", void 0);
    __decorate([
        Metadata({ data: "json, name=Externer-Beleg-Referenz" }),
        __metadata("design:type", String)
    ], Posten.prototype, "externerBelegReferenz", void 0);
    __decorate([
        Metadata({ data: "json, name=Menge" }),
        __metadata("design:type", Number)
    ], Posten.prototype, "menge", void 0);
    __decorate([
        Metadata({ data: "json, name=NettoBetrag" }),
        __metadata("design:type", Number)
    ], Posten.prototype, "nettoBetrag", void 0);
    __decorate([
        Metadata({ data: "json, name=Satz" }),
        __metadata("design:type", String)
    ], Posten.prototype, "satz", void 0);
    return Posten;
}(SpeakeasyBase));
export { Posten };
