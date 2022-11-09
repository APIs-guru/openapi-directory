import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContentRatingAcbRatingEnum {
    AcbUnspecified = "acbUnspecified"
,    AcbE = "acbE"
,    AcbP = "acbP"
,    AcbC = "acbC"
,    AcbG = "acbG"
,    AcbPg = "acbPg"
,    AcbM = "acbM"
,    AcbMa15plus = "acbMa15plus"
,    AcbR18plus = "acbR18plus"
,    AcbUnrated = "acbUnrated"
}

export enum ContentRatingAgcomRatingEnum {
    AgcomUnspecified = "agcomUnspecified"
,    AgcomT = "agcomT"
,    AgcomVm14 = "agcomVm14"
,    AgcomVm18 = "agcomVm18"
,    AgcomUnrated = "agcomUnrated"
}

export enum ContentRatingAnatelRatingEnum {
    AnatelUnspecified = "anatelUnspecified"
,    AnatelF = "anatelF"
,    AnatelI = "anatelI"
,    AnatelI7 = "anatelI7"
,    AnatelI10 = "anatelI10"
,    AnatelI12 = "anatelI12"
,    AnatelR = "anatelR"
,    AnatelA = "anatelA"
,    AnatelUnrated = "anatelUnrated"
}

export enum ContentRatingBbfcRatingEnum {
    BbfcUnspecified = "bbfcUnspecified"
,    BbfcU = "bbfcU"
,    BbfcPg = "bbfcPg"
,    Bbfc12a = "bbfc12a"
,    Bbfc12 = "bbfc12"
,    Bbfc15 = "bbfc15"
,    Bbfc18 = "bbfc18"
,    BbfcR18 = "bbfcR18"
,    BbfcUnrated = "bbfcUnrated"
}

export enum ContentRatingBfvcRatingEnum {
    BfvcUnspecified = "bfvcUnspecified"
,    BfvcG = "bfvcG"
,    BfvcE = "bfvcE"
,    Bfvc13 = "bfvc13"
,    Bfvc15 = "bfvc15"
,    Bfvc18 = "bfvc18"
,    Bfvc20 = "bfvc20"
,    BfvcB = "bfvcB"
,    BfvcUnrated = "bfvcUnrated"
}

export enum ContentRatingBmukkRatingEnum {
    BmukkUnspecified = "bmukkUnspecified"
,    BmukkAa = "bmukkAa"
,    Bmukk6 = "bmukk6"
,    Bmukk8 = "bmukk8"
,    Bmukk10 = "bmukk10"
,    Bmukk12 = "bmukk12"
,    Bmukk14 = "bmukk14"
,    Bmukk16 = "bmukk16"
,    BmukkUnrated = "bmukkUnrated"
}

export enum ContentRatingCatvRatingEnum {
    CatvUnspecified = "catvUnspecified"
,    CatvC = "catvC"
,    CatvC8 = "catvC8"
,    CatvG = "catvG"
,    CatvPg = "catvPg"
,    Catv14plus = "catv14plus"
,    Catv18plus = "catv18plus"
,    CatvUnrated = "catvUnrated"
,    CatvE = "catvE"
}

export enum ContentRatingCatvfrRatingEnum {
    CatvfrUnspecified = "catvfrUnspecified"
,    CatvfrG = "catvfrG"
,    Catvfr8plus = "catvfr8plus"
,    Catvfr13plus = "catvfr13plus"
,    Catvfr16plus = "catvfr16plus"
,    Catvfr18plus = "catvfr18plus"
,    CatvfrUnrated = "catvfrUnrated"
,    CatvfrE = "catvfrE"
}

export enum ContentRatingCbfcRatingEnum {
    CbfcUnspecified = "cbfcUnspecified"
,    CbfcU = "cbfcU"
,    CbfcUa = "cbfcUA"
,    CbfcUa7plus = "cbfcUA7plus"
,    CbfcUa13plus = "cbfcUA13plus"
,    CbfcUa16plus = "cbfcUA16plus"
,    CbfcA = "cbfcA"
,    CbfcS = "cbfcS"
,    CbfcUnrated = "cbfcUnrated"
}

export enum ContentRatingCccRatingEnum {
    CccUnspecified = "cccUnspecified"
,    CccTe = "cccTe"
,    Ccc6 = "ccc6"
,    Ccc14 = "ccc14"
,    Ccc18 = "ccc18"
,    Ccc18v = "ccc18v"
,    Ccc18s = "ccc18s"
,    CccUnrated = "cccUnrated"
}

export enum ContentRatingCceRatingEnum {
    CceUnspecified = "cceUnspecified"
,    CceM4 = "cceM4"
,    CceM6 = "cceM6"
,    CceM12 = "cceM12"
,    CceM16 = "cceM16"
,    CceM18 = "cceM18"
,    CceUnrated = "cceUnrated"
,    CceM14 = "cceM14"
}

export enum ContentRatingChfilmRatingEnum {
    ChfilmUnspecified = "chfilmUnspecified"
,    Chfilm0 = "chfilm0"
,    Chfilm6 = "chfilm6"
,    Chfilm12 = "chfilm12"
,    Chfilm16 = "chfilm16"
,    Chfilm18 = "chfilm18"
,    ChfilmUnrated = "chfilmUnrated"
}

