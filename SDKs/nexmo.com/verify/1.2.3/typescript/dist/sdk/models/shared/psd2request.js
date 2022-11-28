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
export var Psd2RequestLgEnum;
(function (Psd2RequestLgEnum) {
    Psd2RequestLgEnum["EnGb"] = "en-gb";
    Psd2RequestLgEnum["BgBg"] = "bg-bg";
    Psd2RequestLgEnum["CsCz"] = "cs-cz";
    Psd2RequestLgEnum["DaDk"] = "da-dk";
    Psd2RequestLgEnum["DeDe"] = "de-de";
    Psd2RequestLgEnum["EeEt"] = "ee-et";
    Psd2RequestLgEnum["ElGr"] = "el-gr";
    Psd2RequestLgEnum["EsEs"] = "es-es";
    Psd2RequestLgEnum["FiFi"] = "fi-fi";
    Psd2RequestLgEnum["FrFr"] = "fr-fr";
    Psd2RequestLgEnum["GaIe"] = "ga-ie";
    Psd2RequestLgEnum["HuHu"] = "hu-hu";
    Psd2RequestLgEnum["ItIt"] = "it-it";
    Psd2RequestLgEnum["LvLv"] = "lv-lv";
    Psd2RequestLgEnum["LtLt"] = "lt-lt";
    Psd2RequestLgEnum["MtMt"] = "mt-mt";
    Psd2RequestLgEnum["NlNl"] = "nl-nl";
    Psd2RequestLgEnum["PlPl"] = "pl-pl";
    Psd2RequestLgEnum["SkSk"] = "sk-sk";
    Psd2RequestLgEnum["SlSi"] = "sl-si";
    Psd2RequestLgEnum["SvSe"] = "sv-se";
})(Psd2RequestLgEnum || (Psd2RequestLgEnum = {}));
var Psd2Request = /** @class */ (function (_super) {
    __extends(Psd2Request, _super);
    function Psd2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=amount;" }),
        __metadata("design:type", Number)
    ], Psd2Request.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=api_key;" }),
        __metadata("design:type", String)
    ], Psd2Request.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=api_secret;" }),
        __metadata("design:type", String)
    ], Psd2Request.prototype, "apiSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=code_length;" }),
        __metadata("design:type", Number)
    ], Psd2Request.prototype, "codeLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=country;" }),
        __metadata("design:type", String)
    ], Psd2Request.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=lg;" }),
        __metadata("design:type", String)
    ], Psd2Request.prototype, "lg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=next_event_wait;" }),
        __metadata("design:type", Number)
    ], Psd2Request.prototype, "nextEventWait", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], Psd2Request.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=payee;" }),
        __metadata("design:type", String)
    ], Psd2Request.prototype, "payee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=pin_expiry;" }),
        __metadata("design:type", Number)
    ], Psd2Request.prototype, "pinExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=workflow_id;" }),
        __metadata("design:type", Number)
    ], Psd2Request.prototype, "workflowId", void 0);
    return Psd2Request;
}(SpeakeasyBase));
export { Psd2Request };
