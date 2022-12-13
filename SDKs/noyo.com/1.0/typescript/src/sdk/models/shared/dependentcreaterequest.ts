import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DependentCreateRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}

export enum DependentCreateRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}


// DependentCreateRequestPersonContact
/** 
 * Contact information for the person
**/
export class DependentCreateRequestPersonContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=email_address_type" })
  emailAddressType?: DependentCreateRequestPersonContactEmailAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=home_phone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_language" })
  preferredLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_method" })
  preferredMethod?: DependentCreateRequestPersonContactPreferredMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=speaks_english" })
  speaksEnglish?: boolean;

  @SpeakeasyMetadata({ data: "json, name=work_phone" })
  workPhone?: string;
}

export enum DependentCreateRequestPersonDetailsAmericanIndianStateEnum {
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


// DependentCreateRequestPersonDetailsAmericanIndian
/** 
 * American Indian status details (if applicable)
**/
export class DependentCreateRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DependentCreateRequestPersonDetailsAmericanIndianStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tribe" })
  tribe?: string;
}


// DependentCreateRequestPersonDetailsDisability
/** 
 * Disability details (if applicable)
**/
export class DependentCreateRequestPersonDetailsDisability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communication" })
  communication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}

export enum DependentCreateRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}


// DependentCreateRequestPersonDetailsTobacco
/** 
 * Tobacco usage details (if applicable)
**/
export class DependentCreateRequestPersonDetailsTobacco extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: DependentCreateRequestPersonDetailsTobaccoTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: boolean;
}


// DependentCreateRequestPersonDetails
/** 
 * Additional personal details of the person
**/
export class DependentCreateRequestPersonDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=american_indian" })
  americanIndian?: DependentCreateRequestPersonDetailsAmericanIndian;

  @SpeakeasyMetadata({ data: "json, name=disability" })
  disability?: DependentCreateRequestPersonDetailsDisability;

  @SpeakeasyMetadata({ data: "json, name=is_military" })
  isMilitary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_student" })
  isStudent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tobacco" })
  tobacco?: DependentCreateRequestPersonDetailsTobacco;
}

export enum DependentCreateRequestPersonHomeAddressStateEnum {
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


// DependentCreateRequestPersonHomeAddress
/** 
 * Home address of the person
**/
export class DependentCreateRequestPersonHomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: DependentCreateRequestPersonHomeAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum DependentCreateRequestPersonMailingAddressStateEnum {
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


// DependentCreateRequestPersonMailingAddress
/** 
 * Mailing address of the person
**/
export class DependentCreateRequestPersonMailingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: DependentCreateRequestPersonMailingAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum DependentCreateRequestPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}

export enum DependentCreateRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}


// DependentCreateRequestPerson
/** 
 * Personal information for the dependent
**/
export class DependentCreateRequestPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: DependentCreateRequestPersonContact;

  @SpeakeasyMetadata({ data: "json, name=date_of_birth" })
  dateOfBirth: Date;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: DependentCreateRequestPersonDetails;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=home_address" })
  homeAddress?: DependentCreateRequestPersonHomeAddress;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_address" })
  mailingAddress?: DependentCreateRequestPersonMailingAddress;

  @SpeakeasyMetadata({ data: "json, name=marital_status" })
  maritalStatus?: DependentCreateRequestPersonMaritalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=sex" })
  sex: DependentCreateRequestPersonSexEnum;

  @SpeakeasyMetadata({ data: "json, name=ssn" })
  ssn?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}

export enum DependentCreateRequestRelationshipEnum {
    AdoptedChild = "adopted-child",
    Child = "child",
    CivilUnion = "civil-union",
    DomesticPartner = "domestic-partner",
    ExSpouse = "ex-spouse",
    FosterChild = "foster-child",
    Grandchild = "grandchild",
    LegalGuardianship = "legal-guardianship",
    Other = "other",
    Spouse = "spouse",
    StepChild = "step-child"
}


export class DependentCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person: DependentCreateRequestPerson;

  @SpeakeasyMetadata({ data: "json, name=relationship" })
  relationship: DependentCreateRequestRelationshipEnum;
}
