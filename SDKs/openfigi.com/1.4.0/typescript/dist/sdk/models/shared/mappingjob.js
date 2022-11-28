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
export var MappingJobIdTypeEnum;
(function (MappingJobIdTypeEnum) {
    MappingJobIdTypeEnum["IdIsin"] = "ID_ISIN";
    MappingJobIdTypeEnum["IdBbUnique"] = "ID_BB_UNIQUE";
    MappingJobIdTypeEnum["IdSedol"] = "ID_SEDOL";
    MappingJobIdTypeEnum["IdCommon"] = "ID_COMMON";
    MappingJobIdTypeEnum["IdWertpapier"] = "ID_WERTPAPIER";
    MappingJobIdTypeEnum["IdCusip"] = "ID_CUSIP";
    MappingJobIdTypeEnum["IdBb"] = "ID_BB";
    MappingJobIdTypeEnum["IdItaly"] = "ID_ITALY";
    MappingJobIdTypeEnum["IdExchSymbol"] = "ID_EXCH_SYMBOL";
    MappingJobIdTypeEnum["IdFullExchangeSymbol"] = "ID_FULL_EXCHANGE_SYMBOL";
    MappingJobIdTypeEnum["CompositeIdBbGlobal"] = "COMPOSITE_ID_BB_GLOBAL";
    MappingJobIdTypeEnum["IdBbGlobalShareClassLevel"] = "ID_BB_GLOBAL_SHARE_CLASS_LEVEL";
    MappingJobIdTypeEnum["IdBbSecNumDes"] = "ID_BB_SEC_NUM_DES";
    MappingJobIdTypeEnum["IdBbGlobal"] = "ID_BB_GLOBAL";
    MappingJobIdTypeEnum["Ticker"] = "TICKER";
    MappingJobIdTypeEnum["IdCusip8Chr"] = "ID_CUSIP_8_CHR";
    MappingJobIdTypeEnum["OccSymbol"] = "OCC_SYMBOL";
    MappingJobIdTypeEnum["UniqueIdFutOpt"] = "UNIQUE_ID_FUT_OPT";
    MappingJobIdTypeEnum["OpraSymbol"] = "OPRA_SYMBOL";
    MappingJobIdTypeEnum["TradingSystemIdentifier"] = "TRADING_SYSTEM_IDENTIFIER";
    MappingJobIdTypeEnum["IdCins"] = "ID_CINS";
    MappingJobIdTypeEnum["IdShortCode"] = "ID_SHORT_CODE";
    MappingJobIdTypeEnum["BaseTicker"] = "BASE_TICKER";
    MappingJobIdTypeEnum["VendorIndexCode"] = "VENDOR_INDEX_CODE";
})(MappingJobIdTypeEnum || (MappingJobIdTypeEnum = {}));
export var MappingJobOptionTypeEnum;
(function (MappingJobOptionTypeEnum) {
    MappingJobOptionTypeEnum["Put"] = "Put";
    MappingJobOptionTypeEnum["Call"] = "Call";
})(MappingJobOptionTypeEnum || (MappingJobOptionTypeEnum = {}));
export var MappingJobStateCodeEnum;
(function (MappingJobStateCodeEnum) {
    MappingJobStateCodeEnum["Ab"] = "AB";
    MappingJobStateCodeEnum["Ac"] = "AC";
    MappingJobStateCodeEnum["Ah"] = "AH";
    MappingJobStateCodeEnum["Ak"] = "AK";
    MappingJobStateCodeEnum["Al"] = "AL";
    MappingJobStateCodeEnum["Am"] = "AM";
    MappingJobStateCodeEnum["Ar"] = "AR";
    MappingJobStateCodeEnum["As"] = "AS";
    MappingJobStateCodeEnum["At"] = "AT";
    MappingJobStateCodeEnum["Az"] = "AZ";
    MappingJobStateCodeEnum["Bc"] = "BC";
    MappingJobStateCodeEnum["Bj"] = "BJ";
    MappingJobStateCodeEnum["Ca"] = "CA";
    MappingJobStateCodeEnum["Cb"] = "CB";
    MappingJobStateCodeEnum["Co"] = "CO";
    MappingJobStateCodeEnum["Cq"] = "CQ";
    MappingJobStateCodeEnum["Ct"] = "CT";
    MappingJobStateCodeEnum["Cz"] = "CZ";
    MappingJobStateCodeEnum["Dc"] = "DC";
    MappingJobStateCodeEnum["De"] = "DE";
    MappingJobStateCodeEnum["Eh"] = "EH";
    MappingJobStateCodeEnum["Fh"] = "FH";
    MappingJobStateCodeEnum["Fi"] = "FI";
    MappingJobStateCodeEnum["Fj"] = "FJ";
    MappingJobStateCodeEnum["Fl"] = "FL";
    MappingJobStateCodeEnum["Fo"] = "FO";
    MappingJobStateCodeEnum["Fs"] = "FS";
    MappingJobStateCodeEnum["Ga"] = "GA";
    MappingJobStateCodeEnum["Gd"] = "GD";
    MappingJobStateCodeEnum["Gf"] = "GF";
    MappingJobStateCodeEnum["Gm"] = "GM";
    MappingJobStateCodeEnum["Gs"] = "GS";
    MappingJobStateCodeEnum["Gu"] = "GU";
    MappingJobStateCodeEnum["Gx"] = "GX";
    MappingJobStateCodeEnum["Gz"] = "GZ";
    MappingJobStateCodeEnum["Ha"] = "HA";
    MappingJobStateCodeEnum["Hb"] = "HB";
    MappingJobStateCodeEnum["He"] = "HE";
    MappingJobStateCodeEnum["Hg"] = "HG";
    MappingJobStateCodeEnum["Hi"] = "HI";
    MappingJobStateCodeEnum["Hl"] = "HL";
    MappingJobStateCodeEnum["Hn"] = "HN";
    MappingJobStateCodeEnum["Ho"] = "HO";
    MappingJobStateCodeEnum["Hs"] = "HS";
    MappingJobStateCodeEnum["Ia"] = "IA";
    MappingJobStateCodeEnum["Id"] = "ID";
    MappingJobStateCodeEnum["Ig"] = "IG";
    MappingJobStateCodeEnum["Ik"] = "IK";
    MappingJobStateCodeEnum["Il"] = "IL";
    MappingJobStateCodeEnum["In"] = "IN";
    MappingJobStateCodeEnum["It"] = "IT";
    MappingJobStateCodeEnum["Jl"] = "JL";
    MappingJobStateCodeEnum["Js"] = "JS";
    MappingJobStateCodeEnum["Jx"] = "JX";
    MappingJobStateCodeEnum["Ka"] = "KA";
    MappingJobStateCodeEnum["Kc"] = "KC";
    MappingJobStateCodeEnum["Kn"] = "KN";
    MappingJobStateCodeEnum["Ko"] = "KO";
    MappingJobStateCodeEnum["Ks"] = "KS";
    MappingJobStateCodeEnum["Kt"] = "KT";
    MappingJobStateCodeEnum["Ku"] = "KU";
    MappingJobStateCodeEnum["Ky"] = "KY";
    MappingJobStateCodeEnum["La"] = "LA";
    MappingJobStateCodeEnum["Ln"] = "LN";
    MappingJobStateCodeEnum["Ma"] = "MA";
    MappingJobStateCodeEnum["Mb"] = "MB";
    MappingJobStateCodeEnum["Md"] = "MD";
    MappingJobStateCodeEnum["Me"] = "ME";
    MappingJobStateCodeEnum["Mg"] = "MG";
    MappingJobStateCodeEnum["Mi"] = "MI";
    MappingJobStateCodeEnum["Mn"] = "MN";
    MappingJobStateCodeEnum["Mo"] = "MO";
    MappingJobStateCodeEnum["Ms"] = "MS";
    MappingJobStateCodeEnum["Mt"] = "MT";
    MappingJobStateCodeEnum["Mz"] = "MZ";
    MappingJobStateCodeEnum["Nb"] = "NB";
    MappingJobStateCodeEnum["Nc"] = "NC";
    MappingJobStateCodeEnum["Nd"] = "ND";
    MappingJobStateCodeEnum["Ne"] = "NE";
    MappingJobStateCodeEnum["Ng"] = "NG";
    MappingJobStateCodeEnum["Nh"] = "NH";
    MappingJobStateCodeEnum["Nj"] = "NJ";
    MappingJobStateCodeEnum["Nl"] = "NL";
    MappingJobStateCodeEnum["Nm"] = "NM";
    MappingJobStateCodeEnum["Nn"] = "NN";
    MappingJobStateCodeEnum["Nr"] = "NR";
    MappingJobStateCodeEnum["Ns"] = "NS";
    MappingJobStateCodeEnum["Nt"] = "NT";
    MappingJobStateCodeEnum["Nu"] = "NU";
    MappingJobStateCodeEnum["Nv"] = "NV";
    MappingJobStateCodeEnum["Nw"] = "NW";
    MappingJobStateCodeEnum["Nx"] = "NX";
    MappingJobStateCodeEnum["Ny"] = "NY";
    MappingJobStateCodeEnum["Oh"] = "OH";
    MappingJobStateCodeEnum["Ok"] = "OK";
    MappingJobStateCodeEnum["On"] = "ON";
    MappingJobStateCodeEnum["Or"] = "OR";
    MappingJobStateCodeEnum["Os"] = "OS";
    MappingJobStateCodeEnum["Ot"] = "OT";
    MappingJobStateCodeEnum["Oy"] = "OY";
    MappingJobStateCodeEnum["Pa"] = "PA";
    MappingJobStateCodeEnum["Pe"] = "PE";
    MappingJobStateCodeEnum["Pr"] = "PR";
    MappingJobStateCodeEnum["Qc"] = "QC";
    MappingJobStateCodeEnum["Qh"] = "QH";
    MappingJobStateCodeEnum["Ql"] = "QL";
    MappingJobStateCodeEnum["Ri"] = "RI";
    MappingJobStateCodeEnum["Sa"] = "SA";
    MappingJobStateCodeEnum["Sc"] = "SC";
    MappingJobStateCodeEnum["Sd"] = "SD";
    MappingJobStateCodeEnum["Sh"] = "SH";
    MappingJobStateCodeEnum["Si"] = "SI";
    MappingJobStateCodeEnum["Sk"] = "SK";
    MappingJobStateCodeEnum["Sn"] = "SN";
    MappingJobStateCodeEnum["St"] = "ST";
    MappingJobStateCodeEnum["Sx"] = "SX";
    MappingJobStateCodeEnum["Sz"] = "SZ";
    MappingJobStateCodeEnum["Ta"] = "TA";
    MappingJobStateCodeEnum["Tg"] = "TG";
    MappingJobStateCodeEnum["Tj"] = "TJ";
    MappingJobStateCodeEnum["Tk"] = "TK";
    MappingJobStateCodeEnum["Tn"] = "TN";
    MappingJobStateCodeEnum["Ts"] = "TS";
    MappingJobStateCodeEnum["Tt"] = "TT";
    MappingJobStateCodeEnum["Tx"] = "TX";
    MappingJobStateCodeEnum["Ty"] = "TY";
    MappingJobStateCodeEnum["Ut"] = "UT";
    MappingJobStateCodeEnum["Va"] = "VA";
    MappingJobStateCodeEnum["Vi"] = "VI";
    MappingJobStateCodeEnum["Vt"] = "VT";
    MappingJobStateCodeEnum["Wa"] = "WA";
    MappingJobStateCodeEnum["Wi"] = "WI";
    MappingJobStateCodeEnum["Wk"] = "WK";
    MappingJobStateCodeEnum["Wv"] = "WV";
    MappingJobStateCodeEnum["Wy"] = "WY";
    MappingJobStateCodeEnum["Xj"] = "XJ";
    MappingJobStateCodeEnum["Xz"] = "XZ";
    MappingJobStateCodeEnum["Ya"] = "YA";
    MappingJobStateCodeEnum["Yn"] = "YN";
    MappingJobStateCodeEnum["Yt"] = "YT";
    MappingJobStateCodeEnum["Yu"] = "YU";
    MappingJobStateCodeEnum["Zj"] = "ZJ";
})(MappingJobStateCodeEnum || (MappingJobStateCodeEnum = {}));
// MappingJob
/**
 * For V3: securityType2 is required when idType is BASE_TICKER or ID_EXCH_SYMBOL.  expiration is required when securityType2 is Option or Warrant.  maturity is required when securityType2 is Pool.
**/
var MappingJob = /** @class */ (function (_super) {
    __extends(MappingJob, _super);
    function MappingJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contractSize" }),
        __metadata("design:type", Array)
    ], MappingJob.prototype, "contractSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coupon" }),
        __metadata("design:type", Array)
    ], MappingJob.prototype, "coupon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], MappingJob.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchCode" }),
        __metadata("design:type", String)
    ], MappingJob.prototype, "exchCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", Array)
    ], MappingJob.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idType" }),
        __metadata("design:type", String)
    ], MappingJob.prototype, "idType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idValue" }),
        __metadata("design:type", Object)
    ], MappingJob.prototype, "idValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeUnlistedEquities" }),
        __metadata("design:type", Boolean)
    ], MappingJob.prototype, "includeUnlistedEquities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketSecDes" }),
        __metadata("design:type", String)
    ], MappingJob.prototype, "marketSecDes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maturity" }),
        __metadata("design:type", Array)
    ], MappingJob.prototype, "maturity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=micCode" }),
        __metadata("design:type", String)
    ], MappingJob.prototype, "micCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optionType" }),
        __metadata("design:type", String)
    ], MappingJob.prototype, "optionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityType" }),
        __metadata("design:type", String)
    ], MappingJob.prototype, "securityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityType2" }),
        __metadata("design:type", String)
    ], MappingJob.prototype, "securityType2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateCode" }),
        __metadata("design:type", String)
    ], MappingJob.prototype, "stateCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strike" }),
        __metadata("design:type", Array)
    ], MappingJob.prototype, "strike", void 0);
    return MappingJob;
}(SpeakeasyBase));
export { MappingJob };