export enum ContentRatingChvrsRatingEnum {
    ChvrsUnspecified = "chvrsUnspecified"
,    ChvrsG = "chvrsG"
,    ChvrsPg = "chvrsPg"
,    Chvrs14a = "chvrs14a"
,    Chvrs18a = "chvrs18a"
,    ChvrsR = "chvrsR"
,    ChvrsE = "chvrsE"
,    ChvrsUnrated = "chvrsUnrated"
}

export enum ContentRatingCicfRatingEnum {
    CicfUnspecified = "cicfUnspecified"
,    CicfE = "cicfE"
,    CicfKtEa = "cicfKtEa"
,    CicfKntEna = "cicfKntEna"
,    CicfUnrated = "cicfUnrated"
}

export enum ContentRatingCnaRatingEnum {
    CnaUnspecified = "cnaUnspecified"
,    CnaAp = "cnaAp"
,    Cna12 = "cna12"
,    Cna15 = "cna15"
,    Cna18 = "cna18"
,    Cna18plus = "cna18plus"
,    CnaUnrated = "cnaUnrated"
}

export enum ContentRatingCncRatingEnum {
    CncUnspecified = "cncUnspecified"
,    CncT = "cncT"
,    Cnc10 = "cnc10"
,    Cnc12 = "cnc12"
,    Cnc16 = "cnc16"
,    Cnc18 = "cnc18"
,    CncE = "cncE"
,    CncInterdiction = "cncInterdiction"
,    CncUnrated = "cncUnrated"
}

export enum ContentRatingCsaRatingEnum {
    CsaUnspecified = "csaUnspecified"
,    CsaT = "csaT"
,    Csa10 = "csa10"
,    Csa12 = "csa12"
,    Csa16 = "csa16"
,    Csa18 = "csa18"
,    CsaInterdiction = "csaInterdiction"
,    CsaUnrated = "csaUnrated"
}

export enum ContentRatingCscfRatingEnum {
    CscfUnspecified = "cscfUnspecified"
,    CscfAl = "cscfAl"
,    CscfA = "cscfA"
,    Cscf6 = "cscf6"
,    Cscf9 = "cscf9"
,    Cscf12 = "cscf12"
,    Cscf16 = "cscf16"
,    Cscf18 = "cscf18"
,    CscfUnrated = "cscfUnrated"
}

export enum ContentRatingCzfilmRatingEnum {
    CzfilmUnspecified = "czfilmUnspecified"
,    CzfilmU = "czfilmU"
,    Czfilm12 = "czfilm12"
,    Czfilm14 = "czfilm14"
,    Czfilm18 = "czfilm18"
,    CzfilmUnrated = "czfilmUnrated"
}

export enum ContentRatingDjctqRatingEnum {
    DjctqUnspecified = "djctqUnspecified"
,    DjctqL = "djctqL"
,    Djctq10 = "djctq10"
,    Djctq12 = "djctq12"
,    Djctq14 = "djctq14"
,    Djctq16 = "djctq16"
,    Djctq18 = "djctq18"
,    DjctqEr = "djctqEr"
,    DjctqL10 = "djctqL10"
,    DjctqL12 = "djctqL12"
,    DjctqL14 = "djctqL14"
,    DjctqL16 = "djctqL16"
,    DjctqL18 = "djctqL18"
,    Djctq1012 = "djctq1012"
,    Djctq1014 = "djctq1014"
,    Djctq1016 = "djctq1016"
,    Djctq1018 = "djctq1018"
,    Djctq1214 = "djctq1214"
,    Djctq1216 = "djctq1216"
,    Djctq1218 = "djctq1218"
,    Djctq1416 = "djctq1416"
,    Djctq1418 = "djctq1418"
,    Djctq1618 = "djctq1618"
,    DjctqUnrated = "djctqUnrated"
}

export enum ContentRatingDjctqRatingReasonsEnum {
    DjctqRatingReasonUnspecified = "djctqRatingReasonUnspecified"
,    DjctqViolence = "djctqViolence"
,    DjctqExtremeViolence = "djctqExtremeViolence"
,    DjctqSexualContent = "djctqSexualContent"
,    DjctqNudity = "djctqNudity"
,    DjctqSex = "djctqSex"
,    DjctqExplicitSex = "djctqExplicitSex"
,    DjctqDrugs = "djctqDrugs"
,    DjctqLegalDrugs = "djctqLegalDrugs"
,    DjctqIllegalDrugs = "djctqIllegalDrugs"
,    DjctqInappropriateLanguage = "djctqInappropriateLanguage"
,    DjctqCriminalActs = "djctqCriminalActs"
,    DjctqImpactingContent = "djctqImpactingContent"
}

