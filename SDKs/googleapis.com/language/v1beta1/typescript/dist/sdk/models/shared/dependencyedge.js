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
export var DependencyEdgeLabelEnum;
(function (DependencyEdgeLabelEnum) {
    DependencyEdgeLabelEnum["Unknown"] = "UNKNOWN";
    DependencyEdgeLabelEnum["Abbrev"] = "ABBREV";
    DependencyEdgeLabelEnum["Acomp"] = "ACOMP";
    DependencyEdgeLabelEnum["Advcl"] = "ADVCL";
    DependencyEdgeLabelEnum["Advmod"] = "ADVMOD";
    DependencyEdgeLabelEnum["Amod"] = "AMOD";
    DependencyEdgeLabelEnum["Appos"] = "APPOS";
    DependencyEdgeLabelEnum["Attr"] = "ATTR";
    DependencyEdgeLabelEnum["Aux"] = "AUX";
    DependencyEdgeLabelEnum["Auxpass"] = "AUXPASS";
    DependencyEdgeLabelEnum["Cc"] = "CC";
    DependencyEdgeLabelEnum["Ccomp"] = "CCOMP";
    DependencyEdgeLabelEnum["Conj"] = "CONJ";
    DependencyEdgeLabelEnum["Csubj"] = "CSUBJ";
    DependencyEdgeLabelEnum["Csubjpass"] = "CSUBJPASS";
    DependencyEdgeLabelEnum["Dep"] = "DEP";
    DependencyEdgeLabelEnum["Det"] = "DET";
    DependencyEdgeLabelEnum["Discourse"] = "DISCOURSE";
    DependencyEdgeLabelEnum["Dobj"] = "DOBJ";
    DependencyEdgeLabelEnum["Expl"] = "EXPL";
    DependencyEdgeLabelEnum["Goeswith"] = "GOESWITH";
    DependencyEdgeLabelEnum["Iobj"] = "IOBJ";
    DependencyEdgeLabelEnum["Mark"] = "MARK";
    DependencyEdgeLabelEnum["Mwe"] = "MWE";
    DependencyEdgeLabelEnum["Mwv"] = "MWV";
    DependencyEdgeLabelEnum["Neg"] = "NEG";
    DependencyEdgeLabelEnum["Nn"] = "NN";
    DependencyEdgeLabelEnum["Npadvmod"] = "NPADVMOD";
    DependencyEdgeLabelEnum["Nsubj"] = "NSUBJ";
    DependencyEdgeLabelEnum["Nsubjpass"] = "NSUBJPASS";
    DependencyEdgeLabelEnum["Num"] = "NUM";
    DependencyEdgeLabelEnum["Number"] = "NUMBER";
    DependencyEdgeLabelEnum["P"] = "P";
    DependencyEdgeLabelEnum["Parataxis"] = "PARATAXIS";
    DependencyEdgeLabelEnum["Partmod"] = "PARTMOD";
    DependencyEdgeLabelEnum["Pcomp"] = "PCOMP";
    DependencyEdgeLabelEnum["Pobj"] = "POBJ";
    DependencyEdgeLabelEnum["Poss"] = "POSS";
    DependencyEdgeLabelEnum["Postneg"] = "POSTNEG";
    DependencyEdgeLabelEnum["Precomp"] = "PRECOMP";
    DependencyEdgeLabelEnum["Preconj"] = "PRECONJ";
    DependencyEdgeLabelEnum["Predet"] = "PREDET";
    DependencyEdgeLabelEnum["Pref"] = "PREF";
    DependencyEdgeLabelEnum["Prep"] = "PREP";
    DependencyEdgeLabelEnum["Pronl"] = "PRONL";
    DependencyEdgeLabelEnum["Prt"] = "PRT";
    DependencyEdgeLabelEnum["Ps"] = "PS";
    DependencyEdgeLabelEnum["Quantmod"] = "QUANTMOD";
    DependencyEdgeLabelEnum["Rcmod"] = "RCMOD";
    DependencyEdgeLabelEnum["Rcmodrel"] = "RCMODREL";
    DependencyEdgeLabelEnum["Rdrop"] = "RDROP";
    DependencyEdgeLabelEnum["Ref"] = "REF";
    DependencyEdgeLabelEnum["Remnant"] = "REMNANT";
    DependencyEdgeLabelEnum["Reparandum"] = "REPARANDUM";
    DependencyEdgeLabelEnum["Root"] = "ROOT";
    DependencyEdgeLabelEnum["Snum"] = "SNUM";
    DependencyEdgeLabelEnum["Suff"] = "SUFF";
    DependencyEdgeLabelEnum["Tmod"] = "TMOD";
    DependencyEdgeLabelEnum["Topic"] = "TOPIC";
    DependencyEdgeLabelEnum["Vmod"] = "VMOD";
    DependencyEdgeLabelEnum["Vocative"] = "VOCATIVE";
    DependencyEdgeLabelEnum["Xcomp"] = "XCOMP";
    DependencyEdgeLabelEnum["Suffix"] = "SUFFIX";
    DependencyEdgeLabelEnum["Title"] = "TITLE";
    DependencyEdgeLabelEnum["Advphmod"] = "ADVPHMOD";
    DependencyEdgeLabelEnum["Auxcaus"] = "AUXCAUS";
    DependencyEdgeLabelEnum["Auxvv"] = "AUXVV";
    DependencyEdgeLabelEnum["Dtmod"] = "DTMOD";
    DependencyEdgeLabelEnum["Foreign"] = "FOREIGN";
    DependencyEdgeLabelEnum["Kw"] = "KW";
    DependencyEdgeLabelEnum["List"] = "LIST";
    DependencyEdgeLabelEnum["Nomc"] = "NOMC";
    DependencyEdgeLabelEnum["Nomcsubj"] = "NOMCSUBJ";
    DependencyEdgeLabelEnum["Nomcsubjpass"] = "NOMCSUBJPASS";
    DependencyEdgeLabelEnum["Numc"] = "NUMC";
    DependencyEdgeLabelEnum["Cop"] = "COP";
    DependencyEdgeLabelEnum["Dislocated"] = "DISLOCATED";
    DependencyEdgeLabelEnum["Asp"] = "ASP";
    DependencyEdgeLabelEnum["Gmod"] = "GMOD";
    DependencyEdgeLabelEnum["Gobj"] = "GOBJ";
    DependencyEdgeLabelEnum["Infmod"] = "INFMOD";
    DependencyEdgeLabelEnum["Mes"] = "MES";
    DependencyEdgeLabelEnum["Ncomp"] = "NCOMP";
})(DependencyEdgeLabelEnum || (DependencyEdgeLabelEnum = {}));
// DependencyEdge
/**
 * Represents dependency parse tree information for a token.
**/
var DependencyEdge = /** @class */ (function (_super) {
    __extends(DependencyEdge, _super);
    function DependencyEdge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=headTokenIndex" }),
        __metadata("design:type", Number)
    ], DependencyEdge.prototype, "headTokenIndex", void 0);
    __decorate([
        Metadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], DependencyEdge.prototype, "label", void 0);
    return DependencyEdge;
}(SpeakeasyBase));
export { DependencyEdge };
