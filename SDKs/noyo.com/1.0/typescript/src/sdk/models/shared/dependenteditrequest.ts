import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DependentEditRequestPersonContactEmailAddressTypeEnum {
    Home = "home",
    Work = "work"
}

export enum DependentEditRequestPersonContactPreferredMethodEnum {
    Email = "email",
    HomePhone = "home-phone",
    Mail = "mail",
    Other = "other",
    WorkPhone = "work-phone"
}


// DependentEditRequestPersonContact
/** 
 * Contact information for the person
**/
export class DependentEditRequestPersonContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=email_address_type" })
  emailAddressType?: DependentEditRequestPersonContactEmailAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=home_phone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_language" })
  preferredLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_method" })
  preferredMethod?: DependentEditRequestPersonContactPreferredMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=speaks_english" })
  speaksEnglish?: boolean;

  @SpeakeasyMetadata({ data: "json, name=work_phone" })
  workPhone?: string;
}

export enum DependentEditRequestPersonDetailsAmericanIndianStateEnum {
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


// DependentEditRequestPersonDetailsAmericanIndian
/** 
 * American Indian status details (if applicable)
**/
export class DependentEditRequestPersonDetailsAmericanIndian extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DependentEditRequestPersonDetailsAmericanIndianStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tribe" })
  tribe?: string;
}


// DependentEditRequestPersonDetailsDisability
/** 
 * Disability details (if applicable)
**/
export class DependentEditRequestPersonDetailsDisability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communication" })
  communication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}

export enum DependentEditRequestPersonDetailsTobaccoTypesEnum {
    ChewingTobacco = "chewing-tobacco",
    Cigarettes = "cigarettes",
    Pipe = "pipe"
}


// DependentEditRequestPersonDetailsTobacco
/** 
 * Tobacco usage details (if applicable)
**/
export class DependentEditRequestPersonDetailsTobacco extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: DependentEditRequestPersonDetailsTobaccoTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: boolean;
}


// DependentEditRequestPersonDetails
/** 
 * Additional personal details of the person
**/
export class DependentEditRequestPersonDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=american_indian" })
  americanIndian?: DependentEditRequestPersonDetailsAmericanIndian;

  @SpeakeasyMetadata({ data: "json, name=disability" })
  disability?: DependentEditRequestPersonDetailsDisability;

  @SpeakeasyMetadata({ data: "json, name=is_military" })
  isMilitary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_student" })
  isStudent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tobacco" })
  tobacco?: DependentEditRequestPersonDetailsTobacco;
}

export enum DependentEditRequestPersonHomeAddressStateEnum {
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


// DependentEditRequestPersonHomeAddress
/** 
 * Home address of the person
**/
export class DependentEditRequestPersonHomeAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: DependentEditRequestPersonHomeAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum DependentEditRequestPersonMailingAddressStateEnum {
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


// DependentEditRequestPersonMailingAddress
/** 
 * Mailing address for the person
**/
export class DependentEditRequestPersonMailingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: DependentEditRequestPersonMailingAddressStateEnum;

  @SpeakeasyMetadata({ data: "json, name=street_one" })
  streetOne: string;

  @SpeakeasyMetadata({ data: "json, name=street_two" })
  streetTwo?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode: string;
}

export enum DependentEditRequestPersonMaritalStatusEnum {
    Divorced = "divorced",
    DomesticPartner = "domestic-partner",
    LegallySeparated = "legally-separated",
    Married = "married",
    Single = "single",
    Widowed = "widowed"
}

export enum DependentEditRequestPersonSexEnum {
    F = "F",
    M = "M",
    U = "U",
    X = "X"
}


// DependentEditRequestPerson
/** 
 * Personal information for the dependent
**/
export class DependentEditRequestPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: DependentEditRequestPersonContact;

  @SpeakeasyMetadata({ data: "json, name=date_of_birth" })
  dateOfBirth?: Date;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: DependentEditRequestPersonDetails;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=home_address" })
  homeAddress?: DependentEditRequestPersonHomeAddress;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_address" })
  mailingAddress?: DependentEditRequestPersonMailingAddress;

  @SpeakeasyMetadata({ data: "json, name=marital_status" })
  maritalStatus?: DependentEditRequestPersonMaritalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=sex" })
  sex?: DependentEditRequestPersonSexEnum;

  @SpeakeasyMetadata({ data: "json, name=ssn" })
  ssn?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}

export enum DependentEditRequestRelationshipEnum {
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


export class DependentEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: DependentEditRequestPerson;

  @SpeakeasyMetadata({ data: "json, name=relationship" })
  relationship?: DependentEditRequestRelationshipEnum;
}
