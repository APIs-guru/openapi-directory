from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ContentRatingAcbRatingEnum(str, Enum):
    ACB_UNSPECIFIED = "acbUnspecified"
    ACB_E = "acbE"
    ACB_P = "acbP"
    ACB_C = "acbC"
    ACB_G = "acbG"
    ACB_PG = "acbPg"
    ACB_M = "acbM"
    ACB_MA15PLUS = "acbMa15plus"
    ACB_R18PLUS = "acbR18plus"
    ACB_UNRATED = "acbUnrated"

class ContentRatingAgcomRatingEnum(str, Enum):
    AGCOM_UNSPECIFIED = "agcomUnspecified"
    AGCOM_T = "agcomT"
    AGCOM_VM14 = "agcomVm14"
    AGCOM_VM18 = "agcomVm18"
    AGCOM_UNRATED = "agcomUnrated"

class ContentRatingAnatelRatingEnum(str, Enum):
    ANATEL_UNSPECIFIED = "anatelUnspecified"
    ANATEL_F = "anatelF"
    ANATEL_I = "anatelI"
    ANATEL_I7 = "anatelI7"
    ANATEL_I10 = "anatelI10"
    ANATEL_I12 = "anatelI12"
    ANATEL_R = "anatelR"
    ANATEL_A = "anatelA"
    ANATEL_UNRATED = "anatelUnrated"

class ContentRatingBbfcRatingEnum(str, Enum):
    BBFC_UNSPECIFIED = "bbfcUnspecified"
    BBFC_U = "bbfcU"
    BBFC_PG = "bbfcPg"
    BBFC12A = "bbfc12a"
    BBFC12 = "bbfc12"
    BBFC15 = "bbfc15"
    BBFC18 = "bbfc18"
    BBFC_R18 = "bbfcR18"
    BBFC_UNRATED = "bbfcUnrated"

class ContentRatingBfvcRatingEnum(str, Enum):
    BFVC_UNSPECIFIED = "bfvcUnspecified"
    BFVC_G = "bfvcG"
    BFVC_E = "bfvcE"
    BFVC13 = "bfvc13"
    BFVC15 = "bfvc15"
    BFVC18 = "bfvc18"
    BFVC20 = "bfvc20"
    BFVC_B = "bfvcB"
    BFVC_UNRATED = "bfvcUnrated"

class ContentRatingBmukkRatingEnum(str, Enum):
    BMUKK_UNSPECIFIED = "bmukkUnspecified"
    BMUKK_AA = "bmukkAa"
    BMUKK6 = "bmukk6"
    BMUKK8 = "bmukk8"
    BMUKK10 = "bmukk10"
    BMUKK12 = "bmukk12"
    BMUKK14 = "bmukk14"
    BMUKK16 = "bmukk16"
    BMUKK_UNRATED = "bmukkUnrated"

class ContentRatingCatvRatingEnum(str, Enum):
    CATV_UNSPECIFIED = "catvUnspecified"
    CATV_C = "catvC"
    CATV_C8 = "catvC8"
    CATV_G = "catvG"
    CATV_PG = "catvPg"
    CATV14PLUS = "catv14plus"
    CATV18PLUS = "catv18plus"
    CATV_UNRATED = "catvUnrated"
    CATV_E = "catvE"

class ContentRatingCatvfrRatingEnum(str, Enum):
    CATVFR_UNSPECIFIED = "catvfrUnspecified"
    CATVFR_G = "catvfrG"
    CATVFR8PLUS = "catvfr8plus"
    CATVFR13PLUS = "catvfr13plus"
    CATVFR16PLUS = "catvfr16plus"
    CATVFR18PLUS = "catvfr18plus"
    CATVFR_UNRATED = "catvfrUnrated"
    CATVFR_E = "catvfrE"

class ContentRatingCbfcRatingEnum(str, Enum):
    CBFC_UNSPECIFIED = "cbfcUnspecified"
    CBFC_U = "cbfcU"
    CBFC_UA = "cbfcUA"
    CBFC_UA7PLUS = "cbfcUA7plus"
    CBFC_UA13PLUS = "cbfcUA13plus"
    CBFC_UA16PLUS = "cbfcUA16plus"
    CBFC_A = "cbfcA"
    CBFC_S = "cbfcS"
    CBFC_UNRATED = "cbfcUnrated"

class ContentRatingCccRatingEnum(str, Enum):
    CCC_UNSPECIFIED = "cccUnspecified"
    CCC_TE = "cccTe"
    CCC6 = "ccc6"
    CCC14 = "ccc14"
    CCC18 = "ccc18"
    CCC18V = "ccc18v"
    CCC18S = "ccc18s"
    CCC_UNRATED = "cccUnrated"

class ContentRatingCceRatingEnum(str, Enum):
    CCE_UNSPECIFIED = "cceUnspecified"
    CCE_M4 = "cceM4"
    CCE_M6 = "cceM6"
    CCE_M12 = "cceM12"
    CCE_M16 = "cceM16"
    CCE_M18 = "cceM18"
    CCE_UNRATED = "cceUnrated"
    CCE_M14 = "cceM14"

