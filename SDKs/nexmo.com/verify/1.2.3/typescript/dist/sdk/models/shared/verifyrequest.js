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
export var VerifyRequestLgEnum;
(function (VerifyRequestLgEnum) {
    VerifyRequestLgEnum["ArXa"] = "ar-xa";
    VerifyRequestLgEnum["CsCz"] = "cs-cz";
    VerifyRequestLgEnum["CyCy"] = "cy-cy";
    VerifyRequestLgEnum["CyGb"] = "cy-gb";
    VerifyRequestLgEnum["DaDk"] = "da-dk";
    VerifyRequestLgEnum["DeDe"] = "de-de";
    VerifyRequestLgEnum["ElGr"] = "el-gr";
    VerifyRequestLgEnum["EnAu"] = "en-au";
    VerifyRequestLgEnum["EnGb"] = "en-gb";
    VerifyRequestLgEnum["EnIn"] = "en-in";
    VerifyRequestLgEnum["EnUs"] = "en-us";
    VerifyRequestLgEnum["EsEs"] = "es-es";
    VerifyRequestLgEnum["EsMx"] = "es-mx";
    VerifyRequestLgEnum["EsUs"] = "es-us";
    VerifyRequestLgEnum["FiFi"] = "fi-fi";
    VerifyRequestLgEnum["FilPh"] = "fil-ph";
    VerifyRequestLgEnum["FrCa"] = "fr-ca";
    VerifyRequestLgEnum["FrFr"] = "fr-fr";
    VerifyRequestLgEnum["HiIn"] = "hi-in";
    VerifyRequestLgEnum["HuHu"] = "hu-hu";
    VerifyRequestLgEnum["IdId"] = "id-id";
    VerifyRequestLgEnum["IsIs"] = "is-is";
    VerifyRequestLgEnum["ItIt"] = "it-it";
    VerifyRequestLgEnum["JaJp"] = "ja-jp";
    VerifyRequestLgEnum["KoKr"] = "ko-kr";
    VerifyRequestLgEnum["NbNo"] = "nb-no";
    VerifyRequestLgEnum["NlNl"] = "nl-nl";
    VerifyRequestLgEnum["PlPl"] = "pl-pl";
    VerifyRequestLgEnum["PtBr"] = "pt-br";
    VerifyRequestLgEnum["PtPt"] = "pt-pt";
    VerifyRequestLgEnum["RoRo"] = "ro-ro";
    VerifyRequestLgEnum["RuRu"] = "ru-ru";
    VerifyRequestLgEnum["SvSe"] = "sv-se";
    VerifyRequestLgEnum["ThTh"] = "th-th";
    VerifyRequestLgEnum["TrTr"] = "tr-tr";
    VerifyRequestLgEnum["ViVn"] = "vi-vn";
    VerifyRequestLgEnum["YueCn"] = "yue-cn";
    VerifyRequestLgEnum["ZhCn"] = "zh-cn";
    VerifyRequestLgEnum["ZhTw"] = "zh-tw";
})(VerifyRequestLgEnum || (VerifyRequestLgEnum = {}));
var VerifyRequest = /** @class */ (function (_super) {
    __extends(VerifyRequest, _super);
    function VerifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=api_key;" }),
        __metadata("design:type", String)
    ], VerifyRequest.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=api_secret;" }),
        __metadata("design:type", String)
    ], VerifyRequest.prototype, "apiSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=brand;" }),
        __metadata("design:type", String)
    ], VerifyRequest.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=code_length;" }),
        __metadata("design:type", Number)
    ], VerifyRequest.prototype, "codeLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=country;" }),
        __metadata("design:type", String)
    ], VerifyRequest.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=lg;" }),
        __metadata("design:type", String)
    ], VerifyRequest.prototype, "lg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=next_event_wait;" }),
        __metadata("design:type", Number)
    ], VerifyRequest.prototype, "nextEventWait", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=number;" }),
        __metadata("design:type", String)
    ], VerifyRequest.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=pin_expiry;" }),
        __metadata("design:type", Number)
    ], VerifyRequest.prototype, "pinExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=sender_id;" }),
        __metadata("design:type", String)
    ], VerifyRequest.prototype, "senderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=workflow_id;" }),
        __metadata("design:type", Number)
    ], VerifyRequest.prototype, "workflowId", void 0);
    return VerifyRequest;
}(SpeakeasyBase));
export { VerifyRequest };
