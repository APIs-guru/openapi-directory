import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AgentLocationResultAddressStateEnum {
    Ak = "AK",
    Al = "AL",
    Ar = "AR",
    As = "AS",
    Az = "AZ",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Fm = "FM",
    Ga = "GA",
    Gu = "GU",
    Hi = "HI",
    Ia = "IA",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Ma = "MA",
    Md = "MD",
    Me = "ME",
    Mh = "MH",
    Mi = "MI",
    Mn = "MN",
    Mo = "MO",
    Mp = "MP",
    Ms = "MS",
    Mt = "MT",
    Nc = "NC",
    Nd = "ND",
    Ne = "NE",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Nv = "NV",
    Ny = "NY",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Pr = "PR",
    Pw = "PW",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Um = "UM",
    Ut = "UT",
    Va = "VA",
    Vi = "VI",
    Vt = "VT",
    Wa = "WA",
    Wi = "WI",
    Wv = "WV",
    Wy = "WY"
}


// AgentLocationResultAddress
/** 
 * Address of the agent location
**/
export class AgentLocationResultAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: AgentLocationResultAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}


export class AgentLocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: AgentLocationResultAddress;

  @SpeakeasyMetadata({ data: "json, name=agent_id" })
  agentId: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=primary_location" })
  primaryLocation: boolean;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