class ContentRatingChfilmRatingEnum(str, Enum):
    CHFILM_UNSPECIFIED = "chfilmUnspecified"
    CHFILM0 = "chfilm0"
    CHFILM6 = "chfilm6"
    CHFILM12 = "chfilm12"
    CHFILM16 = "chfilm16"
    CHFILM18 = "chfilm18"
    CHFILM_UNRATED = "chfilmUnrated"

class ContentRatingChvrsRatingEnum(str, Enum):
    CHVRS_UNSPECIFIED = "chvrsUnspecified"
    CHVRS_G = "chvrsG"
    CHVRS_PG = "chvrsPg"
    CHVRS14A = "chvrs14a"
    CHVRS18A = "chvrs18a"
    CHVRS_R = "chvrsR"
    CHVRS_E = "chvrsE"
    CHVRS_UNRATED = "chvrsUnrated"

class ContentRatingCicfRatingEnum(str, Enum):
    CICF_UNSPECIFIED = "cicfUnspecified"
    CICF_E = "cicfE"
    CICF_KT_EA = "cicfKtEa"
    CICF_KNT_ENA = "cicfKntEna"
    CICF_UNRATED = "cicfUnrated"

class ContentRatingCnaRatingEnum(str, Enum):
    CNA_UNSPECIFIED = "cnaUnspecified"
    CNA_AP = "cnaAp"
    CNA12 = "cna12"
    CNA15 = "cna15"
    CNA18 = "cna18"
    CNA18PLUS = "cna18plus"
    CNA_UNRATED = "cnaUnrated"

class ContentRatingCncRatingEnum(str, Enum):
    CNC_UNSPECIFIED = "cncUnspecified"
    CNC_T = "cncT"
    CNC10 = "cnc10"
    CNC12 = "cnc12"
    CNC16 = "cnc16"
    CNC18 = "cnc18"
    CNC_E = "cncE"
    CNC_INTERDICTION = "cncInterdiction"
    CNC_UNRATED = "cncUnrated"

class ContentRatingCsaRatingEnum(str, Enum):
    CSA_UNSPECIFIED = "csaUnspecified"
    CSA_T = "csaT"
    CSA10 = "csa10"
    CSA12 = "csa12"
    CSA16 = "csa16"
    CSA18 = "csa18"
    CSA_INTERDICTION = "csaInterdiction"
    CSA_UNRATED = "csaUnrated"

class ContentRatingCscfRatingEnum(str, Enum):
    CSCF_UNSPECIFIED = "cscfUnspecified"
    CSCF_AL = "cscfAl"
    CSCF_A = "cscfA"
    CSCF6 = "cscf6"
    CSCF9 = "cscf9"
    CSCF12 = "cscf12"
    CSCF16 = "cscf16"
    CSCF18 = "cscf18"
    CSCF_UNRATED = "cscfUnrated"

class ContentRatingCzfilmRatingEnum(str, Enum):
    CZFILM_UNSPECIFIED = "czfilmUnspecified"
    CZFILM_U = "czfilmU"
    CZFILM12 = "czfilm12"
    CZFILM14 = "czfilm14"
    CZFILM18 = "czfilm18"
    CZFILM_UNRATED = "czfilmUnrated"

class ContentRatingDjctqRatingEnum(str, Enum):
    DJCTQ_UNSPECIFIED = "djctqUnspecified"
    DJCTQ_L = "djctqL"
    DJCTQ10 = "djctq10"
    DJCTQ12 = "djctq12"
    DJCTQ14 = "djctq14"
    DJCTQ16 = "djctq16"
    DJCTQ18 = "djctq18"
    DJCTQ_ER = "djctqEr"
    DJCTQ_L10 = "djctqL10"
    DJCTQ_L12 = "djctqL12"
    DJCTQ_L14 = "djctqL14"
    DJCTQ_L16 = "djctqL16"
    DJCTQ_L18 = "djctqL18"
    DJCTQ1012 = "djctq1012"
    DJCTQ1014 = "djctq1014"
    DJCTQ1016 = "djctq1016"
    DJCTQ1018 = "djctq1018"
    DJCTQ1214 = "djctq1214"
    DJCTQ1216 = "djctq1216"
    DJCTQ1218 = "djctq1218"
    DJCTQ1416 = "djctq1416"
    DJCTQ1418 = "djctq1418"
    DJCTQ1618 = "djctq1618"
    DJCTQ_UNRATED = "djctqUnrated"

