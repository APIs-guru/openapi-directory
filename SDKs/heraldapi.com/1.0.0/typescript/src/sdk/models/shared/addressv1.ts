import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AddressV1CountryCodeEnum {
    Usa = "USA"
}

export enum AddressV1StateEnum {
    Al = "AL",
    Ak = "AK",
    Az = "AZ",
    Ar = "AR",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    Dc = "DC",
    De = "DE",
    Fl = "FL",
    Ga = "GA",
    Hi = "HI",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ia = "IA",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Me = "ME",
    Md = "MD",
    Ma = "MA",
    Mi = "MI",
    Mn = "MN",
    Ms = "MS",
    Mo = "MO",
    Mt = "MT",
    Ne = "NE",
    Nv = "NV",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Ny = "NY",
    Nc = "NC",
    Nd = "ND",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Ut = "UT",
    Vt = "VT",
    Va = "VA",
    Wa = "WA",
    Wv = "WV",
    Wi = "WI",
    Wy = "WY"
}


// AddressV1
/** 
 * An address describes a location. `address` can be the [`input_type`](https://www.heraldapi.com/docs/input-types) of a parameter on an [application](https://www.heraldapi.com/docs/application).  
**/
export class AddressV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode: AddressV1CountryCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=line3" })
  line3?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: AddressV1StateEnum;
}