export enum ContentRatingEcbmctRatingEnum {
    EcbmctUnspecified = "ecbmctUnspecified"
,    EcbmctG = "ecbmctG"
,    Ecbmct7a = "ecbmct7a"
,    Ecbmct7plus = "ecbmct7plus"
,    Ecbmct13a = "ecbmct13a"
,    Ecbmct13plus = "ecbmct13plus"
,    Ecbmct15a = "ecbmct15a"
,    Ecbmct15plus = "ecbmct15plus"
,    Ecbmct18plus = "ecbmct18plus"
,    EcbmctUnrated = "ecbmctUnrated"
}

export enum ContentRatingEefilmRatingEnum {
    EefilmUnspecified = "eefilmUnspecified"
,    EefilmPere = "eefilmPere"
,    EefilmL = "eefilmL"
,    EefilmMs6 = "eefilmMs6"
,    EefilmK6 = "eefilmK6"
,    EefilmMs12 = "eefilmMs12"
,    EefilmK12 = "eefilmK12"
,    EefilmK14 = "eefilmK14"
,    EefilmK16 = "eefilmK16"
,    EefilmUnrated = "eefilmUnrated"
}

export enum ContentRatingEgfilmRatingEnum {
    EgfilmUnspecified = "egfilmUnspecified"
,    EgfilmGn = "egfilmGn"
,    Egfilm18 = "egfilm18"
,    EgfilmBn = "egfilmBn"
,    EgfilmUnrated = "egfilmUnrated"
}

export enum ContentRatingEirinRatingEnum {
    EirinUnspecified = "eirinUnspecified"
,    EirinG = "eirinG"
,    EirinPg12 = "eirinPg12"
,    EirinR15plus = "eirinR15plus"
,    EirinR18plus = "eirinR18plus"
,    EirinUnrated = "eirinUnrated"
}

export enum ContentRatingFcbmRatingEnum {
    FcbmUnspecified = "fcbmUnspecified"
,    FcbmU = "fcbmU"
,    FcbmPg13 = "fcbmPg13"
,    FcbmP13 = "fcbmP13"
,    Fcbm18 = "fcbm18"
,    Fcbm18sx = "fcbm18sx"
,    Fcbm18pa = "fcbm18pa"
,    Fcbm18sg = "fcbm18sg"
,    Fcbm18pl = "fcbm18pl"
,    FcbmUnrated = "fcbmUnrated"
}

export enum ContentRatingFcoRatingEnum {
    FcoUnspecified = "fcoUnspecified"
,    FcoI = "fcoI"
,    FcoIia = "fcoIia"
,    FcoIib = "fcoIib"
,    FcoIi = "fcoIi"
,    FcoIii = "fcoIii"
,    FcoUnrated = "fcoUnrated"
}

export enum ContentRatingFmocRatingEnum {
    FmocUnspecified = "fmocUnspecified"
,    FmocU = "fmocU"
,    Fmoc10 = "fmoc10"
,    Fmoc12 = "fmoc12"
,    Fmoc16 = "fmoc16"
,    Fmoc18 = "fmoc18"
,    FmocE = "fmocE"
,    FmocUnrated = "fmocUnrated"
}

export enum ContentRatingFpbRatingEnum {
    FpbUnspecified = "fpbUnspecified"
,    FpbA = "fpbA"
,    FpbPg = "fpbPg"
,    Fpb79Pg = "fpb79Pg"
,    Fpb1012Pg = "fpb1012Pg"
,    Fpb13 = "fpb13"
,    Fpb16 = "fpb16"
,    Fpb18 = "fpb18"
,    FpbX18 = "fpbX18"
,    FpbXx = "fpbXx"
,    FpbUnrated = "fpbUnrated"
,    Fpb10 = "fpb10"
}

export enum ContentRatingFpbRatingReasonsEnum {
    FpbRatingReasonUnspecified = "fpbRatingReasonUnspecified"
,    FpbBlasphemy = "fpbBlasphemy"
,    FpbLanguage = "fpbLanguage"
,    FpbNudity = "fpbNudity"
,    FpbPrejudice = "fpbPrejudice"
,    FpbSex = "fpbSex"
,    FpbViolence = "fpbViolence"
,    FpbDrugs = "fpbDrugs"
,    FpbSexualViolence = "fpbSexualViolence"
,    FpbHorror = "fpbHorror"
,    FpbCriminalTechniques = "fpbCriminalTechniques"
,    FpbImitativeActsTechniques = "fpbImitativeActsTechniques"
}

export enum ContentRatingFskRatingEnum {
    FskUnspecified = "fskUnspecified"
,    Fsk0 = "fsk0"
,    Fsk6 = "fsk6"
,    Fsk12 = "fsk12"
,    Fsk16 = "fsk16"
,    Fsk18 = "fsk18"
,    FskUnrated = "fskUnrated"
}

export enum ContentRatingGrfilmRatingEnum {
    GrfilmUnspecified = "grfilmUnspecified"
,    GrfilmK = "grfilmK"
,    GrfilmE = "grfilmE"
,    GrfilmK12 = "grfilmK12"
,    GrfilmK13 = "grfilmK13"
,    GrfilmK15 = "grfilmK15"
,    GrfilmK17 = "grfilmK17"
,    GrfilmK18 = "grfilmK18"
,    GrfilmUnrated = "grfilmUnrated"
}