class ContentRatingDjctqRatingReasonsEnum(str, Enum):
    DJCTQ_RATING_REASON_UNSPECIFIED = "djctqRatingReasonUnspecified"
    DJCTQ_VIOLENCE = "djctqViolence"
    DJCTQ_EXTREME_VIOLENCE = "djctqExtremeViolence"
    DJCTQ_SEXUAL_CONTENT = "djctqSexualContent"
    DJCTQ_NUDITY = "djctqNudity"
    DJCTQ_SEX = "djctqSex"
    DJCTQ_EXPLICIT_SEX = "djctqExplicitSex"
    DJCTQ_DRUGS = "djctqDrugs"
    DJCTQ_LEGAL_DRUGS = "djctqLegalDrugs"
    DJCTQ_ILLEGAL_DRUGS = "djctqIllegalDrugs"
    DJCTQ_INAPPROPRIATE_LANGUAGE = "djctqInappropriateLanguage"
    DJCTQ_CRIMINAL_ACTS = "djctqCriminalActs"
    DJCTQ_IMPACTING_CONTENT = "djctqImpactingContent"

class ContentRatingEcbmctRatingEnum(str, Enum):
    ECBMCT_UNSPECIFIED = "ecbmctUnspecified"
    ECBMCT_G = "ecbmctG"
    ECBMCT7A = "ecbmct7a"
    ECBMCT7PLUS = "ecbmct7plus"
    ECBMCT13A = "ecbmct13a"
    ECBMCT13PLUS = "ecbmct13plus"
    ECBMCT15A = "ecbmct15a"
    ECBMCT15PLUS = "ecbmct15plus"
    ECBMCT18PLUS = "ecbmct18plus"
    ECBMCT_UNRATED = "ecbmctUnrated"

class ContentRatingEefilmRatingEnum(str, Enum):
    EEFILM_UNSPECIFIED = "eefilmUnspecified"
    EEFILM_PERE = "eefilmPere"
    EEFILM_L = "eefilmL"
    EEFILM_MS6 = "eefilmMs6"
    EEFILM_K6 = "eefilmK6"
    EEFILM_MS12 = "eefilmMs12"
    EEFILM_K12 = "eefilmK12"
    EEFILM_K14 = "eefilmK14"
    EEFILM_K16 = "eefilmK16"
    EEFILM_UNRATED = "eefilmUnrated"

class ContentRatingEgfilmRatingEnum(str, Enum):
    EGFILM_UNSPECIFIED = "egfilmUnspecified"
    EGFILM_GN = "egfilmGn"
    EGFILM18 = "egfilm18"
    EGFILM_BN = "egfilmBn"
    EGFILM_UNRATED = "egfilmUnrated"

class ContentRatingEirinRatingEnum(str, Enum):
    EIRIN_UNSPECIFIED = "eirinUnspecified"
    EIRIN_G = "eirinG"
    EIRIN_PG12 = "eirinPg12"
    EIRIN_R15PLUS = "eirinR15plus"
    EIRIN_R18PLUS = "eirinR18plus"
    EIRIN_UNRATED = "eirinUnrated"

class ContentRatingFcbmRatingEnum(str, Enum):
    FCBM_UNSPECIFIED = "fcbmUnspecified"
    FCBM_U = "fcbmU"
    FCBM_PG13 = "fcbmPg13"
    FCBM_P13 = "fcbmP13"
    FCBM18 = "fcbm18"
    FCBM18SX = "fcbm18sx"
    FCBM18PA = "fcbm18pa"
    FCBM18SG = "fcbm18sg"
    FCBM18PL = "fcbm18pl"
    FCBM_UNRATED = "fcbmUnrated"

class ContentRatingFcoRatingEnum(str, Enum):
    FCO_UNSPECIFIED = "fcoUnspecified"
    FCO_I = "fcoI"
    FCO_IIA = "fcoIia"
    FCO_IIB = "fcoIib"
    FCO_II = "fcoIi"
    FCO_III = "fcoIii"
    FCO_UNRATED = "fcoUnrated"

class ContentRatingFmocRatingEnum(str, Enum):
    FMOC_UNSPECIFIED = "fmocUnspecified"
    FMOC_U = "fmocU"
    FMOC10 = "fmoc10"
    FMOC12 = "fmoc12"
    FMOC16 = "fmoc16"
    FMOC18 = "fmoc18"
    FMOC_E = "fmocE"
    FMOC_UNRATED = "fmocUnrated"

class ContentRatingFpbRatingEnum(str, Enum):
    FPB_UNSPECIFIED = "fpbUnspecified"
    FPB_A = "fpbA"
    FPB_PG = "fpbPg"
    FPB79_PG = "fpb79Pg"
    FPB1012_PG = "fpb1012Pg"
    FPB13 = "fpb13"
    FPB16 = "fpb16"
    FPB18 = "fpb18"
    FPB_X18 = "fpbX18"
    FPB_XX = "fpbXx"
    FPB_UNRATED = "fpbUnrated"
    FPB10 = "fpb10"

