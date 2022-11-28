import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MappingJobIdTypeEnum {
    IdIsin = "ID_ISIN",
    IdBbUnique = "ID_BB_UNIQUE",
    IdSedol = "ID_SEDOL",
    IdCommon = "ID_COMMON",
    IdWertpapier = "ID_WERTPAPIER",
    IdCusip = "ID_CUSIP",
    IdBb = "ID_BB",
    IdItaly = "ID_ITALY",
    IdExchSymbol = "ID_EXCH_SYMBOL",
    IdFullExchangeSymbol = "ID_FULL_EXCHANGE_SYMBOL",
    CompositeIdBbGlobal = "COMPOSITE_ID_BB_GLOBAL",
    IdBbGlobalShareClassLevel = "ID_BB_GLOBAL_SHARE_CLASS_LEVEL",
    IdBbSecNumDes = "ID_BB_SEC_NUM_DES",
    IdBbGlobal = "ID_BB_GLOBAL",
    Ticker = "TICKER",
    IdCusip8Chr = "ID_CUSIP_8_CHR",
    OccSymbol = "OCC_SYMBOL",
    UniqueIdFutOpt = "UNIQUE_ID_FUT_OPT",
    OpraSymbol = "OPRA_SYMBOL",
    TradingSystemIdentifier = "TRADING_SYSTEM_IDENTIFIER",
    IdCins = "ID_CINS",
    IdShortCode = "ID_SHORT_CODE",
    BaseTicker = "BASE_TICKER",
    VendorIndexCode = "VENDOR_INDEX_CODE"
}

export enum MappingJobOptionTypeEnum {
    Put = "Put",
    Call = "Call"
}

export enum MappingJobStateCodeEnum {
    Ab = "AB",
    Ac = "AC",
    Ah = "AH",
    Ak = "AK",
    Al = "AL",
    Am = "AM",
    Ar = "AR",
    As = "AS",
    At = "AT",
    Az = "AZ",
    Bc = "BC",
    Bj = "BJ",
    Ca = "CA",
    Cb = "CB",
    Co = "CO",
    Cq = "CQ",
    Ct = "CT",
    Cz = "CZ",
    Dc = "DC",
    De = "DE",
    Eh = "EH",
    Fh = "FH",
    Fi = "FI",
    Fj = "FJ",
    Fl = "FL",
    Fo = "FO",
    Fs = "FS",
    Ga = "GA",
    Gd = "GD",
    Gf = "GF",
    Gm = "GM",
    Gs = "GS",
    Gu = "GU",
    Gx = "GX",
    Gz = "GZ",
    Ha = "HA",
    Hb = "HB",
    He = "HE",
    Hg = "HG",
    Hi = "HI",
    Hl = "HL",
    Hn = "HN",
    Ho = "HO",
    Hs = "HS",
    Ia = "IA",
    Id = "ID",
    Ig = "IG",
    Ik = "IK",
    Il = "IL",
    In = "IN",
    It = "IT",
    Jl = "JL",
    Js = "JS",
    Jx = "JX",
    Ka = "KA",
    Kc = "KC",
    Kn = "KN",
    Ko = "KO",
    Ks = "KS",
    Kt = "KT",
    Ku = "KU",
    Ky = "KY",
    La = "LA",
    Ln = "LN",
    Ma = "MA",
    Mb = "MB",
    Md = "MD",
    Me = "ME",
    Mg = "MG",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Ms = "MS",
    Mt = "MT",
    Mz = "MZ",
    Nb = "NB",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Ng = "NG",
    Nh = "NH",
    Nj = "NJ",
    Nl = "NL",
    Nm = "NM",
    Nn = "NN",
    Nr = "NR",
    Ns = "NS",
    Nt = "NT",
    Nu = "NU",
    Nv = "NV",
    Nw = "NW",
    Nx = "NX",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    On = "ON",
    Or = "OR",
    Os = "OS",
    Ot = "OT",
    Oy = "OY",
    Pa = "PA",
    Pe = "PE",
    Pr = "PR",
    Qc = "QC",
    Qh = "QH",
    Ql = "QL",
    Ri = "RI",
    Sa = "SA",
    Sc = "SC",
    Sd = "SD",
    Sh = "SH",
    Si = "SI",
    Sk = "SK",
    Sn = "SN",
    St = "ST",
    Sx = "SX",
    Sz = "SZ",
    Ta = "TA",
    Tg = "TG",
    Tj = "TJ",
    Tk = "TK",
    Tn = "TN",
    Ts = "TS",
    Tt = "TT",
    Tx = "TX",
    Ty = "TY",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wk = "WK",
    Wv = "WV",
    Wy = "WY",
    Xj = "XJ",
    Xz = "XZ",
    Ya = "YA",
    Yn = "YN",
    Yt = "YT",
    Yu = "YU",
    Zj = "ZJ"
}


// MappingJob
/** 
 * For V3: securityType2 is required when idType is BASE_TICKER or ID_EXCH_SYMBOL.  expiration is required when securityType2 is Option or Warrant.  maturity is required when securityType2 is Pool.
**/
export class MappingJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractSize" })
  contractSize?: number[];

  @SpeakeasyMetadata({ data: "json, name=coupon" })
  coupon?: number[];

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=exchCode" })
  exchCode?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: Date[];

  @SpeakeasyMetadata({ data: "json, name=idType" })
  idType: MappingJobIdTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=idValue" })
  idValue: any;

  @SpeakeasyMetadata({ data: "json, name=includeUnlistedEquities" })
  includeUnlistedEquities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marketSecDes" })
  marketSecDes?: string;

  @SpeakeasyMetadata({ data: "json, name=maturity" })
  maturity?: Date[];

  @SpeakeasyMetadata({ data: "json, name=micCode" })
  micCode?: string;

  @SpeakeasyMetadata({ data: "json, name=optionType" })
  optionType?: MappingJobOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=securityType" })
  securityType?: string;

  @SpeakeasyMetadata({ data: "json, name=securityType2" })
  securityType2?: string;

  @SpeakeasyMetadata({ data: "json, name=stateCode" })
  stateCode?: MappingJobStateCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=strike" })
  strike?: number[];
}