export enum ContentRatingIcaaRatingEnum {
    IcaaUnspecified = "icaaUnspecified"
,    IcaaApta = "icaaApta"
,    Icaa7 = "icaa7"
,    Icaa12 = "icaa12"
,    Icaa13 = "icaa13"
,    Icaa16 = "icaa16"
,    Icaa18 = "icaa18"
,    IcaaX = "icaaX"
,    IcaaUnrated = "icaaUnrated"
}

export enum ContentRatingIfcoRatingEnum {
    IfcoUnspecified = "ifcoUnspecified"
,    IfcoG = "ifcoG"
,    IfcoPg = "ifcoPg"
,    Ifco12 = "ifco12"
,    Ifco12a = "ifco12a"
,    Ifco15 = "ifco15"
,    Ifco15a = "ifco15a"
,    Ifco16 = "ifco16"
,    Ifco18 = "ifco18"
,    IfcoUnrated = "ifcoUnrated"
}

export enum ContentRatingIlfilmRatingEnum {
    IlfilmUnspecified = "ilfilmUnspecified"
,    IlfilmAa = "ilfilmAa"
,    Ilfilm12 = "ilfilm12"
,    Ilfilm14 = "ilfilm14"
,    Ilfilm16 = "ilfilm16"
,    Ilfilm18 = "ilfilm18"
,    IlfilmUnrated = "ilfilmUnrated"
}

export enum ContentRatingIncaaRatingEnum {
    IncaaUnspecified = "incaaUnspecified"
,    IncaaAtp = "incaaAtp"
,    IncaaSam13 = "incaaSam13"
,    IncaaSam16 = "incaaSam16"
,    IncaaSam18 = "incaaSam18"
,    IncaaC = "incaaC"
,    IncaaUnrated = "incaaUnrated"
}

export enum ContentRatingKfcbRatingEnum {
    KfcbUnspecified = "kfcbUnspecified"
,    KfcbG = "kfcbG"
,    KfcbPg = "kfcbPg"
,    Kfcb16plus = "kfcb16plus"
,    KfcbR = "kfcbR"
,    KfcbUnrated = "kfcbUnrated"
}

export enum ContentRatingKijkwijzerRatingEnum {
    KijkwijzerUnspecified = "kijkwijzerUnspecified"
,    KijkwijzerAl = "kijkwijzerAl"
,    Kijkwijzer6 = "kijkwijzer6"
,    Kijkwijzer9 = "kijkwijzer9"
,    Kijkwijzer12 = "kijkwijzer12"
,    Kijkwijzer16 = "kijkwijzer16"
,    Kijkwijzer18 = "kijkwijzer18"
,    KijkwijzerUnrated = "kijkwijzerUnrated"
}

export enum ContentRatingKmrbRatingEnum {
    KmrbUnspecified = "kmrbUnspecified"
,    KmrbAll = "kmrbAll"
,    Kmrb12plus = "kmrb12plus"
,    Kmrb15plus = "kmrb15plus"
,    KmrbTeenr = "kmrbTeenr"
,    KmrbR = "kmrbR"
,    KmrbUnrated = "kmrbUnrated"
}

export enum ContentRatingLsfRatingEnum {
    LsfUnspecified = "lsfUnspecified"
,    LsfSu = "lsfSu"
,    LsfA = "lsfA"
,    LsfBo = "lsfBo"
,    Lsf13 = "lsf13"
,    LsfR = "lsfR"
,    Lsf17 = "lsf17"
,    LsfD = "lsfD"
,    Lsf21 = "lsf21"
,    LsfUnrated = "lsfUnrated"
}

export enum ContentRatingMccaaRatingEnum {
    MccaaUnspecified = "mccaaUnspecified"
,    MccaaU = "mccaaU"
,    MccaaPg = "mccaaPg"
,    Mccaa12a = "mccaa12a"
,    Mccaa12 = "mccaa12"
,    Mccaa14 = "mccaa14"
,    Mccaa15 = "mccaa15"
,    Mccaa16 = "mccaa16"
,    Mccaa18 = "mccaa18"
,    MccaaUnrated = "mccaaUnrated"
}

export enum ContentRatingMccypRatingEnum {
    MccypUnspecified = "mccypUnspecified"
,    MccypA = "mccypA"
,    Mccyp7 = "mccyp7"
,    Mccyp11 = "mccyp11"
,    Mccyp15 = "mccyp15"
,    MccypUnrated = "mccypUnrated"
}

export enum ContentRatingMcstRatingEnum {
    McstUnspecified = "mcstUnspecified"
,    McstP = "mcstP"
,    Mcst0 = "mcst0"
,    McstC13 = "mcstC13"
,    McstC16 = "mcstC16"
,    Mcst16plus = "mcst16plus"
,    McstC18 = "mcstC18"
,    McstGPg = "mcstGPg"
,    McstUnrated = "mcstUnrated"
}