class ContentRatingFpbRatingReasonsEnum(str, Enum):
    FPB_RATING_REASON_UNSPECIFIED = "fpbRatingReasonUnspecified"
    FPB_BLASPHEMY = "fpbBlasphemy"
    FPB_LANGUAGE = "fpbLanguage"
    FPB_NUDITY = "fpbNudity"
    FPB_PREJUDICE = "fpbPrejudice"
    FPB_SEX = "fpbSex"
    FPB_VIOLENCE = "fpbViolence"
    FPB_DRUGS = "fpbDrugs"
    FPB_SEXUAL_VIOLENCE = "fpbSexualViolence"
    FPB_HORROR = "fpbHorror"
    FPB_CRIMINAL_TECHNIQUES = "fpbCriminalTechniques"
    FPB_IMITATIVE_ACTS_TECHNIQUES = "fpbImitativeActsTechniques"

class ContentRatingFskRatingEnum(str, Enum):
    FSK_UNSPECIFIED = "fskUnspecified"
    FSK0 = "fsk0"
    FSK6 = "fsk6"
    FSK12 = "fsk12"
    FSK16 = "fsk16"
    FSK18 = "fsk18"
    FSK_UNRATED = "fskUnrated"

class ContentRatingGrfilmRatingEnum(str, Enum):
    GRFILM_UNSPECIFIED = "grfilmUnspecified"
    GRFILM_K = "grfilmK"
    GRFILM_E = "grfilmE"
    GRFILM_K12 = "grfilmK12"
    GRFILM_K13 = "grfilmK13"
    GRFILM_K15 = "grfilmK15"
    GRFILM_K17 = "grfilmK17"
    GRFILM_K18 = "grfilmK18"
    GRFILM_UNRATED = "grfilmUnrated"

class ContentRatingIcaaRatingEnum(str, Enum):
    ICAA_UNSPECIFIED = "icaaUnspecified"
    ICAA_APTA = "icaaApta"
    ICAA7 = "icaa7"
    ICAA12 = "icaa12"
    ICAA13 = "icaa13"
    ICAA16 = "icaa16"
    ICAA18 = "icaa18"
    ICAA_X = "icaaX"
    ICAA_UNRATED = "icaaUnrated"

class ContentRatingIfcoRatingEnum(str, Enum):
    IFCO_UNSPECIFIED = "ifcoUnspecified"
    IFCO_G = "ifcoG"
    IFCO_PG = "ifcoPg"
    IFCO12 = "ifco12"
    IFCO12A = "ifco12a"
    IFCO15 = "ifco15"
    IFCO15A = "ifco15a"
    IFCO16 = "ifco16"
    IFCO18 = "ifco18"
    IFCO_UNRATED = "ifcoUnrated"

class ContentRatingIlfilmRatingEnum(str, Enum):
    ILFILM_UNSPECIFIED = "ilfilmUnspecified"
    ILFILM_AA = "ilfilmAa"
    ILFILM12 = "ilfilm12"
    ILFILM14 = "ilfilm14"
    ILFILM16 = "ilfilm16"
    ILFILM18 = "ilfilm18"
    ILFILM_UNRATED = "ilfilmUnrated"

class ContentRatingIncaaRatingEnum(str, Enum):
    INCAA_UNSPECIFIED = "incaaUnspecified"
    INCAA_ATP = "incaaAtp"
    INCAA_SAM13 = "incaaSam13"
    INCAA_SAM16 = "incaaSam16"
    INCAA_SAM18 = "incaaSam18"
    INCAA_C = "incaaC"
    INCAA_UNRATED = "incaaUnrated"

class ContentRatingKfcbRatingEnum(str, Enum):
    KFCB_UNSPECIFIED = "kfcbUnspecified"
    KFCB_G = "kfcbG"
    KFCB_PG = "kfcbPg"
    KFCB16PLUS = "kfcb16plus"
    KFCB_R = "kfcbR"
    KFCB_UNRATED = "kfcbUnrated"

class ContentRatingKijkwijzerRatingEnum(str, Enum):
    KIJKWIJZER_UNSPECIFIED = "kijkwijzerUnspecified"
    KIJKWIJZER_AL = "kijkwijzerAl"
    KIJKWIJZER6 = "kijkwijzer6"
    KIJKWIJZER9 = "kijkwijzer9"
    KIJKWIJZER12 = "kijkwijzer12"
    KIJKWIJZER16 = "kijkwijzer16"
    KIJKWIJZER18 = "kijkwijzer18"
    KIJKWIJZER_UNRATED = "kijkwijzerUnrated"

class ContentRatingKmrbRatingEnum(str, Enum):
    KMRB_UNSPECIFIED = "kmrbUnspecified"
    KMRB_ALL = "kmrbAll"
    KMRB12PLUS = "kmrb12plus"
    KMRB15PLUS = "kmrb15plus"
    KMRB_TEENR = "kmrbTeenr"
    KMRB_R = "kmrbR"
    KMRB_UNRATED = "kmrbUnrated"

class ContentRatingLsfRatingEnum(str, Enum):
    LSF_UNSPECIFIED = "lsfUnspecified"
    LSF_SU = "lsfSu"
    LSF_A = "lsfA"
    LSF_BO = "lsfBo"
    LSF13 = "lsf13"
    LSF_R = "lsfR"
    LSF17 = "lsf17"
    LSF_D = "lsfD"
    LSF21 = "lsf21"
    LSF_UNRATED = "lsfUnrated"

