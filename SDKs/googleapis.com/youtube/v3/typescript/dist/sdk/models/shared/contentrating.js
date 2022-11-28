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
export var ContentRatingAcbRatingEnum;
(function (ContentRatingAcbRatingEnum) {
    ContentRatingAcbRatingEnum["AcbUnspecified"] = "acbUnspecified";
    ContentRatingAcbRatingEnum["AcbE"] = "acbE";
    ContentRatingAcbRatingEnum["AcbP"] = "acbP";
    ContentRatingAcbRatingEnum["AcbC"] = "acbC";
    ContentRatingAcbRatingEnum["AcbG"] = "acbG";
    ContentRatingAcbRatingEnum["AcbPg"] = "acbPg";
    ContentRatingAcbRatingEnum["AcbM"] = "acbM";
    ContentRatingAcbRatingEnum["AcbMa15plus"] = "acbMa15plus";
    ContentRatingAcbRatingEnum["AcbR18plus"] = "acbR18plus";
    ContentRatingAcbRatingEnum["AcbUnrated"] = "acbUnrated";
})(ContentRatingAcbRatingEnum || (ContentRatingAcbRatingEnum = {}));
export var ContentRatingAgcomRatingEnum;
(function (ContentRatingAgcomRatingEnum) {
    ContentRatingAgcomRatingEnum["AgcomUnspecified"] = "agcomUnspecified";
    ContentRatingAgcomRatingEnum["AgcomT"] = "agcomT";
    ContentRatingAgcomRatingEnum["AgcomVm14"] = "agcomVm14";
    ContentRatingAgcomRatingEnum["AgcomVm18"] = "agcomVm18";
    ContentRatingAgcomRatingEnum["AgcomUnrated"] = "agcomUnrated";
})(ContentRatingAgcomRatingEnum || (ContentRatingAgcomRatingEnum = {}));
export var ContentRatingAnatelRatingEnum;
(function (ContentRatingAnatelRatingEnum) {
    ContentRatingAnatelRatingEnum["AnatelUnspecified"] = "anatelUnspecified";
    ContentRatingAnatelRatingEnum["AnatelF"] = "anatelF";
    ContentRatingAnatelRatingEnum["AnatelI"] = "anatelI";
    ContentRatingAnatelRatingEnum["AnatelI7"] = "anatelI7";
    ContentRatingAnatelRatingEnum["AnatelI10"] = "anatelI10";
    ContentRatingAnatelRatingEnum["AnatelI12"] = "anatelI12";
    ContentRatingAnatelRatingEnum["AnatelR"] = "anatelR";
    ContentRatingAnatelRatingEnum["AnatelA"] = "anatelA";
    ContentRatingAnatelRatingEnum["AnatelUnrated"] = "anatelUnrated";
})(ContentRatingAnatelRatingEnum || (ContentRatingAnatelRatingEnum = {}));
export var ContentRatingBbfcRatingEnum;
(function (ContentRatingBbfcRatingEnum) {
    ContentRatingBbfcRatingEnum["BbfcUnspecified"] = "bbfcUnspecified";
    ContentRatingBbfcRatingEnum["BbfcU"] = "bbfcU";
    ContentRatingBbfcRatingEnum["BbfcPg"] = "bbfcPg";
    ContentRatingBbfcRatingEnum["Bbfc12a"] = "bbfc12a";
    ContentRatingBbfcRatingEnum["Bbfc12"] = "bbfc12";
    ContentRatingBbfcRatingEnum["Bbfc15"] = "bbfc15";
    ContentRatingBbfcRatingEnum["Bbfc18"] = "bbfc18";
    ContentRatingBbfcRatingEnum["BbfcR18"] = "bbfcR18";
    ContentRatingBbfcRatingEnum["BbfcUnrated"] = "bbfcUnrated";
})(ContentRatingBbfcRatingEnum || (ContentRatingBbfcRatingEnum = {}));
export var ContentRatingBfvcRatingEnum;
(function (ContentRatingBfvcRatingEnum) {
    ContentRatingBfvcRatingEnum["BfvcUnspecified"] = "bfvcUnspecified";
    ContentRatingBfvcRatingEnum["BfvcG"] = "bfvcG";
    ContentRatingBfvcRatingEnum["BfvcE"] = "bfvcE";
    ContentRatingBfvcRatingEnum["Bfvc13"] = "bfvc13";
    ContentRatingBfvcRatingEnum["Bfvc15"] = "bfvc15";
    ContentRatingBfvcRatingEnum["Bfvc18"] = "bfvc18";
    ContentRatingBfvcRatingEnum["Bfvc20"] = "bfvc20";
    ContentRatingBfvcRatingEnum["BfvcB"] = "bfvcB";
    ContentRatingBfvcRatingEnum["BfvcUnrated"] = "bfvcUnrated";
})(ContentRatingBfvcRatingEnum || (ContentRatingBfvcRatingEnum = {}));
export var ContentRatingBmukkRatingEnum;
(function (ContentRatingBmukkRatingEnum) {
    ContentRatingBmukkRatingEnum["BmukkUnspecified"] = "bmukkUnspecified";
    ContentRatingBmukkRatingEnum["BmukkAa"] = "bmukkAa";
    ContentRatingBmukkRatingEnum["Bmukk6"] = "bmukk6";
    ContentRatingBmukkRatingEnum["Bmukk8"] = "bmukk8";
    ContentRatingBmukkRatingEnum["Bmukk10"] = "bmukk10";
    ContentRatingBmukkRatingEnum["Bmukk12"] = "bmukk12";
    ContentRatingBmukkRatingEnum["Bmukk14"] = "bmukk14";
    ContentRatingBmukkRatingEnum["Bmukk16"] = "bmukk16";
    ContentRatingBmukkRatingEnum["BmukkUnrated"] = "bmukkUnrated";
})(ContentRatingBmukkRatingEnum || (ContentRatingBmukkRatingEnum = {}));
export var ContentRatingCatvRatingEnum;
(function (ContentRatingCatvRatingEnum) {
    ContentRatingCatvRatingEnum["CatvUnspecified"] = "catvUnspecified";
    ContentRatingCatvRatingEnum["CatvC"] = "catvC";
    ContentRatingCatvRatingEnum["CatvC8"] = "catvC8";
    ContentRatingCatvRatingEnum["CatvG"] = "catvG";
    ContentRatingCatvRatingEnum["CatvPg"] = "catvPg";
    ContentRatingCatvRatingEnum["Catv14plus"] = "catv14plus";
    ContentRatingCatvRatingEnum["Catv18plus"] = "catv18plus";
    ContentRatingCatvRatingEnum["CatvUnrated"] = "catvUnrated";
    ContentRatingCatvRatingEnum["CatvE"] = "catvE";
})(ContentRatingCatvRatingEnum || (ContentRatingCatvRatingEnum = {}));
export var ContentRatingCatvfrRatingEnum;
(function (ContentRatingCatvfrRatingEnum) {
    ContentRatingCatvfrRatingEnum["CatvfrUnspecified"] = "catvfrUnspecified";
    ContentRatingCatvfrRatingEnum["CatvfrG"] = "catvfrG";
    ContentRatingCatvfrRatingEnum["Catvfr8plus"] = "catvfr8plus";
    ContentRatingCatvfrRatingEnum["Catvfr13plus"] = "catvfr13plus";
    ContentRatingCatvfrRatingEnum["Catvfr16plus"] = "catvfr16plus";
    ContentRatingCatvfrRatingEnum["Catvfr18plus"] = "catvfr18plus";
    ContentRatingCatvfrRatingEnum["CatvfrUnrated"] = "catvfrUnrated";
    ContentRatingCatvfrRatingEnum["CatvfrE"] = "catvfrE";
})(ContentRatingCatvfrRatingEnum || (ContentRatingCatvfrRatingEnum = {}));
export var ContentRatingCbfcRatingEnum;
(function (ContentRatingCbfcRatingEnum) {
    ContentRatingCbfcRatingEnum["CbfcUnspecified"] = "cbfcUnspecified";
    ContentRatingCbfcRatingEnum["CbfcU"] = "cbfcU";
    ContentRatingCbfcRatingEnum["CbfcUa"] = "cbfcUA";
    ContentRatingCbfcRatingEnum["CbfcUa7plus"] = "cbfcUA7plus";
    ContentRatingCbfcRatingEnum["CbfcUa13plus"] = "cbfcUA13plus";
    ContentRatingCbfcRatingEnum["CbfcUa16plus"] = "cbfcUA16plus";
    ContentRatingCbfcRatingEnum["CbfcA"] = "cbfcA";
    ContentRatingCbfcRatingEnum["CbfcS"] = "cbfcS";
    ContentRatingCbfcRatingEnum["CbfcUnrated"] = "cbfcUnrated";
})(ContentRatingCbfcRatingEnum || (ContentRatingCbfcRatingEnum = {}));
export var ContentRatingCccRatingEnum;
(function (ContentRatingCccRatingEnum) {
    ContentRatingCccRatingEnum["CccUnspecified"] = "cccUnspecified";
    ContentRatingCccRatingEnum["CccTe"] = "cccTe";
    ContentRatingCccRatingEnum["Ccc6"] = "ccc6";
    ContentRatingCccRatingEnum["Ccc14"] = "ccc14";
    ContentRatingCccRatingEnum["Ccc18"] = "ccc18";
    ContentRatingCccRatingEnum["Ccc18v"] = "ccc18v";
    ContentRatingCccRatingEnum["Ccc18s"] = "ccc18s";
    ContentRatingCccRatingEnum["CccUnrated"] = "cccUnrated";
})(ContentRatingCccRatingEnum || (ContentRatingCccRatingEnum = {}));
export var ContentRatingCceRatingEnum;
(function (ContentRatingCceRatingEnum) {
    ContentRatingCceRatingEnum["CceUnspecified"] = "cceUnspecified";
    ContentRatingCceRatingEnum["CceM4"] = "cceM4";
    ContentRatingCceRatingEnum["CceM6"] = "cceM6";
    ContentRatingCceRatingEnum["CceM12"] = "cceM12";
    ContentRatingCceRatingEnum["CceM16"] = "cceM16";
    ContentRatingCceRatingEnum["CceM18"] = "cceM18";
    ContentRatingCceRatingEnum["CceUnrated"] = "cceUnrated";
    ContentRatingCceRatingEnum["CceM14"] = "cceM14";
})(ContentRatingCceRatingEnum || (ContentRatingCceRatingEnum = {}));
export var ContentRatingChfilmRatingEnum;
(function (ContentRatingChfilmRatingEnum) {
    ContentRatingChfilmRatingEnum["ChfilmUnspecified"] = "chfilmUnspecified";
    ContentRatingChfilmRatingEnum["Chfilm0"] = "chfilm0";
    ContentRatingChfilmRatingEnum["Chfilm6"] = "chfilm6";
    ContentRatingChfilmRatingEnum["Chfilm12"] = "chfilm12";
    ContentRatingChfilmRatingEnum["Chfilm16"] = "chfilm16";
    ContentRatingChfilmRatingEnum["Chfilm18"] = "chfilm18";
    ContentRatingChfilmRatingEnum["ChfilmUnrated"] = "chfilmUnrated";
})(ContentRatingChfilmRatingEnum || (ContentRatingChfilmRatingEnum = {}));
export var ContentRatingChvrsRatingEnum;
(function (ContentRatingChvrsRatingEnum) {
    ContentRatingChvrsRatingEnum["ChvrsUnspecified"] = "chvrsUnspecified";
    ContentRatingChvrsRatingEnum["ChvrsG"] = "chvrsG";
    ContentRatingChvrsRatingEnum["ChvrsPg"] = "chvrsPg";
    ContentRatingChvrsRatingEnum["Chvrs14a"] = "chvrs14a";
    ContentRatingChvrsRatingEnum["Chvrs18a"] = "chvrs18a";
    ContentRatingChvrsRatingEnum["ChvrsR"] = "chvrsR";
    ContentRatingChvrsRatingEnum["ChvrsE"] = "chvrsE";
    ContentRatingChvrsRatingEnum["ChvrsUnrated"] = "chvrsUnrated";
})(ContentRatingChvrsRatingEnum || (ContentRatingChvrsRatingEnum = {}));
export var ContentRatingCicfRatingEnum;
(function (ContentRatingCicfRatingEnum) {
    ContentRatingCicfRatingEnum["CicfUnspecified"] = "cicfUnspecified";
    ContentRatingCicfRatingEnum["CicfE"] = "cicfE";
    ContentRatingCicfRatingEnum["CicfKtEa"] = "cicfKtEa";
    ContentRatingCicfRatingEnum["CicfKntEna"] = "cicfKntEna";
    ContentRatingCicfRatingEnum["CicfUnrated"] = "cicfUnrated";
})(ContentRatingCicfRatingEnum || (ContentRatingCicfRatingEnum = {}));
export var ContentRatingCnaRatingEnum;
(function (ContentRatingCnaRatingEnum) {
    ContentRatingCnaRatingEnum["CnaUnspecified"] = "cnaUnspecified";
    ContentRatingCnaRatingEnum["CnaAp"] = "cnaAp";
    ContentRatingCnaRatingEnum["Cna12"] = "cna12";
    ContentRatingCnaRatingEnum["Cna15"] = "cna15";
    ContentRatingCnaRatingEnum["Cna18"] = "cna18";
    ContentRatingCnaRatingEnum["Cna18plus"] = "cna18plus";
    ContentRatingCnaRatingEnum["CnaUnrated"] = "cnaUnrated";
})(ContentRatingCnaRatingEnum || (ContentRatingCnaRatingEnum = {}));
export var ContentRatingCncRatingEnum;
(function (ContentRatingCncRatingEnum) {
    ContentRatingCncRatingEnum["CncUnspecified"] = "cncUnspecified";
    ContentRatingCncRatingEnum["CncT"] = "cncT";
    ContentRatingCncRatingEnum["Cnc10"] = "cnc10";
    ContentRatingCncRatingEnum["Cnc12"] = "cnc12";
    ContentRatingCncRatingEnum["Cnc16"] = "cnc16";
    ContentRatingCncRatingEnum["Cnc18"] = "cnc18";
    ContentRatingCncRatingEnum["CncE"] = "cncE";
    ContentRatingCncRatingEnum["CncInterdiction"] = "cncInterdiction";
    ContentRatingCncRatingEnum["CncUnrated"] = "cncUnrated";
})(ContentRatingCncRatingEnum || (ContentRatingCncRatingEnum = {}));
export var ContentRatingCsaRatingEnum;
(function (ContentRatingCsaRatingEnum) {
    ContentRatingCsaRatingEnum["CsaUnspecified"] = "csaUnspecified";
    ContentRatingCsaRatingEnum["CsaT"] = "csaT";
    ContentRatingCsaRatingEnum["Csa10"] = "csa10";
    ContentRatingCsaRatingEnum["Csa12"] = "csa12";
    ContentRatingCsaRatingEnum["Csa16"] = "csa16";
    ContentRatingCsaRatingEnum["Csa18"] = "csa18";
    ContentRatingCsaRatingEnum["CsaInterdiction"] = "csaInterdiction";
    ContentRatingCsaRatingEnum["CsaUnrated"] = "csaUnrated";
})(ContentRatingCsaRatingEnum || (ContentRatingCsaRatingEnum = {}));
export var ContentRatingCscfRatingEnum;
(function (ContentRatingCscfRatingEnum) {
    ContentRatingCscfRatingEnum["CscfUnspecified"] = "cscfUnspecified";
    ContentRatingCscfRatingEnum["CscfAl"] = "cscfAl";
    ContentRatingCscfRatingEnum["CscfA"] = "cscfA";
    ContentRatingCscfRatingEnum["Cscf6"] = "cscf6";
    ContentRatingCscfRatingEnum["Cscf9"] = "cscf9";
    ContentRatingCscfRatingEnum["Cscf12"] = "cscf12";
    ContentRatingCscfRatingEnum["Cscf16"] = "cscf16";
    ContentRatingCscfRatingEnum["Cscf18"] = "cscf18";
    ContentRatingCscfRatingEnum["CscfUnrated"] = "cscfUnrated";
})(ContentRatingCscfRatingEnum || (ContentRatingCscfRatingEnum = {}));
export var ContentRatingCzfilmRatingEnum;
(function (ContentRatingCzfilmRatingEnum) {
    ContentRatingCzfilmRatingEnum["CzfilmUnspecified"] = "czfilmUnspecified";
    ContentRatingCzfilmRatingEnum["CzfilmU"] = "czfilmU";
    ContentRatingCzfilmRatingEnum["Czfilm12"] = "czfilm12";
    ContentRatingCzfilmRatingEnum["Czfilm14"] = "czfilm14";
    ContentRatingCzfilmRatingEnum["Czfilm18"] = "czfilm18";
    ContentRatingCzfilmRatingEnum["CzfilmUnrated"] = "czfilmUnrated";
})(ContentRatingCzfilmRatingEnum || (ContentRatingCzfilmRatingEnum = {}));
export var ContentRatingDjctqRatingEnum;
(function (ContentRatingDjctqRatingEnum) {
    ContentRatingDjctqRatingEnum["DjctqUnspecified"] = "djctqUnspecified";
    ContentRatingDjctqRatingEnum["DjctqL"] = "djctqL";
    ContentRatingDjctqRatingEnum["Djctq10"] = "djctq10";
    ContentRatingDjctqRatingEnum["Djctq12"] = "djctq12";
    ContentRatingDjctqRatingEnum["Djctq14"] = "djctq14";
    ContentRatingDjctqRatingEnum["Djctq16"] = "djctq16";
    ContentRatingDjctqRatingEnum["Djctq18"] = "djctq18";
    ContentRatingDjctqRatingEnum["DjctqEr"] = "djctqEr";
    ContentRatingDjctqRatingEnum["DjctqL10"] = "djctqL10";
    ContentRatingDjctqRatingEnum["DjctqL12"] = "djctqL12";
    ContentRatingDjctqRatingEnum["DjctqL14"] = "djctqL14";
    ContentRatingDjctqRatingEnum["DjctqL16"] = "djctqL16";
    ContentRatingDjctqRatingEnum["DjctqL18"] = "djctqL18";
    ContentRatingDjctqRatingEnum["Djctq1012"] = "djctq1012";
    ContentRatingDjctqRatingEnum["Djctq1014"] = "djctq1014";
    ContentRatingDjctqRatingEnum["Djctq1016"] = "djctq1016";
    ContentRatingDjctqRatingEnum["Djctq1018"] = "djctq1018";
    ContentRatingDjctqRatingEnum["Djctq1214"] = "djctq1214";
    ContentRatingDjctqRatingEnum["Djctq1216"] = "djctq1216";
    ContentRatingDjctqRatingEnum["Djctq1218"] = "djctq1218";
    ContentRatingDjctqRatingEnum["Djctq1416"] = "djctq1416";
    ContentRatingDjctqRatingEnum["Djctq1418"] = "djctq1418";
    ContentRatingDjctqRatingEnum["Djctq1618"] = "djctq1618";
    ContentRatingDjctqRatingEnum["DjctqUnrated"] = "djctqUnrated";
})(ContentRatingDjctqRatingEnum || (ContentRatingDjctqRatingEnum = {}));
export var ContentRatingDjctqRatingReasonsEnum;
(function (ContentRatingDjctqRatingReasonsEnum) {
    ContentRatingDjctqRatingReasonsEnum["DjctqRatingReasonUnspecified"] = "djctqRatingReasonUnspecified";
    ContentRatingDjctqRatingReasonsEnum["DjctqViolence"] = "djctqViolence";
    ContentRatingDjctqRatingReasonsEnum["DjctqExtremeViolence"] = "djctqExtremeViolence";
    ContentRatingDjctqRatingReasonsEnum["DjctqSexualContent"] = "djctqSexualContent";
    ContentRatingDjctqRatingReasonsEnum["DjctqNudity"] = "djctqNudity";
    ContentRatingDjctqRatingReasonsEnum["DjctqSex"] = "djctqSex";
    ContentRatingDjctqRatingReasonsEnum["DjctqExplicitSex"] = "djctqExplicitSex";
    ContentRatingDjctqRatingReasonsEnum["DjctqDrugs"] = "djctqDrugs";
    ContentRatingDjctqRatingReasonsEnum["DjctqLegalDrugs"] = "djctqLegalDrugs";
    ContentRatingDjctqRatingReasonsEnum["DjctqIllegalDrugs"] = "djctqIllegalDrugs";
    ContentRatingDjctqRatingReasonsEnum["DjctqInappropriateLanguage"] = "djctqInappropriateLanguage";
    ContentRatingDjctqRatingReasonsEnum["DjctqCriminalActs"] = "djctqCriminalActs";
    ContentRatingDjctqRatingReasonsEnum["DjctqImpactingContent"] = "djctqImpactingContent";
})(ContentRatingDjctqRatingReasonsEnum || (ContentRatingDjctqRatingReasonsEnum = {}));
export var ContentRatingEcbmctRatingEnum;
(function (ContentRatingEcbmctRatingEnum) {
    ContentRatingEcbmctRatingEnum["EcbmctUnspecified"] = "ecbmctUnspecified";
    ContentRatingEcbmctRatingEnum["EcbmctG"] = "ecbmctG";
    ContentRatingEcbmctRatingEnum["Ecbmct7a"] = "ecbmct7a";
    ContentRatingEcbmctRatingEnum["Ecbmct7plus"] = "ecbmct7plus";
    ContentRatingEcbmctRatingEnum["Ecbmct13a"] = "ecbmct13a";
    ContentRatingEcbmctRatingEnum["Ecbmct13plus"] = "ecbmct13plus";
    ContentRatingEcbmctRatingEnum["Ecbmct15a"] = "ecbmct15a";
    ContentRatingEcbmctRatingEnum["Ecbmct15plus"] = "ecbmct15plus";
    ContentRatingEcbmctRatingEnum["Ecbmct18plus"] = "ecbmct18plus";
    ContentRatingEcbmctRatingEnum["EcbmctUnrated"] = "ecbmctUnrated";
})(ContentRatingEcbmctRatingEnum || (ContentRatingEcbmctRatingEnum = {}));
export var ContentRatingEefilmRatingEnum;
(function (ContentRatingEefilmRatingEnum) {
    ContentRatingEefilmRatingEnum["EefilmUnspecified"] = "eefilmUnspecified";
    ContentRatingEefilmRatingEnum["EefilmPere"] = "eefilmPere";
    ContentRatingEefilmRatingEnum["EefilmL"] = "eefilmL";
    ContentRatingEefilmRatingEnum["EefilmMs6"] = "eefilmMs6";
    ContentRatingEefilmRatingEnum["EefilmK6"] = "eefilmK6";
    ContentRatingEefilmRatingEnum["EefilmMs12"] = "eefilmMs12";
    ContentRatingEefilmRatingEnum["EefilmK12"] = "eefilmK12";
    ContentRatingEefilmRatingEnum["EefilmK14"] = "eefilmK14";
    ContentRatingEefilmRatingEnum["EefilmK16"] = "eefilmK16";
    ContentRatingEefilmRatingEnum["EefilmUnrated"] = "eefilmUnrated";
})(ContentRatingEefilmRatingEnum || (ContentRatingEefilmRatingEnum = {}));
export var ContentRatingEgfilmRatingEnum;
(function (ContentRatingEgfilmRatingEnum) {
    ContentRatingEgfilmRatingEnum["EgfilmUnspecified"] = "egfilmUnspecified";
    ContentRatingEgfilmRatingEnum["EgfilmGn"] = "egfilmGn";
    ContentRatingEgfilmRatingEnum["Egfilm18"] = "egfilm18";
    ContentRatingEgfilmRatingEnum["EgfilmBn"] = "egfilmBn";
    ContentRatingEgfilmRatingEnum["EgfilmUnrated"] = "egfilmUnrated";
})(ContentRatingEgfilmRatingEnum || (ContentRatingEgfilmRatingEnum = {}));
export var ContentRatingEirinRatingEnum;
(function (ContentRatingEirinRatingEnum) {
    ContentRatingEirinRatingEnum["EirinUnspecified"] = "eirinUnspecified";
    ContentRatingEirinRatingEnum["EirinG"] = "eirinG";
    ContentRatingEirinRatingEnum["EirinPg12"] = "eirinPg12";
    ContentRatingEirinRatingEnum["EirinR15plus"] = "eirinR15plus";
    ContentRatingEirinRatingEnum["EirinR18plus"] = "eirinR18plus";
    ContentRatingEirinRatingEnum["EirinUnrated"] = "eirinUnrated";
})(ContentRatingEirinRatingEnum || (ContentRatingEirinRatingEnum = {}));
export var ContentRatingFcbmRatingEnum;
(function (ContentRatingFcbmRatingEnum) {
    ContentRatingFcbmRatingEnum["FcbmUnspecified"] = "fcbmUnspecified";
    ContentRatingFcbmRatingEnum["FcbmU"] = "fcbmU";
    ContentRatingFcbmRatingEnum["FcbmPg13"] = "fcbmPg13";
    ContentRatingFcbmRatingEnum["FcbmP13"] = "fcbmP13";
    ContentRatingFcbmRatingEnum["Fcbm18"] = "fcbm18";
    ContentRatingFcbmRatingEnum["Fcbm18sx"] = "fcbm18sx";
    ContentRatingFcbmRatingEnum["Fcbm18pa"] = "fcbm18pa";
    ContentRatingFcbmRatingEnum["Fcbm18sg"] = "fcbm18sg";
    ContentRatingFcbmRatingEnum["Fcbm18pl"] = "fcbm18pl";
    ContentRatingFcbmRatingEnum["FcbmUnrated"] = "fcbmUnrated";
})(ContentRatingFcbmRatingEnum || (ContentRatingFcbmRatingEnum = {}));
export var ContentRatingFcoRatingEnum;
(function (ContentRatingFcoRatingEnum) {
    ContentRatingFcoRatingEnum["FcoUnspecified"] = "fcoUnspecified";
    ContentRatingFcoRatingEnum["FcoI"] = "fcoI";
    ContentRatingFcoRatingEnum["FcoIia"] = "fcoIia";
    ContentRatingFcoRatingEnum["FcoIib"] = "fcoIib";
    ContentRatingFcoRatingEnum["FcoIi"] = "fcoIi";
    ContentRatingFcoRatingEnum["FcoIii"] = "fcoIii";
    ContentRatingFcoRatingEnum["FcoUnrated"] = "fcoUnrated";
})(ContentRatingFcoRatingEnum || (ContentRatingFcoRatingEnum = {}));
export var ContentRatingFmocRatingEnum;
(function (ContentRatingFmocRatingEnum) {
    ContentRatingFmocRatingEnum["FmocUnspecified"] = "fmocUnspecified";
    ContentRatingFmocRatingEnum["FmocU"] = "fmocU";
    ContentRatingFmocRatingEnum["Fmoc10"] = "fmoc10";
    ContentRatingFmocRatingEnum["Fmoc12"] = "fmoc12";
    ContentRatingFmocRatingEnum["Fmoc16"] = "fmoc16";
    ContentRatingFmocRatingEnum["Fmoc18"] = "fmoc18";
    ContentRatingFmocRatingEnum["FmocE"] = "fmocE";
    ContentRatingFmocRatingEnum["FmocUnrated"] = "fmocUnrated";
})(ContentRatingFmocRatingEnum || (ContentRatingFmocRatingEnum = {}));
export var ContentRatingFpbRatingEnum;
(function (ContentRatingFpbRatingEnum) {
    ContentRatingFpbRatingEnum["FpbUnspecified"] = "fpbUnspecified";
    ContentRatingFpbRatingEnum["FpbA"] = "fpbA";
    ContentRatingFpbRatingEnum["FpbPg"] = "fpbPg";
    ContentRatingFpbRatingEnum["Fpb79Pg"] = "fpb79Pg";
    ContentRatingFpbRatingEnum["Fpb1012Pg"] = "fpb1012Pg";
    ContentRatingFpbRatingEnum["Fpb13"] = "fpb13";
    ContentRatingFpbRatingEnum["Fpb16"] = "fpb16";
    ContentRatingFpbRatingEnum["Fpb18"] = "fpb18";
    ContentRatingFpbRatingEnum["FpbX18"] = "fpbX18";
    ContentRatingFpbRatingEnum["FpbXx"] = "fpbXx";
    ContentRatingFpbRatingEnum["FpbUnrated"] = "fpbUnrated";
    ContentRatingFpbRatingEnum["Fpb10"] = "fpb10";
})(ContentRatingFpbRatingEnum || (ContentRatingFpbRatingEnum = {}));
export var ContentRatingFpbRatingReasonsEnum;
(function (ContentRatingFpbRatingReasonsEnum) {
    ContentRatingFpbRatingReasonsEnum["FpbRatingReasonUnspecified"] = "fpbRatingReasonUnspecified";
    ContentRatingFpbRatingReasonsEnum["FpbBlasphemy"] = "fpbBlasphemy";
    ContentRatingFpbRatingReasonsEnum["FpbLanguage"] = "fpbLanguage";
    ContentRatingFpbRatingReasonsEnum["FpbNudity"] = "fpbNudity";
    ContentRatingFpbRatingReasonsEnum["FpbPrejudice"] = "fpbPrejudice";
    ContentRatingFpbRatingReasonsEnum["FpbSex"] = "fpbSex";
    ContentRatingFpbRatingReasonsEnum["FpbViolence"] = "fpbViolence";
    ContentRatingFpbRatingReasonsEnum["FpbDrugs"] = "fpbDrugs";
    ContentRatingFpbRatingReasonsEnum["FpbSexualViolence"] = "fpbSexualViolence";
    ContentRatingFpbRatingReasonsEnum["FpbHorror"] = "fpbHorror";
    ContentRatingFpbRatingReasonsEnum["FpbCriminalTechniques"] = "fpbCriminalTechniques";
    ContentRatingFpbRatingReasonsEnum["FpbImitativeActsTechniques"] = "fpbImitativeActsTechniques";
})(ContentRatingFpbRatingReasonsEnum || (ContentRatingFpbRatingReasonsEnum = {}));
export var ContentRatingFskRatingEnum;
(function (ContentRatingFskRatingEnum) {
    ContentRatingFskRatingEnum["FskUnspecified"] = "fskUnspecified";
    ContentRatingFskRatingEnum["Fsk0"] = "fsk0";
    ContentRatingFskRatingEnum["Fsk6"] = "fsk6";
    ContentRatingFskRatingEnum["Fsk12"] = "fsk12";
    ContentRatingFskRatingEnum["Fsk16"] = "fsk16";
    ContentRatingFskRatingEnum["Fsk18"] = "fsk18";
    ContentRatingFskRatingEnum["FskUnrated"] = "fskUnrated";
})(ContentRatingFskRatingEnum || (ContentRatingFskRatingEnum = {}));
export var ContentRatingGrfilmRatingEnum;
(function (ContentRatingGrfilmRatingEnum) {
    ContentRatingGrfilmRatingEnum["GrfilmUnspecified"] = "grfilmUnspecified";
    ContentRatingGrfilmRatingEnum["GrfilmK"] = "grfilmK";
    ContentRatingGrfilmRatingEnum["GrfilmE"] = "grfilmE";
    ContentRatingGrfilmRatingEnum["GrfilmK12"] = "grfilmK12";
    ContentRatingGrfilmRatingEnum["GrfilmK13"] = "grfilmK13";
    ContentRatingGrfilmRatingEnum["GrfilmK15"] = "grfilmK15";
    ContentRatingGrfilmRatingEnum["GrfilmK17"] = "grfilmK17";
    ContentRatingGrfilmRatingEnum["GrfilmK18"] = "grfilmK18";
    ContentRatingGrfilmRatingEnum["GrfilmUnrated"] = "grfilmUnrated";
})(ContentRatingGrfilmRatingEnum || (ContentRatingGrfilmRatingEnum = {}));
export var ContentRatingIcaaRatingEnum;
(function (ContentRatingIcaaRatingEnum) {
    ContentRatingIcaaRatingEnum["IcaaUnspecified"] = "icaaUnspecified";
    ContentRatingIcaaRatingEnum["IcaaApta"] = "icaaApta";
    ContentRatingIcaaRatingEnum["Icaa7"] = "icaa7";
    ContentRatingIcaaRatingEnum["Icaa12"] = "icaa12";
    ContentRatingIcaaRatingEnum["Icaa13"] = "icaa13";
    ContentRatingIcaaRatingEnum["Icaa16"] = "icaa16";
    ContentRatingIcaaRatingEnum["Icaa18"] = "icaa18";
    ContentRatingIcaaRatingEnum["IcaaX"] = "icaaX";
    ContentRatingIcaaRatingEnum["IcaaUnrated"] = "icaaUnrated";
})(ContentRatingIcaaRatingEnum || (ContentRatingIcaaRatingEnum = {}));
export var ContentRatingIfcoRatingEnum;
(function (ContentRatingIfcoRatingEnum) {
    ContentRatingIfcoRatingEnum["IfcoUnspecified"] = "ifcoUnspecified";
    ContentRatingIfcoRatingEnum["IfcoG"] = "ifcoG";
    ContentRatingIfcoRatingEnum["IfcoPg"] = "ifcoPg";
    ContentRatingIfcoRatingEnum["Ifco12"] = "ifco12";
    ContentRatingIfcoRatingEnum["Ifco12a"] = "ifco12a";
    ContentRatingIfcoRatingEnum["Ifco15"] = "ifco15";
    ContentRatingIfcoRatingEnum["Ifco15a"] = "ifco15a";
    ContentRatingIfcoRatingEnum["Ifco16"] = "ifco16";
    ContentRatingIfcoRatingEnum["Ifco18"] = "ifco18";
    ContentRatingIfcoRatingEnum["IfcoUnrated"] = "ifcoUnrated";
})(ContentRatingIfcoRatingEnum || (ContentRatingIfcoRatingEnum = {}));
export var ContentRatingIlfilmRatingEnum;
(function (ContentRatingIlfilmRatingEnum) {
    ContentRatingIlfilmRatingEnum["IlfilmUnspecified"] = "ilfilmUnspecified";
    ContentRatingIlfilmRatingEnum["IlfilmAa"] = "ilfilmAa";
    ContentRatingIlfilmRatingEnum["Ilfilm12"] = "ilfilm12";
    ContentRatingIlfilmRatingEnum["Ilfilm14"] = "ilfilm14";
    ContentRatingIlfilmRatingEnum["Ilfilm16"] = "ilfilm16";
    ContentRatingIlfilmRatingEnum["Ilfilm18"] = "ilfilm18";
    ContentRatingIlfilmRatingEnum["IlfilmUnrated"] = "ilfilmUnrated";
})(ContentRatingIlfilmRatingEnum || (ContentRatingIlfilmRatingEnum = {}));
export var ContentRatingIncaaRatingEnum;
(function (ContentRatingIncaaRatingEnum) {
    ContentRatingIncaaRatingEnum["IncaaUnspecified"] = "incaaUnspecified";
    ContentRatingIncaaRatingEnum["IncaaAtp"] = "incaaAtp";
    ContentRatingIncaaRatingEnum["IncaaSam13"] = "incaaSam13";
    ContentRatingIncaaRatingEnum["IncaaSam16"] = "incaaSam16";
    ContentRatingIncaaRatingEnum["IncaaSam18"] = "incaaSam18";
    ContentRatingIncaaRatingEnum["IncaaC"] = "incaaC";
    ContentRatingIncaaRatingEnum["IncaaUnrated"] = "incaaUnrated";
})(ContentRatingIncaaRatingEnum || (ContentRatingIncaaRatingEnum = {}));
export var ContentRatingKfcbRatingEnum;
(function (ContentRatingKfcbRatingEnum) {
    ContentRatingKfcbRatingEnum["KfcbUnspecified"] = "kfcbUnspecified";
    ContentRatingKfcbRatingEnum["KfcbG"] = "kfcbG";
    ContentRatingKfcbRatingEnum["KfcbPg"] = "kfcbPg";
    ContentRatingKfcbRatingEnum["Kfcb16plus"] = "kfcb16plus";
    ContentRatingKfcbRatingEnum["KfcbR"] = "kfcbR";
    ContentRatingKfcbRatingEnum["KfcbUnrated"] = "kfcbUnrated";
})(ContentRatingKfcbRatingEnum || (ContentRatingKfcbRatingEnum = {}));
export var ContentRatingKijkwijzerRatingEnum;
(function (ContentRatingKijkwijzerRatingEnum) {
    ContentRatingKijkwijzerRatingEnum["KijkwijzerUnspecified"] = "kijkwijzerUnspecified";
    ContentRatingKijkwijzerRatingEnum["KijkwijzerAl"] = "kijkwijzerAl";
    ContentRatingKijkwijzerRatingEnum["Kijkwijzer6"] = "kijkwijzer6";
    ContentRatingKijkwijzerRatingEnum["Kijkwijzer9"] = "kijkwijzer9";
    ContentRatingKijkwijzerRatingEnum["Kijkwijzer12"] = "kijkwijzer12";
    ContentRatingKijkwijzerRatingEnum["Kijkwijzer16"] = "kijkwijzer16";
    ContentRatingKijkwijzerRatingEnum["Kijkwijzer18"] = "kijkwijzer18";
    ContentRatingKijkwijzerRatingEnum["KijkwijzerUnrated"] = "kijkwijzerUnrated";
})(ContentRatingKijkwijzerRatingEnum || (ContentRatingKijkwijzerRatingEnum = {}));
export var ContentRatingKmrbRatingEnum;
(function (ContentRatingKmrbRatingEnum) {
    ContentRatingKmrbRatingEnum["KmrbUnspecified"] = "kmrbUnspecified";
    ContentRatingKmrbRatingEnum["KmrbAll"] = "kmrbAll";
    ContentRatingKmrbRatingEnum["Kmrb12plus"] = "kmrb12plus";
    ContentRatingKmrbRatingEnum["Kmrb15plus"] = "kmrb15plus";
    ContentRatingKmrbRatingEnum["KmrbTeenr"] = "kmrbTeenr";
    ContentRatingKmrbRatingEnum["KmrbR"] = "kmrbR";
    ContentRatingKmrbRatingEnum["KmrbUnrated"] = "kmrbUnrated";
})(ContentRatingKmrbRatingEnum || (ContentRatingKmrbRatingEnum = {}));
export var ContentRatingLsfRatingEnum;
(function (ContentRatingLsfRatingEnum) {
    ContentRatingLsfRatingEnum["LsfUnspecified"] = "lsfUnspecified";
    ContentRatingLsfRatingEnum["LsfSu"] = "lsfSu";
    ContentRatingLsfRatingEnum["LsfA"] = "lsfA";
    ContentRatingLsfRatingEnum["LsfBo"] = "lsfBo";
    ContentRatingLsfRatingEnum["Lsf13"] = "lsf13";
    ContentRatingLsfRatingEnum["LsfR"] = "lsfR";
    ContentRatingLsfRatingEnum["Lsf17"] = "lsf17";
    ContentRatingLsfRatingEnum["LsfD"] = "lsfD";
    ContentRatingLsfRatingEnum["Lsf21"] = "lsf21";
    ContentRatingLsfRatingEnum["LsfUnrated"] = "lsfUnrated";
})(ContentRatingLsfRatingEnum || (ContentRatingLsfRatingEnum = {}));
export var ContentRatingMccaaRatingEnum;
(function (ContentRatingMccaaRatingEnum) {
    ContentRatingMccaaRatingEnum["MccaaUnspecified"] = "mccaaUnspecified";
    ContentRatingMccaaRatingEnum["MccaaU"] = "mccaaU";
    ContentRatingMccaaRatingEnum["MccaaPg"] = "mccaaPg";
    ContentRatingMccaaRatingEnum["Mccaa12a"] = "mccaa12a";
    ContentRatingMccaaRatingEnum["Mccaa12"] = "mccaa12";
    ContentRatingMccaaRatingEnum["Mccaa14"] = "mccaa14";
    ContentRatingMccaaRatingEnum["Mccaa15"] = "mccaa15";
    ContentRatingMccaaRatingEnum["Mccaa16"] = "mccaa16";
    ContentRatingMccaaRatingEnum["Mccaa18"] = "mccaa18";
    ContentRatingMccaaRatingEnum["MccaaUnrated"] = "mccaaUnrated";
})(ContentRatingMccaaRatingEnum || (ContentRatingMccaaRatingEnum = {}));
export var ContentRatingMccypRatingEnum;
(function (ContentRatingMccypRatingEnum) {
    ContentRatingMccypRatingEnum["MccypUnspecified"] = "mccypUnspecified";
    ContentRatingMccypRatingEnum["MccypA"] = "mccypA";
    ContentRatingMccypRatingEnum["Mccyp7"] = "mccyp7";
    ContentRatingMccypRatingEnum["Mccyp11"] = "mccyp11";
    ContentRatingMccypRatingEnum["Mccyp15"] = "mccyp15";
    ContentRatingMccypRatingEnum["MccypUnrated"] = "mccypUnrated";
})(ContentRatingMccypRatingEnum || (ContentRatingMccypRatingEnum = {}));
export var ContentRatingMcstRatingEnum;
(function (ContentRatingMcstRatingEnum) {
    ContentRatingMcstRatingEnum["McstUnspecified"] = "mcstUnspecified";
    ContentRatingMcstRatingEnum["McstP"] = "mcstP";
    ContentRatingMcstRatingEnum["Mcst0"] = "mcst0";
    ContentRatingMcstRatingEnum["McstC13"] = "mcstC13";
    ContentRatingMcstRatingEnum["McstC16"] = "mcstC16";
    ContentRatingMcstRatingEnum["Mcst16plus"] = "mcst16plus";
    ContentRatingMcstRatingEnum["McstC18"] = "mcstC18";
    ContentRatingMcstRatingEnum["McstGPg"] = "mcstGPg";
    ContentRatingMcstRatingEnum["McstUnrated"] = "mcstUnrated";
})(ContentRatingMcstRatingEnum || (ContentRatingMcstRatingEnum = {}));
export var ContentRatingMdaRatingEnum;
(function (ContentRatingMdaRatingEnum) {
    ContentRatingMdaRatingEnum["MdaUnspecified"] = "mdaUnspecified";
    ContentRatingMdaRatingEnum["MdaG"] = "mdaG";
    ContentRatingMdaRatingEnum["MdaPg"] = "mdaPg";
    ContentRatingMdaRatingEnum["MdaPg13"] = "mdaPg13";
    ContentRatingMdaRatingEnum["MdaNc16"] = "mdaNc16";
    ContentRatingMdaRatingEnum["MdaM18"] = "mdaM18";
    ContentRatingMdaRatingEnum["MdaR21"] = "mdaR21";
    ContentRatingMdaRatingEnum["MdaUnrated"] = "mdaUnrated";
})(ContentRatingMdaRatingEnum || (ContentRatingMdaRatingEnum = {}));
export var ContentRatingMedietilsynetRatingEnum;
(function (ContentRatingMedietilsynetRatingEnum) {
    ContentRatingMedietilsynetRatingEnum["MedietilsynetUnspecified"] = "medietilsynetUnspecified";
    ContentRatingMedietilsynetRatingEnum["MedietilsynetA"] = "medietilsynetA";
    ContentRatingMedietilsynetRatingEnum["Medietilsynet6"] = "medietilsynet6";
    ContentRatingMedietilsynetRatingEnum["Medietilsynet7"] = "medietilsynet7";
    ContentRatingMedietilsynetRatingEnum["Medietilsynet9"] = "medietilsynet9";
    ContentRatingMedietilsynetRatingEnum["Medietilsynet11"] = "medietilsynet11";
    ContentRatingMedietilsynetRatingEnum["Medietilsynet12"] = "medietilsynet12";
    ContentRatingMedietilsynetRatingEnum["Medietilsynet15"] = "medietilsynet15";
    ContentRatingMedietilsynetRatingEnum["Medietilsynet18"] = "medietilsynet18";
    ContentRatingMedietilsynetRatingEnum["MedietilsynetUnrated"] = "medietilsynetUnrated";
})(ContentRatingMedietilsynetRatingEnum || (ContentRatingMedietilsynetRatingEnum = {}));
export var ContentRatingMekuRatingEnum;
(function (ContentRatingMekuRatingEnum) {
    ContentRatingMekuRatingEnum["MekuUnspecified"] = "mekuUnspecified";
    ContentRatingMekuRatingEnum["MekuS"] = "mekuS";
    ContentRatingMekuRatingEnum["Meku7"] = "meku7";
    ContentRatingMekuRatingEnum["Meku12"] = "meku12";
    ContentRatingMekuRatingEnum["Meku16"] = "meku16";
    ContentRatingMekuRatingEnum["Meku18"] = "meku18";
    ContentRatingMekuRatingEnum["MekuUnrated"] = "mekuUnrated";
})(ContentRatingMekuRatingEnum || (ContentRatingMekuRatingEnum = {}));
export var ContentRatingMenaMpaaRatingEnum;
(function (ContentRatingMenaMpaaRatingEnum) {
    ContentRatingMenaMpaaRatingEnum["MenaMpaaUnspecified"] = "menaMpaaUnspecified";
    ContentRatingMenaMpaaRatingEnum["MenaMpaaG"] = "menaMpaaG";
    ContentRatingMenaMpaaRatingEnum["MenaMpaaPg"] = "menaMpaaPg";
    ContentRatingMenaMpaaRatingEnum["MenaMpaaPg13"] = "menaMpaaPg13";
    ContentRatingMenaMpaaRatingEnum["MenaMpaaR"] = "menaMpaaR";
    ContentRatingMenaMpaaRatingEnum["MenaMpaaUnrated"] = "menaMpaaUnrated";
})(ContentRatingMenaMpaaRatingEnum || (ContentRatingMenaMpaaRatingEnum = {}));
export var ContentRatingMibacRatingEnum;
(function (ContentRatingMibacRatingEnum) {
    ContentRatingMibacRatingEnum["MibacUnspecified"] = "mibacUnspecified";
    ContentRatingMibacRatingEnum["MibacT"] = "mibacT";
    ContentRatingMibacRatingEnum["MibacVap"] = "mibacVap";
    ContentRatingMibacRatingEnum["MibacVm6"] = "mibacVm6";
    ContentRatingMibacRatingEnum["MibacVm12"] = "mibacVm12";
    ContentRatingMibacRatingEnum["MibacVm14"] = "mibacVm14";
    ContentRatingMibacRatingEnum["MibacVm16"] = "mibacVm16";
    ContentRatingMibacRatingEnum["MibacVm18"] = "mibacVm18";
    ContentRatingMibacRatingEnum["MibacUnrated"] = "mibacUnrated";
})(ContentRatingMibacRatingEnum || (ContentRatingMibacRatingEnum = {}));
export var ContentRatingMocRatingEnum;
(function (ContentRatingMocRatingEnum) {
    ContentRatingMocRatingEnum["MocUnspecified"] = "mocUnspecified";
    ContentRatingMocRatingEnum["MocE"] = "mocE";
    ContentRatingMocRatingEnum["MocT"] = "mocT";
    ContentRatingMocRatingEnum["Moc7"] = "moc7";
    ContentRatingMocRatingEnum["Moc12"] = "moc12";
    ContentRatingMocRatingEnum["Moc15"] = "moc15";
    ContentRatingMocRatingEnum["Moc18"] = "moc18";
    ContentRatingMocRatingEnum["MocX"] = "mocX";
    ContentRatingMocRatingEnum["MocBanned"] = "mocBanned";
    ContentRatingMocRatingEnum["MocUnrated"] = "mocUnrated";
})(ContentRatingMocRatingEnum || (ContentRatingMocRatingEnum = {}));
export var ContentRatingMoctwRatingEnum;
(function (ContentRatingMoctwRatingEnum) {
    ContentRatingMoctwRatingEnum["MoctwUnspecified"] = "moctwUnspecified";
    ContentRatingMoctwRatingEnum["MoctwG"] = "moctwG";
    ContentRatingMoctwRatingEnum["MoctwP"] = "moctwP";
    ContentRatingMoctwRatingEnum["MoctwPg"] = "moctwPg";
    ContentRatingMoctwRatingEnum["MoctwR"] = "moctwR";
    ContentRatingMoctwRatingEnum["MoctwUnrated"] = "moctwUnrated";
    ContentRatingMoctwRatingEnum["MoctwR12"] = "moctwR12";
    ContentRatingMoctwRatingEnum["MoctwR15"] = "moctwR15";
})(ContentRatingMoctwRatingEnum || (ContentRatingMoctwRatingEnum = {}));
export var ContentRatingMpaaRatingEnum;
(function (ContentRatingMpaaRatingEnum) {
    ContentRatingMpaaRatingEnum["MpaaUnspecified"] = "mpaaUnspecified";
    ContentRatingMpaaRatingEnum["MpaaG"] = "mpaaG";
    ContentRatingMpaaRatingEnum["MpaaPg"] = "mpaaPg";
    ContentRatingMpaaRatingEnum["MpaaPg13"] = "mpaaPg13";
    ContentRatingMpaaRatingEnum["MpaaR"] = "mpaaR";
    ContentRatingMpaaRatingEnum["MpaaNc17"] = "mpaaNc17";
    ContentRatingMpaaRatingEnum["MpaaX"] = "mpaaX";
    ContentRatingMpaaRatingEnum["MpaaUnrated"] = "mpaaUnrated";
})(ContentRatingMpaaRatingEnum || (ContentRatingMpaaRatingEnum = {}));
export var ContentRatingMpaatRatingEnum;
(function (ContentRatingMpaatRatingEnum) {
    ContentRatingMpaatRatingEnum["MpaatUnspecified"] = "mpaatUnspecified";
    ContentRatingMpaatRatingEnum["MpaatGb"] = "mpaatGb";
    ContentRatingMpaatRatingEnum["MpaatRb"] = "mpaatRb";
})(ContentRatingMpaatRatingEnum || (ContentRatingMpaatRatingEnum = {}));
export var ContentRatingMtrcbRatingEnum;
(function (ContentRatingMtrcbRatingEnum) {
    ContentRatingMtrcbRatingEnum["MtrcbUnspecified"] = "mtrcbUnspecified";
    ContentRatingMtrcbRatingEnum["MtrcbG"] = "mtrcbG";
    ContentRatingMtrcbRatingEnum["MtrcbPg"] = "mtrcbPg";
    ContentRatingMtrcbRatingEnum["MtrcbR13"] = "mtrcbR13";
    ContentRatingMtrcbRatingEnum["MtrcbR16"] = "mtrcbR16";
    ContentRatingMtrcbRatingEnum["MtrcbR18"] = "mtrcbR18";
    ContentRatingMtrcbRatingEnum["MtrcbX"] = "mtrcbX";
    ContentRatingMtrcbRatingEnum["MtrcbUnrated"] = "mtrcbUnrated";
})(ContentRatingMtrcbRatingEnum || (ContentRatingMtrcbRatingEnum = {}));
export var ContentRatingNbcRatingEnum;
(function (ContentRatingNbcRatingEnum) {
    ContentRatingNbcRatingEnum["NbcUnspecified"] = "nbcUnspecified";
    ContentRatingNbcRatingEnum["NbcG"] = "nbcG";
    ContentRatingNbcRatingEnum["NbcPg"] = "nbcPg";
    ContentRatingNbcRatingEnum["Nbc12plus"] = "nbc12plus";
    ContentRatingNbcRatingEnum["Nbc15plus"] = "nbc15plus";
    ContentRatingNbcRatingEnum["Nbc18plus"] = "nbc18plus";
    ContentRatingNbcRatingEnum["Nbc18plusr"] = "nbc18plusr";
    ContentRatingNbcRatingEnum["NbcPu"] = "nbcPu";
    ContentRatingNbcRatingEnum["NbcUnrated"] = "nbcUnrated";
})(ContentRatingNbcRatingEnum || (ContentRatingNbcRatingEnum = {}));
export var ContentRatingNbcplRatingEnum;
(function (ContentRatingNbcplRatingEnum) {
    ContentRatingNbcplRatingEnum["NbcplUnspecified"] = "nbcplUnspecified";
    ContentRatingNbcplRatingEnum["NbcplI"] = "nbcplI";
    ContentRatingNbcplRatingEnum["NbcplIi"] = "nbcplIi";
    ContentRatingNbcplRatingEnum["NbcplIii"] = "nbcplIii";
    ContentRatingNbcplRatingEnum["NbcplIv"] = "nbcplIv";
    ContentRatingNbcplRatingEnum["Nbcpl18plus"] = "nbcpl18plus";
    ContentRatingNbcplRatingEnum["NbcplUnrated"] = "nbcplUnrated";
})(ContentRatingNbcplRatingEnum || (ContentRatingNbcplRatingEnum = {}));
export var ContentRatingNfrcRatingEnum;
(function (ContentRatingNfrcRatingEnum) {
    ContentRatingNfrcRatingEnum["NfrcUnspecified"] = "nfrcUnspecified";
    ContentRatingNfrcRatingEnum["NfrcA"] = "nfrcA";
    ContentRatingNfrcRatingEnum["NfrcB"] = "nfrcB";
    ContentRatingNfrcRatingEnum["NfrcC"] = "nfrcC";
    ContentRatingNfrcRatingEnum["NfrcD"] = "nfrcD";
    ContentRatingNfrcRatingEnum["NfrcX"] = "nfrcX";
    ContentRatingNfrcRatingEnum["NfrcUnrated"] = "nfrcUnrated";
})(ContentRatingNfrcRatingEnum || (ContentRatingNfrcRatingEnum = {}));
export var ContentRatingNfvcbRatingEnum;
(function (ContentRatingNfvcbRatingEnum) {
    ContentRatingNfvcbRatingEnum["NfvcbUnspecified"] = "nfvcbUnspecified";
    ContentRatingNfvcbRatingEnum["NfvcbG"] = "nfvcbG";
    ContentRatingNfvcbRatingEnum["NfvcbPg"] = "nfvcbPg";
    ContentRatingNfvcbRatingEnum["Nfvcb12"] = "nfvcb12";
    ContentRatingNfvcbRatingEnum["Nfvcb12a"] = "nfvcb12a";
    ContentRatingNfvcbRatingEnum["Nfvcb15"] = "nfvcb15";
    ContentRatingNfvcbRatingEnum["Nfvcb18"] = "nfvcb18";
    ContentRatingNfvcbRatingEnum["NfvcbRe"] = "nfvcbRe";
    ContentRatingNfvcbRatingEnum["NfvcbUnrated"] = "nfvcbUnrated";
})(ContentRatingNfvcbRatingEnum || (ContentRatingNfvcbRatingEnum = {}));
export var ContentRatingNkclvRatingEnum;
(function (ContentRatingNkclvRatingEnum) {
    ContentRatingNkclvRatingEnum["NkclvUnspecified"] = "nkclvUnspecified";
    ContentRatingNkclvRatingEnum["NkclvU"] = "nkclvU";
    ContentRatingNkclvRatingEnum["Nkclv7plus"] = "nkclv7plus";
    ContentRatingNkclvRatingEnum["Nkclv12plus"] = "nkclv12plus";
    ContentRatingNkclvRatingEnum["Nkclv16plus"] = "nkclv16plus";
    ContentRatingNkclvRatingEnum["Nkclv18plus"] = "nkclv18plus";
    ContentRatingNkclvRatingEnum["NkclvUnrated"] = "nkclvUnrated";
})(ContentRatingNkclvRatingEnum || (ContentRatingNkclvRatingEnum = {}));
export var ContentRatingNmcRatingEnum;
(function (ContentRatingNmcRatingEnum) {
    ContentRatingNmcRatingEnum["NmcUnspecified"] = "nmcUnspecified";
    ContentRatingNmcRatingEnum["NmcG"] = "nmcG";
    ContentRatingNmcRatingEnum["NmcPg"] = "nmcPg";
    ContentRatingNmcRatingEnum["NmcPg13"] = "nmcPg13";
    ContentRatingNmcRatingEnum["NmcPg15"] = "nmcPg15";
    ContentRatingNmcRatingEnum["Nmc15plus"] = "nmc15plus";
    ContentRatingNmcRatingEnum["Nmc18plus"] = "nmc18plus";
    ContentRatingNmcRatingEnum["Nmc18tc"] = "nmc18tc";
    ContentRatingNmcRatingEnum["NmcUnrated"] = "nmcUnrated";
})(ContentRatingNmcRatingEnum || (ContentRatingNmcRatingEnum = {}));
export var ContentRatingOflcRatingEnum;
(function (ContentRatingOflcRatingEnum) {
    ContentRatingOflcRatingEnum["OflcUnspecified"] = "oflcUnspecified";
    ContentRatingOflcRatingEnum["OflcG"] = "oflcG";
    ContentRatingOflcRatingEnum["OflcPg"] = "oflcPg";
    ContentRatingOflcRatingEnum["OflcM"] = "oflcM";
    ContentRatingOflcRatingEnum["OflcR13"] = "oflcR13";
    ContentRatingOflcRatingEnum["OflcR15"] = "oflcR15";
    ContentRatingOflcRatingEnum["OflcR16"] = "oflcR16";
    ContentRatingOflcRatingEnum["OflcR18"] = "oflcR18";
    ContentRatingOflcRatingEnum["OflcUnrated"] = "oflcUnrated";
    ContentRatingOflcRatingEnum["OflcRp13"] = "oflcRp13";
    ContentRatingOflcRatingEnum["OflcRp16"] = "oflcRp16";
    ContentRatingOflcRatingEnum["OflcRp18"] = "oflcRp18";
})(ContentRatingOflcRatingEnum || (ContentRatingOflcRatingEnum = {}));
export var ContentRatingPefilmRatingEnum;
(function (ContentRatingPefilmRatingEnum) {
    ContentRatingPefilmRatingEnum["PefilmUnspecified"] = "pefilmUnspecified";
    ContentRatingPefilmRatingEnum["PefilmPt"] = "pefilmPt";
    ContentRatingPefilmRatingEnum["PefilmPg"] = "pefilmPg";
    ContentRatingPefilmRatingEnum["Pefilm14"] = "pefilm14";
    ContentRatingPefilmRatingEnum["Pefilm18"] = "pefilm18";
    ContentRatingPefilmRatingEnum["PefilmUnrated"] = "pefilmUnrated";
})(ContentRatingPefilmRatingEnum || (ContentRatingPefilmRatingEnum = {}));
export var ContentRatingRcnofRatingEnum;
(function (ContentRatingRcnofRatingEnum) {
    ContentRatingRcnofRatingEnum["RcnofUnspecified"] = "rcnofUnspecified";
    ContentRatingRcnofRatingEnum["RcnofI"] = "rcnofI";
    ContentRatingRcnofRatingEnum["RcnofIi"] = "rcnofIi";
    ContentRatingRcnofRatingEnum["RcnofIii"] = "rcnofIii";
    ContentRatingRcnofRatingEnum["RcnofIv"] = "rcnofIv";
    ContentRatingRcnofRatingEnum["RcnofV"] = "rcnofV";
    ContentRatingRcnofRatingEnum["RcnofVi"] = "rcnofVi";
    ContentRatingRcnofRatingEnum["RcnofUnrated"] = "rcnofUnrated";
})(ContentRatingRcnofRatingEnum || (ContentRatingRcnofRatingEnum = {}));
export var ContentRatingResorteviolenciaRatingEnum;
(function (ContentRatingResorteviolenciaRatingEnum) {
    ContentRatingResorteviolenciaRatingEnum["ResorteviolenciaUnspecified"] = "resorteviolenciaUnspecified";
    ContentRatingResorteviolenciaRatingEnum["ResorteviolenciaA"] = "resorteviolenciaA";
    ContentRatingResorteviolenciaRatingEnum["ResorteviolenciaB"] = "resorteviolenciaB";
    ContentRatingResorteviolenciaRatingEnum["ResorteviolenciaC"] = "resorteviolenciaC";
    ContentRatingResorteviolenciaRatingEnum["ResorteviolenciaD"] = "resorteviolenciaD";
    ContentRatingResorteviolenciaRatingEnum["ResorteviolenciaE"] = "resorteviolenciaE";
    ContentRatingResorteviolenciaRatingEnum["ResorteviolenciaUnrated"] = "resorteviolenciaUnrated";
})(ContentRatingResorteviolenciaRatingEnum || (ContentRatingResorteviolenciaRatingEnum = {}));
export var ContentRatingRtcRatingEnum;
(function (ContentRatingRtcRatingEnum) {
    ContentRatingRtcRatingEnum["RtcUnspecified"] = "rtcUnspecified";
    ContentRatingRtcRatingEnum["RtcAa"] = "rtcAa";
    ContentRatingRtcRatingEnum["RtcA"] = "rtcA";
    ContentRatingRtcRatingEnum["RtcB"] = "rtcB";
    ContentRatingRtcRatingEnum["RtcB15"] = "rtcB15";
    ContentRatingRtcRatingEnum["RtcC"] = "rtcC";
    ContentRatingRtcRatingEnum["RtcD"] = "rtcD";
    ContentRatingRtcRatingEnum["RtcUnrated"] = "rtcUnrated";
})(ContentRatingRtcRatingEnum || (ContentRatingRtcRatingEnum = {}));
export var ContentRatingRteRatingEnum;
(function (ContentRatingRteRatingEnum) {
    ContentRatingRteRatingEnum["RteUnspecified"] = "rteUnspecified";
    ContentRatingRteRatingEnum["RteGa"] = "rteGa";
    ContentRatingRteRatingEnum["RteCh"] = "rteCh";
    ContentRatingRteRatingEnum["RtePs"] = "rtePs";
    ContentRatingRteRatingEnum["RteMa"] = "rteMa";
    ContentRatingRteRatingEnum["RteUnrated"] = "rteUnrated";
})(ContentRatingRteRatingEnum || (ContentRatingRteRatingEnum = {}));
export var ContentRatingRussiaRatingEnum;
(function (ContentRatingRussiaRatingEnum) {
    ContentRatingRussiaRatingEnum["RussiaUnspecified"] = "russiaUnspecified";
    ContentRatingRussiaRatingEnum["Russia0"] = "russia0";
    ContentRatingRussiaRatingEnum["Russia6"] = "russia6";
    ContentRatingRussiaRatingEnum["Russia12"] = "russia12";
    ContentRatingRussiaRatingEnum["Russia16"] = "russia16";
    ContentRatingRussiaRatingEnum["Russia18"] = "russia18";
    ContentRatingRussiaRatingEnum["RussiaUnrated"] = "russiaUnrated";
})(ContentRatingRussiaRatingEnum || (ContentRatingRussiaRatingEnum = {}));
export var ContentRatingSkfilmRatingEnum;
(function (ContentRatingSkfilmRatingEnum) {
    ContentRatingSkfilmRatingEnum["SkfilmUnspecified"] = "skfilmUnspecified";
    ContentRatingSkfilmRatingEnum["SkfilmG"] = "skfilmG";
    ContentRatingSkfilmRatingEnum["SkfilmP2"] = "skfilmP2";
    ContentRatingSkfilmRatingEnum["SkfilmP5"] = "skfilmP5";
    ContentRatingSkfilmRatingEnum["SkfilmP8"] = "skfilmP8";
    ContentRatingSkfilmRatingEnum["SkfilmUnrated"] = "skfilmUnrated";
})(ContentRatingSkfilmRatingEnum || (ContentRatingSkfilmRatingEnum = {}));
export var ContentRatingSmaisRatingEnum;
(function (ContentRatingSmaisRatingEnum) {
    ContentRatingSmaisRatingEnum["SmaisUnspecified"] = "smaisUnspecified";
    ContentRatingSmaisRatingEnum["SmaisL"] = "smaisL";
    ContentRatingSmaisRatingEnum["Smais7"] = "smais7";
    ContentRatingSmaisRatingEnum["Smais12"] = "smais12";
    ContentRatingSmaisRatingEnum["Smais14"] = "smais14";
    ContentRatingSmaisRatingEnum["Smais16"] = "smais16";
    ContentRatingSmaisRatingEnum["Smais18"] = "smais18";
    ContentRatingSmaisRatingEnum["SmaisUnrated"] = "smaisUnrated";
})(ContentRatingSmaisRatingEnum || (ContentRatingSmaisRatingEnum = {}));
export var ContentRatingSmsaRatingEnum;
(function (ContentRatingSmsaRatingEnum) {
    ContentRatingSmsaRatingEnum["SmsaUnspecified"] = "smsaUnspecified";
    ContentRatingSmsaRatingEnum["SmsaA"] = "smsaA";
    ContentRatingSmsaRatingEnum["Smsa7"] = "smsa7";
    ContentRatingSmsaRatingEnum["Smsa11"] = "smsa11";
    ContentRatingSmsaRatingEnum["Smsa15"] = "smsa15";
    ContentRatingSmsaRatingEnum["SmsaUnrated"] = "smsaUnrated";
})(ContentRatingSmsaRatingEnum || (ContentRatingSmsaRatingEnum = {}));
export var ContentRatingTvpgRatingEnum;
(function (ContentRatingTvpgRatingEnum) {
    ContentRatingTvpgRatingEnum["TvpgUnspecified"] = "tvpgUnspecified";
    ContentRatingTvpgRatingEnum["TvpgY"] = "tvpgY";
    ContentRatingTvpgRatingEnum["TvpgY7"] = "tvpgY7";
    ContentRatingTvpgRatingEnum["TvpgY7Fv"] = "tvpgY7Fv";
    ContentRatingTvpgRatingEnum["TvpgG"] = "tvpgG";
    ContentRatingTvpgRatingEnum["TvpgPg"] = "tvpgPg";
    ContentRatingTvpgRatingEnum["Pg14"] = "pg14";
    ContentRatingTvpgRatingEnum["TvpgMa"] = "tvpgMa";
    ContentRatingTvpgRatingEnum["TvpgUnrated"] = "tvpgUnrated";
})(ContentRatingTvpgRatingEnum || (ContentRatingTvpgRatingEnum = {}));
export var ContentRatingYtRatingEnum;
(function (ContentRatingYtRatingEnum) {
    ContentRatingYtRatingEnum["YtUnspecified"] = "ytUnspecified";
    ContentRatingYtRatingEnum["YtAgeRestricted"] = "ytAgeRestricted";
})(ContentRatingYtRatingEnum || (ContentRatingYtRatingEnum = {}));
// ContentRating
/**
 * Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange
**/
var ContentRating = /** @class */ (function (_super) {
    __extends(ContentRating, _super);
    function ContentRating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acbRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "acbRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agcomRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "agcomRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=anatelRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "anatelRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bbfcRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "bbfcRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bfvcRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "bfvcRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bmukkRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "bmukkRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catvRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "catvRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catvfrRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "catvfrRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cbfcRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "cbfcRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cccRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "cccRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cceRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "cceRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chfilmRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "chfilmRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chvrsRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "chvrsRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cicfRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "cicfRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cnaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "cnaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cncRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "cncRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "csaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cscfRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "cscfRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=czfilmRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "czfilmRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=djctqRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "djctqRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=djctqRatingReasons" }),
        __metadata("design:type", Array)
    ], ContentRating.prototype, "djctqRatingReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ecbmctRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "ecbmctRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eefilmRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "eefilmRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=egfilmRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "egfilmRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eirinRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "eirinRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fcbmRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "fcbmRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fcoRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "fcoRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fmocRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "fmocRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fpbRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "fpbRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fpbRatingReasons" }),
        __metadata("design:type", Array)
    ], ContentRating.prototype, "fpbRatingReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fskRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "fskRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grfilmRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "grfilmRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icaaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "icaaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ifcoRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "ifcoRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ilfilmRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "ilfilmRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incaaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "incaaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kfcbRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "kfcbRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kijkwijzerRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "kijkwijzerRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmrbRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "kmrbRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lsfRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "lsfRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mccaaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mccaaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mccypRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mccypRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mcstRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mcstRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mdaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mdaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medietilsynetRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "medietilsynetRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mekuRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mekuRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=menaMpaaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "menaMpaaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mibacRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mibacRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mocRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mocRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moctwRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "moctwRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mpaaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mpaaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mpaatRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mpaatRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mtrcbRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "mtrcbRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nbcRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "nbcRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nbcplRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "nbcplRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nfrcRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "nfrcRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nfvcbRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "nfvcbRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nkclvRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "nkclvRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nmcRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "nmcRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oflcRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "oflcRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pefilmRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "pefilmRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rcnofRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "rcnofRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resorteviolenciaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "resorteviolenciaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rtcRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "rtcRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rteRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "rteRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=russiaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "russiaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skfilmRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "skfilmRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smaisRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "smaisRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsaRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "smsaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tvpgRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "tvpgRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ytRating" }),
        __metadata("design:type", String)
    ], ContentRating.prototype, "ytRating", void 0);
    return ContentRating;
}(SpeakeasyBase));
export { ContentRating };