export enum ContentRatingMdaRatingEnum {
    MdaUnspecified = "mdaUnspecified"
,    MdaG = "mdaG"
,    MdaPg = "mdaPg"
,    MdaPg13 = "mdaPg13"
,    MdaNc16 = "mdaNc16"
,    MdaM18 = "mdaM18"
,    MdaR21 = "mdaR21"
,    MdaUnrated = "mdaUnrated"
}

export enum ContentRatingMedietilsynetRatingEnum {
    MedietilsynetUnspecified = "medietilsynetUnspecified"
,    MedietilsynetA = "medietilsynetA"
,    Medietilsynet6 = "medietilsynet6"
,    Medietilsynet7 = "medietilsynet7"
,    Medietilsynet9 = "medietilsynet9"
,    Medietilsynet11 = "medietilsynet11"
,    Medietilsynet12 = "medietilsynet12"
,    Medietilsynet15 = "medietilsynet15"
,    Medietilsynet18 = "medietilsynet18"
,    MedietilsynetUnrated = "medietilsynetUnrated"
}

export enum ContentRatingMekuRatingEnum {
    MekuUnspecified = "mekuUnspecified"
,    MekuS = "mekuS"
,    Meku7 = "meku7"
,    Meku12 = "meku12"
,    Meku16 = "meku16"
,    Meku18 = "meku18"
,    MekuUnrated = "mekuUnrated"
}

export enum ContentRatingMenaMpaaRatingEnum {
    MenaMpaaUnspecified = "menaMpaaUnspecified"
,    MenaMpaaG = "menaMpaaG"
,    MenaMpaaPg = "menaMpaaPg"
,    MenaMpaaPg13 = "menaMpaaPg13"
,    MenaMpaaR = "menaMpaaR"
,    MenaMpaaUnrated = "menaMpaaUnrated"
}

export enum ContentRatingMibacRatingEnum {
    MibacUnspecified = "mibacUnspecified"
,    MibacT = "mibacT"
,    MibacVap = "mibacVap"
,    MibacVm6 = "mibacVm6"
,    MibacVm12 = "mibacVm12"
,    MibacVm14 = "mibacVm14"
,    MibacVm16 = "mibacVm16"
,    MibacVm18 = "mibacVm18"
,    MibacUnrated = "mibacUnrated"
}

export enum ContentRatingMocRatingEnum {
    MocUnspecified = "mocUnspecified"
,    MocE = "mocE"
,    MocT = "mocT"
,    Moc7 = "moc7"
,    Moc12 = "moc12"
,    Moc15 = "moc15"
,    Moc18 = "moc18"
,    MocX = "mocX"
,    MocBanned = "mocBanned"
,    MocUnrated = "mocUnrated"
}

export enum ContentRatingMoctwRatingEnum {
    MoctwUnspecified = "moctwUnspecified"
,    MoctwG = "moctwG"
,    MoctwP = "moctwP"
,    MoctwPg = "moctwPg"
,    MoctwR = "moctwR"
,    MoctwUnrated = "moctwUnrated"
,    MoctwR12 = "moctwR12"
,    MoctwR15 = "moctwR15"
}

export enum ContentRatingMpaaRatingEnum {
    MpaaUnspecified = "mpaaUnspecified"
,    MpaaG = "mpaaG"
,    MpaaPg = "mpaaPg"
,    MpaaPg13 = "mpaaPg13"
,    MpaaR = "mpaaR"
,    MpaaNc17 = "mpaaNc17"
,    MpaaX = "mpaaX"
,    MpaaUnrated = "mpaaUnrated"
}

export enum ContentRatingMpaatRatingEnum {
    MpaatUnspecified = "mpaatUnspecified"
,    MpaatGb = "mpaatGb"
,    MpaatRb = "mpaatRb"
}

export enum ContentRatingMtrcbRatingEnum {
    MtrcbUnspecified = "mtrcbUnspecified"
,    MtrcbG = "mtrcbG"
,    MtrcbPg = "mtrcbPg"
,    MtrcbR13 = "mtrcbR13"
,    MtrcbR16 = "mtrcbR16"
,    MtrcbR18 = "mtrcbR18"
,    MtrcbX = "mtrcbX"
,    MtrcbUnrated = "mtrcbUnrated"
}

export enum ContentRatingNbcRatingEnum {
    NbcUnspecified = "nbcUnspecified"
,    NbcG = "nbcG"
,    NbcPg = "nbcPg"
,    Nbc12plus = "nbc12plus"
,    Nbc15plus = "nbc15plus"
,    Nbc18plus = "nbc18plus"
,    Nbc18plusr = "nbc18plusr"
,    NbcPu = "nbcPu"
,    NbcUnrated = "nbcUnrated"
}

export enum ContentRatingNbcplRatingEnum {
    NbcplUnspecified = "nbcplUnspecified"
,    NbcplI = "nbcplI"
,    NbcplIi = "nbcplIi"
,    NbcplIii = "nbcplIii"
,    NbcplIv = "nbcplIv"
,    Nbcpl18plus = "nbcpl18plus"
,    NbcplUnrated = "nbcplUnrated"
}