class ContentRatingMccaaRatingEnum(str, Enum):
    MCCAA_UNSPECIFIED = "mccaaUnspecified"
    MCCAA_U = "mccaaU"
    MCCAA_PG = "mccaaPg"
    MCCAA12A = "mccaa12a"
    MCCAA12 = "mccaa12"
    MCCAA14 = "mccaa14"
    MCCAA15 = "mccaa15"
    MCCAA16 = "mccaa16"
    MCCAA18 = "mccaa18"
    MCCAA_UNRATED = "mccaaUnrated"

class ContentRatingMccypRatingEnum(str, Enum):
    MCCYP_UNSPECIFIED = "mccypUnspecified"
    MCCYP_A = "mccypA"
    MCCYP7 = "mccyp7"
    MCCYP11 = "mccyp11"
    MCCYP15 = "mccyp15"
    MCCYP_UNRATED = "mccypUnrated"

class ContentRatingMcstRatingEnum(str, Enum):
    MCST_UNSPECIFIED = "mcstUnspecified"
    MCST_P = "mcstP"
    MCST0 = "mcst0"
    MCST_C13 = "mcstC13"
    MCST_C16 = "mcstC16"
    MCST16PLUS = "mcst16plus"
    MCST_C18 = "mcstC18"
    MCST_G_PG = "mcstGPg"
    MCST_UNRATED = "mcstUnrated"

class ContentRatingMdaRatingEnum(str, Enum):
    MDA_UNSPECIFIED = "mdaUnspecified"
    MDA_G = "mdaG"
    MDA_PG = "mdaPg"
    MDA_PG13 = "mdaPg13"
    MDA_NC16 = "mdaNc16"
    MDA_M18 = "mdaM18"
    MDA_R21 = "mdaR21"
    MDA_UNRATED = "mdaUnrated"

class ContentRatingMedietilsynetRatingEnum(str, Enum):
    MEDIETILSYNET_UNSPECIFIED = "medietilsynetUnspecified"
    MEDIETILSYNET_A = "medietilsynetA"
    MEDIETILSYNET6 = "medietilsynet6"
    MEDIETILSYNET7 = "medietilsynet7"
    MEDIETILSYNET9 = "medietilsynet9"
    MEDIETILSYNET11 = "medietilsynet11"
    MEDIETILSYNET12 = "medietilsynet12"
    MEDIETILSYNET15 = "medietilsynet15"
    MEDIETILSYNET18 = "medietilsynet18"
    MEDIETILSYNET_UNRATED = "medietilsynetUnrated"

class ContentRatingMekuRatingEnum(str, Enum):
    MEKU_UNSPECIFIED = "mekuUnspecified"
    MEKU_S = "mekuS"
    MEKU7 = "meku7"
    MEKU12 = "meku12"
    MEKU16 = "meku16"
    MEKU18 = "meku18"
    MEKU_UNRATED = "mekuUnrated"

class ContentRatingMenaMpaaRatingEnum(str, Enum):
    MENA_MPAA_UNSPECIFIED = "menaMpaaUnspecified"
    MENA_MPAA_G = "menaMpaaG"
    MENA_MPAA_PG = "menaMpaaPg"
    MENA_MPAA_PG13 = "menaMpaaPg13"
    MENA_MPAA_R = "menaMpaaR"
    MENA_MPAA_UNRATED = "menaMpaaUnrated"

class ContentRatingMibacRatingEnum(str, Enum):
    MIBAC_UNSPECIFIED = "mibacUnspecified"
    MIBAC_T = "mibacT"
    MIBAC_VAP = "mibacVap"
    MIBAC_VM6 = "mibacVm6"
    MIBAC_VM12 = "mibacVm12"
    MIBAC_VM14 = "mibacVm14"
    MIBAC_VM16 = "mibacVm16"
    MIBAC_VM18 = "mibacVm18"
    MIBAC_UNRATED = "mibacUnrated"

class ContentRatingMocRatingEnum(str, Enum):
    MOC_UNSPECIFIED = "mocUnspecified"
    MOC_E = "mocE"
    MOC_T = "mocT"
    MOC7 = "moc7"
    MOC12 = "moc12"
    MOC15 = "moc15"
    MOC18 = "moc18"
    MOC_X = "mocX"
    MOC_BANNED = "mocBanned"
    MOC_UNRATED = "mocUnrated"

class ContentRatingMoctwRatingEnum(str, Enum):
    MOCTW_UNSPECIFIED = "moctwUnspecified"
    MOCTW_G = "moctwG"
    MOCTW_P = "moctwP"
    MOCTW_PG = "moctwPg"
    MOCTW_R = "moctwR"
    MOCTW_UNRATED = "moctwUnrated"
    MOCTW_R12 = "moctwR12"
    MOCTW_R15 = "moctwR15"

