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
var BelegeBelegeGruppe = /** @class */ (function (_super) {
    __extends(BelegeBelegeGruppe, _super);
    function BelegeBelegeGruppe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Belege-kompakt" }),
        __metadata("design:type", Array)
    ], BelegeBelegeGruppe.prototype, "belegeKompakt", void 0);
    __decorate([
        Metadata({ data: "json, name=Signaturzertifikat" }),
        __metadata("design:type", String)
    ], BelegeBelegeGruppe.prototype, "signaturzertifikat", void 0);
    __decorate([
        Metadata({ data: "json, name=Zertifizierungsstellen" }),
        __metadata("design:type", Array)
    ], BelegeBelegeGruppe.prototype, "zertifizierungsstellen", void 0);
    return BelegeBelegeGruppe;
}(SpeakeasyBase));
export { BelegeBelegeGruppe };
var Belege = /** @class */ (function (_super) {
    __extends(Belege, _super);
    function Belege() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Belege", elemType: shared.Beleg }),
        __metadata("design:type", Array)
    ], Belege.prototype, "belege", void 0);
    __decorate([
        Metadata({ data: "json, name=Belege-Gruppe", elemType: shared.BelegeBelegeGruppe }),
        __metadata("design:type", Array)
    ], Belege.prototype, "belegeGruppe", void 0);
    return Belege;
}(SpeakeasyBase));
export { Belege };