export enum ContentRatingNfrcRatingEnum {
    NfrcUnspecified = "nfrcUnspecified"
,    NfrcA = "nfrcA"
,    NfrcB = "nfrcB"
,    NfrcC = "nfrcC"
,    NfrcD = "nfrcD"
,    NfrcX = "nfrcX"
,    NfrcUnrated = "nfrcUnrated"
}

export enum ContentRatingNfvcbRatingEnum {
    NfvcbUnspecified = "nfvcbUnspecified"
,    NfvcbG = "nfvcbG"
,    NfvcbPg = "nfvcbPg"
,    Nfvcb12 = "nfvcb12"
,    Nfvcb12a = "nfvcb12a"
,    Nfvcb15 = "nfvcb15"
,    Nfvcb18 = "nfvcb18"
,    NfvcbRe = "nfvcbRe"
,    NfvcbUnrated = "nfvcbUnrated"
}

export enum ContentRatingNkclvRatingEnum {
    NkclvUnspecified = "nkclvUnspecified"
,    NkclvU = "nkclvU"
,    Nkclv7plus = "nkclv7plus"
,    Nkclv12plus = "nkclv12plus"
,    Nkclv16plus = "nkclv16plus"
,    Nkclv18plus = "nkclv18plus"
,    NkclvUnrated = "nkclvUnrated"
}

export enum ContentRatingNmcRatingEnum {
    NmcUnspecified = "nmcUnspecified"
,    NmcG = "nmcG"
,    NmcPg = "nmcPg"
,    NmcPg13 = "nmcPg13"
,    NmcPg15 = "nmcPg15"
,    Nmc15plus = "nmc15plus"
,    Nmc18plus = "nmc18plus"
,    Nmc18tc = "nmc18tc"
,    NmcUnrated = "nmcUnrated"
}

export enum ContentRatingOflcRatingEnum {
    OflcUnspecified = "oflcUnspecified"
,    OflcG = "oflcG"
,    OflcPg = "oflcPg"
,    OflcM = "oflcM"
,    OflcR13 = "oflcR13"
,    OflcR15 = "oflcR15"
,    OflcR16 = "oflcR16"
,    OflcR18 = "oflcR18"
,    OflcUnrated = "oflcUnrated"
,    OflcRp13 = "oflcRp13"
,    OflcRp16 = "oflcRp16"
,    OflcRp18 = "oflcRp18"
}

export enum ContentRatingPefilmRatingEnum {
    PefilmUnspecified = "pefilmUnspecified"
,    PefilmPt = "pefilmPt"
,    PefilmPg = "pefilmPg"
,    Pefilm14 = "pefilm14"
,    Pefilm18 = "pefilm18"
,    PefilmUnrated = "pefilmUnrated"
}

export enum ContentRatingRcnofRatingEnum {
    RcnofUnspecified = "rcnofUnspecified"
,    RcnofI = "rcnofI"
,    RcnofIi = "rcnofIi"
,    RcnofIii = "rcnofIii"
,    RcnofIv = "rcnofIv"
,    RcnofV = "rcnofV"
,    RcnofVi = "rcnofVi"
,    RcnofUnrated = "rcnofUnrated"
}

export enum ContentRatingResorteviolenciaRatingEnum {
    ResorteviolenciaUnspecified = "resorteviolenciaUnspecified"
,    ResorteviolenciaA = "resorteviolenciaA"
,    ResorteviolenciaB = "resorteviolenciaB"
,    ResorteviolenciaC = "resorteviolenciaC"
,    ResorteviolenciaD = "resorteviolenciaD"
,    ResorteviolenciaE = "resorteviolenciaE"
,    ResorteviolenciaUnrated = "resorteviolenciaUnrated"
}

export enum ContentRatingRtcRatingEnum {
    RtcUnspecified = "rtcUnspecified"
,    RtcAa = "rtcAa"
,    RtcA = "rtcA"
,    RtcB = "rtcB"
,    RtcB15 = "rtcB15"
,    RtcC = "rtcC"
,    RtcD = "rtcD"
,    RtcUnrated = "rtcUnrated"
}

export enum ContentRatingRteRatingEnum {
    RteUnspecified = "rteUnspecified"
,    RteGa = "rteGa"
,    RteCh = "rteCh"
,    RtePs = "rtePs"
,    RteMa = "rteMa"
,    RteUnrated = "rteUnrated"
}

export enum ContentRatingRussiaRatingEnum {
    RussiaUnspecified = "russiaUnspecified"
,    Russia0 = "russia0"
,    Russia6 = "russia6"
,    Russia12 = "russia12"
,    Russia16 = "russia16"
,    Russia18 = "russia18"
,    RussiaUnrated = "russiaUnrated"
}

export enum ContentRatingSkfilmRatingEnum {
    SkfilmUnspecified = "skfilmUnspecified"
,    SkfilmG = "skfilmG"
,    SkfilmP2 = "skfilmP2"
,    SkfilmP5 = "skfilmP5"
,    SkfilmP8 = "skfilmP8"
,    SkfilmUnrated = "skfilmUnrated"
}