class ContentRatingMpaaRatingEnum(str, Enum):
    MPAA_UNSPECIFIED = "mpaaUnspecified"
    MPAA_G = "mpaaG"
    MPAA_PG = "mpaaPg"
    MPAA_PG13 = "mpaaPg13"
    MPAA_R = "mpaaR"
    MPAA_NC17 = "mpaaNc17"
    MPAA_X = "mpaaX"
    MPAA_UNRATED = "mpaaUnrated"

class ContentRatingMpaatRatingEnum(str, Enum):
    MPAAT_UNSPECIFIED = "mpaatUnspecified"
    MPAAT_GB = "mpaatGb"
    MPAAT_RB = "mpaatRb"

class ContentRatingMtrcbRatingEnum(str, Enum):
    MTRCB_UNSPECIFIED = "mtrcbUnspecified"
    MTRCB_G = "mtrcbG"
    MTRCB_PG = "mtrcbPg"
    MTRCB_R13 = "mtrcbR13"
    MTRCB_R16 = "mtrcbR16"
    MTRCB_R18 = "mtrcbR18"
    MTRCB_X = "mtrcbX"
    MTRCB_UNRATED = "mtrcbUnrated"

class ContentRatingNbcRatingEnum(str, Enum):
    NBC_UNSPECIFIED = "nbcUnspecified"
    NBC_G = "nbcG"
    NBC_PG = "nbcPg"
    NBC12PLUS = "nbc12plus"
    NBC15PLUS = "nbc15plus"
    NBC18PLUS = "nbc18plus"
    NBC18PLUSR = "nbc18plusr"
    NBC_PU = "nbcPu"
    NBC_UNRATED = "nbcUnrated"

class ContentRatingNbcplRatingEnum(str, Enum):
    NBCPL_UNSPECIFIED = "nbcplUnspecified"
    NBCPL_I = "nbcplI"
    NBCPL_II = "nbcplIi"
    NBCPL_III = "nbcplIii"
    NBCPL_IV = "nbcplIv"
    NBCPL18PLUS = "nbcpl18plus"
    NBCPL_UNRATED = "nbcplUnrated"

class ContentRatingNfrcRatingEnum(str, Enum):
    NFRC_UNSPECIFIED = "nfrcUnspecified"
    NFRC_A = "nfrcA"
    NFRC_B = "nfrcB"
    NFRC_C = "nfrcC"
    NFRC_D = "nfrcD"
    NFRC_X = "nfrcX"
    NFRC_UNRATED = "nfrcUnrated"

class ContentRatingNfvcbRatingEnum(str, Enum):
    NFVCB_UNSPECIFIED = "nfvcbUnspecified"
    NFVCB_G = "nfvcbG"
    NFVCB_PG = "nfvcbPg"
    NFVCB12 = "nfvcb12"
    NFVCB12A = "nfvcb12a"
    NFVCB15 = "nfvcb15"
    NFVCB18 = "nfvcb18"
    NFVCB_RE = "nfvcbRe"
    NFVCB_UNRATED = "nfvcbUnrated"

class ContentRatingNkclvRatingEnum(str, Enum):
    NKCLV_UNSPECIFIED = "nkclvUnspecified"
    NKCLV_U = "nkclvU"
    NKCLV7PLUS = "nkclv7plus"
    NKCLV12PLUS = "nkclv12plus"
    NKCLV16PLUS = "nkclv16plus"
    NKCLV18PLUS = "nkclv18plus"
    NKCLV_UNRATED = "nkclvUnrated"

class ContentRatingNmcRatingEnum(str, Enum):
    NMC_UNSPECIFIED = "nmcUnspecified"
    NMC_G = "nmcG"
    NMC_PG = "nmcPg"
    NMC_PG13 = "nmcPg13"
    NMC_PG15 = "nmcPg15"
    NMC15PLUS = "nmc15plus"
    NMC18PLUS = "nmc18plus"
    NMC18TC = "nmc18tc"
    NMC_UNRATED = "nmcUnrated"

class ContentRatingOflcRatingEnum(str, Enum):
    OFLC_UNSPECIFIED = "oflcUnspecified"
    OFLC_G = "oflcG"
    OFLC_PG = "oflcPg"
    OFLC_M = "oflcM"
    OFLC_R13 = "oflcR13"
    OFLC_R15 = "oflcR15"
    OFLC_R16 = "oflcR16"
    OFLC_R18 = "oflcR18"
    OFLC_UNRATED = "oflcUnrated"
    OFLC_RP13 = "oflcRp13"
    OFLC_RP16 = "oflcRp16"
    OFLC_RP18 = "oflcRp18"

class ContentRatingPefilmRatingEnum(str, Enum):
    PEFILM_UNSPECIFIED = "pefilmUnspecified"
    PEFILM_PT = "pefilmPt"
    PEFILM_PG = "pefilmPg"
    PEFILM14 = "pefilm14"
    PEFILM18 = "pefilm18"
    PEFILM_UNRATED = "pefilmUnrated"

class ContentRatingRcnofRatingEnum(str, Enum):
    RCNOF_UNSPECIFIED = "rcnofUnspecified"
    RCNOF_I = "rcnofI"
    RCNOF_II = "rcnofIi"
    RCNOF_III = "rcnofIii"
    RCNOF_IV = "rcnofIv"
    RCNOF_V = "rcnofV"
    RCNOF_VI = "rcnofVi"
    RCNOF_UNRATED = "rcnofUnrated"

class ContentRatingResorteviolenciaRatingEnum(str, Enum):
    RESORTEVIOLENCIA_UNSPECIFIED = "resorteviolenciaUnspecified"
    RESORTEVIOLENCIA_A = "resorteviolenciaA"
    RESORTEVIOLENCIA_B = "resorteviolenciaB"
    RESORTEVIOLENCIA_C = "resorteviolenciaC"
    RESORTEVIOLENCIA_D = "resorteviolenciaD"
    RESORTEVIOLENCIA_E = "resorteviolenciaE"
    RESORTEVIOLENCIA_UNRATED = "resorteviolenciaUnrated"

class ContentRatingRtcRatingEnum(str, Enum):
    RTC_UNSPECIFIED = "rtcUnspecified"
    RTC_AA = "rtcAa"
    RTC_A = "rtcA"
    RTC_B = "rtcB"
    RTC_B15 = "rtcB15"
    RTC_C = "rtcC"
    RTC_D = "rtcD"
    RTC_UNRATED = "rtcUnrated"

class ContentRatingRteRatingEnum(str, Enum):
    RTE_UNSPECIFIED = "rteUnspecified"
    RTE_GA = "rteGa"
    RTE_CH = "rteCh"
    RTE_PS = "rtePs"
    RTE_MA = "rteMa"
    RTE_UNRATED = "rteUnrated"

class ContentRatingRussiaRatingEnum(str, Enum):
    RUSSIA_UNSPECIFIED = "russiaUnspecified"
    RUSSIA0 = "russia0"
    RUSSIA6 = "russia6"
    RUSSIA12 = "russia12"
    RUSSIA16 = "russia16"
    RUSSIA18 = "russia18"
    RUSSIA_UNRATED = "russiaUnrated"

class ContentRatingSkfilmRatingEnum(str, Enum):
    SKFILM_UNSPECIFIED = "skfilmUnspecified"
    SKFILM_G = "skfilmG"
    SKFILM_P2 = "skfilmP2"
    SKFILM_P5 = "skfilmP5"
    SKFILM_P8 = "skfilmP8"
    SKFILM_UNRATED = "skfilmUnrated"

class ContentRatingSmaisRatingEnum(str, Enum):
    SMAIS_UNSPECIFIED = "smaisUnspecified"
    SMAIS_L = "smaisL"
    SMAIS7 = "smais7"
    SMAIS12 = "smais12"
    SMAIS14 = "smais14"
    SMAIS16 = "smais16"
    SMAIS18 = "smais18"
    SMAIS_UNRATED = "smaisUnrated"

class ContentRatingSmsaRatingEnum(str, Enum):
    SMSA_UNSPECIFIED = "smsaUnspecified"
    SMSA_A = "smsaA"
    SMSA7 = "smsa7"
    SMSA11 = "smsa11"
    SMSA15 = "smsa15"
    SMSA_UNRATED = "smsaUnrated"

class ContentRatingTvpgRatingEnum(str, Enum):
    TVPG_UNSPECIFIED = "tvpgUnspecified"
    TVPG_Y = "tvpgY"
    TVPG_Y7 = "tvpgY7"
    TVPG_Y7_FV = "tvpgY7Fv"
    TVPG_G = "tvpgG"
    TVPG_PG = "tvpgPg"
    PG14 = "pg14"
    TVPG_MA = "tvpgMa"
    TVPG_UNRATED = "tvpgUnrated"

class ContentRatingYtRatingEnum(str, Enum):
    YT_UNSPECIFIED = "ytUnspecified"
    YT_AGE_RESTRICTED = "ytAgeRestricted"