export enum ContentRatingSmaisRatingEnum {
    SmaisUnspecified = "smaisUnspecified"
,    SmaisL = "smaisL"
,    Smais7 = "smais7"
,    Smais12 = "smais12"
,    Smais14 = "smais14"
,    Smais16 = "smais16"
,    Smais18 = "smais18"
,    SmaisUnrated = "smaisUnrated"
}

export enum ContentRatingSmsaRatingEnum {
    SmsaUnspecified = "smsaUnspecified"
,    SmsaA = "smsaA"
,    Smsa7 = "smsa7"
,    Smsa11 = "smsa11"
,    Smsa15 = "smsa15"
,    SmsaUnrated = "smsaUnrated"
}

export enum ContentRatingTvpgRatingEnum {
    TvpgUnspecified = "tvpgUnspecified"
,    TvpgY = "tvpgY"
,    TvpgY7 = "tvpgY7"
,    TvpgY7Fv = "tvpgY7Fv"
,    TvpgG = "tvpgG"
,    TvpgPg = "tvpgPg"
,    Pg14 = "pg14"
,    TvpgMa = "tvpgMa"
,    TvpgUnrated = "tvpgUnrated"
}

export enum ContentRatingYtRatingEnum {
    YtUnspecified = "ytUnspecified"
,    YtAgeRestricted = "ytAgeRestricted"
}