@dataclass_json
@dataclass
class ContentRating:
    acb_rating: Optional[ContentRatingAcbRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acbRating' }})
    agcom_rating: Optional[ContentRatingAgcomRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agcomRating' }})
    anatel_rating: Optional[ContentRatingAnatelRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anatelRating' }})
    bbfc_rating: Optional[ContentRatingBbfcRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bbfcRating' }})
    bfvc_rating: Optional[ContentRatingBfvcRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bfvcRating' }})
    bmukk_rating: Optional[ContentRatingBmukkRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bmukkRating' }})
    catv_rating: Optional[ContentRatingCatvRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catvRating' }})
    catvfr_rating: Optional[ContentRatingCatvfrRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catvfrRating' }})
    cbfc_rating: Optional[ContentRatingCbfcRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cbfcRating' }})
    ccc_rating: Optional[ContentRatingCccRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cccRating' }})
    cce_rating: Optional[ContentRatingCceRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cceRating' }})
    chfilm_rating: Optional[ContentRatingChfilmRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chfilmRating' }})
    chvrs_rating: Optional[ContentRatingChvrsRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chvrsRating' }})
    cicf_rating: Optional[ContentRatingCicfRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cicfRating' }})
    cna_rating: Optional[ContentRatingCnaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cnaRating' }})
    cnc_rating: Optional[ContentRatingCncRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cncRating' }})
    csa_rating: Optional[ContentRatingCsaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csaRating' }})
    cscf_rating: Optional[ContentRatingCscfRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cscfRating' }})
    czfilm_rating: Optional[ContentRatingCzfilmRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'czfilmRating' }})
    djctq_rating: Optional[ContentRatingDjctqRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'djctqRating' }})
    djctq_rating_reasons: Optional[List[ContentRatingDjctqRatingReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'djctqRatingReasons' }})
    ecbmct_rating: Optional[ContentRatingEcbmctRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ecbmctRating' }})
    eefilm_rating: Optional[ContentRatingEefilmRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eefilmRating' }})
    egfilm_rating: Optional[ContentRatingEgfilmRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egfilmRating' }})
    eirin_rating: Optional[ContentRatingEirinRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eirinRating' }})
    fcbm_rating: Optional[ContentRatingFcbmRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fcbmRating' }})
    fco_rating: Optional[ContentRatingFcoRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fcoRating' }})
    fmoc_rating: Optional[ContentRatingFmocRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fmocRating' }})
    fpb_rating: Optional[ContentRatingFpbRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fpbRating' }})
    fpb_rating_reasons: Optional[List[ContentRatingFpbRatingReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fpbRatingReasons' }})
    fsk_rating: Optional[ContentRatingFskRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fskRating' }})
    grfilm_rating: Optional[ContentRatingGrfilmRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grfilmRating' }})
    icaa_rating: Optional[ContentRatingIcaaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icaaRating' }})
    ifco_rating: Optional[ContentRatingIfcoRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ifcoRating' }})
    ilfilm_rating: Optional[ContentRatingIlfilmRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ilfilmRating' }})
    incaa_rating: Optional[ContentRatingIncaaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incaaRating' }})
    kfcb_rating: Optional[ContentRatingKfcbRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kfcbRating' }})
    kijkwijzer_rating: Optional[ContentRatingKijkwijzerRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kijkwijzerRating' }})
    kmrb_rating: Optional[ContentRatingKmrbRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmrbRating' }})
    lsf_rating: Optional[ContentRatingLsfRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lsfRating' }})
    mccaa_rating: Optional[ContentRatingMccaaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mccaaRating' }})
    mccyp_rating: Optional[ContentRatingMccypRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mccypRating' }})
    mcst_rating: Optional[ContentRatingMcstRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mcstRating' }})
    mda_rating: Optional[ContentRatingMdaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mdaRating' }})
    medietilsynet_rating: Optional[ContentRatingMedietilsynetRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medietilsynetRating' }})
    meku_rating: Optional[ContentRatingMekuRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mekuRating' }})
    mena_mpaa_rating: Optional[ContentRatingMenaMpaaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'menaMpaaRating' }})
    mibac_rating: Optional[ContentRatingMibacRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mibacRating' }})
    moc_rating: Optional[ContentRatingMocRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mocRating' }})
    moctw_rating: Optional[ContentRatingMoctwRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moctwRating' }})
    mpaa_rating: Optional[ContentRatingMpaaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpaaRating' }})
    mpaat_rating: Optional[ContentRatingMpaatRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpaatRating' }})
    mtrcb_rating: Optional[ContentRatingMtrcbRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtrcbRating' }})
    nbc_rating: Optional[ContentRatingNbcRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nbcRating' }})
    nbcpl_rating: Optional[ContentRatingNbcplRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nbcplRating' }})
    nfrc_rating: Optional[ContentRatingNfrcRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfrcRating' }})
    nfvcb_rating: Optional[ContentRatingNfvcbRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfvcbRating' }})
    nkclv_rating: Optional[ContentRatingNkclvRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nkclvRating' }})
    nmc_rating: Optional[ContentRatingNmcRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nmcRating' }})
    oflc_rating: Optional[ContentRatingOflcRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oflcRating' }})
    pefilm_rating: Optional[ContentRatingPefilmRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pefilmRating' }})
    rcnof_rating: Optional[ContentRatingRcnofRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rcnofRating' }})
    resorteviolencia_rating: Optional[ContentRatingResorteviolenciaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resorteviolenciaRating' }})
    rtc_rating: Optional[ContentRatingRtcRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rtcRating' }})
    rte_rating: Optional[ContentRatingRteRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rteRating' }})
    russia_rating: Optional[ContentRatingRussiaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'russiaRating' }})
    skfilm_rating: Optional[ContentRatingSkfilmRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skfilmRating' }})
    smais_rating: Optional[ContentRatingSmaisRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smaisRating' }})
    smsa_rating: Optional[ContentRatingSmsaRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsaRating' }})
    tvpg_rating: Optional[ContentRatingTvpgRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tvpgRating' }})
    yt_rating: Optional[ContentRatingYtRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ytRating' }})
    