// ContentRating
/** 
 * Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange
**/
export class ContentRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=acbRating" })
  acbRating?: ContentRatingAcbRatingEnum;

  @Metadata({ data: "json, name=agcomRating" })
  agcomRating?: ContentRatingAgcomRatingEnum;

  @Metadata({ data: "json, name=anatelRating" })
  anatelRating?: ContentRatingAnatelRatingEnum;

  @Metadata({ data: "json, name=bbfcRating" })
  bbfcRating?: ContentRatingBbfcRatingEnum;

  @Metadata({ data: "json, name=bfvcRating" })
  bfvcRating?: ContentRatingBfvcRatingEnum;

  @Metadata({ data: "json, name=bmukkRating" })
  bmukkRating?: ContentRatingBmukkRatingEnum;

  @Metadata({ data: "json, name=catvRating" })
  catvRating?: ContentRatingCatvRatingEnum;

  @Metadata({ data: "json, name=catvfrRating" })
  catvfrRating?: ContentRatingCatvfrRatingEnum;

  @Metadata({ data: "json, name=cbfcRating" })
  cbfcRating?: ContentRatingCbfcRatingEnum;

  @Metadata({ data: "json, name=cccRating" })
  cccRating?: ContentRatingCccRatingEnum;

  @Metadata({ data: "json, name=cceRating" })
  cceRating?: ContentRatingCceRatingEnum;

  @Metadata({ data: "json, name=chfilmRating" })
  chfilmRating?: ContentRatingChfilmRatingEnum;

  @Metadata({ data: "json, name=chvrsRating" })
  chvrsRating?: ContentRatingChvrsRatingEnum;

  @Metadata({ data: "json, name=cicfRating" })
  cicfRating?: ContentRatingCicfRatingEnum;

  @Metadata({ data: "json, name=cnaRating" })
  cnaRating?: ContentRatingCnaRatingEnum;

  @Metadata({ data: "json, name=cncRating" })
  cncRating?: ContentRatingCncRatingEnum;

  @Metadata({ data: "json, name=csaRating" })
  csaRating?: ContentRatingCsaRatingEnum;

  @Metadata({ data: "json, name=cscfRating" })
  cscfRating?: ContentRatingCscfRatingEnum;

  @Metadata({ data: "json, name=czfilmRating" })
  czfilmRating?: ContentRatingCzfilmRatingEnum;

  @Metadata({ data: "json, name=djctqRating" })
  djctqRating?: ContentRatingDjctqRatingEnum;

  @Metadata({ data: "json, name=djctqRatingReasons" })
  djctqRatingReasons?: ContentRatingDjctqRatingReasonsEnum[];

  @Metadata({ data: "json, name=ecbmctRating" })
  ecbmctRating?: ContentRatingEcbmctRatingEnum;

  @Metadata({ data: "json, name=eefilmRating" })
  eefilmRating?: ContentRatingEefilmRatingEnum;

  @Metadata({ data: "json, name=egfilmRating" })
  egfilmRating?: ContentRatingEgfilmRatingEnum;

  @Metadata({ data: "json, name=eirinRating" })
  eirinRating?: ContentRatingEirinRatingEnum;

  @Metadata({ data: "json, name=fcbmRating" })
  fcbmRating?: ContentRatingFcbmRatingEnum;

  @Metadata({ data: "json, name=fcoRating" })
  fcoRating?: ContentRatingFcoRatingEnum;

  @Metadata({ data: "json, name=fmocRating" })
  fmocRating?: ContentRatingFmocRatingEnum;

  @Metadata({ data: "json, name=fpbRating" })
  fpbRating?: ContentRatingFpbRatingEnum;

  @Metadata({ data: "json, name=fpbRatingReasons" })
  fpbRatingReasons?: ContentRatingFpbRatingReasonsEnum[];

  @Metadata({ data: "json, name=fskRating" })
  fskRating?: ContentRatingFskRatingEnum;

  @Metadata({ data: "json, name=grfilmRating" })
  grfilmRating?: ContentRatingGrfilmRatingEnum;

  @Metadata({ data: "json, name=icaaRating" })
  icaaRating?: ContentRatingIcaaRatingEnum;

  @Metadata({ data: "json, name=ifcoRating" })
  ifcoRating?: ContentRatingIfcoRatingEnum;

  @Metadata({ data: "json, name=ilfilmRating" })
  ilfilmRating?: ContentRatingIlfilmRatingEnum;

  @Metadata({ data: "json, name=incaaRating" })
  incaaRating?: ContentRatingIncaaRatingEnum;

  @Metadata({ data: "json, name=kfcbRating" })
  kfcbRating?: ContentRatingKfcbRatingEnum;

  @Metadata({ data: "json, name=kijkwijzerRating" })
  kijkwijzerRating?: ContentRatingKijkwijzerRatingEnum;

  @Metadata({ data: "json, name=kmrbRating" })
  kmrbRating?: ContentRatingKmrbRatingEnum;

  @Metadata({ data: "json, name=lsfRating" })
  lsfRating?: ContentRatingLsfRatingEnum;

  @Metadata({ data: "json, name=mccaaRating" })
  mccaaRating?: ContentRatingMccaaRatingEnum;

  @Metadata({ data: "json, name=mccypRating" })
  mccypRating?: ContentRatingMccypRatingEnum;

  @Metadata({ data: "json, name=mcstRating" })
  mcstRating?: ContentRatingMcstRatingEnum;

  @Metadata({ data: "json, name=mdaRating" })
  mdaRating?: ContentRatingMdaRatingEnum;

  @Metadata({ data: "json, name=medietilsynetRating" })
  medietilsynetRating?: ContentRatingMedietilsynetRatingEnum;

  @Metadata({ data: "json, name=mekuRating" })
  mekuRating?: ContentRatingMekuRatingEnum;

  @Metadata({ data: "json, name=menaMpaaRating" })
  menaMpaaRating?: ContentRatingMenaMpaaRatingEnum;

  @Metadata({ data: "json, name=mibacRating" })
  mibacRating?: ContentRatingMibacRatingEnum;

  @Metadata({ data: "json, name=mocRating" })
  mocRating?: ContentRatingMocRatingEnum;

  @Metadata({ data: "json, name=moctwRating" })
  moctwRating?: ContentRatingMoctwRatingEnum;

  @Metadata({ data: "json, name=mpaaRating" })
  mpaaRating?: ContentRatingMpaaRatingEnum;

  @Metadata({ data: "json, name=mpaatRating" })
  mpaatRating?: ContentRatingMpaatRatingEnum;

  @Metadata({ data: "json, name=mtrcbRating" })
  mtrcbRating?: ContentRatingMtrcbRatingEnum;

  @Metadata({ data: "json, name=nbcRating" })
  nbcRating?: ContentRatingNbcRatingEnum;

  @Metadata({ data: "json, name=nbcplRating" })
  nbcplRating?: ContentRatingNbcplRatingEnum;

  @Metadata({ data: "json, name=nfrcRating" })
  nfrcRating?: ContentRatingNfrcRatingEnum;

  @Metadata({ data: "json, name=nfvcbRating" })
  nfvcbRating?: ContentRatingNfvcbRatingEnum;

  @Metadata({ data: "json, name=nkclvRating" })
  nkclvRating?: ContentRatingNkclvRatingEnum;

  @Metadata({ data: "json, name=nmcRating" })
  nmcRating?: ContentRatingNmcRatingEnum;

  @Metadata({ data: "json, name=oflcRating" })
  oflcRating?: ContentRatingOflcRatingEnum;

  @Metadata({ data: "json, name=pefilmRating" })
  pefilmRating?: ContentRatingPefilmRatingEnum;

  @Metadata({ data: "json, name=rcnofRating" })
  rcnofRating?: ContentRatingRcnofRatingEnum;

  @Metadata({ data: "json, name=resorteviolenciaRating" })
  resorteviolenciaRating?: ContentRatingResorteviolenciaRatingEnum;

  @Metadata({ data: "json, name=rtcRating" })
  rtcRating?: ContentRatingRtcRatingEnum;

  @Metadata({ data: "json, name=rteRating" })
  rteRating?: ContentRatingRteRatingEnum;

  @Metadata({ data: "json, name=russiaRating" })
  russiaRating?: ContentRatingRussiaRatingEnum;

  @Metadata({ data: "json, name=skfilmRating" })
  skfilmRating?: ContentRatingSkfilmRatingEnum;

  @Metadata({ data: "json, name=smaisRating" })
  smaisRating?: ContentRatingSmaisRatingEnum;

  @Metadata({ data: "json, name=smsaRating" })
  smsaRating?: ContentRatingSmsaRatingEnum;

  @Metadata({ data: "json, name=tvpgRating" })
  tvpgRating?: ContentRatingTvpgRatingEnum;

  @Metadata({ data: "json, name=ytRating" })
  ytRating?: ContentRatingYtRatingEnum;
}
